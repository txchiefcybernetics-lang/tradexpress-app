"use client";

import ToolResult from "@/components/ai/ToolResult";

export default function Examples() {
  return (
    <div className="space-y-5">

      <ToolResult
        title="Knowledge Base"
        message="Knowledge indexed successfully."
        status="success"
      />

      <ToolResult
        title="Gemini API"
        message="Waiting for response..."
        status="loading"
      />

      <ToolResult
        title="Vector Database"
        message="Synchronization delayed."
        status="warning"
      />

      <ToolResult
        title="Supabase"
        message="Database connection failed."
        status="error"
      />

    </div>
  );
}
