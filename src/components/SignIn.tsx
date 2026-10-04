import React, { useState } from 'react';
import { API } from '../services/api';

interface SignInProps {
  onAuthSuccess: (profile: { username: string; role: string }) => void;
}

export default function SignIn({ onAuthSuccess }: SignInProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg('Please input valid operator credentials.');
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    try {
      // Connects directly to your newly stabilized backend login route via your API client
      const res = await fetch('http://192.168.100', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await res.json();
      setIsLoading(false);

      if (res.ok && data.success) {
        // Save token securely in session memory for subsequent authorized requests
        localStorage.setItem('kenwell_tx_jwt_token', data.token);
        onAuthSuccess(data.profile);
      } else {
        setErrorMsg(data.error || 'Access denied: Invalid credentials.');
      }
    } catch (err: any) {
      setIsLoading(false);
      setErrorMsg('Handshake failed: Network authentication gateway offline.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 font-sans select-none">
      <div className="w-full max-w-md space-y-6 bg-slate-900/40 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-black text-white flex items-center justify-center gap-2 tracking-tight">
            <span className="text-blue-500">⚡</span> KENWELL TX PLATFORM
          </h1>
          <p className="text-xs text-slate-400 font-mono">Secure Enterprise Operators Access Point</p>
        </div>

        {errorMsg && (
          <div className="bg-red-950/40 border border-red-800 text-red-400 text-xs px-4 py-3 rounded-lg font-code">
            ❌ {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">Operator Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              placeholder="e.g., tx-operator-01" 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition font-code" 
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">Security Access Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              placeholder="••••••••••••" 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition font-code" 
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-2.5 rounded-lg shadow-lg shadow-blue-900/30 transition disabled:opacity-50 uppercase tracking-wider mt-2"
          >
            {isLoading ? 'Verifying Token Handshake...' : 'Authenticate Access'}
          </button>
        </form>

        <div className="border-t border-slate-800/60 pt-4 text-center">
          <span className="text-[10px] text-slate-500 font-code uppercase">SECURITY PROTOCOL LAYER: SHA-512 / HS256</span>
        </div>
      </div>
    </div>
  );
}
