import React from 'react';
import Link from 'next/link';

async function getLogsData() {
  try {
    // Fetch directly from relative API route during runtime/build
    const res = await fetch('https://www.tradexpress.co/api/tx/logs', {
      cache: 'no-store' // Use 'force-cache' or revalidate for ISR pre-rendering
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

export default async function StartPage() {
  const logData = await getLogsData();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '2rem'
    }}>
      {/* Header */}
      <header style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #1e293b',
        paddingBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#38bdf8' }}>TradeXpress</span>
          <span style={{ fontSize: '0.75rem', backgroundColor: '#082f49', color: '#7dd3fc', border: '1px solid #075985', padding: '2px 8px', borderRadius: '4px', fontFamily: 'monospace' }}>v2.0</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
          <Link href="/dashboard" style={{ color: '#94a3b8', textDecoration: 'none' }}>Dashboard</Link>
          <Link href="/dashboard/feedback" style={{ color: '#94a3b8', textDecoration: 'none' }}>Feedback Hub</Link>
          <Link href="/api/tx/logs" style={{ color: '#34d399', textDecoration: 'none', fontFamily: 'monospace', fontSize: '0.75rem' }}>/api/tx/logs</Link>
        </nav>
      </header>

      {/* Main Body */}
      <main style={{ maxWidth: '800px', margin: 'auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <span style={{ backgroundColor: '#082f49', border: '1px solid #075985', padding: '6px 16px', borderRadius: '9999px', fontSize: '0.75rem', fontFamily: 'monospace', color: '#7dd3fc' }}>
            ⚡ Gemini 3.6 AI Engine Connected
          </span>
        </div>

        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', color: '#ffffff', margin: 0 }}>
          Enterprise Customs Brokerage & AI Trade Intelligence
        </h1>

        <p style={{ color: '#94a3b8', fontSize: '1.125rem', margin: 0 }}>
          Streamline tariff classification, customs duty estimations, and supply chain logistics with the TradeXpress AI Assistant (TX).
        </p>

        {/* Pre-rendered Live Telemetry Badge */}
        {logData && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '12px', borderRadius: '8px', fontSize: '0.8rem', fontFamily: 'monospace', color: '#38bdf8' }}>
            Node Status: <span style={{ color: '#34d399' }}>{logData.status}</span> | Node ID: {logData.directory?.node_id} | Header ID: {logData.feedback?.header_id}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', paddingTop: '1rem' }}>
          <Link href="/dashboard" style={{ backgroundColor: '#38bdf8', color: '#020617', fontWeight: 'bold', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
            Launch Command Center →
          </Link>
          <Link href="/dashboard/feedback" style={{ backgroundColor: '#0f172a', color: '#e2e8f0', border: '1px solid #1e293b', fontWeight: '600', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
            System Feedback Metrics
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', borderTop: '1px solid #0f172a', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', fontFamily: 'monospace' }}>
        <p style={{ margin: 0 }}>© 2026 TradeXpress Philippines. All rights reserved.</p>
        <p style={{ margin: 0 }}>Status: <span style={{ color: '#34d399' }}>ONLINE (HTTPS / SSL Active)</span></p>
      </footer>
    </div>
  );
}
