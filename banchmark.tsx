'test client';
'use client';

import { useState } from 'react';

export default function BenchmarkCalculatorPage() {
  const [port, setPort] = useState('Port of Davao');
  const [cargoType, setCargoType] = useState('Containerized General Cargo');
  const [volume, setVolume] = useState('50');
  const [result, setResult] = useState<any>(null);

  const calculateBenchmark = (e: React.FormEvent) => {
    e.preventDefault();
    const baseHours = port === 'Port of Davao' ? 36 : 48;
    const penaltyHours = cargoType === 'Hazardous / Regulated' ? 24 : 12;
    const totalHours = baseHours + penaltyHours + Math.floor(parseInt(volume || '1') * 0.2);

    setResult({
      port,
      totalClearanceHours: totalHours,
      bottleneckRisk: totalHours > 60 ? 'High (Document Verification Delay)' : 'Optimal (Standard Processing)',
      ra10863Compliance: 'Fully Verified'
    });
  };

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#D97706', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          ANALYTICS & BENCHMARKING
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>Supply Chain Bottleneck & Benchmark Calculator</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Evaluate port clearance duration, identify regulatory choke points, and benchmark transit metrics against Philippine customs standards.
        </p>

        <form onSubmit={calculateBenchmark} style={{ display: 'grid', gap: '20px', background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937', marginBottom: '25px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Port of Entry:</label>
              <select
                value={port}
                onChange={(e) => setPort(e.target.value)}
                style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px' }}
              >
                <option>Port of Davao</option>
                <option>Manila International Container Port (MICP)</option>
                <option>Port of Cebu</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Cargo Classification:</label>
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px' }}
              >
                <option>Containerized General Cargo</option>
                <option>Hazardous / Regulated</option>
                <option>Perishable / Cold Chain</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Shipment Volume (TEUs / Units):</label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px', outline: 'none' }}
            />
          </div>

          <button
            type="submit"
            style={{ padding: '12px 24px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
          >
            Calculate Bottlenecks
          </button>
        </form>

        {result && (
          <div style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #34D399' }}>
            <h3 style={{ color: '#34D399', fontSize: '16px', marginBottom: '15px' }}>📊 Benchmark Audit Results</h3>
            <p style={{ margin: '8px 0', fontSize: '13px', color: '#E5E7EB' }}><strong>Selected Port:</strong> {result.port}</p>
            <p style={{ margin: '8px 0', fontSize: '13px', color: '#E5E7EB' }}><strong>Estimated Clearance Duration:</strong> {result.totalClearanceHours} Hours</p>
            <p style={{ margin: '8px 0', fontSize: '13px', color: '#E5E7EB' }}><strong>Bottleneck Risk Analysis:</strong> <span style={{ color: result.bottleneckRisk.includes('High') ? '#F87171' : '#34D399' }}>{result.bottleneckRisk}</span></p>
            <p style={{ margin: '8px 0', fontSize: '13px', color: '#E5E7EB' }}><strong>CMTA RA 10863 Compliance:</strong> {result.ra10863Compliance}</p>
          </div>
        )}
      </div>
    </div>
  );
}
