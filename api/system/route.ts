import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'online', service: 'TradeXpress Enterprise System', timestamp: new Date().toISOString() });
}
