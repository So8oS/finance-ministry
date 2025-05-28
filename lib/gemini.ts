import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const gemini = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});
