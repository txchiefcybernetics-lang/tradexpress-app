"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuClass = (href: string) =>
    `flex items-center rounded-xl px-4 py-3 transition-all duration-200 ${
      pathname === href
        ? "bg-blue-600 text-white shadow-lg"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 border-r border-slate-800 shadow-2xl flex flex-col">
      {/* Logo */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          TradeXpress
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Enterprise System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-5">
        {/* MAIN */}
        <p className="mb-3 px-2 text-xs uppercase tracking-widest text-slate-500">
          Main
        </p>

        <div className="space-y-2">
          <Link href="/dashboard" className={menuClass("/dashboard")}>
            <span className="text-xl">📊</span>
            <span className="ml-3">Dashboard</span>
          </Link>

          <Link
            href="/dashboard/executive"
            className={menuClass("/dashboard/executive")}
          >
            <span className="text-xl">👔</span>
            <span className="ml-3">Executive Office</span>
          </Link>

          <Link
            href="/dashboard/ai"
            className={menuClass("/dashboard/ai")}
          >
            <span className="text-xl">🤖</span>
            <span className="ml-3">AI Command Center</span>
          </Link>
        </div>

        <div className="my-6 border-t border-slate-800" />

        {/* OPERATIONS */}
        <p className="mb-3 px-2 text-xs uppercase tracking-widest text-slate-500">
          Operations
        </p>

        <div className="space-y-2">
          <Link
            href="/dashboard/brokerage"
            className={menuClass("/dashboard/brokerage")}
          >
            <span className="text-xl">📑</span>
            <span className="ml-3">Customs Brokerage</span>
          </Link>

          <Link
            href="/dashboard/logistics"
            className={menuClass("/dashboard/logistics")}
          >
            <span className="text-xl">🚚</span>
            <span className="ml-3">Logistics & Operations</span>
          </Link>

          <Link
            href="/dashboard/compliance"
            className={menuClass("/dashboard/compliance")}
          >
            <span className="text-xl">⚖️</span>
            <span className="ml-3">Legal & Compliance</span>
          </Link>
        </div>

        <div className="my-6 border-t border-slate-800" />

        {/* CORPORATE */}
        <p className="mb-3 px-2 text-xs uppercase tracking-widest text-slate-500">
          Corporate
        </p>

        <div className="space-y-2">
          <Link
            href="/dashboard/finance"
            className={menuClass("/dashboard/finance")}
          >
            <span className="text-xl">💰</span>
            <span className="ml-3">Finance & Accounting</span>
          </Link>

          <Link
            href="/dashboard/hr"
            className={menuClass("/dashboard/hr")}
          >
            <span className="text-xl">👥</span>
            <span className="ml-3">Human Resources</span>
          </Link>

          <Link
            href="/dashboard/technology"
            className={menuClass("/dashboard/technology")}
          >
            <span className="text-xl">💻</span>
            <span className="ml-3">Technology & Innovation</span>
          </Link>
        </div>

        <div className="my-6 border-t border-slate-800" />

        {/* ADMINISTRATION */}
        <p className="mb-3 px-2 text-xs uppercase tracking-widest text-slate-500">
          Administration
        </p>

        <Link
           href="/dashboard/feedback"
           className={menuClass("/dashboard/feedback")}
        >
           <span className="text-xl">💬</span>
           <span className="ml-3">
        Feedback Hub
           </span>
         </Link>

        <Link
           href="/dashboard/settings"
           className={menuClass("/dashboard/settings")}
        >
           <span className="text-xl">⚙️</span>
           <span className="ml-3">
           Settings
           </span>
         </Link>

       </nav>

        {/* Footer */}
        <div className="border-t border-slate-800 px-6 py-5 text-center">
          <p className="text-xs text-slate-500">
           TradeXpress Enterprise
          </p>

          <p className="mt-1 text-[11px] text-slate-600">
           Version 2.0
          </p>
      </div>

    </aside>
  );
}
