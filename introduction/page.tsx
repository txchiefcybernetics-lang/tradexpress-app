'use client';

import React from 'react';
import Link from 'next/link';

export default function IntroductionPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      padding: '3rem 2rem',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <span style={{
          backgroundColor: '#0284c715',
          color: '#38bdf8',
          fontSize: '0.75rem',
          fontWeight: 'bold',
          padding: '4px 12px',
          borderRadius: '20px',
          border: '1px solid #0284c730',
          letterSpacing: '0.05em'
        }}>
          TRADEXPRESS PLATFORM OVERVIEW
        </span>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginTop: '1rem', marginBottom: '1rem' }}>
          Introduction to TradeXpress
        </h1>
        
        <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '2rem' }}>
          TradeXpress is an AI-powered Philippine trade intelligence platform built by FM Sardan Customs Brokerage & Consultancy. It integrates modern cloud infrastructure, advanced AI assistants (TX), and automated customs brokerage solutions.
        </p>

        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'left',
          marginBottom: '2rem'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1rem' }}>
            Core Capabilities & Modules
          </h3>
          <ul style={{ color: '#cbd5e1', lineHeight: '1.8', paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
            <li><strong>TX AI Assistant:</strong> Real-time regulatory guidance, tariff classifications, and trade queries.</li>
            <li><strong>Command Center:</strong> Secure authentication via Supabase and advanced infrastructure controls.</li>
            <li><strong>Customs Brokerage Tools:</strong> Automated document handling, tracking, and compliance workflows.</li>
          </ul>
        </div>

        <Link href="/login" style={{
          display: 'inline-block',
          backgroundColor: '#38bdf8',
          color: '#020617',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '700',
          textDecoration: 'none',
          fontSize: '0.95rem'
        }}>
          Return to TXBOT Command Center
        </Link>
      </div>
    </div>
  );
}
