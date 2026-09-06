'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ChallengeGeneratorPage() {
  const [challenge, setChallenge] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchChallenge = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/challenges');
      const data = await res.json();
      if (data.success) {
        setChallenge(data.challenge);
      }
    } catch (err) {
      console.error('Failed to load challenge', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      padding: '3rem 2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <span style={{
          backgroundColor: '#0284c715',
          color: '#38bdf8',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          padding: '4px 12px',
          borderRadius: '20px',
          border: '1px solid #0284c730'
        }}>
          TRADEXPRESS LABS
        </span>

        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginTop: '1rem', marginBottom: '0.5rem', color: '#ffffff' }}>
          Trade & Engineering Challenge Generator
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '2rem' }}>
          Test your customs brokerage intelligence and system architecture skills with random AI-generated scenarios.
        </p>

        <button
          onClick={fetchChallenge}
          disabled={loading}
          style={{
            backgroundColor: '#38bdf8',
            color: '#020617',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '700',
            fontSize: '0.95rem',
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          {loading ? 'Generating Challenge...' : 'Generate New Challenge'}
        </button>

        {challenge && (
          <div style={{
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '2rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: '600' }}>
                {challenge.category}
              </span>
              <span style={{
                backgroundColor: '#1e293b',
                color: '#cbd5e1',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem'
              }}>
                {challenge.difficulty}
              </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem' }}>
              {challenge.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6' }}>
              {challenge.description}
            </p>
          </div>
        )}

        <div style={{ marginTop: '3rem' }}>
          <Link href="/tx" style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>
            ← Back to TXBOT Command Center
          </Link>
        </div>
      </div>
    </div>
  );
}
