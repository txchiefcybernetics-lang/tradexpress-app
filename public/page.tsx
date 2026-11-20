'use client'

import { useState } from 'react'

const positions = [
  { symbol: 'BTC/USD', name: 'Bitcoin', qty: '0.84 BTC', price: '$67,842.10', value: '$56,987.36', change: '+8.42%', positive: true },
  { symbol: 'ETH/USD', name: 'Ethereum', qty: '12.5 ETH', price: '$3,521.48', value: '$44,018.50', change: '+5.18%', positive: true },
  { symbol: 'SOL/USD', name: 'Solana', qty: '48 SOL', price: '$184.24', value: '$8,843.52', change: '-2.04%', positive: false },
]

const watchlist: [string, string, string, boolean][] = [
  ['BTC/USD', '$67,842.10', '+2.84%', true],
  ['ETH/USD', '$3,521.48', '+1.62%', true],
  ['AAPL', '$227.16', '+0.48%', true],
  ['NVDA', '$141.98', '-0.87%', false],
  ['EUR/USD', '1.0842', '+0.12%', true],
]

export default function WorkspacePage() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [range, setRange] = useState('1M')
  const tabs = ['Overview', 'Positions', 'Orders', 'Activity']

  return (
    <div className="min-h-screen bg-[#0a0d12] text-[#eef2f6] font-sans">
      <aside className="fixed inset-y-0 left-0 hidden w-[232px] border-r border-white/[0.07] bg-[#0c1016] px-4 py-5 lg:flex lg:flex-col">
        <div className="mb-10 flex items-center gap-3 px-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b7f36b] font-black text-[#11170d]">T</div>
          <div><div className="text-[15px] font-semibold tracking-tight">tradexpress</div><div className="text-[10px] uppercase tracking-[0.16em] text-[#66717e]">Workspace</div></div>
        </div>
        <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#59636e]">Workspace</div>
        <nav className="space-y-1">
          {['Overview', 'Portfolio', 'Markets', 'Alerts'].map((item, i) => <button key={item} onClick={() => setActiveTab(item)} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] transition ${activeTab === item ? 'bg-[#1a2422] text-[#b7f36b]' : 'text-[#89939e] hover:bg-white/[0.04] hover:text-white'}`}><span className={`h-1.5 w-1.5 rounded-full ${activeTab === item ? 'bg-[#b7f36b]' : 'bg-[#48525d]'}`} />{item}</button>)}
        </nav>
        <div className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#59636e]">Manage</div>
        <nav className="space-y-1">
          {['Strategies', 'Reports', 'Settings'].map(item => <button key={item} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] text-[#89939e] hover:bg-white/[0.04] hover:text-white"><span className="h-1.5 w-1.5 rounded-full bg-[#48525d]" />{item}</button>)}
        </nav>
        <div className="mt-auto rounded-xl border border-white/[0.07] bg-[#11171d] p-3"><div className="mb-2 flex items-center gap-2 text-[11px] text-[#9aa5b0]"><span className="h-2 w-2 rounded-full bg-[#b7f36b]" />Markets are live</div><p className="text-[11px] leading-4 text-[#5f6a75]">Last synced just now</p></div>
      </aside>

      <main className="lg:ml-[232px]">
        <header className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-8"><div><p className="text-[11px] uppercase tracking-[0.18em] text-[#66717e]">Monday, October 25, 2026</p><h1 className="mt-1 text-xl font-semibold tracking-tight">Good morning, Alex</h1></div><div className="flex items-center gap-3"><button className="rounded-lg border border-white/[0.09] px-3 py-2 text-xs text-[#aab3bd] hover:bg-white/[0.04]">Export report</button><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#28342c] text-xs font-semibold text-[#b7f36b]">AC</div></div></header>
        <div className="mx-auto max-w-[1380px] p-5 md:p-8">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="mb-2 text-xs font-medium text-[#74808c]">Total portfolio value</p><div className="flex items-baseline gap-3"><span className="text-4xl font-semibold tracking-[-0.04em]">$128,492.64</span><span className="rounded-md bg-[#173527] px-2 py-1 text-xs font-medium text-[#a8e979]">+4.28%</span></div><p className="mt-2 text-xs text-[#687480]">+$5,276.21 today</p></div><div className="flex gap-1 rounded-lg border border-white/[0.07] bg-[#10151b] p-1">{['1D','1W','1M','3M','1Y'].map(item => <button key={item} onClick={() => setRange(item)} className={`rounded-md px-3 py-1.5 text-[11px] font-medium ${range === item ? 'bg-[#29342e] text-[#c6f88a]' : 'text-[#687480]'}`}>{item}</button>)}</div></div>

          <section className="grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-white/[0.07] bg-[#10151b] p-5"><p className="text-xs text-[#687480]">Available balance</p><p className="mt-3 text-2xl font-semibold">$32,840.20</p><p className="mt-2 text-xs text-[#6f7a84]">Ready to deploy</p></div><div className="rounded-xl border border-white/[0.07] bg-[#10151b] p-5"><p className="text-xs text-[#687480]">Invested capital</p><p className="mt-3 text-2xl font-semibold">$95,652.44</p><p className="mt-2 text-xs text-[#a8e979]">+12.6% all time</p></div><div className="rounded-xl border border-white/[0.07] bg-[#10151b] p-5"><p className="text-xs text-[#687480]">Today&apos;s P&amp;L</p><p className="mt-3 text-2xl font-semibold text-[#b7f36b]">+$5,276.21</p><p className="mt-2 text-xs text-[#6f7a84]">Across 8 positions</p></div></section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[1.55fr_1fr]"><div className="rounded-xl border border-white/[0.07] bg-[#10151b] p-5"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-sm font-semibold">Portfolio performance</h2><p className="mt-1 text-xs text-[#687480]">Value over the selected period</p></div><span className="text-xs text-[#a8e979]">+18.4% this year</span></div><div className="relative h-48 overflow-hidden rounded-lg bg-[#0d1217]"><div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/[0.07]" /><div className="absolute inset-x-0 top-1/4 border-t border-dashed border-white/[0.07]" /><svg viewBox="0 0 700 190" preserveAspectRatio="none" className="h-full w-full"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#b7f36b" stopOpacity=".22"/><stop offset="1" stopColor="#b7f36b" stopOpacity="0"/></linearGradient></defs><path d="M0 158 C40 155 55 130 90 141 S130 114 162 126 S196 92 226 110 S266 103 300 88 S340 109 372 82 S415 89 445 65 S478 79 512 49 S548 60 575 35 S618 53 650 22 S680 30 700 12 L700 190 L0 190Z" fill="url(#fill)"/><path d="M0 158 C40 155 55 130 90 141 S130 114 162 126 S196 92 226 110 S266 103 300 88 S340 109 372 82 S415 89 445 65 S478 79 512 49 S548 60 575 35 S618 53 650 22 S680 30 700 12" fill="none" stroke="#b7f36b" strokeWidth="2.5"/></svg></div><div className="mt-3 flex justify-between text-[10px] text-[#59636e]"><span>Sep 25</span><span>Oct 02</span><span>Oct 09</span><span>Oct 16</span><span>Oct 25</span></div></div>
          <div className="rounded-xl border border-white/[0.07] bg-[#10151b] p-5"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-sm font-semibold">Market watchlist</h2><p className="mt-1 text-xs text-[#687480]">Your tracked assets</p></div><button className="text-xs text-[#b7f36b]">Edit list</button></div><div className="space-y-1">{watchlist.map(([symbol, price, change, positive]) => <div key={symbol} className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-white/[0.03]"><div><p className="text-xs font-medium">{symbol}</p><p className="mt-1 text-[10px] text-[#687480]">Spot market</p></div><div className="text-right"><p className="text-xs font-medium">{price}</p><p className={`mt-1 text-[10px] ${positive ? 'text-[#a8e979]' : 'text-[#ff8a83]'}`}>{change}</p></div></div>)}</div></div></section>

          <section className="mt-5 rounded-xl border border-white/[0.07] bg-[#10151b] p-5"><div className="mb-4 flex items-center justify-between"><div><h2 className="text-sm font-semibold">{activeTab === 'Overview' ? 'Top positions' : activeTab}</h2><p className="mt-1 text-xs text-[#687480]">Live portfolio allocation</p></div><button className="text-xs text-[#b7f36b]">View all</button></div><div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left"><thead><tr className="border-b border-white/[0.07] text-[10px] uppercase tracking-[0.15em] text-[#59636e]"><th className="pb-3 font-medium">Asset</th><th className="pb-3 font-medium">Quantity</th><th className="pb-3 font-medium">Mark price</th><th className="pb-3 font-medium">Value</th><th className="pb-3 text-right font-medium">24h change</th></tr></thead><tbody>{positions.map(item => <tr key={item.symbol} className="border-b border-white/[0.05] last:border-0"><td className="py-4"><p className="text-xs font-medium">{item.symbol}</p><p className="mt-1 text-[10px] text-[#687480]">{item.name}</p></td><td className="py-4 text-xs text-[#aab3bd]">{item.qty}</td><td className="py-4 text-xs text-[#aab3bd]">{item.price}</td><td className="py-4 text-xs font-medium">{item.value}</td><td className={`py-4 text-right text-xs ${item.positive ? 'text-[#a8e979]' : 'text-[#ff8a83]'}`}>{item.change}</td></tr>)}</tbody></table></div></section>
        </div>
      </main>
    </div>
  )
}
