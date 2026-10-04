export default function QuickActions() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {['New workspace', 'Import data', 'View reports'].map((action) => (
        <button key={action} type="button" className="rounded-lg border border-slate-800 bg-slate-950 p-4 text-left text-sm text-slate-200 hover:border-cyan-500">
          {action}
        </button>
      ))}
    </section>
  );
}
