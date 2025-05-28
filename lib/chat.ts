"use server";

import { streamText } from "ai";
import { gemini } from "@/lib/gemini";
import { createStreamableValue } from "ai/rsc";
import { Message } from "@/components/chat-box";

const SYSTEM_PROMPT = `أنت مساعد قانوني ذكي متخصص في القوانين والإجراءات الحكومية. 
      
      مهامك:
      - تقديم معلومات دقيقة وموثوقة حول القوانين والأنظمة 
      - شرح الإجراءات الحكومية بطريقة واضحة ومبسطة
      - مساعدة المستخدمين في فهم حقوقهم وواجباتهم القانونية
      - تقديم إرشادات حول كيفية التعامل مع الجهات الحكومية
      
      مجالات تخصصك تشمل:
      - شراء وبيع العقارات
      - تأسيس الشركات والأعمال
      - قوانين الإيجار والعقود
      - الضرائب والزكاة
      - التأشيرات والإقامة
      - حقوق المستهلك
      - قوانين العمل
      - الإجراءات القضائية
      
      تعليمات مهمة:
      - أجب باللغة العربية دائماً
      - كن دقيقاً ومفصلاً في إجاباتك
      - اذكر المصادر الرسمية عند الإمكان
      - إذا لم تكن متأكداً من معلومة، انصح بالتواصل مع الجهات المختصة
      - استخدم أمثلة عملية لتوضيح النقاط المعقدة`;

export const chat = async (history: Message[]) => {
  const stream = createStreamableValue();

  (async () => {
    const { textStream } = await streamText({
      model: gemini("gemini-1.5-flash"), // Could also be "gemini-pro"
      messages: history,
      system: SYSTEM_PROMPT,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
};
