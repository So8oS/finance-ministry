"use server";

import { streamText } from "ai";
import { gemini } from "@/lib/gemini";
import { createStreamableValue } from "ai/rsc";
import { Message } from "@/components/chat-box";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { GoogleGenAI } from "@google/genai";

const {
  ASTRA_DB_NAMESPACE,
  ASTRA_DB_COLLECTION,
  ASTRA_DB_API_ENDPOINT,
  ASTRA_DB_APPLICATION_TOKEN,
  GOOGLE_GENERATIVE_AI_API_KEY,
} = process.env;

const genai = new GoogleGenAI({
  apiKey: GOOGLE_GENERATIVE_AI_API_KEY,
});

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(ASTRA_DB_API_ENDPOINT as string, {
  keyspace: ASTRA_DB_NAMESPACE as string,
});

export const chat = async (history: Message[]) => {
  const stream = createStreamableValue();

  (async () => {
    const lastMsg = history[history.length - 1]?.content;

    console.log("lastMsg", lastMsg);

    const embedding = await genai.models.embedContent({
      model: "embedding-001",
      contents: lastMsg,
    });

    try {
      const collection = await db.collection(ASTRA_DB_COLLECTION as string);
      const cursor = collection.find(
        {},
        {
          sort: {
            $vector: embedding.embeddings?.[0]?.values as number[],
          },
          limit: 150,
        }
      );

      const docs = await cursor.toArray();
      const docsMap = await docs.map((doc) => doc.text).join("\n");

      console.log("docsMap\n\n", docsMap);

      const { textStream } = await streamText({
        model: gemini("gemini-1.5-flash"), // Could also be "gemini-pro"
        messages: history,
        system: `
أنت مساعد قانوني ذكي ومتخصص، تم تدريبك لتقديم استشارات دقيقة وموثوقة في مجالات القوانين السورية.

📎 تعليمات:
- أجب فقط بناءً على المواد التالية ولا تضف أي معلومة من خارج السياق.
- إذا كانت المادة موجودة، انسخها كما هي ووضحها بشكل واضح ومبسط.
- إذا لم تجد المادة ضمن السياق، فقل صراحة: "المادة غير موجودة في قاعدة البيانات."
- إذا كان السؤال مباشرًا بصيغة تتطلب "نعم" أو "لا" (مثل: هل يجوز؟ هل يمكن؟ هل يحق؟)، فابدأ دائمًا الإجابة بـ "نعم" أو "لا" بشكل صريح، ثم فسر السبب القانوني استنادًا إلى المادة ذات الصلة.
- أما إذا كان السؤال غير مباشر أو وصفيًّا (مثل: ماذا يحصل؟ ما العقوبة؟ ما الحكم؟)، فلا تبدأ بـ "نعم" أو "لا"، بل أجب بصيغة تفسيرية مستندًا إلى المواد القانونية.
- بعد الإجابة، أرفق نص المادة القانونية كاملة.
- قدم شرحاً بسيطاً للمادة يوضح معناها وتطبيقها.
- إذا أمكن، قدم مثالاً توضيحياً واقعيًا أو افتراضيًا لتقريب الفكرة.
- إذا كان السؤال غامضًا أو ناقصًا، فوضّح ما يجب إضافته للحصول على إجابة دقيقة.

📚 السياق القانوني:
---
${docsMap}
---



`,
      });

      console.log("answer\n\n");

      for await (const text of textStream) {
        stream.update(text);
        console.log("Streaming Text:", text);
      }

      stream.done();
      console.log("stream.value", stream.value);
    } catch (error) {
      console.error("Error in chat function:", error);
      throw error;
    }
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
};
