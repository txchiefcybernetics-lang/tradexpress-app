'src/ client';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HRDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'directory' | 'dbbrowser'>('overview');
  const [sqlQuery, setSqlQuery] = useState('SELECT employee_id, branch_id, full_name, department, status FROM employees ORDER BY created_at DESC LIMIT 10;');
  const [queryResult, setQueryResult] = useState<string>(
    JSON.stringify([
      { employee_id: "EMP-2026-001", branch_id: "BR-MNL-01", full_name: "Maria Santos", department: "Customs Brokerage", status: "ACTIVE" },
      { employee_id: "EMP-2026-002", branch_id: "BR-CEB-02", full_name: "Juan Reyes", department: "Consultancy", status: "ACTIVE" }
    ], null, 2)
  );

  const handleRunQuery = () => {
    setQueryResult(JSON.stringify({
      status: "success",
      executed_query: sqlQuery,
      rows_affected: 2,
      data: [
        { employee_id: "EMP-2026-001", branch_id: "BR-MNL-01", full_name: "Maria Santos", department: "Customs Brokerage", status: "ACTIVE" },
        { employee_id: "EMP-2026-002", branch_id: "BR-CEB-02", full_name: "Juan Reyes", department: "Consultancy", status: "ACTIVE" }
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
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>HR & Enterprise System</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', marginBottom: '0.5rem' }}>MAIN</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard" style={{ color: '#94a3b8', textDecoration: 'none' }}>📊 Dashboard</Link>
              <Link href="/dashboard/hr" style={{ color: '#38bdf8', fontWeight: 'bold', textDecoration: 'none' }}>👥 HR & Workforce</Link>
              <Link href="/dashboard/feedback" style={{ color: '#94a3b8', textDecoration: 'none' }}>💬 Feedback & DB Studio</Link>
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
            <span style={{ color: '#f8fafc' }}>HR & Workforce Management</span>
          </nav>
          <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
            👥 Workforce Management & HR Database
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '0.25rem', fontSize: '0.95rem' }}>
            Payroll, recruitment, employee development, and organizational database browser.
          </p>
        </div>

        {/* Metrics Overview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Employees</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#38bdf8', marginTop: '0.25rem' }}>215</div>
          </div>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Open Positions</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#34d399', marginTop: '0.25rem' }}>18</div>
          </div>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Attendance</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#facc15', marginTop: '0.25rem' }}>97%</div>
          </div>
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', padding: '1.25rem', borderRadius: '10px' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Training Programs</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#a78bfa', marginTop: '0.25rem' }}>12</div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('overview')}
            style={{
              backgroundColor: activeTab === 'overview' ? '#38bdf8' : '#0f172a',
              color: activeTab === 'overview' ? '#020617' : '#94a3b8',
              border: '1px solid #1e293b',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📋 HR Overview & Modules
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            style={{
              backgroundColor: activeTab === 'directory' ? '#38bdf8' : '#0f172a',
              color: activeTab === 'directory' ? '#020617' : '#94a3b8',
              border: '1px solid #1e293b',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            📇 Employee Directory
          </button>
          <button
            onClick={() => setActiveTab('dbbrowser')}
            style={{
              backgroundColor: activeTab === 'dbbrowser' ? '#38bdf8' : '#0f172a',
              color: activeTab === 'dbbrowser' ? '#020617' : '#94a3b8',
              border: '1px solid #1e293b',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            🗄️ HR DB Browser & SQL
          </button>
        </div>

        {/* Tab Content: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.75rem 0', color: '#38bdf8' }}>Recruitment Pipeline</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Active applicants across customs brokerage and AI technical support roles.</p>
            </div>
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem' }}>
              <h3 style={{ margin: '0 0 0.75rem 0', color: '#34d399' }}>Payroll & Benefits</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Automated compensation tracking linked with employee_id and branch_id records.</p>
            </div>
          </div>
        )}

        {/* Tab Content: Directory */}
        {activeTab === 'directory' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#f8fafc' }}>Employee Directory</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1e293b', color: '#64748b' }}>
                    <th style={{ padding: '10px' }}>Employee ID</th>
                    <th style={{ padding: '10px' }}>Branch ID</th>
                    <th style={{ padding: '10px' }}>Full Name</th>
                    <th style={{ padding: '10px' }}>Department</th>
                    <th style={{ padding: '10px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#38bdf8' }}>EMP-2026-001</td>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#facc15' }}>BR-MNL-01</td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Maria Santos</td>
                    <td style={{ padding: '10px' }}>Customs Brokerage</td>
                    <td style={{ padding: '10px', color: '#34d399' }}>ACTIVE</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#38bdf8' }}>EMP-2026-002</td>
                    <td style={{ padding: '10px', fontFamily: 'monospace', color: '#facc15' }}>BR-CEB-02</td>
                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Juan Reyes</td>
                    <td style={{ padding: '10px' }}>Consultancy</td>
                    <td style={{ padding: '10px', color: '#34d399' }}>ACTIVE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: DB Browser & SQL */}
        {activeTab === 'dbbrowser' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#f8fafc' }}>HR Database Browser & SQL Query Console</h3>
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
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.25rem' }}>Database Output (DBBrowser):</div>
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
      </main>
    </div>
  );
}
