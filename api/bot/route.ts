import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
  try {
    const { prompt, message } = await request.json();
    const userQuery = prompt || message || "";

    if (!userQuery) {
      return NextResponse.json({ error: "Empty input received" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: "You are TX, the AI trade assistant for TradeXpress (tradexpress.co). Answer trade, customs, and platform inquiries concisely in Cebuano or English.",
      },
    });

    return NextResponse.json({
      reply: response.text,
      status: "SUCCESS",
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return NextResponse.json(
      { error: "LLM Processing Failed", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ONLINE",
    engine: "TX Bot AI Engine (Gemini Powered)",
    timestamp: new Date().toISOString()
  });
}
