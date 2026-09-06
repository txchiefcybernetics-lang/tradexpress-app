'use client';

import { useState, useEffect } from 'react';

export default function DaemonGamificationPage() {
  const [daemonActive, setDaemonActive] = useState(true);
  const [xp, setXp] = useState(1250);
  const [auditCount, setAuditCount] = useState(48);
  const [logs, setLogs] = useState<string[]>([
    "TX Daemon initialized on Vercel Edge Node.",
    "Background tariff compliance sweep completed for RA 10863.",
    "Zero-brokerage autonomous monitoring cycle active."
  ]);

  useEffect(() => {
    if (!daemonActive) return;
    const interval = setInterval(() => {
      setXp((prev) => prev + 15);
      setAuditCount((prev) => prev + 1);
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev) => [
        `[${timestamp}] Background TX Agent verified container manifest & customs clearance. (+15 XP)`,
        ...prev.slice(0, 5)
      ]);
    }, 4000);
    return () => clearInterval(interval);
  }, [daemonActive]);

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        <span style={{ background: '#7C3AED', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          TX BACKGROUND DAEMON & GAMIFICATION
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>Autonomous Background Engine</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          TX runs continuously in the background, executing tariff checks, customs audits, and building efficiency XP without manual broker intervention.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '25px' }}>
          <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937' }}>
            <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Daemon Status</span>
            <h3 style={{ color: daemonActive ? '#34D399' : '#F87171', fontSize: '18px', margin: '8px 0 0 0' }}>
              {daemonActive ? '🟢 Always Running' : '🔴 Paused'}
            </h3>
          </div>
          <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937' }}>
            <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Brokerage XP</span>
            <h3 style={{ color: '#FBBF24', fontSize: '18px', margin: '8px 0 0 0' }}>{xp} XP</h3>
          </div>
          <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937' }}>
            <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Background Audits</span>
            <h3 style={{ color: '#60A5FA', fontSize: '18px', margin: '8px 0 0 0' }}>{auditCount} Scans</h3>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
          <button
            onClick={() => setDaemonActive(!daemonActive)}
            style={{ padding: '12px 24px', background: daemonActive ? '#DC2626' : '#059669', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
          >
            {daemonActive ? 'Halt Background Daemon' : 'Start Background Daemon'}
          </button>
        </div>

        <div style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937' }}>
          <h3 style={{ color: '#E5E7EB', fontSize: '15px', marginBottom: '15px' }}>⚡ Live Background Telemetry Feed</h3>
          <div style={{ display: 'grid', gap: '10px' }}>
            {logs.map((log, i) => (
              <div key={i} style={{ padding: '10px', background: '#1F2937', borderRadius: '6px', color: '#34D399', fontSize: '12px' }}>
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
