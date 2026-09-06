'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Client Error:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#0f172a',
        border: '1px solid #1e293b',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '480px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#f87171', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          Something went wrong!
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          An unexpected error occurred while loading this page.
        </p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: '#38bdf8',
            color: '#020617',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
