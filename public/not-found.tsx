'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const rawPathname = usePathname();
  const pathname = rawPathname || '/unknown';

  console.log("[TX ROUTE RECOVERY]", {
    platform: 'TradeXpress Enterprise',
    domain: 'tradexpress.co',
    path: pathname,
    timestamp: new Date().toISOString()
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#0b0f19', color: '#fff', fontFamily: 'monospace' }}>
      <h1 style={{ fontSize: '32px', color: '#38bdf8', marginBottom: '10px' }}>404 - TradeXpress Route Not Found</h1>
      <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>The requested path <code style={{ color: '#f87171' }}>{pathname}</code> could not be recovered.</p>
      <Link href="/tx" style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
        Return to TXBOT Command Center
      </Link>
    </div>
  );
}
