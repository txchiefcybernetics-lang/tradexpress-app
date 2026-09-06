import EmbeddedFrame from "@/components/system/EmbeddedFrame";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      {/* ================================= */}
      {/* Enterprise Identity */}
      {/* ================================= */}

      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 shadow-xl">

        <div className="flex flex-wrap items-center justify-between gap-6">

          <div>

            <h1 className="text-4xl font-bold">
              Enterprise Analytics
            </h1>

            <p className="mt-2 text-slate-300">
              Business Intelligence • AI Insights • Enterprise Monitoring
            </p>

          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">

            <div>
              <p className="text-slate-400">Identity</p>
              <p className="font-semibold">
                TX-ANALYTICS-CORE
              </p>
            </div>

            <div>
              <p className="text-slate-400">Version</p>
              <p className="font-semibold">
                v2.0.0
              </p>
            </div>

            <div>
              <p className="text-slate-400">Token</p>
              <p className="font-semibold text-emerald-400">
                TX-REP-001
              </p>
            </div>

            <div>
              <p className="text-slate-400">Workspace</p>
              <p className="font-semibold">
                Enterprise
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* Embedded Analytics */}
      {/* ================================= */}

      <EmbeddedFrame
        title="Enterprise Analytics Dashboard"
        src="https://tradexpress.co"
        height={850}
      />

    </div>
  );
}
