'use client';

import { useState } from 'react';

export default function ReceiptPage() {
  const [formData, setFormData] = useState({
    transactionId: '',
    clientName: '',
    serviceType: 'Customs Brokerage & Trade Intelligence',
    amount: ''
  });

  const [receipt, setReceipt] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/receipt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setReceipt(data.receipt);
      }
    } catch (err) {
      console.error('Failed to generate receipt', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">TradeXpress - Official Receipt Generator</h1>
      <p className="text-sm text-slate-400 mb-6">Generate certified digital receipts for global trade and customs operations.</p>

      <form onSubmit={handleGenerate} className="space-y-4 bg-slate-900 p-6 rounded-lg border border-slate-700">
        <div>
          <label className="block text-xs uppercase text-slate-400 mb-1">Transaction ID</label>
          <input 
            type="text" 
            placeholder="e.g. TX-98432" 
            value={formData.transactionId}
            onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
            className="w-full p-2 bg-slate-800 rounded border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-xs uppercase text-slate-400 mb-1">Client Name</label>
          <input 
            type="text" 
            placeholder="e.g. Acme Corp" 
            value={formData.clientName}
            onChange={(e) => setFormData({...formData, clientName: e.target.value})}
            className="w-full p-2 bg-slate-800 rounded border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-xs uppercase text-slate-400 mb-1">Service Type</label>
          <input 
            type="text" 
            value={formData.serviceType}
            onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
            className="w-full p-2 bg-slate-800 rounded border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-xs uppercase text-slate-400 mb-1">Amount Paid</label>
          <input 
            type="text" 
            placeholder="e.g. 15,000 PHP" 
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            className="w-full p-2 bg-slate-800 rounded border border-slate-700 text-white"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-medium transition"
        >
          {loading ? 'Generating...' : 'Generate Receipt'}
        </button>
      </form>

      {receipt && (
        <div className="mt-8 p-6 bg-slate-900 rounded-lg border border-emerald-500 shadow-xl">
          <h2 className="text-xl font-bold text-center mb-1">{receipt.company}</h2>
          <p className="text-xs text-center text-slate-400 mb-4">{receipt.legalNotice}</p>
          
          <div className="space-y-2 text-sm border-t border-b border-slate-800 py-4 my-2">
            <p><strong>Receipt No:</strong> {receipt.receiptNo}</p>
            <p><strong>Date:</strong> {new Date(receipt.date).toLocaleString()}</p>
            <p><strong>Client:</strong> {receipt.client}</p>
            <p><strong>Service:</strong> {receipt.service}</p>
            <p><strong>Status:</strong> <span className="text-emerald-400 font-semibold">{receipt.status}</span></p>
          </div>

          <div className="flex justify-between items-center text-lg font-semibold mt-4 mb-6">
            <span>Total Amount:</span>
            <span className="text-emerald-400">{receipt.amountPaid}</span>
          </div>

          <button 
            onClick={() => window.print()}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded font-medium transition"
          >
            Print / Save PDF Receipt
          </button>
        </div>
      )}
    </div>
  );
}
