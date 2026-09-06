"use client";

import { useEffect, useState } from "react";

export default function EnterpriseStats() {

  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }


  return (
    <div className="grid grid-cols-4 gap-6">

      <div className="rounded-xl bg-zinc-900 p-6">
        <p className="text-zinc-400">
          Total Revenue
        </p>
        <h2 className="text-3xl font-bold">
          ₱{stats.revenue.toLocaleString()}
        </h2>
      </div>


      <div className="rounded-xl bg-zinc-900 p-6">
        <p className="text-zinc-400">
          Active Operations
        </p>
        <h2 className="text-3xl font-bold">
          {stats.activeOperations}
        </h2>
      </div>


      <div className="rounded-xl bg-zinc-900 p-6">
        <p className="text-zinc-400">
          AI Insights
        </p>
        <h2 className="text-3xl font-bold">
          {stats.aiInsights}
        </h2>
      </div>


      <div className="rounded-xl bg-zinc-900 p-6">
        <p className="text-zinc-400">
          Enterprise Health
        </p>
        <h2 className="text-3xl font-bold">
          {stats.health}
        </h2>
      </div>

    </div>
  );
}
