export const dynamic = "force-dynamic";


export default function LogisticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Logistics & Operations
        </h1>

        <p className="mt-2 text-slate-500">
          Shipment tracking, warehouse management, transportation,
          fleet monitoring, and operational performance.
        </p>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Active Shipments</h3>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Warehouses</h3>
          <p className="text-3xl font-bold mt-2">6</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Delivery Rate</h3>
          <p className="text-3xl font-bold mt-2">98%</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Fleet Vehicles</h3>
          <p className="text-3xl font-bold mt-2">42</p>
        </div>
      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white shadow p-6 h-96">
          <h2 className="text-xl font-semibold">
            Shipment Monitoring
          </h2>
        </div>

        <div className="rounded-xl bg-white shadow p-6 h-96">
          <h2 className="text-xl font-semibold">
            Warehouse Operations
          </h2>
        </div>
      </div>

      <div className="rounded-xl bg-white shadow p-6 h-64">
        <h2 className="text-xl font-semibold">
          Fleet & Route Management
        </h2>
      </div>
    </div>
  );
}
