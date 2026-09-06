import { NextResponse } from "next/server";
import os from "os";

export async function GET() {

  const interfaces = os.networkInterfaces();

  return NextResponse.json({

    application: "TradeXpress Enterprise",

    hostname: os.hostname(),

    platform: os.platform(),

    nodeVersion: process.version,

    uptime: os.uptime(),

    network: interfaces,

    timestamp: new Date().toISOString()

  });

}
