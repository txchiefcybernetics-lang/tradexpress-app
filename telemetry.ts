import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.includes('tx_live_')) {
      return NextResponse.json({ error: 'Unauthorized: Invalid Token' }, { status: 401 });
    }

    return NextResponse.json({
      status: 'success',
      message: 'Telemetry data successfully received by TradeXpress Gateway!',
      receivedData: body,
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
