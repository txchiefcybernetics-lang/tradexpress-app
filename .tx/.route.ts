import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const start = Date.now();

  try {
    const { message } = await req.json();

    const ollamaUrl =
      process.env.OLLAMA_BASE_URL ||
      "http://127.0.0.1:11434";

    console.log("TX OLLAMA URL:", ollamaUrl);

    const response = await fetch(
      `${ollamaUrl}/api/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
          stream: false,
        }),
        signal: AbortSignal.timeout(30000),
      }
    );

    const responseTime = Date.now() - start;

    const data = await response.json();

    console.log("TX AI RESPONSE:", {
      status: response.status,
      responseTime_ms: responseTime,
    });

    return NextResponse.json({
      success: true,
      answer:
        data.message?.content ||
        "No response from TX AI",
      responseTime_ms: responseTime,
      source: "ollama",
    });

  } catch (error: any) {

    const responseTime = Date.now() - start;

    console.error("TX AI ERROR:", {
      error: error.message,
      responseTime_ms: responseTime,
      timeout:
        error.name === "TimeoutError",
    });

    return NextResponse.json(
      {
        success: false,
        error: "AI request failed",
        responseTime_ms: responseTime,
      },
      {
        status: 500,
      }
    );
  }
}
