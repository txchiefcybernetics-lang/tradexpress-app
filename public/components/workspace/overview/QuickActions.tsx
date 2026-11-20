const actions = ["New workspace", "Import data", "View reports"];

export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action, index) => (
        <button key={action} type="button" className={index === 0 ? "rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950" : "rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200"}>
          {action}
        </button>
      ))}
    </div>
  );
}
