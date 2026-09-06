'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InfrastructurePage() {
  const [metrics, setMetrics] = useState({
    status: 'online',
    hostname: 'tradexpress.co-node-01',
    ipBinding: '0.0.0.0 / Port 8000',
    cpuLoad: '4.2%',
    memoryUsage: '6.4%',
    uptime: 'Active (PM2 Cluster)'
  });

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
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>INFRASTRUCTURE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/technology/infrastructure" style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}>🖥️ Host Infrastructure</Link>
              <Link href="/dashboard/database" style={{ color: '#94a3b8', textDecoration: 'none' }}>🗄️ Database & Storage</Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Infrastructure Content */}
      <main style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <nav style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
            <Link href="/dashboard" style={{ color: '#38bdf8', textDecoration: 'none' }}>Dashboard</Link>
            {' / '}
            <Link href="/dashboard/technology" style={{ color: '#38bdf8', textDecoration: 'none' }}>Technology</Link>
            {' / '}
            <span style={{ color: '#f8fafc' }}>Infrastructure</span>
          </nav>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
            🖥️ TradeXpress Host Infrastructure
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '0.25rem', fontSize: '0.95rem' }}>
            Real-time server node metrics, IP address binding, and process supervisor telemetry.
          </p>
        </div>

        {/* Telemetry Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>System Status</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#34d399', marginTop: '0.5rem' }}>
              {metrics.status.toUpperCase()} 🟢
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              Uptime: {metrics.uptime}
            </div>
          </div>

          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Hostname & Binding</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#38bdf8', marginTop: '0.5rem', fontFamily: 'monospace' }}>
              {metrics.hostname}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              IP: {metrics.ipBinding}
            </div>
          </div>

          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>CPU & RAM Load</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#facc15', marginTop: '0.5rem' }}>
              CPU: {metrics.cpuLoad}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              Memory Usage: {metrics.memoryUsage}
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
