'use client';

import Link from 'next/link';

export default function TechnologyPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-xl font-bold tracking-wider text-emerald-600">TradeXpress</span>
          <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 font-mono">Enterprise v2.0</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-900">
          Technology & Innovation
        </h1>

        <p className="mt-2 text-slate-500">
          Enterprise infrastructure, cybersecurity, cloud services,
          AI systems, software development, and digital transformation.
        </p>
      </div>

      {/* Clickable KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* KPI 1: Uptime */}
        <Link
          href="/dashboard/technology/infrastructure"
          className="rounded-xl bg-white shadow p-6 border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer block"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-500 font-medium group-hover:text-emerald-600 transition">
              System Uptime
            </h3>
            <span className="text-emerald-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition">View →</span>
          </div>
          <p className="text-3xl font-bold mt-2 font-mono text-slate-900">
            99.98%
          </p>
          <div className="mt-2 text-xs text-emerald-600 font-medium">
            ● Operational
          </div>
        </Link>

        {/* KPI 2: Active Servers */}
        <Link
          href="/dashboard/technology/infrastructure"
          className="rounded-xl bg-white shadow p-6 border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer block"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-500 font-medium group-hover:text-emerald-600 transition">
              Active Servers
            </h3>
            <span className="text-emerald-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition">View →</span>
          </div>
          <p className="text-3xl font-bold mt-2 font-mono text-slate-900">
            18
          </p>
          <div className="mt-2 text-xs text-slate-400 font-mono">
            Vercel / Supabase Cluster
          </div>
        </Link>

        {/* KPI 3: AI Services */}
        <Link
          href="/dashboard/technology/ai-platform"
          className="rounded-xl bg-white shadow p-6 border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer block"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-500 font-medium group-hover:text-emerald-600 transition">
              AI Services
            </h3>
            <span className="text-emerald-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition">View →</span>
          </div>
          <p className="text-3xl font-bold mt-2 text-emerald-600 font-mono">
            12
          </p>
          <div className="mt-2 text-xs text-slate-400 font-mono">
            Google Gen AI SDK Active
          </div>
        </Link>

        {/* KPI 4: Security Alerts */}
        <Link
          href="/dashboard/technology/cybersecurity"
          className="rounded-xl bg-white shadow p-6 border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer block"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-500 font-medium group-hover:text-emerald-600 transition">
              Security Alerts
            </h3>
            <span className="text-emerald-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition">View →</span>
          </div>
          <p className="text-3xl font-bold mt-2 text-red-600 font-mono">
            2
          </p>
          <div className="mt-2 text-xs text-red-500 font-medium">
            Arcjet Firewall Active
          </div>
        </Link>

      </div>

      {/* Main Dashboard (Clickable Interactive Panels) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Infrastructure Monitoring Link Card */}
        <Link
          href="/dashboard/technology/infrastructure"
          className="rounded-xl bg-white shadow p-6 min-h-[320px] flex flex-col justify-between border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition">
                Infrastructure Monitoring
              </h2>
              <span className="text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition transform translate-x-[-4px] group-hover:translate-x-0">→</span>
            </div>

            <p className="text-gray-500 text-sm">
              Cloud servers, databases, network utilization,
              API services, and application health monitoring via automated routing.
            </p>
          </div>
          <div className="mt-6 p-4 bg-slate-900 text-slate-200 rounded-lg font-mono text-xs shadow-inner">
            <span className="text-emerald-400"># Database Status</span><br />
            Supabase RLS: <span className="text-emerald-400 font-bold">Enabled</span><br />
            DNSSEC Protocol: <span className="text-emerald-400 font-bold">Secured (tradexpress.co)</span>
          </div>
        </Link>

        {/* Cybersecurity Center Link Card */}
        <Link
          href="/dashboard/technology/cybersecurity"
          className="rounded-xl bg-white shadow p-6 min-h-[320px] flex flex-col justify-between border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition">
                Cybersecurity Center
              </h2>
              <span className="text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition transform translate-x-[-4px] group-hover:translate-x-0">→</span>
            </div>

            <p className="text-gray-500 text-sm">
              Firewall events, threat detection,
              vulnerability scans, access logs,
              and security analytics.
            </p>
          </div>
          <div className="mt-6 p-4 bg-slate-900 text-slate-200 rounded-lg font-mono text-xs shadow-inner">
            <span className="text-emerald-400"># Security Log</span><br />
            Arcjet OAuth integration checked: <span className="text-emerald-400 font-bold">OK</span><br />
            Active Threat Level: <span className="text-emerald-400 font-bold">Low</span>
          </div>
        </Link>
      </div>

      {/* Development & AI Clickable Modules */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Software Development Link Card */}
        <Link
          href="/dashboard/technology/development"
          className="rounded-xl bg-white shadow p-6 border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer block"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition">
              Software Development
            </h2>
            <span className="text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition transform translate-x-[-4px] group-hover:translate-x-0">→</span>
          </div>

          <ul className="space-y-2.5 text-gray-600 text-sm font-mono">
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>Production Deployments (Vercel)</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>CI/CD Pipeline</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>Git Repositories (express-auth-example)</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>Sprint Progress & Team Workspace (Slack Pro)</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>API Gateway Routing</span></li>
          </ul>
        </Link>

        {/* AI Platform Link Card */}
        <Link
          href="/dashboard/technology/ai-platform"
          className="rounded-xl bg-white shadow p-6 border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer block"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition">
              AI Platform
            </h2>
            <span className="text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition transform translate-x-[-4px] group-hover:translate-x-0">→</span>
          </div>

          <ul className="space-y-2.5 text-gray-600 text-sm font-mono">
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>AI Customs Assistant & Consultancy Services</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>OCR Engine & Document Intelligence</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>Predictive Analytics & Multi-channel Agents</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>Google AI Studio & Gemini SDK Integration</span></li>
            <li className="flex items-center space-x-2"><span className="text-emerald-600 font-bold">▸</span> <span>Autonoma AI Workflow Automation</span></li>
          </ul>
        </Link>
      </div>

      {/* Bottom Panel: Roadmap Link */}
      <Link
        href="/dashboard/technology/roadmap"
        className="rounded-xl bg-white shadow p-6 border border-slate-100 hover:border-emerald-500 hover:shadow-lg transition group cursor-pointer block"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition">
            Digital Transformation Roadmap
          </h2>
          <span className="text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transition transform translate-x-[-4px] group-hover:translate-x-0">→</span>
        </div>

        <p className="text-gray-500 text-sm">
          Enterprise modernization initiatives, cloud migration,
          AI integration, system upgrades, and technology strategy for TradeXpress customs brokerage and consultancy services.
        </p>
      </Link>
    </div>
  );
}
