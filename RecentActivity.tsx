export default function RecentActivity() {
  return (
    <div className="rounded-xl bg-white shadow p-6 h-80">
      <h2 className="text-xl font-semibold mb-4">
        Recent Activity
      </h2>

      <ul className="space-y-3 text-sm">
        <li>✅ Shipment TX-1023 cleared by Customs</li>
        <li>🚚 Delivery scheduled for Cebu</li>
        <li>📄 New customs declaration submitted</li>
        <li>🤖 AI detected incomplete documentation</li>
      </ul>
    </div>
  );
}