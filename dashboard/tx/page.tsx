'use client';

import { useState } from 'react';

export default function TXBotPage() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('Awaiting command...');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setResponse('Thinking...');

    try {
      const res = await fetch('/api/tx/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.reply || 'No response received.');
      setMessage('');
    } catch (err) {
      console.error('Chat error:', err);
      setResponse('Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', color: '#fff', backgroundColor: '#0b0f19', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        TradeXpress - TXBOT AI Command Center
      </h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
        Server Endpoint: /api/tx/chat
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', maxWidth: '600px' }}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Try 'hs code laptop', 'calc 500*1.1', or code..."
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: '1px solid #374151',
            backgroundColor: '#1f2937',
            color: '#fff',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      <div
        style={{
          maxWidth: '600px',
          padding: '1.25rem',
          borderRadius: '0.5rem',
          backgroundColor: '#111827',
          border: '1px solid #1f2937',
        }}
      >
        <h2 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#60a5fa', marginBottom: '0.75rem' }}>
          TX Response:
        </h2>
        <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5', color: '#e5e7eb' }}>
          {response}
        </div>
      </div>
    </main>
  );
}
