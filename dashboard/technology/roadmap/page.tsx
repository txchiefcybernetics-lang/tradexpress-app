'use client';

import React from 'react';
import Link from 'next/link';

export default function TechnologyRoadmapPage() {
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
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>TECHNOLOGY & INNOVATION</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/technology" style={{ color: '#94a3b8', textDecoration: 'none' }}>💻 Tech Overview</Link>
              <Link href="/dashboard/technology/roadmap" style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}>🗺️ Tech Roadmap</Link>
              <Link href="/dashboard/database" style={{ color: '#94a3b8', textDecoration: 'none' }}>🗄️ Database & Storage</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>OPERATIONS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/customs" style={{ color: '#94a3b8', textDecoration: 'none' }}>📑 Customs Brokerage</Link>
              <Link href="/dashboard/logistics" style={{ color: '#94a3b8', textDecoration: 'none' }}>🚚 Logistics & Operations</Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Roadmap Content */}
      <main style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <nav style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
            <Link href="/dashboard" style={{ color: '#38bdf8', textDecoration: 'none' }}>Dashboard</Link>
            {' / '}
            <Link href="/dashboard/technology" style={{ color: '#38bdf8', textDecoration: 'none' }}>Technology</Link>
            {' / '}
            <span style={{ color: '#f8fafc' }}>Roadmap</span>
          </nav>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
            🗺️ Technology & AI Architecture Roadmap
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '0.25rem', fontSize: '0.95rem' }}>
            System development milestones, TX trade assistant scaling, and infrastructure deployment pipelines.
          </p>
        </div>

        {/* Roadmap Milestones Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Phase 1: Core Engine (Q3 2026)</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#34d399', marginTop: '0.5rem' }}>
              Completed & Live 🟢
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', lineHeight: '1.4' }}>
              Next.js 16 setup, PM2 cluster monitoring, Supabase authentication, and Uvicorn backend integration.
            </div>
          </div>

          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.5rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Phase 2: TX AI Assistant (Q4 2026)</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#38bdf8', marginTop: '0.5rem' }}>
              In Progress ⚙️
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem', lineHeight: '1.4' }}>
              Gemini Gen AI SDK integration, automated trade quotations, and product visualization nodes.
            </div>
          </div>
        </div>

        {/* Return Button */}
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
