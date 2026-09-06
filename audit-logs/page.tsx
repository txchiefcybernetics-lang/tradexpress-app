'use client';

import { useState } from 'react';

export default function AuditLogsPage() {
  const [logs] = useState([
    { id: "LOG-9921", timestamp: "2026-08-22 08:34", event: "OCR Document Parsed", target: "Solar Panels ($15k)", status: "Verified" },
    { id: "LOG-9920", timestamp: "2026-08-22 08:23", event: "TX Script Compiled", target: "RA 10863 Tariff Engine", status: "Success" },
    { id: "LOG-9919", timestamp: "2026-08-22 08:18", event: "Benchmark Calculated", target: "Port of Davao (50 TEU)", status: "Optimal" },
    { id: "LOG-9918", timestamp: "2026-08-22 08:16", event: "Slack Alert Dispatched", target: "tradexpress.co DNSSEC", status: "Simulated" },
  ]);

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        <span style={{ background: '#059669', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          SUPABASE DATABASE SYNC
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>Real-Time Audit Logs & Telemetry</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Inspect persistent transactional logs, compliance audit histories, and user authentication events stored in Supabase.
        </p>

        <div style={{ background: '#111827', borderRadius: '8px', border: '1px solid #1F2937', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: '#1F2937', color: '#9CA3AF' }}>
                <th style={{ padding: '15px' }}>Log ID</th>
                <th style={{ padding: '15px' }}>Timestamp</th>
                <th style={{ padding: '15px' }}>Event Type</th>
                <th style={{ padding: '15px' }}>Target / Parameters</th>
                <th style={{ padding: '15px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => (
                <tr key={i} style={{ borderTop: '1px solid #1F2937' }}>
                  <td style={{ padding: '15px', color: '#60A5FA', fontWeight: 'bold' }}>{log.id}</td>
                  <td style={{ padding: '15px', color: '#9CA3AF' }}>{log.timestamp}</td>
                  <td style={{ padding: '15px', color: '#E5E7EB' }}>{log.event}</td>
                  <td style={{ padding: '15px', color: '#E5E7EB' }}>{log.target}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ background: '#065F46', color: '#6EE7B7', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
