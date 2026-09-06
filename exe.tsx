import { getExecutiveStats } from "@/lib/services/executive";

export default async function ExecutivePage() {
  const stats = await getExecutiveStats();

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

        <div className="rounded-xl border p-6">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <h2 className="text-3xl font-bold">
            ₱{stats.totalRevenue.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-sm text-gray-500">Active Operations</p>
          <h2 className="text-3xl font-bold">
            {stats.activeOperations}
          </h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-sm text-gray-500">AI Insights</p>
          <h2 className="text-3xl font-bold">
            {stats.aiInsights}
          </h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-sm text-gray-500">Enterprise Health</p>
          <h2 className="text-3xl font-bold text-green-600">
            {stats.enterpriseHealth}
          </h2>
        </div>

      </div>

    </div>
  );
}
