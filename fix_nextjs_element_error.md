import Link from "next/link";

export default function AIDashboardPage() {
  const modules = [
    {
      title: "Knowledge Base",
      description: "Enterprise RAG search, customs regulations, SOPs, and documentation.",
      href: "/dashboard/ai/knowledge",
      color: "from-blue-500 to-cyan-500",
      status: "ONLINE",
    },
    {
      title: "HS Code Intelligence",
      description: "AI-assisted tariff classification and customs code recommendations.",
      href: "/dashboard/ai/hscode",
      color: "from-emerald-500 to-green-600",
      status: "READY",
    },
    {
      title: "Customs Calculators",
      description: "Duties, taxes, VAT, exchange rate, freight, and landed cost tools.",
      href: "/dashboard/ai/calculators",
      color: "from-purple-500 to-indigo-600",
      status: "ACTIVE",
    },
    {
      title: "AI Chat Workspace",
      description: "Enterprise AI assistant with document-aware conversations.",
      href: "/dashboard/ai/chat",
      color: "from-orange-500 to-red-500",
      status: "CONNECTED",
    },
    {
      title: "Task Runner",
      description: "Automated enterprise workflows, reminders, and recurring jobs.",
      href: "/dashboard/tasks",
      color: "from-pink-500 to-rose-500",
      status: "RUNNING",
    },
    {
      title: "Analytics Engine",
      description: "AI-powered insights, trends, executive dashboards, and KPIs.",
      href: "/dashboard/analytics",
      color: "from-slate-700 to-slate-900",
      status: "ONLINE",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          AI Command Center
        </h1>

        <p className="mt-2 text-slate-500">
          Central intelligence platform for TradeXpress Enterprise.
        </p>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="rounded-xl bg-white shadow p-6">
          <p className="text-sm text-slate-500">AI Engine</p>
          <h2 className="mt-2 text-2xl font-bold text-emerald-600">
            ONLINE
          </h2>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <p className="text-sm text-slate-500">Knowledge Base</p>
          <h2 className="mt-2 text-2xl font-bold text-blue-600">
            CONNECTED
          </h2>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <p className="text-sm text-slate-500">Models</p>
          <h2 className="mt-2 text-2xl font-bold">
            GPT + RAG
          </h2>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <p className="text-sm text-slate-500">Enterprise</p>
          <h2 className="mt-2 text-2xl font-bold text-indigo-600">
            READY
          </h2>
        </div>

      </div>

      {/* AI Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {modules.map((module) => (
          <Link
            key={module.title}
            href={module.href}
            className="group rounded-2xl bg-white shadow hover:shadow-xl transition overflow-hidden"
          >
            <div
              className={`h-2 bg-gradient-to-r ${module.color}`}
            />

            <div className="p-6">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  {module.title}
                </h2>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {module.status}
                </span>

              </div>

              <p className="mt-4 text-sm text-slate-500 leading-6">
                {module.description}
              </p>

              <div className="mt-6 text-blue-600 font-semibold group-hover:translate-x-1 transition">
                Open Module →
              </div>

            </div>

          </Link>
        ))}

      </div>

      {/* Runtime Information */}
      <div className="rounded-2xl bg-slate-900 text-white p-8 shadow-xl">

        <h2 className="text-2xl font-bold">
          AI Runtime
        </h2>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div>
            <p className="text-slate-400 text-sm">Process</p>
            <p className="font-semibold">TX-AI-001</p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Platform</p>
            <p className="font-semibold">TradeXpress AI</p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Version</p>
            <p className="font-semibold">v3 Enterprise</p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Environment</p>
            <p className="font-semibold text-emerald-400">
              Production
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
