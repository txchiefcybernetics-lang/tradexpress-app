const activity = [
  { label: "Workspace initialized", detail: "Overview is ready for your next action", time: "Just now", tone: "bg-emerald-400" },
  { label: "Market activity synced", detail: "Latest signals are available to review", time: "8 min ago", tone: "bg-sky-400" },
  { label: "Risk monitor checked", detail: "No critical changes detected", time: "24 min ago", tone: "bg-violet-400" },
];

export default function PreviewGrid() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.35fr_1fr]" aria-label="Workspace activity">
      <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
        <div className="flex items-start justify-between gap-4"><div><h2 className="font-medium text-slate-100">Recent activity</h2><p className="mt-1 text-sm text-slate-400">A live view of what is happening in your workspace.</p></div><span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Live</span></div>
        <ol className="mt-5 space-y-4">{activity.map((item, index) => <li key={item.label} className="flex gap-3"><div className="flex flex-col items-center"><span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${item.tone}`} aria-hidden="true" />{index < activity.length - 1 && <span className="mt-2 h-full w-px bg-slate-800" aria-hidden="true" />}</div><div className="flex min-w-0 flex-1 items-start justify-between gap-4 pb-1"><div><p className="text-sm font-medium text-slate-200">{item.label}</p><p className="mt-0.5 text-sm text-slate-400">{item.detail}</p></div><time className="shrink-0 text-xs text-slate-500">{item.time}</time></div></li>)}</ol>
      </article>
      <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"><h2 className="font-medium text-slate-100">Workspace health</h2><p className="mt-1 text-sm text-slate-400">Current operating status at a glance.</p><div className="mt-5 space-y-4"><div className="flex items-center justify-between text-sm"><span className="text-slate-400">Data connection</span><span className="font-medium text-emerald-300">Operational</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full w-[96%] rounded-full bg-emerald-400" /></div><div className="flex items-center justify-between text-sm"><span className="text-slate-400">Signal freshness</span><span className="font-medium text-sky-300">96%</span></div></div></article>
    </section>
  );
}
