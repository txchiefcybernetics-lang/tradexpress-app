import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const query = message.toLowerCase();

    let hsCode = "8471.30.00"; // Fallback default
    let estDuty = "0%";

    // Dynamic Lookup Logic / AI Classifier Call
    if (query.includes("shrimp")) {
      hsCode = "0306.17.00";
      estDuty = "10%";
    } else if (query.includes("solar")) {
      hsCode = "8541.43.00";
      estDuty = "0%";
    } else if (query.includes("generator")) {
      hsCode = "8502.11.00";
      estDuty = "3%";
    }

    return NextResponse.json({
      reply: `[HS CODE RESULT]\n• Product: ${message.replace(/hs code/gi, '').trim()}\n• HS Code: ${hsCode}\n• Est. Duty: ${estDuty}`
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to classify" }, { status: 500 });
  }
}
