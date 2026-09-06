export const dynamic = "force-dynamic";

export default function FinancePage() {
  return (
    /* Audit & Compliance */
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-xl font-semibold">
        Audit & Compliance
      </h2>

      <p className="mt-2 text-slate-500">
        Enterprise audit monitoring, regulatory compliance,
        internal controls, and risk management.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border p-4">
          <h3 className="text-sm text-gray-500">
            Internal Audits
          </h3>

          <p className="mt-2 text-2xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="text-sm text-gray-500">
            Compliance Status
          </h3>

          <p className="mt-2 text-2xl font-bold text-green-600">
            Compliant
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="text-sm text-gray-500">
            Open Findings
          </h3>

          <p className="mt-2 text-2xl font-bold">
            0
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="text-sm text-gray-500">
            Risk Level
          </h3>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            Low
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-xl border p-6 h-64">
          <h3 className="text-lg font-semibold">
            Audit Schedule
          </h3>

          <p className="mt-3 text-slate-500">
            Upcoming internal and external audit schedules
            will appear here.
          </p>
        </div>

        <div className="rounded-xl border p-6 h-64">
          <h3 className="text-lg font-semibold">
            Compliance Reports
          </h3>

          <p className="mt-3 text-slate-500">
            SEC, BIR, PEZA, Customs, ISO, and company
            compliance reports.
          </p>
        </div>
      </div>
    </div>
  );
}
