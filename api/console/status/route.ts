import { NextResponse } from "next/server";
import os from "os";
import { supabase } from "@/lib/supabase";

export async function GET() {

  const { count: documents } = await supabase
    .from("knowledge_documents")
    .select("*", { count: "exact", head: true });


  const { count: aiRequests } = await supabase
    .from("analytics_events")
    .select("*", { count: "exact", head: true })
    .eq("event_type", "ai_request");


  return NextResponse.json({

    users: 0,

    aiRequests: aiRequests ?? 0,

    documents: documents ?? 0,

    uptime: Math.floor(process.uptime()),

    hostname: os.hostname(),

    node: process.version,

    security: "Protected",

    mobileVersion: "1.0.0"

  });

}
