console.log("Loading database...");
import { DataAPIClient } from "@datastax/astra-db-ts";

import { GoogleGenAI } from "@google/genai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import "dotenv/config";

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
  apiKey: GOOGLE_GENERATIVE_AI_API_KEY,
});

const rules = `
المادة 59
إذا هرب المحكوم عليه تزاد من الثلث إلى النصف كل عقوبة موقتة قضى بها على وجه مبرم من أجل جناية أو جنحة إلا في
.
الحالات التي خصها القانون بنص
المادة 60
-1- تتراوح مدة الحبس التكديري بين يوم وعشرة أيام .
2- تنفذ هذه العقوبة في المحكوم عليهم في أماكن مختلفة عن الأماكن المخصصة بالمحكوم عليهم بعقوبات جنائية أو جنحة .
3- لا يجبر على العمل المحكوم عليهم بالتوقيف
المادة 61
تتراوح الغرامة التكديرية بين خمسة وعشرين ومائة ليرة .
المادة 62
-1- تستبدل الغرامة بالحبس البسيط إذا لم تؤد في مهلة ثلاثين يوماً من تاريخ انبرام الحكم دون تنبيه سابق .
-2- تعين في الحكم القاضي بالعقوبة - وإلا فبقرار خاص - مدة الحبس المستبدل باعتبار أن اليوم الواحد من هذه العقوبة يوازي
غرامة تتراوح بين ليرتين وخمس ليرات .
ولا يمكن أن تتجاوز العقوبة المستبدلة عشرة أيام ولا الحد الأقصى للحبس المنصوص عليه كعقوبة أصلية للجريمة .
-3- يحسم من أصل هذه العقوبة بالنسبة التي حددها الحكم - كما ورد في الفقرة الثانية من هذه المادة - كل أداء جزئي أدي قبل
الحبس أو في أثنائه .
المادة 63
-1- الحكم بالأشغال الشاقة مؤبداً، أو بالاعتقال المؤبد، يوجب التجريد المدني مدى الحياة .
2 الحكم بالأشغال الشاقة الموقتة أو بالاعتقال الموقت أو بالإبعاد أو بالإقامة الجبرية في الجنايات، يوجب التجريد المدني منذ
اليوم الذي أصبح فيه الحكم مبرماً حتى انقضاء السنة العاشرة على تنفيذ العقوبة الأصلية
المادة 64
1 - تتراوح الغرامة الجنائية بين خمسين ليرة وثلاثة آلاف ليرة. وهي تخضع لأحكام المادتين الـ 53 والـ 54 المتعلقتين بالغرامة
الجنحية
-2- تستبدل من الغرامة عند عدم أدائها عقوبة الأشغال الشاقة إذا كانت هي العقوبة الأصلية المحكوم بها، وتستبدل منها عقوبة
الاعتقال إذا كانت العقوبة الأصلية المحكوم بها هي العقوبات الجنائية الأخرى .
المادة 65
كل محكوم بالحبس أو بالإقامة الجبرية في قضايا الجنح يحرم طوال تنفيذ عقوبته من ممارسة حقوقه المدنية الآتية :
أ - الحق في تولي الوظائف والخدمات العامة .
ب - الحق في تولي الوظائف والخدمات في إدارة شؤون الطائفة المدنية أو إدارة النقابة التي ينتمي إليها
ج - الحق في أن يكون ناخباً أو منتخباً في جميع مجالس الدولة .
د - الحق في أن يكون ناخباً أو منتخباً في جميع منظمات الطوائف والنقابات
هـ الحق في حمل أوسمة سورية أو أجنبية .
المادة 66
1- يمكن في الحالات الخاصة التي عينها القانون أن يحكم مع كل عقوبة جنحة بالمنع من ممارسة حق أو أكثر من الحقوق
المذكورة في المادة السابقة
-2- يقضى بهذا المنع لمدة تتراوح بين سنة وعشر سنوات
`;

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
//@ts-ignore
const db = client.db(ASTRA_DB_API_ENDPOINT, { keyspace: ASTRA_DB_NAMESPACE });

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1500,
  chunkOverlap: 300,
});

type similarity = "cosine" | "dot_product" | "euclidean";

const createCollection = async (similarity: similarity = "dot_product") => {
  try {
    //@ts-ignore
    const collection = await db.createCollection(ASTRA_DB_COLLECTION, {
      vector: {
        dimension: 768,
        metric: similarity,
      },
      indexing: {
        allow: ["text"],
      },
    });
    return collection;
  } catch (error) {
    console.error("Error creating collection:", error);
    throw error;
  }
};

const loadSampleData = async () => {
  try {
    //@ts-ignore
    const collection = await db.collection(ASTRA_DB_COLLECTION);
    const chunks = await splitter.splitText(rules);
    for (const chunk of chunks) {
      const embedding = await genai.models.embedContent({
        model: "embedding-001",
        contents: chunk,
      });
      const vector = embedding?.embeddings?.[0]?.values;
      const res = await collection.insertOne({
        $vector: vector,
        text: chunk,
      });
      console.log(res);
    }
  } catch (error) {
    console.error("Error loading sample data:", error);
    throw error;
  }
};

createCollection().then(() => {
  loadSampleData();
});
