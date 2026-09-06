'use client';

import { useState } from 'react';

export default function TXAutoAgentPage() {
  const [prompt, setPrompt] = useState('');
  const [tolerance, setTolerance] = useState('Standard (Balanced)');
  const [complianceMode, setComplianceMode] = useState('Strict RA 10863');
  const [logs, setLogs] = useState<string[]>([
    "TX AutoAgent initialized successfully using Eve AI multi-channel framework.",
    "Connected to Google Gen AI SDK (Gemini 2.5 Flash).",
    "Default Behavior Tolerance: Standard (Balanced) | Compliance: Strict RA 10863."
  ]);
  const [loading, setLoading] = useState(false);

  const handleExecute = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userQuery = prompt;
    setLogs(prev => [`> User Prompt [Tolerance: ${tolerance}, Mode: ${complianceMode}]: ${userQuery}`, ...prev]);
    setPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/tx/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `${userQuery} [Behavior Tolerance: ${tolerance}, Compliance Level: ${complianceMode}]` })
      });
      const data = await res.json();
      setLogs(prev => [`[TX Agent Response]: ${data.result || data.error}`, ...prev]);
    } catch (err) {
      setLogs(prev => [`[Error]: Agent execution failed.`, ...prev]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#3B82F6', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          TX-AUTOAGENT MODE
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>Autonomous Trade & Compliance Agent</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>
          Configure behavior tolerance and execute automated trade audits under strict regulatory parameters.
        </p>

        {/* Behavior & Tolerance Controls */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px', background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937' }}>
          <div>
            <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Risk / Behavior Tolerance:</label>
            <select
              value={tolerance}
              onChange={(e) => setTolerance(e.target.value)}
              style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px' }}
            >
              <option>Conservative (Zero Risk / Strict Audit)</option>
              <option>Standard (Balanced)</option>
              <option>Aggressive (Speed-Optimized)</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Compliance Framework:</label>
            <select
              value={complianceMode}
              onChange={(e) => setComplianceMode(e.target.value)}
              style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px' }}
            >
              <option>Strict RA 10863 (CMTA)</option>
              <option>AHTN Standard Harmonized</option>
              <option>GreenCore Eco-Tariff Protocol</option>
            </select>
          </div>
        </div>

        <form onSubmit={handleExecute} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Calculate landed cost for $15000 solar panels..."
            style={{ flex: 1, padding: '12px 16px', background: '#111827', border: '1px solid #374151', borderRadius: '6px', color: '#fff', fontSize: '13px', outline: 'none' }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '12px 24px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
          >
            {loading ? 'Executing...' : 'Run Agent'}
          </button>
        </form>

        <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937', minHeight: '300px', maxHeight: '400px', overflowY: 'auto' }}>
          <h3 style={{ color: '#34D399', fontSize: '14px', marginBottom: '15px' }}>⚡ Agent Execution Log</h3>
          {logs.map((log, i) => (
            <div key={i} style={{ marginBottom: '10px', fontSize: '13px', color: log.startsWith('>') ? '#60A5FA' : log.startsWith('[TX') ? '#34D399' : '#9CA3AF', borderBottom: '1px solid #1F2937', paddingBottom: '8px' }}>
              {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
