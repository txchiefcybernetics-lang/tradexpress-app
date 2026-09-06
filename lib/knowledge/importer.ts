import { createClient } from "@supabase/supabase-js";
import { parseDocument } from "./parser";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function importKnowledgeDocument(
  filePath: string,
  category: string
) {
  const content = await parseDocument(filePath);

  const title = filePath.split("/").pop() ?? "Unknown";

  const { error } = await supabase
    .from("knowledge_documents")
    .insert({
      title,
      category,
      source: filePath,
      content,
    });

  if (error) {
    throw error;
  }

  return {
    success: true,
    title,
  };
}
