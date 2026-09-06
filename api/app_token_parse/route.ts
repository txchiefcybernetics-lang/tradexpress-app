import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "TradeXpress",
    module: "app_token_parse",
    status: "ready",
    fallback: "/_not-found",
    timestamp: new Date().toISOString(),
  });
}
