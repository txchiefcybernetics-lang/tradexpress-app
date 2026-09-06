'use client';
export default function InsightsPage() {
  const metrics = [
    { label: "Total Imports Tracked", value: "₱1.42B", trend: "+12.4%" },
    { label: "Average Customs Clearance Time", value: "2.4 Days", trend: "-18%" },
    { label: "Active AHTN Classifications", value: "11,420+", trend: "Updated" },
    { label: "Market Compliance Rate", value: "98.7%", trend: "+1.2%" }
  ];

  return (
    <div style={{ padding: '40px', background: '#0B0F19', color: '#fff', minHeight: '100vh', fontFamily: 'monospace' }}>
      <h1 style={{ color: '#60A5FA', fontSize: '24px', marginBottom: '10px' }}>📈 TradeX Insights</h1>
      <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '30px' }}>Strategic intelligence platform delivering market analytics, trade statistics, and executive dashboards.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        {metrics.map((m, i) => (
          <div key={i} style={{ padding: '20px', background: '#111827', border: '1px solid #374151', borderRadius: '8px' }}>
            <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#9CA3AF' }}>{m.label}</p>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '22px', color: '#34D399' }}>{m.value}</h2>
            <span style={{ fontSize: '11px', color: '#60A5FA' }}>Trend: {m.trend}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
