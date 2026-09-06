import { Tip } from "./types";
import { DefaultTips } from "./registry";

export class TipEngine {
  private tips: Tip[];

  constructor(initialTips: Tip[] = DefaultTips) {
    this.tips = [...initialTips];
  }

  getAll(): Tip[] {
    return this.tips;
  }

  getByCategory(category: Tip["category"]): Tip[] {
    return this.tips.filter((tip) => tip.category === category);
  }

  getByPriority(priority: Tip["priority"]): Tip[] {
    return this.tips.filter((tip) => tip.priority === priority);
  }

  register(tip: Tip): void {
    this.tips.push(tip);
  }

  remove(id: string): void {
    this.tips = this.tips.filter((tip) => tip.id !== id);
  }

  clear(): void {
    this.tips = [];
  }
}

export const TXTips = new TipEngine();
