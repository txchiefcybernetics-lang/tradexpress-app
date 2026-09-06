export default function CompliancePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Legal & Compliance
        </h1>

        <p className="mt-2 text-slate-500">
          Regulatory compliance, audit management, legal documentation, and risk monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Compliance Score</h3>
          <p className="text-3xl font-bold mt-2">98%</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Open Audits</h3>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Legal Cases</h3>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>

        <div className="rounded-xl bg-white shadow p-6">
          <h3 className="text-sm text-gray-500">Risk Alerts</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </div>

      <div className="rounded-xl bg-white shadow p-6 h-96">
        <h2 className="text-2xl font-semibold mb-4">
          Compliance Dashboard
        </h2>

        <p className="text-gray-500">
          Audit schedules, compliance reports, legal documentation, and enterprise risk management will appear here.
        </p>
      </div>
    </div>
  );
}