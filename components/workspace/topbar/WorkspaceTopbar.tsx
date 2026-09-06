export default function WorkspaceTopbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
      <div>
        <h1 className="text-xl font-semibold">TradeXpress Workspace</h1>
        <p className="text-sm text-zinc-500">
          Developer Workspace
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg border px-3 py-2 text-sm">
          Settings
        </button>

        <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">
          Deploy
        </button>
      </div>
    </header>
  );
}
