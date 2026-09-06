'use client';

export default function DeploymentPage() {
  const infrastructure = [
    { component: "Domain Authority", target: "tradexpress.co", status: "Active / DNSSEC Secured", provider: "GoDaddy / Titan" },
    { component: "Website Builder", target: "GoDaddy Airo AI Builder", status: "Subscribed (Case #01697090)", provider: "GoDaddy" },
    { component: "Production Hosting", target: "Vercel Edge Network", status: "Deployed & Live", provider: "Vercel" },
    { component: "Database & Auth", target: "Supabase PostgreSQL", status: "Connected", provider: "Supabase" },
    { component: "Collaboration Hub", target: "Slack Pro Workspace", status: "Trial Active (Webhook Ready)", provider: "Slack" }
  ];

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#2563EB', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          INFRASTRUCTURE & DEPLOYMENT CONTROL
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>tradexpress.co Live Status</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Centralized monitoring for domain security, website builders, cloud hosting, and database persistence layers.
        </p>

        <div style={{ display: 'grid', gap: '20px' }}>
          {infrastructure.map((item, i) => (
            <div key={i} style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ color: '#34D399', fontSize: '12px', fontWeight: 'bold' }}>{item.component}</span>
                <h3 style={{ color: '#E5E7EB', fontSize: '16px', margin: '6px 0' }}>{item.target}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '12px', margin: 0 }}>Provider: {item.provider}</p>
              </div>
              <div style={{ background: '#1E3A8A', color: '#93C5FD', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold' }}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
