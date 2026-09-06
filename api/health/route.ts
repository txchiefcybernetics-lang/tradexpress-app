import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "TradeXpress",
    server: "Next.js",
    timestamp: new Date().toISOString(),
  });
}
