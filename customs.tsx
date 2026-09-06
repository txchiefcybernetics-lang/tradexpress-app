'use client';

import React from 'react';
import Link from 'next/link';

export default function CustomsPage() {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      fontFamily: 'sans-serif'
    }}>
      {/* Sidebar Navigation */}
      <aside style={{
        width: '260px',
        backgroundColor: '#0f172a',
        borderRight: '1px solid #1e293b',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#38bdf8', margin: 0 }}>TradeXpress</h2>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Enterprise System v2.0</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>MAIN</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard" style={{ color: '#94a3b8', textDecoration: 'none' }}>📊 Dashboard</Link>
              <Link href="/dashboard/technology/ai-platform" style={{ color: '#94a3b8', textDecoration: 'none' }}>🤖 AI Command Center</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>OPERATIONS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/customs" style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}>📑 Customs Brokerage</Link>
              <Link href="/dashboard/logistics" style={{ color: '#94a3b8', textDecoration: 'none' }}>🚚 Logistics & Operations</Link>
              <Link href="/dashboard/legal" style={{ color: '#94a3b8', textDecoration: 'none' }}>⚖️ Legal & Compliance</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>CORPORATE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/finance" style={{ color: '#94a3b8', textDecoration: 'none' }}>💰 Finance & Accounting</Link>
              <Link href="/dashboard/hr" style={{ color: '#94a3b8', textDecoration: 'none' }}>👥 Human Resources</Link>
              <Link href="/dashboard/technology" style={{ color: '#94a3b8', textDecoration: 'none' }}>💻 Technology & Innovation</Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Customs Brokerage Content */}
      <main style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <nav style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
            <Link href="/dashboard" style={{ color: '#38bdf8', textDecoration: 'none' }}>Dashboard</Link>
            {' / '}
            <span>Operations</span>
            {' / '}
            <span style={{ color: '#f8fafc' }}>Customs Brokerage</span>
          </nav>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
            📑 Customs Brokerage & Tariff Clearance
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '0.25rem', fontSize: '0.95rem' }}>
            Automated tariff classification, duties calculation, and import/export documentation node.
          </p>
        </div>

        {/* Operational Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Tariff Engine Matrix</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#34d399', marginTop: '0.5rem' }}>
              HS Code Synced 🟢
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              WCO 2026 Harmonized System Active
            </div>
          </div>

          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Clearance Queue</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#38bdf8', marginTop: '0.5rem' }}>
              Active Verification
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              API Status: Express Node Live
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          gap: '1rem'
        }}>
          <Link href="/dashboard/technology/ai-platform" style={{
            backgroundColor: '#38bdf8',
            color: '#020617',
            padding: '10px 18px',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}>
            ← Return to TXBOT Command Center
          </Link>
        </div>
      </main>
    </div>
  );
}
