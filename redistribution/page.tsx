'use client';

import { useState } from 'react';

export default function RedistributionManagerPage() {
  const [sourceHub, setSourceHub] = useState('Port of Davao Terminal A');
  const [targetHub, setTargetHub] = useState('Cebu Distribution Center');
  const [units, setUnits] = useState('150');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const executeRedistribution = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    setTimeout(() => {
      setStatus(`Successfully routed ${units} units from ${sourceHub} to ${targetHub} under TX GreenCore Corridor rules.`);
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#2563EB', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          TX LOGISTICS ENGINE
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>TX Redistribution Manager</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Automate inter-hub inventory transfers, balance regional cargo volume, and optimize supply chain fulfillment routes.
        </p>

        <form onSubmit={executeRedistribution} style={{ display: 'grid', gap: '20px', background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937', marginBottom: '25px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Origin Hub:</label>
              <select
                value={sourceHub}
                onChange={(e) => setSourceHub(e.target.value)}
                style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px' }}
              >
                <option>Port of Davao Terminal A</option>
                <option>Manila International Container Yard</option>
                <option>Cebu Cargo Hub</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Destination Hub:</label>
              <select
                value={targetHub}
                onChange={(e) => setTargetHub(e.target.value)}
                style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px' }}
              >
                <option>Cebu Distribution Center</option>
                <option>Davao Inland Depository</option>
                <option>Manila North Harbor Facility</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Transfer Quantity (TEUs / Pallets):</label>
            <input
              type="number"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              style={{ width: '100%', padding: '10px', background: '#1F2937', color: '#fff', border: '1px solid #374151', borderRadius: '6px', fontSize: '13px', outline: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ padding: '12px 24px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
          >
            {loading ? 'Executing Transfer...' : 'Initiate Redistribution'}
          </button>
        </form>

        {status && (
          <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #34D399', color: '#34D399', fontSize: '13px' }}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
