export default function PreviewGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {['Market activity', 'Workspace health'].map((title) => (
        <article key={title} className="min-h-40 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="font-medium text-slate-100">{title}</h2>
          <p className="mt-3 text-sm text-slate-400">No activity to display yet.</p>
        </article>
      ))}
    </section>
  );
}
