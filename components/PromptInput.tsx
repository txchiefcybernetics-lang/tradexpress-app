"use client";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function PromptInput({
  value,
  onChange,
  onSend,
}: PromptInputProps) {
  return (
    <div className="flex gap-3">
      <input
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ask TradeXpress AI..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSend();
        }}
      />

      <button
        onClick={onSend}
        className="rounded-xl bg-blue-600 px-6 text-white hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}