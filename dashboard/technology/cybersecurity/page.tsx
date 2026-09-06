'use client';

import React from 'react';
import Link from 'next/link';

export default function CybersecurityPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      fontFamily: 'sans-serif',
      padding: '2rem'
    }}>
      {/* Header / Breadcrumb */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '2rem' }}>
        <nav style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem', fontFamily: 'monospace' }}>
          <Link href="/dashboard" style={{ color: '#38bdf8', textDecoration: 'none' }}>Dashboard</Link>
          {' / '}
          <span>Technology</span>
          {' / '}
          <span style={{ color: '#f8fafc' }}>Cybersecurity</span>
        </nav>
        
        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#38bdf8', margin: 0 }}>
          🔒 TradeXpress Cybersecurity & Security Protocols
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>
          System telemetry, encryption status, and network infrastructure overview.
        </p>
      </div>

      {/* Main Grid Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Card 1: Domain & DNSSEC */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#34d399', marginTop: 0 }}>
            🛡️ Domain Security (DNSSEC)
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Active DS record protection and TLS 1.3 encryption enabled across all <code>tradexpress.co</code> subdomains.
          </p>
          <div style={{ marginTop: '1rem', fontSize: '0.75rem', fontFamily: 'monospace', color: '#38bdf8' }}>
            Status: SSL / HTTPS ENFORCED
          </div>
        </div>

        {/* Card 2: Auth & Database Security */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#38bdf8', marginTop: 0 }}>
            🔑 Auth & Database Guardrails
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Supabase Row Level Security (RLS) and OAuth 2.0 access tokens regulating node operations.
          </p>
          <div style={{ marginTop: '1rem', fontSize: '0.75rem', fontFamily: 'monospace', color: '#34d399' }}>
            Status: RLS ACTIVE
          </div>
        </div>

        {/* Card 3: System Logs Endpoint */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#f43f5e', marginTop: 0 }}>
            📡 Telemetry Audit Logs
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
            Continuous monitoring via the primary telemetry endpoint.
          </p>
          <Link 
            href="/api/tx/logs" 
            style={{ display: 'inline-block', marginTop: '0.5rem', color: '#38bdf8', fontSize: '0.875rem', fontFamily: 'monospace', textDecoration: 'none' }}
          >
            Inspect /api/tx/logs →
          </Link>
        </div>
      </main>
    </div>
  );
}
