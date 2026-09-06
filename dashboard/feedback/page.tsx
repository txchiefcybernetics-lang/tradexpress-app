'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FeedbackDashboardPage() {
  const [activeTab, setActiveTab] = useState<'tables' | 'roles' | 'tasks' | 'sql'>('tables');
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM task ORDER BY created_at DESC LIMIT 10;');
  const [queryResult, setQueryResult] = useState<string>(
    JSON.stringify([
      { task_id: "TSK-2026-01", title: "Review Customs Compliance Log", status: "PENDING", priority: "HIGH" }
    ], null, 2)
  );

  const handleRunQuery = () => {
    setQueryResult(JSON.stringify({
      status: "success",
      executed_query: sqlQuery,
      rows_affected: 1,
      data: [
        { task_id: "TSK-2026-01", title: "Review Customs Compliance Log", status: "PENDING", priority: "HIGH", assigned_to: "TX-Admin" }
      ]
    }, null, 2));
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
              <Link href="/dashboard/feedback" style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}>💬 Feedback & DB Studio</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>INFRASTRUCTURE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard/database" style={{ color: '#94a3b8', textDecoration: 'none' }}>🗄️ Database & Storage</Link>
              <Link href="/dashboard/technology/infrastructure" style={{ color: '#94a3b8', textDecoration: 'none' }}>🖥️ Host Infrastructure</Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <nav style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
            <Link href="/dashboard" style={{ color: '#38bdf8', textDecoration: 'none' }}>Dashboard</Link>
            {' / '}
            <span style={{ color: '#f8fafc' }}>Feedback & Database Studio</span>
          </nav>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
            💬 Feedback Logs & Database Management Studio
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '0.25rem', fontSize: '0.95rem' }}>
            Inspect records, manage tables, and execute direct SQL queries.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('tables')}
            style={{
              backgroundColor: activeTab === 'tables' ? '#38bdf8' : '#0f172a',
              color: activeTab === 'tables' ? '#020617' : '#94a3b8',
              border: '1px solid #1e293b',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📋 Table: feedback_logs
          </button>
          <button
            onClick={() => setActiveTab('roles')}
            style={{
              backgroundColor: activeTab === 'roles' ? '#38bdf8' : '#0f172a',
              color: activeTab === 'roles' ? '#020617' : '#94a3b8',
              border: '1px solid #1e293b',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🛡️ Table: role
          </button>
          <button
            onClick={() => {
              setActiveTab('tasks');
              setSqlQuery('SELECT * FROM task ORDER BY created_at DESC LIMIT 10;');
            }}
            style={{
              backgroundColor: activeTab === 'tasks' ? '#38bdf8' : '#0f172a',
              color: activeTab === 'tasks' ? '#020617' : '#94a3b8',
              border: '1px solid #1e293b',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📝 Table: task
          </button>
          <button
            onClick={() => setActiveTab('sql')}
            style={{
              backgroundColor: activeTab === 'sql' ? '#38bdf8' : '#0f172a',
              color: activeTab === 'sql' ? '#020617' : '#94a3b8',
              border: '1px solid #1e293b',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            ⚡ SQL Editor
          </button>
        </div>

        {/* Tab Content: Feedback Logs */}
        {activeTab === 'tables' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc' }}>Table Editor: <span style={{ color: '#38bdf8', fontFamily: 'monospace' }}>feedback_logs</span></h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1e293b', color: '#64748b' }}>
                    <th style={{ padding: '10px' }}>ID</th>
                    <th style={{ padding: '10px' }}>Client ID</th>
                    <th style={{ padding: '10px' }}>Header ID</th>
                    <th style={{ padding: '10px' }}>Topic</th>
                    <th style={{ padding: '10px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: '10px', fontFamily: 'monospace' }}>1042</td>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#facc15' }}>CLI-2026-901</td>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#38bdf8' }}>FB-HDR-2026-1042</td>
                    <td style={{ padding: '10px' }}>CUSTOMS_BROKERAGE_TARIFF_LOGS</td>
                    <td style={{ padding: '10px', color: '#34d399' }}>ACTIVE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Role Table */}
        {activeTab === 'roles' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc' }}>Table Editor: <span style={{ color: '#38bdf8', fontFamily: 'monospace' }}>role</span></h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1e293b', color: '#64748b' }}>
                    <th style={{ padding: '10px' }}>Role ID</th>
                    <th style={{ padding: '10px' }}>Role Name</th>
                    <th style={{ padding: '10px' }}>Permissions</th>
                    <th style={{ padding: '10px' }}>Scope</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#38bdf8' }}>ROLE-01</td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Administrator</td>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#34d399' }}>FULL_ACCESS</td>
                    <td style={{ padding: '10px' }}>Global Enterprise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Task Table */}
        {activeTab === 'tasks' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc' }}>Table Editor: <span style={{ color: '#38bdf8', fontFamily: 'monospace' }}>task</span></h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1e293b', color: '#64748b' }}>
                    <th style={{ padding: '10px' }}>Task ID</th>
                    <th style={{ padding: '10px' }}>Title</th>
                    <th style={{ padding: '10px' }}>Status</th>
                    <th style={{ padding: '10px' }}>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#38bdf8' }}>TSK-2026-01</td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Review Customs Compliance Log</td>
                    <td style={{ padding: '10px', color: '#facc15' }}>PENDING</td>
                    <td style={{ padding: '10px', color: '#f87171' }}>HIGH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: SQL Editor */}
        {activeTab === 'sql' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc' }}>PostgreSQL Query Console</h3>
            <textarea
              value={sqlQuery}
              onChange={(e) => setSqlQuery(e.target.value)}
              rows={4}
              style={{
                width: '100%',
                backgroundColor: '#020617',
                color: '#38bdf8',
                border: '1px solid #1e293b',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                resize: 'vertical'
              }}
            />
            <button
              onClick={handleRunQuery}
              style={{
                alignSelf: 'flex-start',
                backgroundColor: '#34d399',
                color: '#020617',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              ▶ Run Query
            </button>
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>Query Output:</div>
              <pre style={{
                backgroundColor: '#020617',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #1e293b',
                color: '#34d399',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                overflowX: 'auto'
              }}>
                {queryResult}
              </pre>
            </div>
          </div>
        )}

        {/* Command Center Link */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem' }}>
          <Link href="/dashboard/technology/ai-platform" style={{
            backgroundColor: '#38bdf8',
            color: '#020617',
            padding: '10px 18px',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            ← Return to TXBOT Command Center
          </Link>
        </div>
      </main>
    </div>
  );
}
