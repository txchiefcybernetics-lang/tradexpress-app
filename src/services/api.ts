// --- Type Definitions for API Responses and Payloads ---
export interface IngestedStory {
  id: number;
  title: string;
  category: string;
  status: string;
  created_at: string;
}

export interface ClassificationMatch {
  id?: number;
  commodity: string;
  hs_code: string;
  ahtn_nomenclature: string;
  region_scope: string;
}

export interface ChatResponse {
  success: boolean;
  reply?: string;
  error?: string;
}

class TradeXpressApiClient {
  private baseUrl: string;

  constructor() {
    // Automatically fall back to Vite's reverse proxy context path if configured, 
    // or direct connection targeting to your Kenwell Proxy Node
    this.baseUrl = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
      ? "" // Blank uses local relative path caught by vite.config.ts proxy rule
      : "http://192.168.100.11:8000"; 
  }

  /**
   * Updates the target base URL environment route dynamically if changed via UI settings
   */
  public setTargetNode(url: string) {
    this.baseUrl = url.startsWith('http') ? url : `http://${url}`;
  }

  /**
   * GET /api/monitor/equator
   * Polling pulse validation to check background engine health metrics
   */
  async pingTelemetryHub(): Promise<{ success: boolean; heartbeat?: string }> {
    const res = await fetch(`${this.baseUrl}/api/monitor/equator`, { method: 'GET' });
    if (!res.ok) throw new Error(`Handshake failed with status code ${res.status}`);
    return res.json();
  }

  /**
   * POST /api/story/create
   * Dispatches market analysis story records directly to the datastore
   */
  async createStory(payload: {
    title: string;
    content: string;
    category: string;
    targetedAssets: Array<{ symbol: string; type: string }>;
    isPremium: boolean;
    status: 'draft' | 'published';
  }): Promise<{ success: boolean; data: { storyId: number; title: string } }> {
    const res = await fetch(`${this.baseUrl}/api/story/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || 'Server rejected ingestion schema validation.');
    }
    return res.json();
  }

  /**
   * POST /api/trade/classify
   * Passes commodity metrics down to the AHTN Customs Tariff Engine
   */
  async classifyTariff(payload: {
    commodityName: string;
    baseHsCode: string;
    ahtnSuffix: string;
  }): Promise<{ success: boolean; match: ClassificationMatch }> {
    const res = await fetch(`${this.baseUrl}/api/trade/classify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Customs classification boundary handshake failed.');
    return res.json();
  }

  /**
   * GET /api/story/all
   * Fetches full historical logs database entries to populate real-time ledger grids
   */
  async getAllStories(): Promise<{ success: boolean; count: number; data: IngestedStory[] }> {
    const res = await fetch(`${this.baseUrl}/api/story/all`, { method: 'GET' });
    if (!res.ok) throw new Error('Failed to retrieve structured ledger data points.');
    return res.json();
  }

  /**
   * POST /api/chat
   * Dispatches text strings directly to your AI Assistant session proxy
   */
  async sendChatMessage(message: string): Promise<ChatResponse> {
    const res = await fetch(`${this.baseUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error('AI Chatbot routing exception occurred.');
    return res.json();
  }
}

// Export a single initialized instance for application-wide use
export const API = new TradeXpressApiClient();
