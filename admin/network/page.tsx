'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function NetworkSettingsPage() {
  const [ipList, setIpList] = useState<string[]>([]);
  const [newIp, setNewIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIpList(['192.168.1.50', '203.0.113.195']);
  }, []);

  const handleAddIp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIp.trim()) return;

    setLoading(true);
    setMessage('');

    try {
      setIpList(prev => [...prev, newIp.trim()]);
      setNewIp('');
      setMessage('IP address successfully added to allowlist.');
    } catch (err: any) {
      setMessage('Error adding IP: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveIp = (ipToRemove: string) => {
    setIpList(prev => prev.filter(ip => ip !== ipToRemove));
    setMessage(`IP ${ipToRemove} removed.`);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            backgroundColor: '#0284c715',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            padding: '4px 10px',
            borderRadius: '20px',
            border: '1px solid #0284c730'
          }}>
            SECURITY & INFRASTRUCTURE
          </span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '800', marginTop: '0.5rem', color: '#ffffff' }}>
            IP Allowlist & Network Restrictions
          </h1>
          <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.25rem' }}>
            Control strict network access to TradeXpress workspace and API routes for enhanced security.
          </p>
        </div>

        {/* Feedback Message */}
        {message && (
          <div style={{
            backgroundColor: '#064e3b',
            border: '1px solid #065f46',
            color: '#6ee7b7',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            marginBottom: '1.5rem'
          }}>
            {message}
          </div>
        )}

        {/* Add IP Form */}
        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#f8fafc' }}>
            Add Static IP Address
          </h3>
          <form onSubmit={handleAddIp} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={newIp}
              onChange={(e) => setNewIp(e.target.value)}
              placeholder="e.g., 203.0.113.50"
              required
              style={{
                flex: 1,
                backgroundColor: '#020617',
                border: '1px solid #1e293b',
                color: '#f8fafc',
                padding: '10px 14px',
                borderRadius: '8px',
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
                padding: '0 20px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              {loading ? 'Saving...' : 'Add IP'}
            </button>
          </form>
        </div>

        {/* IP List Table/Card */}
        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '1.5rem'
        }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem', color: '#f8fafc' }}>
            Allowed IP Addresses
          </h3>
          {ipList.length === 0 ? (
            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>No restricted IPs configured. All requests are permitted.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ipList.map((ip, index) => (
                <div key={index} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#020617',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #1e293b'
                }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.95rem', color: '#38bdf8' }}>{ip}</span>
                  <button
                    onClick={() => handleRemoveIp(ip)}
                    style={{
                      backgroundColor: '#7f1d1d',
                      color: '#fca5a5',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
