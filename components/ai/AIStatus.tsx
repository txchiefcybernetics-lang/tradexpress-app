export default function AIStatus() {
  return (
    <div className="rounded-xl bg-green-100 border border-green-300 p-4">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="font-medium text-green-800">
          TradeXpress AI Online
        </span>
      </div>

      <p className="mt-2 text-sm text-green-700">
        Ready for customs, logistics, finance, and compliance questions.
      </p>
    </div>
  );
}