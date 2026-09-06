'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function TXLoopPage() {
  const [workspaces, setWorkspaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShipments() {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (url && key) {
        const supabase = createClient(url, key);
        const { data } = await supabase.from('shipments').select('*');
        if (data && data.length > 0) {
          setWorkspaces(data);
          setLoading(false);
          return;
        }
      }

      // Fallback mock data if Supabase keys are not set or table is empty
      setWorkspaces([
        { shipment_id: "TX-2026-8801", commodity: "Solar Panels (8541.43.00)", status: "Customs Clearance in Progress", stakeholders: 4 },
        { shipment_id: "TX-2026-8802", commodity: "Industrial Generators (8502.11.00)", status: "In Transit / Port of Davao", stakeholders: 6 },
        { shipment_id: "TX-2026-8803", commodity: "Frozen Shrimps (0306.17.00)", status: "Document Verification", stakeholders: 3 }
      ]);
      setLoading(false);
    }
    fetchShipments();
  }, []);

  return (
    <div style={{ padding: '40px', background: '#0B0F19', color: '#fff', minHeight: '100vh', fontFamily: 'monospace' }}>
      <h1 style={{ color: '#60A5FA', fontSize: '24px', marginBottom: '10px' }}>💬 TX Loop</h1>
      <p style={{ color: '#9CA3AF', fontSize: '13px', marginBottom: '30px' }}>Secure, shipment-centered collaborative workspace connected to Supabase.</p>
      
      {loading ? (
        <p style={{ color: '#F59E0B' }}>Loading active workspaces...</p>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {workspaces.map((w, i) => (
            <div key={i} style={{ padding: '20px', background: '#111827', border: '1px solid #1F2937', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ background: '#1E3A8A', color: '#93C5FD', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>{w.shipment_id || w.shipmentId}</span>
                <h3 style={{ margin: '10px 0 5px 0', fontSize: '15px', color: '#E5E7EB' }}>{w.commodity}</h3>
                <p style={{ margin: 0, fontSize: '12px', color: '#34D399' }}>Status: {w.status} • {w.stakeholders} Active Stakeholders</p>
              </div>
              <button style={{ padding: '10px 18px', background: '#2563EB', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                Open Trade Room
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
