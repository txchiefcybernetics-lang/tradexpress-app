import { EnterpriseProcesses } from "@/lib/system/processes";

export default function DevelopmentTracker() {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-6">

      <h2 className="text-2xl font-bold">
        TradeXpress Development Tracker
      </h2>

      <p className="text-slate-500 mt-2">
        Enterprise development roadmap and implementation status.
      </p>

      <div className="mt-6 overflow-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Process ID</th>

              <th className="text-left">Module</th>

              <th className="text-left">Feature</th>

              <th className="text-left">Status</th>

              <th className="text-left">Version</th>

            </tr>

          </thead>

          <tbody>

            {EnterpriseProcesses.map((process) => (

              <tr
                key={process.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="py-3 font-semibold">
                  {process.id}
                </td>

                <td>{process.module}</td>

                <td>{process.feature}</td>

                <td>{process.status}</td>

                <td>{process.version}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}