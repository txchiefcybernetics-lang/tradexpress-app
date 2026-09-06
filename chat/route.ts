import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.message || body.query || 'Hello';

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are TX, the official AI Trade Assistant for TradeXpress Cybernetics Corporation. Provide professional, accurate guidance regarding Philippine customs, CMTA RA 10863, and trade compliance. User prompt: ${prompt}`,
    });

    return NextResponse.json({ result: response.text });
  } catch (error) {
    return NextResponse.json({ error: 'AI processing failed' }, { status: 500 });
  }
}
