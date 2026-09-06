'use client';
export default function AcademyPage() {
  const courses = [
    { title: "Customs Administration & Tariff Classification", duration: "6 Weeks", level: "Professional" },
    { title: "CMTA RA 10863 Compliance Masterclass", duration: "4 Weeks", level: "Advanced" },
    { title: "Supply Chain & Logistics Management", duration: "8 Weeks", level: "Intermediate" }
  ];

  return (
    <div style={{ padding: '40px', background: '#0B0F19', color: '#fff', minHeight: '100vh', fontFamily: 'monospace' }}>
      <h1 style={{ color: '#60A5FA', fontSize: '24px', marginBottom: '10px' }}>🎓 TradeX Academy</h1>
      <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '30px' }}>Digital learning platform providing professional education, certification, and customs review programs.</p>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {courses.map((c, i) => (
          <div key={i} style={{ padding: '20px', background: '#111827', border: '1px solid #374151', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#E5E7EB' }}>{c.title}</h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#9CA3AF' }}>Duration: {c.duration} • Level: {c.level}</p>
            </div>
            <button style={{ padding: '8px 16px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
