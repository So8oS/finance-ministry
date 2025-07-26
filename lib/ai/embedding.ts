// ======================================================================
// DEPRECATED: This file contains the old embedding-based RAG system
// We have migrated to OpenAI Assistant API which handles RAG internally
// ======================================================================

/*
import { embed, embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { db } from "../db";
import { cosineDistance, desc, gt, sql } from "drizzle-orm";
import { embeddings } from "../db/schema/embeddings";

const embeddingModel = openai.embedding("text-embedding-ada-002");

const generateChunks = (input: string): string[] => {
  return input
    .trim()
    .split(".")
    .map((i) => i.trim())
    .filter((i) => i.length > 0);
};

export const generateEmbeddings = async (
  value: string
): Promise<Array<{ embedding: number[]; content: string }>> => {
  const chunks = generateChunks(value);
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunks,
  });
  return embeddings.map((e, i) => ({ content: chunks[i], embedding: e }));
};

export const generateEmbedding = async (value: string): Promise<number[]> => {
  const input = value.replaceAll("\\n", " ");
  const { embedding } = await embed({
    model: embeddingModel,
    value: input,
  });
  return embedding;
};

export const findRelevantContent = async (
  userQuery: string
): Promise<string> => {
  console.log("🔍 Embedding user query:", userQuery);
  const userQueryEmbedded = await generateEmbedding(userQuery);

  const similarity = sql<number>`1 - (${cosineDistance(
    embeddings.embedding,
    userQueryEmbedded
  )})`;

  const similarChunks = await db
    .select({ content: embeddings.content, similarity })
    .from(embeddings)
    .where(gt(similarity, 0.5))
    .orderBy(desc(similarity))
    .limit(15);

  console.log("📦 Retrieved chunks:", similarChunks);

  if (similarChunks.length === 0) {
    return "Sorry, I couldn't find anything relevant.";
  }

  return similarChunks.map((c) => c.content).join("\n---\n");
};
*/

// The embedding functionality has been replaced by OpenAI Assistant API
// which provides built-in RAG capabilities. This file is kept for reference
// but should not be used in the new implementation.
