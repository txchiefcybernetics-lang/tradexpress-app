export interface TXContext {
  requestId: string;
  sessionId: string;
  timestamp: string;
}


function generateId(prefix: string) {
  return `${prefix}_${crypto.randomUUID()}`;
}


export function createContext(): TXContext {

  return {
    requestId: generateId("tx_req"),
    sessionId: generateId("tx_session"),
    timestamp: new Date().toISOString(),
  };

}
