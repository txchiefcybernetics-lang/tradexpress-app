'use client';
export default function LogiNetPage() {
  const providers = [
    { name: "Global Freight Solutions", type: "Freight Forwarder", rating: "4.8" },
    { name: "Davao Inland Logistics", type: "Trucking", rating: "4.7" },
    { name: "Secure Storage Corp", type: "Warehousing", rating: "4.9" }
  ];
  return (
    <div style={{ padding: '40px', background: '#0B0F19', color: '#fff', minHeight: '100vh', fontFamily: 'monospace' }}>
      <h1>🌐 TradeX LogiNet</h1>
      <p>Logistics Marketplace & Coordination Platform</p>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        {providers.map((p, i) => (
          <div key={i} style={{ padding: '20px', background: '#111827', border: '1px solid #374151', borderRadius: '8px' }}>
            <h3>{p.name}</h3>
            <p>{p.type} • {p.rating} Stars</p>
          </div>
        ))}
      </div>
    </div>
  );
}
