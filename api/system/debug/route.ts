import { NextResponse } from "next/server";
import { isTxDebugEnabled } from "@/lib/tx/debug";

export async function GET() {
  return NextResponse.json({
    service: "TradeXpress",
    module: "TX Debug Switcher",
    debug: isTxDebugEnabled(),
    mode: isTxDebugEnabled()
      ? "development"
      : "production",
    timestamp: new Date().toISOString(),
  });
}
