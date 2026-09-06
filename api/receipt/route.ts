import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { transactionId, clientName, serviceType, amount } = body;

    const receiptData = {
      company: "TradeXpress Cybernetics Corporation",
      receiptNo: transactionId || `TX-REC-${Date.now()}`,
      date: new Date().toISOString(),
      client: clientName || "Valued Client",
      service: serviceType || "Customs Brokerage & Trade Intelligence",
      amountPaid: amount || "0.00 PHP",
      status: "PAID",
      legalNotice: "Generated via TradeXpress Global Trade Operating System."
    };

    return NextResponse.json({ success: true, receipt: receiptData });
  } catch (error) {
    console.error('Error generating receipt:', error);
    return NextResponse.json({ error: 'Failed to generate receipt' }, { status: 500 });
  }
}
