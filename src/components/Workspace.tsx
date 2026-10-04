import React, { useState, useEffect, useRef } from 'react';
import Chatbot from './Chatbot';
import { API, IngestedStory } from '../services/api';

interface TerminalLog {
  timestamp: string;
  message: string;
  type: 'info' | 'error' | 'warn' | 'sys';
}

export default function Workspace() {
  const [serverUrl, setServerUrl] = useState<string>('http://192.168.100.11:8000');
  const [telemetryStatus, setTelemetryStatus] = useState<string>('Awaiting Sync Check');
  const [telemetryColor, setTelemetryColor] = useState<string>('text-amber-400');

  const [storyTitle, setStoryTitle] = useState<string>('');
  const [storyCategory, setStoryCategory] = useState<string>('technical-analysis');
  const [storyPremium, setStoryPremium] = useState<boolean>(false);
  const [storyAssets, setStoryAssets] = useState<string>('[{"symbol": "BTC", "type": "crypto"}]');
  const [storyContent, setStoryContent] = useState<string>('');

  const [commodityName, setCommodityName] = useState<string>('');
  const [baseHsCode, setBaseHsCode] = useState<string>('');
  const [ahtnSuffix, setAhtnSuffix] = useState<string>('00');

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { timestamp: new Date().toLocaleTimeString(), message: 'KENWELL TX unified platform console framework online.', type: 'sys' }
  ]);
  const [ledgerEntries, setLedgerEntries] = useState<IngestedStory[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  useEffect(() => {
    API.setTargetNode(serverUrl);
    refreshDataGridLedger();
  }, [serverUrl]);

  const appendTerminalLog = (message: string, type: 'info' | 'error' | 'warn' | 'sys' = 'info') => {
    setTerminalLogs((prev) => [...prev, { timestamp: new Date().toLocaleTimeString(), message, type }]);
  };

  const filteredLedgerEntries = ledgerEntries.filter(entry => 
    entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    String(entry.id).includes(searchQuery)
  );

  const pingEquatorDaemon = async () => {
    appendTerminalLog(`Initiating telemetry handshake check via API client layer...`, 'sys');
    try {
      const data = await API.pingTelemetryHub();
      if (data.success) {
        setTelemetryStatus('CONNECTED (ACTIVE)');
        setTelemetryColor('text-emerald-400');
        appendTerminalLog(`SUCCESS: Equator status verified via API Client. Sync heartbeat active.`);
      }
    } catch (err: any) {
      setTelemetryStatus('DISCONNECTED');
      setTelemetryColor('text-red-500');
      appendTerminalLog(`CONNECTION FAULT: API hub unreachable. Details: ${err.message}`, 'error');
    }
  };

  const dispatchStoryPayload = async (statusOverride: 'draft' | 'published') => {
    if (!storyTitle || !storyContent) {
      appendTerminalLog("VALIDATION EXCEPTION: Headline and content entries required.", "error");
      return;
    }

    let parsedAssets = [];
    try { parsedAssets = JSON.parse(storyAssets); } catch (e) {
      appendTerminalLog("DATA PARSE ERROR: Telemetry parameters must run a valid JSON array format.", "error");
      return;
    }

    appendTerminalLog(`Dispatching story payload via API Client abstraction...`, 'sys');
    try {
      const result = await API.createStory({
        title: storyTitle,
        content: storyContent,
        category: storyCategory,
        targetedAssets: parsedAssets,
        isPremium: storyPremium,
        status: statusOverride
      });

      if (result.success) {
        appendTerminalLog(`INGESTION VERIFIED: Story record logged into cluster! Generated ID: ${result.data.storyId}`, 'info');
        setStoryTitle('');
        setStoryContent('');
        refreshDataGridLedger();
      }
    } catch (err: any) {
      appendTerminalLog(`API INGESTION ERROR: Handshake failed. Details: ${err.message}`, 'error');
    }
  };

  const dispatchTariffPayload = async (e: React.FormEvent) => {
    e.preventDefault();
    appendTerminalLog(`Dispatching tariff parameters matrix to classifier route...`, 'sys');

    try {
      const result = await API.classifyTariff({ commodityName, baseHsCode, ahtnSuffix });
      if (result.success) {
        appendTerminalLog(`AHTN COMPLIANCE MATCHED & PERSISTED! DB Key: ${result.match.id || 'N/A'} | Nomenclature: ${result.match.ahtn_nomenclature}`, 'info');
        setCommodityName('');
        setBaseHsCode('');
      }
    } catch (err: any) {
      appendTerminalLog(`CLASSIFICATION REJECTED: API routing error. Details: ${err.message}`, 'error');
    }
  };

  const refreshDataGridLedger = async () => {
    appendTerminalLog("Polling database ledger rows via unified API module connection...", 'sys');
    try {
      const result = await API.getAllStories();
      if (result.success) {
        setLedgerEntries(result.data || []);
        appendTerminalLog(`LEDGER SYNC SUCCESS: Loaded ${result.count} data nodes smoothly.`, 'info');
      }
    } catch (err: any) {
      setLedgerEntries([]);
      appendTerminalLog(`LEDGER SYNC FAULT: Connection refused. Details: ${err.message}`, 'error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-slate-800 pb-5 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>⚡</span> KENWELL TX Dev Station
          </h1>
          <p className="text-xs text-slate-400 mt-1">Refactored architecture leveraging a clean Frontend-Backend API Client module layer</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 bg-slate-900/60 border border-slate-800 p-3 rounded-xl backdrop-blur-sm">
          <div className="flex flex-col">
            <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-1">Target Engine Endpoint</label>
            <select value={serverUrl} onChange={(e) => setServerUrl(e.target.value)} className="bg-slate-950 border border-slate-800 text-xs text-blue-400 rounded px-2 py-1 focus:outline-none focus:border-blue-500 font-code">
              <option value="http://192.168.100.11:8000">Kenwell Proxy Engine: Port 8000</option>
              <option value="http://192.168.100.11:3000">Express Core Node: Port 3000</option>
            </select>
          </div>
          <div className="h-8 w-[1px] bg-slate-800 hidden sm:block"></div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Equator Status</div>
              <div className={`text-xs font-semibold ${telemetryColor} mt-0.5`}>{telemetryStatus}</div>
            </div>
            <button onClick={pingEquatorDaemon} className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs px-3 py-2 rounded-md transition shadow-md">Ping Telemetry Hub</button>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-slate-900/30 border border-slate-800/80 p-6 rounded-xl backdrop-blur-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Intelligence Ingestion Engine</h2>
              <span className="text-[11px] font-code text-slate-500">POST /api/story/create</span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Story Headline</label>
                <input type="text" value={storyTitle} onChange={(e) => setStoryTitle(e.target.value)} placeholder="Headline description matrix..." className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">Context Category</label>
                  <select value={storyCategory} onChange={(e) => setStoryCategory(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition">
                    <option value="technical-analysis">📈 Technical Analysis</option>
                    <option value="macro">🌍 Macro Strategy</option>
                    <option value="alpha">⚡ Algorithmic Alpha</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">Distribution Layer Visibility</label>
                  <div className="flex items-center h-[38px] bg-slate-950 border border-slate-800 rounded-md px-3">
                    <input type="checkbox" id="storyPremium" checked={storyPremium} onChange={(e) => setStoryPremium(e.target.checked)} className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-blue-600 focus:ring-0" />
                    <label htmlFor="storyPremium" className="ml-2 text-xs text-slate-300 cursor-pointer select-none">Restrict access to Premium Tier</label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">Target Telemetry (JSON Array)</label>
