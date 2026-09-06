'use client';

export default function GreenCorePage() {
  const initiatives = [
    { code: "GC-01", title: "Green corridors & Maritime Decarbonization", impact: "Estimated 18% reduction in cross-border shipping emissions", status: "Active" },
    { code: "GC-02", title: "Paperless Customs & Digital Compliance", impact: "Zero-paper documentation across 100% of pilot customs entries", status: "Deployed" },
    { code: "GC-03", title: "Eco-Tariff & Sustainable Commodity Scoring", impact: "Automated HS code flagging for eco-certified products under RA 10863", status: "In Development" }
  ];

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#065F46', color: '#6EE7B7', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          TRADEXPRESS GREENCORE INITIATIVE
        </span>
        <h1 style={{ color: '#34D399', fontSize: '28px', margin: '15px 0 10px 0' }}>Sustainable Commerce & Green Logistics</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Implementing GreenCore frameworks within global supply chains to promote environmental responsibility, carbon tracking, and sustainable trade corridors.
        </p>

        <div style={{ display: 'grid', gap: '20px' }}>
          {initiatives.map((item, i) => (
            <div key={i} style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ background: '#065F46', color: '#6EE7B7', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>{item.code}</span>
                <span style={{ color: '#34D399', fontSize: '12px' }}>Status: {item.status}</span>
              </div>
              <h3 style={{ color: '#E5E7EB', fontSize: '16px', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0 }}>{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
