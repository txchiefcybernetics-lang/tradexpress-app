import { supabase } from "@/lib/supabase";

export async function getConsoleStats() {
  const users = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });

  const documents = await supabase
    .from("documents")
    .select("*", { count: "exact", head: true });

  const aiRequests = await supabase
    .from("analytics_events")
    .select("*", { count: "exact", head: true })
    .eq("event_type", "ai_request");

  return {
    users: users.count ?? 0,
    documents: documents.count ?? 0,
    aiRequests: aiRequests.count ?? 0,
  };
}
