import { NextResponse } from "next/server";

export async function GET() {

  return NextResponse.json({

    application:
      "TradeXpress Platform",

    framework:
      `Next.js ${process.env.NEXT_RUNTIME || "16.2.12"}`,

    environment:
      process.env.NODE_ENV,

    runtime:
      process.version,

    database:
      "Supabase",

    deployment:
      "Vercel",

    status:
      "Healthy"

  });

}
