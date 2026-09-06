"use client";

import Link from "next/link";

const actions = [
  {
    title: "Executive Office",
    description: "Executive dashboard and enterprise decision support.",
    icon: "👔",
    href: "/dashboard/executive",
    color: "from-blue-600 to-indigo-700",
  },
  {
    title: "AI Command Center",
    description: "Knowledge Base, AI Chat, HS Code Intelligence and calculators.",
    icon: "🤖",
    href: "/dashboard/ai",
    color: "from-purple-600 to-violet-700",
  },
  {
    title: "Enterprise Analytics",
    description: "Business intelligence, KPI dashboards and executive reports.",
    icon: "📊",
    href: "/dashboard/analytics",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Technology Division",
    description: "Development workspace, DevOps and cloud infrastructure.",
    icon: "💻",
    href: "/dashboard/technology",
    color: "from-cyan-600 to-blue-600",
  },
  {
    title: "Finance Division",
    description: "Finance, accounting, treasury and budgeting.",
    icon: "💰",
    href: "/dashboard/finance",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Legal & Governance",
    description: "Corporate governance, compliance and legal affairs.",
    icon: "⚖️",
    href: "/dashboard/compliance",
    color: "from-rose-600 to-red-600",
  },
  {
    title: "Customs Brokerage",
    description: "Brokerage operations and customs documentation.",
    icon: "📑",
    href: "/dashboard/brokerage",
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Logistics Operations",
    description: "Shipment monitoring and logistics management.",
    icon: "🚚",
    href: "/dashboard/logistics",
    color: "from-teal-500 to-cyan-600",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-2xl bg-white shadow-lg border border-slate-200">

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-2xl font-bold text-slate-900">
          Enterprise Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Launch enterprise workspaces and operational modules.
        </p>

      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2">

        {actions.map((action) => (

          <Link
            key={action.title}
            href={action.href}
            className="group rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
          >

            <div className={`h-2 bg-gradient-to-r ${action.color}`} />

            <div className="p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <span className="text-3xl">
                    {action.icon}
                  </span>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {action.description}
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-5 flex items-center justify-end">

                <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  Open →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

      <div className="border-t border-slate-200 px-6 py-4 bg-slate-50">

        <div className="flex flex-wrap items-center justify-between">

          <span className="text-xs text-slate-500">
            Enterprise Workspace Launcher
          </span>

          <span className="text-xs text-slate-400">
            Process ID: TX-DASH-002
          </span>

        </div>

      </div>

    </section>
  );
}
