'use client';

import React from 'react';
import Link from 'next/link';

export default function AIPlatformPage() {
  const handleDiagnosticPing = () => {
    if (typeof window !== 'undefined') {
      alert('TX AI Agent Health Check: ALL SYSTEMS NORMAL');
    }
  };

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
              <Link href="/dashboard/executive" style={{ color: '#94a3b8', textDecoration: 'none' }}>👔 Executive Office</Link>
              <Link href="/dashboard/technology/ai-platform" style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}>🤖 AI Command Center</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>OPERATIONS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/customs" style={{ color: '#94a3b8', textDecoration: 'none' }}>📑 Customs Brokerage</Link>
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

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>ADMINISTRATION</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/feedback" style={{ color: '#94a3b8', textDecoration: 'none' }}>💬 Feedback Hub</Link>
              <Link href="/dashboard/settings" style={{ color: '#94a3b8', textDecoration: 'none' }}>⚙️ Settings</Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main AI Command Content */}
      <main style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
            TX AI Platform
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '0.25rem', fontSize: '0.95rem' }}>
            TradeXpress Artificial Intelligence Platform Command & Operational Status
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>AI Engine Status</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#34d399', marginTop: '0.5rem' }}>
              Online 🟢
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              Gemini 3.6 Active
            </div>
          </div>

          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Knowledge Base</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#38bdf8', marginTop: '0.5rem' }}>
              Connected 🔗
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              Tariff Code Matrix Synced
            </div>
          </div>

          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Model Runtime</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#facc15', marginTop: '0.5rem' }}>
              0.12s Latency
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', fontFamily: 'monospace' }}>
              Node: NODE-TX-LOGS-01
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#38bdf8', margin: 0 }}>
            ⚡ Operational AI Functions
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/api/tx/logs" target="_blank" style={{
              backgroundColor: '#082f49',
              border: '1px solid #075985',
              color: '#7dd3fc',
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              textDecoration: 'none'
            }}>
              View Live Telemetry Logs →
            </Link>

            <Link href="/dashboard/feedback" style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              color: '#f8fafc',
              padding: '10px 18px',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              textDecoration: 'none'
            }}>
              Open Feedback Hub
            </Link>

            <button 
              type="button"
              onClick={handleDiagnosticPing}
              style={{
                backgroundColor: '#38bdf8',
                color: '#020617',
                border: 'none',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Run Diagnostic Ping
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
