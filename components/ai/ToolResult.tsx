"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  XCircle,
} from "lucide-react";
import React from "react";

type Status = "loading" | "success" | "warning" | "error";

interface ToolResultProps {
  title: string;
  message: string;
  status: Status;
  children?: React.ReactNode;
}

export default function ToolResult({
  title,
  message,
  status,
  children,
}: ToolResultProps) {
  const Icon =
    status === "success"
      ? CheckCircle2
      : status === "warning"
      ? AlertTriangle
      : status === "error"
      ? XCircle
      : Loader2;

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex items-center gap-3">
        <Icon
          className={`h-5 w-5 ${
            status === "loading" ? "animate-spin" : ""
          }`}
        />

        <h3 className="font-semibold text-blue-700">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-sm text-gray-700">
        {message}
      </p>

      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
}
