export default function BrokeragePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Customs Brokerage
        </h1>

        <p className="mt-2 text-slate-500">
          Customs declaration processing, shipment clearance, tariff computation, and documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Pending Entries</h3>
          <p className="text-3xl font-bold mt-2">42</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Cleared Shipments</h3>
          <p className="text-3xl font-bold mt-2">128</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Declarations</h3>
          <p className="text-3xl font-bold mt-2">85</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">AI Reviews</h3>
          <p className="text-3xl font-bold mt-2">14</p>
        </div>
      </div>

      <div className="rounded-xl bg-white shadow p-6 h-96">
        <h2 className="text-2xl font-semibold mb-4">
          Brokerage Operations
        </h2>

        <p className="text-gray-500">
          Customs entries, shipment status, tariff calculations, import/export documentation, and brokerage workflows will appear here.
        </p>
      </div>
    </div>
  );
}