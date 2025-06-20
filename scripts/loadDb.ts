console.log("Loading Syrian Penal Code into Astra DB...");

import { DataAPIClient } from "@datastax/astra-db-ts";
import { GoogleGenAI } from "@google/genai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import "dotenv/config";
import { SyrianPenalCode } from "@/components/rules"; // Adjust path as needed

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  GOOGLE_GENERATIVE_AI_API_KEY,
} = process.env;

if (!ASTRA_DB_API_ENDPOINT || !ASTRA_DB_APPLICATION_TOKEN) {
  throw new Error(
    "Missing Astra DB API endpoint or application token in environment variables."
  );
}

const genai = new GoogleGenAI({
  apiKey: GOOGLE_GENERATIVE_AI_API_KEY!,
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1500,
  chunkOverlap: 300,
});

type similarity = "cosine" | "dot_product" | "euclidean";

// Initialize Astra DB client
const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN!);
//@ts-ignore
const db = client.db(ASTRA_DB_API_ENDPOINT!, { keyspace: ASTRA_DB_NAMESPACE });

const createCollection = async (similarity: similarity = "cosine") => {
  try {
    //@ts-ignore
    const collection = await db.createCollection(ASTRA_DB_COLLECTION!, {
      vector: {
        dimension: 768,
        metric: similarity,
      },
      indexing: {
        allow: ["text"],
      },
    });
    console.log("✅ Collection created or already exists.");
    return collection;
  } catch (error: any) {
    if (error.message?.includes("already exists")) {
      console.log("ℹ️ Collection already exists, continuing...");
      return db.collection(ASTRA_DB_COLLECTION!);
    }
    console.error("❌ Error creating collection:", error);
    throw error;
  }
};

// Flatten JSON structure to article chunks with context
const extractArticles = (): {
  text: string;
  articleTitle: string;
  path: string;
}[] => {
  const result: {
    text: string;
    articleTitle: string;
    path: string;
  }[] = [];

  const walk = (node: any, path: string[] = []) => {
    if (node.articles) {
      for (const article of node.articles) {
        const contextPath = [...path, article.title];
        result.push({
          text: `${contextPath.join(" > ")}\n\n${article.text}`,
          articleTitle: article.title,
          path: contextPath.slice(0, -1).join(" > "), // everything except the article title
        });
      }
    }

    if (node.sections) {
      for (const section of node.sections) {
        walk(section, [...path, section.title]);
      }
    }

    if (node.chapters) {
      for (const chapter of node.chapters) {
        walk(chapter, [...path, chapter.title]);
      }
    }
  };

  walk(
    SyrianPenalCode.chapters
      ? { chapters: SyrianPenalCode.chapters }
      : SyrianPenalCode
  );
  return result;
};

const loadSampleData = async () => {
  try {
    //@ts-ignore
    const collection = await db.collection(ASTRA_DB_COLLECTION!);
    const articles = extractArticles();

    console.log(`🗂 Total articles extracted: ${articles.length}`);

    let totalChunks = 0;
    let skippedChunks = 0;
    let insertedChunks = 0;

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const chunks = await splitter.splitText(article.text);

      console.log(
        `📄 Processing article ${i + 1}/${articles.length} — "${
          article.articleTitle
        }" — split into ${chunks.length} chunk(s)`
      );

      for (let j = 0; j < chunks.length; j++) {
        const chunk = chunks[j];
        totalChunks++;

        const embeddingResponse = await genai.models.embedContent({
          model: "embedding-001",
          contents: chunk,
        });

        const vector = embeddingResponse?.embeddings?.[0]?.values;

        if (!vector) {
          console.warn(
            `⚠️ Skipping chunk ${j + 1} of article ${
              i + 1
            }, no vector returned.`
          );
          skippedChunks++;
          continue;
        }

        const res = await collection.insertOne({
          $vector: vector,
          text: chunk,
          articleTitle: article.articleTitle,
          chapterPath: article.path,
          genre: "SyrianPenalCode", // optional: helpful if you want to add filtering later
        });

        console.log(
          `✅ Inserted chunk ${j + 1}/${chunks.length} of article ${
            i + 1
          } — ID: ${res.insertedId}`
        );
        insertedChunks++;
      }
    }

    console.log("🎉 Data loading complete.");
    console.log(`📊 Summary:`);
    console.log(`  ➤ Total articles: ${articles.length}`);
    console.log(`  ➤ Total chunks generated: ${totalChunks}`);
    console.log(`  ➤ Successfully inserted: ${insertedChunks}`);
    console.log(`  ➤ Skipped (no vector): ${skippedChunks}`);
  } catch (error) {
    console.error("❌ Error loading sample data:", error);
    throw error;
  }
};

createCollection().then(() => loadSampleData());
