'use client';

import { useState } from 'react';

export default function SlackIntegrationPage() {
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendAlert = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/slack/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      setStatus(data.message || data.error);
      setMsg('');
    } catch (err) {
      setStatus('Failed to dispatch alert.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span style={{ background: '#4A154B', color: '#ECB22E', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          SLACK PRO INTEGRATION
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>TradeXpress Operational Alerts</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Broadcast real-time compliance audits, clearance updates, and agent triggers directly to your Slack Pro channels.
        </p>

        <form onSubmit={sendAlert} style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937', marginBottom: '20px' }}>
          <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '10px' }}>Custom Alert Message:</label>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="e.g., Shipment TX-2026-8801 cleared Bureau of Customs."
              style={{ flex: 1, padding: '12px 16px', background: '#1F2937', border: '1px solid #374151', borderRadius: '6px', color: '#fff', fontSize: '13px', outline: 'none' }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '12px 24px', background: '#4A154B', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
            >
              {loading ? 'Sending...' : 'Send to Slack'}
            </button>
          </div>
        </form>

        {status && (
          <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #34D399', color: '#34D399', fontSize: '13px' }}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
