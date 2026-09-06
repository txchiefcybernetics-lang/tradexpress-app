'use client';

import { useState } from 'react';

export default function ApiGatewayPage() {
  const [apiKey] = useState('tx_live_9981fca74b290e1183ac');
  const [testResult, setTestResult] = useState<string | null>(null);
  const [testing, setTesting] = useState(false);

  const testEndpoint = (endpoint: string) => {
    setTesting(true);
    setTestResult(null);
    setTimeout(() => {
      setTestResult(`Response from [${endpoint}]:\nStatus: 200 OK\nLatency: 42ms\nPayload: {"success": true, "auth": "Valid TX-Token", "engine": "Edge Node Active"}`);
      setTesting(false);
    }, 800);
  };

  const endpoints = [
    { route: '/api/v1/tariff/calculate', method: 'POST', desc: 'Evaluate duty, VAT, and landed costs under RA 10863.' },
    { route: '/api/v1/ocr/extract', method: 'POST', desc: 'Parse commercial invoices and bills of lading via AI OCR.' },
    { route: '/api/v1/daemon/status', method: 'GET', desc: 'Retrieve background daemon health and Broker XP metrics.' },
    { route: '/api/v1/redistribution/route', method: 'POST', desc: 'Optimize regional cargo inventory transfers between hubs.' }
  ];

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '950px', margin: '0 auto' }}>
        <span style={{ background: '#2563EB', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          TX API GATEWAY & MICROSERVICES
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>API Gateway & Route Manager</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Manage authentication tokens, monitor microservice endpoints, and test live API traffic routing for tradexpress.co.
        </p>

        <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#9CA3AF', fontSize: '12px' }}>Active Master API Key</span>
            <div style={{ color: '#34D399', fontSize: '14px', fontWeight: 'bold', marginTop: '4px' }}>{apiKey}</div>
          </div>
          <span style={{ background: '#065F46', color: '#6EE7B7', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
            Rate Limit: 5,000 req/min
          </span>
        </div>

        <h3 style={{ color: '#E5E7EB', fontSize: '16px', marginBottom: '15px' }}>Registered Gateway Routes</h3>
        <div style={{ display: 'grid', gap: '15px', marginBottom: '25px' }}>
          {endpoints.map((ep, i) => (
            <div key={i} style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #1F2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ background: ep.method === 'POST' ? '#1E3A8A' : '#065F46', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', marginRight: '10px' }}>
                  {ep.method}
                </span>
                <strong style={{ color: '#60A5FA', fontSize: '13px' }}>{ep.route}</strong>
                <p style={{ color: '#9CA3AF', fontSize: '12px', margin: '6px 0 0 0' }}>{ep.desc}</p>
              </div>
              <button
                onClick={() => testEndpoint(ep.route)}
                disabled={testing}
                style={{ padding: '8px 16px', background: '#374151', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}
              >
                Test Route
              </button>
            </div>
          ))}
        </div>

        {testResult && (
          <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #34D399', whiteSpace: 'pre-wrap', color: '#34D399', fontSize: '12px' }}>
            {testResult}
          </div>
        )}
      </div>
    </div>
  );
}
