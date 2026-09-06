import React from 'react';

interface HeaderProps {
  memberCount: number;
  title?: string;
}

export default function HeaderComponent({ memberCount, title = "Team Workspace" }: HeaderProps) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.25rem 2rem',
      backgroundColor: '#0f172a',
      borderBottom: '1px solid #1e293b',
      color: '#f8fafc',
      fontFamily: 'sans-serif'
    }}>
      <div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>
          {title}
        </h1>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          {memberCount} member{memberCount !== 1 ? "s" : ""} active
        </span>
      </div>

      <div style={{
        backgroundColor: '#1e293b',
        color: '#38bdf8',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '0.85rem',
        fontFamily: 'monospace',
        fontWeight: 'bold'
      }}>
        TXBOT COMMAND CENTER
      </div>
    </header>
  );
}
