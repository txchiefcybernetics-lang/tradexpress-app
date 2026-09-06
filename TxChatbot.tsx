'use client';

import React, { useState } from 'react';

export default function TxChatbot() {
  const [messages, setMessages] = useState([
    { role: 'model', text: 'Hello! I am TX, your TradeXpress AI Assistant. How can I help with your customs brokerage or trade queries today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'model', text: data.reply || 'Sorry, I encountered an error.' }]);
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: 'Network error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '500px',
      maxWidth: '600px',
      width: '100%',
      backgroundColor: '#0f172a',
      border: '1px solid #1e293b',
      borderRadius: '12px',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
    }}>
      {/* Header */}
      <div style={{ backgroundColor: '#020617', padding: '1rem', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '10px', height: '10px', backgroundColor: '#38bdf8', borderRadius: '50%' }}></div>
        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.95rem' }}>TX - TradeXpress AI Assistant</span>
      </div>

      {/* Messages Box */}
      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.role === 'user' ? '#0284c7' : '#1e293b',
            color: '#f8fafc',
            padding: '10px 14px',
            borderRadius: '8px',
            maxWidth: '80%',
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            {msg.text}
          </div>
        ))}
        {loading && (
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#1e293b', color: '#94a3b8', padding: '10px 14px', borderRadius: '8px', fontSize: '0.85rem' }}>
            TX is thinking...
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', padding: '1rem', backgroundColor: '#020617', borderTop: '1px solid #1e293b', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your customs or trade query..."
          style={{
            flex: 1,
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            color: '#f8fafc',
            padding: '10px 12px',
            borderRadius: '6px',
            fontSize: '0.9rem',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: '#38bdf8',
            color: '#020617',
            border: 'none',
            padding: '0 16px',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
