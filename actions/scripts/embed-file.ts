// scripts/embed-file.ts

import fs from "fs/promises";
import path from "path";
import { createResource } from "../resources";

// Path to your .txt file
const FILE_PATHS = [
  "awrak_askwak.txt",
  "dstoor.txt",
  "isalahat.txt",
  "mali_asasi.txt",
  "whdat_idariye.txt",
].map((fileName) =>
  path.join(process.cwd(), "actions", "scripts", "data", fileName)
);

async function main() {
  for (const filePath of FILE_PATHS) {
    const content = await fs.readFile(filePath, "utf-8");
    const message = await createResource({ content });
    console.log(`✅ Done with ${filePath}:`, message);
  }
}

main().catch(console.error);
