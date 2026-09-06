import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `You are TX, an AI trade assistant for TradeXpress, an AI-Powered Philippine Trade Intelligence Platform built by FM Sardan Customs Brokerage & Consultancy. Help the user with customs brokerage, compliance, tariffs, and trade queries.\n\nUser: ${message}`
            }
          ]
        }
      ]
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Chat Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
