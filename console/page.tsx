import {
  Activity,
  Bot,
  Database,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

const modules = [
  {
    title: "User Management",
    description: "Manage customers, brokers, and enterprise accounts.",
    value: "0 Users",
    icon: Users,
  },
  {
    title: "TX AI Command Center",
    description: "Monitor AI requests, models, and performance.",
    value: "85,230 AI Requests",
    icon: Bot,
  },
  {
    title: "Knowledge Base",
    description: "Manage trade documents, guides, and regulations.",
    value: "4,820 Documents",
    icon: Database,
  },
  {
    title: "System Analytics",
    description: "Monitor platform activity and performance.",
    value: "99.9% Uptime",
    icon: Activity,
  },
  {
    title: "Security Center",
    description: "Roles, permissions, and authentication.",
    value: "Protected",
    icon: ShieldCheck,
  },
  {
    title: "Mobile App",
    description: "Manage Android and iOS application releases.",
    value: "Version 1.0.0",
    icon: Smartphone,
  },
];

export default function ConsolePage() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold">
          TradeXpress Console
        </h1>

        <p className="mt-2 text-zinc-600">
          Enterprise administration and platform management center.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <Icon className="h-8 w-8" />

                <h2 className="mt-4 text-xl font-semibold">
                  {module.title}
                </h2>

                <p className="mt-2 text-sm text-zinc-600">
                  {module.description}
                </p>

                <div className="mt-4 text-lg font-bold">
                  {module.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
