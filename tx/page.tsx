'use client';

import { useState } from 'react';
import CommodityViewer from '@/components/CommodityViewer';

export default function TXCommandCenter() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('Awaiting AHTN command or calculation...');
  const [history, setHistory] = useState<any[]>([]);

  const quickCommands = [
    "hs code shrimp",
    "cost 5000 laptop",
    "cost 8000 generator",
    "calc 1500*1.15"
  ];

  const executeCommand = async (cmd: string) => {
    const userQuery = cmd;
    try {
      const res = await fetch('/api/tx/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userQuery }),
      });
      const data = await res.json();
      
      const botReply = data.response || 'No response received.';
      setResponse(botReply);
      setHistory(prev => [{ query: userQuery, response: botReply, time: new Date().toLocaleTimeString() }, ...prev]);
    } catch (error: any) {
      setResponse(`Error: ${error.message}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const cmd = input;
    setInput('');
    await executeCommand(cmd);
  };

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '30px 40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #1F2937', paddingBottom: '15px' }}>
          <div>
            <h1 style={{ fontSize: '22px', margin: 0, color: '#60A5FA' }}>TradeXpress - TXBOT AI Command Center</h1>
            <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '5px 0 0 0' }}>AHTN Tariff Commission Classification & 3D Cargo Intelligence</p>
          </div>
          <span style={{ background: '#065F46', color: '#34D399', padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>LOCAL ENGINE ONLINE</span>
        </div>
        
        {/* QUICK COMMAND CHIPS */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
          {quickCommands.map((cmd, idx) => (
            <button 
              key={idx} 
              onClick={() => executeCommand(cmd)}
              style={{ background: '#1F2937', color: '#60A5FA', border: '1px solid #374151', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
            >
              ⚡ {cmd}
            </button>
          ))}
        </div>

        {/* LAYOUT GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '25px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {/* 3D VISUALIZER COMPONENT */}
            <CommodityViewer />

            {/* HISTORY LOGS */}
            <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937', height: '350px', overflowY: 'auto' }}>
              <h3 style={{ fontSize: '15px', marginBottom: '15px', color: '#E5E7EB' }}>📜 TX History Logs</h3>
              {history.length === 0 ? (
                <p style={{ color: '#6B7280', fontSize: '13px' }}>No command logs recorded yet.</p>
              ) : (
                history.map((item, idx) => (
                  <div key={idx} style={{ marginBottom: '15px', paddingBottom: '12px', borderBottom: '1px solid #1F2937' }}>
                    <p style={{ color: '#60A5FA', fontSize: '12px', margin: '0 0 4px 0' }}>User: {item.query}</p>
                    <pre style={{ color: '#9CA3AF', fontSize: '11px', whiteSpace: 'pre-wrap', margin: '0 0 4px 0', background: '#0B0F19', padding: '8px', borderRadius: '4px' }}>{item.response}</pre>
                    <span style={{ color: '#4B5563', fontSize: '10px' }}>{item.time}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937', display: 'flex', flexDirection: 'column', height: '675px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type 'cost 8000 generator', 'hs code shrimp', etc..."
                style={{ flex: 1, padding: '12px', background: '#1F2937', border: '1px solid #374151', color: '#fff', borderRadius: '6px', fontSize: '13px' }}
              />
              <button type="submit" style={{ padding: '12px 24px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                Send
              </button>
            </form>

            <div style={{ background: '#0B0F19', padding: '20px', borderRadius: '6px', border: '1px solid #1E293B', flex: 1, overflowY: 'auto' }}>
              <h3 style={{ color: '#60A5FA', fontSize: '13px', marginTop: 0, marginBottom: '10px' }}>Active TX Response Output:</h3>
              <pre style={{ whiteSpace: 'pre-wrap', color: '#E2E8F0', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{response}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
