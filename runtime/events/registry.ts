import type { TXEventHandler } from "./types";

class EventRegistry {
  private handlers = new Map<string, TXEventHandler>();

  register(type: string, handler: TXEventHandler) {
    this.handlers.set(type, handler);
  }

  get(type: string) {
    return this.handlers.get(type);
  }

  has(type: string) {
    return this.handlers.has(type);
  }

  list() {
    return [...this.handlers.keys()];
  }
}

export const registry = new EventRegistry();
