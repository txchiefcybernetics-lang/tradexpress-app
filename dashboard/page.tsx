export default function DashboardPage() {
  return (
    <div className="p-8 bg-slate-950 text-slate-100 min-h-screen">
      <h1 className="text-2xl font-bold text-sky-400">TradeXpress Enterprise Dashboard</h1>
      <p className="text-slate-400 text-sm mt-2">Welcome to TX Command Center (v2.0)</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <a href="/dashboard/feedback" className="p-4 bg-slate-900 border border-slate-800 rounded hover:border-sky-500">
          <h2 className="text-lg font-semibold text-sky-300">💬 Feedback Hub</h2>
          <p className="text-sm text-slate-400 mt-1">View /api/tx/logs telemetry & matrix status</p>
        </a>
        <a href="/dashboard/database" className="p-4 bg-slate-900 border border-slate-800 rounded hover:border-sky-500">
          <h2 className="text-lg font-semibold text-emerald-300">🗄️ Database UI</h2>
          <p className="text-sm text-slate-400 mt-1">Inspect Supabase tables & live records</p>
        </a>
      </div>
    </div>
  );
}
