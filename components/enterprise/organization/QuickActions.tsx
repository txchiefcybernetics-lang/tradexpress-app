export default function QuickActions() {
  return (
    <div className="rounded-xl bg-white shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-3">
        <button className="rounded bg-blue-600 px-4 py-2 text-white">
          New Shipment
        </button>

        <button className="rounded bg-green-600 px-4 py-2 text-white">
          Customs Entry
        </button>

        <button className="rounded bg-purple-600 px-4 py-2 text-white">
          AI Analysis
        </button>

        <button className="rounded bg-slate-700 px-4 py-2 text-white">
          Reports
        </button>
      </div>
    </div>
  );
}