/**
 * TX Platform
 * Tip System
 * Layer 09 - Services
 */

export type TipPriority =
  | "info"
  | "low"
  | "medium"
  | "high"
  | "critical";

export type TipCategory =
  | "system"
  | "runtime"
  | "build"
  | "deploy"
  | "security"
  | "audit"
  | "logs"
  | "git"
  | "database"
  | "network"
  | "performance"
  | "terminal"
  | "explorer"
  | "ai"
  | "workspace";

export interface TipAction {
  label: string;
  command?: string;
  route?: string;
}

export interface Tip {

  id: string;

  title: string;

  message: string;

  category: TipCategory;

  priority: TipPriority;

  source: string;

  timestamp: string;

  dismissible?: boolean;

  persistent?: boolean;

  actions?: TipAction[];

  metadata?: Record<string, unknown>;
}
