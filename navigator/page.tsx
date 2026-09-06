'use client';

import { useState } from 'react';

export default function TradeXNavigatorPage() {
  const [fob, setFob] = useState('5000');
  const [product, setProduct] = useState('laptop');
  const [result, setResult] = useState<any>(null);

  const calculateAudit = (e: React.FormEvent) => {
    e.preventDefault();
    const fobVal = parseFloat(fob);
    const freight = fobVal * 0.10;
    const insurance = fobVal * 0.02;
    const cif = fobVal + freight + insurance;
    const cifPHP = cif * 56.0;

    let dutyRate = product.includes('solar') ? 0 : product.includes('shrimp') ? 5 : product.includes('generator') ? 3 : 0;
    let dutyPHP = cifPHP * (dutyRate / 100);
    let vatPHP = (cifPHP + dutyPHP) * 0.12;
    let total = cifPHP + dutyPHP + vatPHP + 380; // with statutory fees

    setResult({
      fob: fobVal,
      cifPHP,
      dutyPHP,
      vatPHP,
      total,
      dutyRate
    });
  };

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#60A5FA', fontSize: '24px', marginBottom: '10px' }}>🧭 TradeX Navigator</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '30px' }}>Intelligent trade planning, tariff guidance, and RA 10863 landed cost simulation module.</p>

        <form onSubmit={calculateAudit} style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937', display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', marginBottom: '5px' }}>FOB VALUE (USD)</label>
            <input type="number" value={fob} onChange={e => setFob(e.target.value)} style={{ padding: '10px', background: '#1F2937', border: '1px solid #374151', color: '#fff', borderRadius: '6px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '11px', color: '#9CA3AF', marginBottom: '5px' }}>COMMODITY KEYWORD</label>
            <input type="text" value={product} onChange={e => setProduct(e.target.value)} style={{ padding: '10px', background: '#1F2937', border: '1px solid #374151', color: '#fff', borderRadius: '6px' }} />
          </div>
          <button type="submit" style={{ padding: '11px 25px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '18px' }}>
            Run Audit
          </button>
        </form>

        {result && (
          <div style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937' }}>
            <h3 style={{ color: '#34D399', fontSize: '15px', marginBottom: '15px' }}>📊 Audit Results & Valuation Breakdown</h3>
            <p>• Computed CIF Value: ₱{result.cifPHP.toLocaleString('en-US', {maximumFractionDigits: 2})}</p>
            <p>• Customs Duty ({result.dutyRate}%): ₱{result.dutyPHP.toLocaleString('en-US', {maximumFractionDigits: 2})}</p>
            <p>• Value Added Tax (12%): ₱{result.vatPHP.toLocaleString('en-US', {maximumFractionDigits: 2})}</p>
            <p>• Estimated Landed Cost: ₱{result.total.toLocaleString('en-US', {maximumFractionDigits: 2})}</p>
          </div>
        )}
      </div>
    </div>
  );
}
