"use client";

import { useState } from "react";

import AIStatus from "./AIStatus";
import ChatMessage from "./ChatMessage";
import PromptInput from "./PromptInput";
import SuggestedActions from "./SuggestedActions";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [prompt, setPrompt] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to TradeXpress AI.\n\nI can help with:\n• HS Code Search\n• Duty & Tax Calculation\n• Customs Compliance\n• Logistics\n• Finance\n• Enterprise Analytics",
    },
  ]);

  function handleSend() {
    if (!prompt.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Temporary placeholder until router.ts is connected
    const aiMessage: Message = {
      role: "assistant",
      content:
        "AI Router connected.\n\nNext step: route this request to the appropriate TradeXpress AI tool.",
    };

    setMessages((prev) => [...prev, aiMessage]);

    setPrompt("");
  }

  return (
    <div className="space-y-6">
      <AIStatus />

      <SuggestedActions />

      <div className="rounded-2xl bg-slate-100 border border-slate-200 p-6 h-[500px] overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}
      </div>

      <PromptInput
        value={prompt}
        onChange={setPrompt}
        onSend={handleSend}
      />
    </div>
  );
}
