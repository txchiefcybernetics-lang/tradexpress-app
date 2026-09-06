import { supabase } from "@/lib/supabase";

export async function txAudit(event: {
  action: string;
  actor: string;
  resource: string;
  status: "success" | "failed";
  metadata?: Record<string, unknown>;
}) {

  const record = {
    event_type: event.action,
    page: "security",
    metadata: {
      system: "TradeXpress",
      module: "TX Security Audit",
      actor: event.actor,
      resource: event.resource,
      status: event.status,
      ...event.metadata,
    },
  };

  console.log(
    "[TX AUDIT]",
    record
  );

  await supabase
    .from("analytics_events")
    .insert(record);

  return record;
}
