'use client';

import React from 'react';

export default function PM2Monitor() {
  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-lg p-4 my-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Ubuntu Server PM2 Monitor
        </h3>
        <span className="text-xs text-slate-500">Live Status</span>
      </div>
      <div className="w-full h-[500px] overflow-hidden rounded border border-slate-800">
        <iframe
          src="YOUR_PUBLIC_PM2_DASHBOARD_URL"
          className="w-full h-full border-0"
          title="PM2 Live Monitor"
        ></iframe>
      </div>
    </div>
  );
}
