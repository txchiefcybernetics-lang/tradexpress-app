'use client';

import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Building2,
  Database,
  Settings,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    title: "Platform Modules",
    description:
      "Enable or disable enterprise and industry modules.",
    icon: Boxes,
    href: "/dashboard/enterprise/modules",
    color: "text-blue-600",
  },
  {
    title: "Organization",
    description:
      "Company profile, branding, business units, and locations.",
    icon: Building2,
    href: "/dashboard/enterprise/organization",
    color: "text-green-600",
  },
  {
    title: "AI Management",
    description:
      "Manage AI providers, agents, prompts, and automation.",
    icon: BrainCircuit,
    href: "/dashboard/enterprise/ai",
    color: "text-purple-600",
  },
  {
    title: "Security",
    description:
      "Roles, permissions, authentication, and audit logs.",
    icon: ShieldCheck,
    href: "/dashboard/enterprise/security",
    color: "text-red-600",
  },
  {
    title: "Infrastructure",
    description:
      "Servers, databases, storage, API gateways, and monitoring.",
    icon: Database,
    href: "/dashboard/technology",
    color: "text-cyan-600",
  },
  {
    title: "Platform Settings",
    description:
      "Global platform configuration and preferences.",
    icon: Settings,
    href: "/dashboard/settings",
    color: "text-orange-600",
  },
];

export default function EnterpriseConsolePage() {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Enterprise Console
          </h1>

          <p className="mt-2 text-slate-500">
            Central administration for the TradeXpress Enterprise Platform.
          </p>
        </div>

        <Link
          href="/dashboard"
          className="rounded-lg border px-4 py-2 hover:bg-slate-100"
        >
          ← Dashboard
        </Link>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {modules.map((module) => {
          const Icon = module.icon;

          return (
            <Link
              key={module.title}
              href={module.href}
              className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
            >

              <div className="flex items-center justify-between">

                <div className={`rounded-lg bg-slate-100 p-3 ${module.color}`}>
                  <Icon className="h-7 w-7" />
                </div>

                <ArrowRight className="h-5 w-5 text-slate-400" />

              </div>

              <h2 className="mt-6 text-xl font-semibold">
                {module.title}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {module.description}
              </p>

            </Link>
          );
        })}

      </div>

    </div>
  );
}
