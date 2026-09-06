export default function SystemStatus() {
  return (
    <div className="rounded-xl bg-white shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        Enterprise Status
      </h2>

      <ul className="space-y-2">
        <li>🟢 TradeXpress Platform — Online</li>
        <li>🟢 AI Services — Active</li>
        <li>🟢 Customs Gateway — Connected</li>
        <li>🟢 Database — Healthy</li>
      </ul>
    </div>
  );
}