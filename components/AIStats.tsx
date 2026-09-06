"use client";

import { supabase } from "@/lib/supabase";
import { Activity, Bot, Brain, Workflow } from "lucide-react";
import { useEffect, useState } from "react";

interface Stats {
  aiRequests: number;
  agents: number;
  automations: number;
  health: string;
}

export default function AIStats() {
  const [stats, setStats] = useState<Stats>({
    aiRequests: 0,
    agents: 0,
    automations: 0,
    health: "Online",
  });

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    const { count: requests } = await supabase
      .from("analytics_events")
      .select("*", { count: "exact", head: true })
      .eq("event_type", "ai_request");

    const { count: agents } = await supabase
      .from("ai_agents")
      .select("*", { count: "exact", head: true });

    const { count: automations } = await supabase
      .from("automations")
      .select("*", { count: "exact", head: true });

    setStats({
      aiRequests: requests ?? 0,
      agents: agents ?? 0,
      automations: automations ?? 0,
      health: "Online",
    });
  }

  const cards = [
    {
      title: "AI Requests",
      value: stats.aiRequests,
      icon: Brain,
      color: "text-blue-600",
    },
    {
      title: "Active AI Agents",
      value: stats.agents,
      icon: Bot,
      color: "text-green-600",
    },
    {
      title: "Automations",
      value: stats.automations,
      icon: Workflow,
      color: "text-purple-600",
    },
    {
      title: "System Health",
      value: stats.health,
      icon: Activity,
      color: "text-emerald-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <Icon className={`h-9 w-9 ${card.color}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
