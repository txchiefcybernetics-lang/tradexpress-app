import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    revenue: 2453200.75,
    activeOperations: 184,
    aiInsights: 27,
    health: "Healthy",
  });
}
