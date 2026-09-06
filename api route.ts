import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    let responseText = '';
    const lowerPrompt = prompt.toLowerCase();

    if (lowerPrompt.includes('hs code shrimp')) {
      responseText = 'AHTN Tariff Classification for Shrimp: 0306.17 (Frozen shrimps and prawns) / Standard Duty Rate: 0-5%.';
    } else if (lowerPrompt.includes('cost 5000 laptop')) {
      responseText = 'Estimated Import Cost for ₱5,000 Laptop: Duties & Taxes (approx. 12% VAT + 0% Duty under ATIGA/MFN) = ~₱5,600 landed cost.';
    } else if (lowerPrompt.includes('cost 8000 generator')) {
      responseText = 'Estimated Import Cost for ₱8,000 Generator: Includes 1% duty and 12% VAT = ~₱9,040 estimated landed cost.';
    } else if (lowerPrompt.startsWith('calc ')) {
      try {
        const expression = prompt.replace('calc ', '');
        const result = Function(`'use strict'; return (${expression})`)();
        responseText = `Calculation Result for [${expression}] = ${result}`;
      } catch (e) {
        responseText = 'Invalid mathematical expression for calculation.';
      }
    } else {
      responseText = `TXBOT Engine Received: "${prompt}". Processing trade intelligence & customs data...`;
    }

    return NextResponse.json({
      success: true,
      query: prompt,
      response: responseText,
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
