"use client";

import Link from "next/link";

const enterpriseModules = [
  {
    title: "Executive Office",
    description: "Executive dashboards, strategic planning and enterprise oversight.",
    icon: "👔",
    href: "/dashboard/executive",
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "AI Command Center",
    description: "Enterprise AI workspace for customs, logistics and operations.",
    icon: "🤖",
    href: "/dashboard/ai",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Enterprise Analytics",
    description: "Business intelligence, KPIs and operational insights.",
    icon: "📊",
    href: "/dashboard/analytics",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Enterprise Reports",
    description: "Generate executive, customs and financial reports.",
    icon: "📑",
    href: "/dashboard/reports",
    color: "from-purple-500 to-indigo-600",
  },
];

export default function IndustryHub() {
  return (
    <section className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Enterprise Industry Hub
        </h2>

        <p className="mt-2 text-slate-500">
          Select an enterprise domain to open its workspace, analytics and AI-powered tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {enterpriseModules.map((module) => (
          <Link
            key={module.title}
            href={module.href}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div
                className={`h-2 bg-gradient-to-r ${module.color}`}
              />

              <div className="p-6">

                <div className="text-5xl mb-5">
                  {module.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {module.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  {module.description}
                </p>

                <div className="mt-6 flex items-center text-blue-600 font-medium">
                  Open Workspace →
                </div>

              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}