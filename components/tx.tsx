import { useState, useRef, useEffect } from 'react';

export default function TXChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello, Licensed Customs Broker Kenny Lungay! 🚢 Ready to clear shipments, check WCO tariffs, or analyze CMTA provisions? What are we working on today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/tx/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response || 'No response received.' }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: '[TX Error]: Failed to reach the server API.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0d1117] text-white p-4 rounded-xl border border-gray-800 shadow-2xl">
      <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
        <h2 className="text-lg font-bold text-cyan-400">TX (Artificial Trade Intelligence)</h2>
        <span className="text-xs bg-cyan-900 text-cyan-200 px-2 py-1 rounded">Enterprise v2.0 Active</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4 max-h-[500px]">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-[#161b22] border border-gray-700 text-gray-200'}`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#161b22] border border-gray-700 p-3 rounded-lg text-sm text-gray-400 animate-pulse">
              TX Professor is analyzing via local LLM...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 mt-auto">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about CMTA, tariff codes, or logistics..."
          className="flex-1 bg-[#161b22] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
