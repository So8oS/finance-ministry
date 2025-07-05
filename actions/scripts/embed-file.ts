// scripts/embed-file.ts

import fs from "fs/promises";
import path from "path";
import { createResource } from "@/lib/actions/resources";

// Path to your .txt file
const FILE_PATH = path.join(
  process.cwd(),
  "scripts",
  "data",
  "syrian_penal_code.txt"
);

async function main() {
  const content = await fs.readFile(FILE_PATH, "utf-8");

  const message = await createResource({ content });

  console.log("✅ Done:", message);
}

main().catch(console.error);
