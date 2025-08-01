// ======================================================================
// DEPRECATED: This file contains the old resource management system
// We have migrated to OpenAI Assistant API which handles knowledge base internally
// ======================================================================

/*
"use server";

import {
  NewResourceParams,
  insertResourceSchema,
  resources,
} from "@/lib/db/schema/resources";
import { db } from "../lib/db";
import { generateEmbeddings } from "../lib/ai/embedding";
import { embeddings as embeddingsTable } from "../lib/db/schema/embeddings";

export const createResource = async (input: NewResourceParams) => {
  try {
    const { content } = insertResourceSchema.parse(input);

    const [resource] = await db
      .insert(resources)
      .values({ content })
      .returning();

    const embeddings = await generateEmbeddings(content);
    await db.insert(embeddingsTable).values(
      embeddings.map((embedding) => ({
        resourceId: resource.id,
        ...embedding,
      }))
    );

    return "Resource successfully created and embedded.";
  } catch (error) {
    return error instanceof Error && error.message.length > 0
      ? error.message
      : "Error, please try again.";
  }
};
*/

// The resource management functionality has been replaced by OpenAI Assistant API
// which provides built-in knowledge base management. This file is kept for reference
// but should not be used in the new implementation.
