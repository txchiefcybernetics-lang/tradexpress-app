import { importKnowledgeDocument } from "../lib/knowledge/importer";

async function main() {
  await importKnowledgeDocument(
    "./docs/company/TX GENERAL PROFILE VERSION 2.docx",
    "company"
  );

  console.log("Document imported successfully");
}

main();
