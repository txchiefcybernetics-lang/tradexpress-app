'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client (Siguruha nga naa sa .env.local ang NEXT_PUBLIC_SUPABASE_URL ug NEXT_PUBLIC_SUPABASE_ANON_KEY)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authStatus, setAuthStatus] = useState<{ success?: string; error?: string }>({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuthStatus({});

    try {
      // Kung ang gipili kay ang opisyal nga admin email
      if (email === 'hello@tradexpress.co') {
        console.log("[AUTH] Authenticating session for hello@tradexpress.co...");
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setAuthStatus({ success: '[SUCCESS] Session token generated. Welcome to TXBOT COMMAND CENTER!' });
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);

    } catch (err: any) {
      setAuthStatus({ error: err.message || 'Authentication failed. Please check your credentials.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#020617',
      color: '#f8fafc',
      fontFamily: 'sans-serif',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '480px',
        margin: 'auto'
      }}>
        {/* Main Card */}
        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Header Branding */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: '#0284c715',
              color: '#38bdf8',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              padding: '4px 10px',
              borderRadius: '20px',
              marginBottom: '0.75rem',
              border: '1px solid #0284c730',
              letterSpacing: '0.05em'
            }}>
              TXBOT COMMAND CENTER
            </span>
            <h1 style={{ fontSize: '1.875rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>
              TradeXpress
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.5rem' }}>
              AI-Powered Philippine Trade Intelligence Platform
            </p>
          </div>

          {/* Status Messages */}
          {authStatus.error && (
            <div style={{ backgroundColor: '#7f1d1d', border: '1px solid #991b1b', color: '#fca5a5', padding: '10px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {authStatus.error}
            </div>
          )}
          {authStatus.success && (
            <div style={{ backgroundColor: '#064e3b', border: '1px solid #065f46', color: '#6ee7b7', padding: '10px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem' }}>
              {authStatus.success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@tradexpress.co"
                required
                style={{
                  width: '100%',
                  backgroundColor: '#020617',
                  border: '1px solid #1e293b',
                  color: '#f8fafc',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  backgroundColor: '#020617',
                  border: '1px solid #1e293b',
                  color: '#f8fafc',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: '#38bdf8',
                color: '#020617',
                border: 'none',
                padding: '12px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.95rem',
                cursor: 'pointer',
                marginTop: '0.5rem'
              }}
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>

          {/* Footer inside card */}
          <div style={{ textAlign: 'center', marginTop: '1.75rem', fontSize: '0.85rem', color: '#94a3b8' }}>
            Don't have an account?{' '}
            <Link href="/signup" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: '600' }}>
              Create an Account
            </Link>
          </div>
        </div>

        {/* Outer Footer Info */}
        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', color: '#64748b', lineHeight: '1.5' }}>
          <p style={{ margin: '0 0 0.5rem 0' }}>Built by <strong>FM Sardan Customs Brokerage & Consultancy</strong></p>
          <p style={{ margin: '0 0 1rem 0' }}>Need assistance? <a href="mailto:hello@tradexpress.co" style={{ color: '#38bdf8', textDecoration: 'none' }}>hello@tradexpress.co</a></p>
          <p style={{ margin: 0, fontSize: '0.75rem' }}>© 2026 TradeXpress. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
