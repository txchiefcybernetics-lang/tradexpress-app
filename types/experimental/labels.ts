/**
 * TradeXpress Experimental Lab
 * labels.ts
 * Version: 1.0.0
 */

export const EXPERIMENTAL_LABELS = {
  ROOT: "EXP-ROOT",

  FOUNDATION: "EXP-FOUNDATION",
  SCOPE: "EXP-SCOPE",
  WAITING: "EXP-WAITING",
  VALIDATION: "EXP-VALIDATION",
  SCORING: "EXP-SCORING",
  EXPERIMENT: "EXP-EXPERIMENT",
  PROTOTYPE: "EXP-PROTOTYPE",
  MVP: "EXP-MVP",
  PRODUCTION: "EXP-PRODUCTION",

  MARKETPLACE: "EXP-MARKETPLACE",
  ANALYTICS: "EXP-ANALYTICS",
  RUNTIME: "EXP-RUNTIME",
  REGISTRY: "EXP-REGISTRY",
  ARCHIVE: "EXP-ARCHIVE",
} as const;

export type ExperimentalLabel =
  (typeof EXPERIMENTAL_LABELS)[keyof typeof EXPERIMENTAL_LABELS];

export const EXPERIMENTAL_LAYER_ORDER: readonly ExperimentalLabel[] = [
  EXPERIMENTAL_LABELS.ROOT,
  EXPERIMENTAL_LABELS.FOUNDATION,
  EXPERIMENTAL_LABELS.SCOPE,
  EXPERIMENTAL_LABELS.WAITING,
  EXPERIMENTAL_LABELS.VALIDATION,
  EXPERIMENTAL_LABELS.SCORING,
  EXPERIMENTAL_LABELS.EXPERIMENT,
  EXPERIMENTAL_LABELS.PROTOTYPE,
  EXPERIMENTAL_LABELS.MVP,
  EXPERIMENTAL_LABELS.PRODUCTION,
  EXPERIMENTAL_LABELS.MARKETPLACE,
  EXPERIMENTAL_LABELS.ANALYTICS,
  EXPERIMENTAL_LABELS.RUNTIME,
  EXPERIMENTAL_LABELS.REGISTRY,
  EXPERIMENTAL_LABELS.ARCHIVE,
] as const;

export const EXPERIMENTAL_TITLES: Record<ExperimentalLabel, string> = {
  "EXP-ROOT": "Root",
  "EXP-FOUNDATION": "Foundation",
  "EXP-SCOPE": "Interest Scope",
  "EXP-WAITING": "Waiting Parameters",
  "EXP-VALIDATION": "Validation",
  "EXP-SCORING": "Scoring",
  "EXP-EXPERIMENT": "Experiment",
  "EXP-PROTOTYPE": "Prototype",
  "EXP-MVP": "Minimum Viable Product",
  "EXP-PRODUCTION": "Production",
  "EXP-MARKETPLACE": "Marketplace",
  "EXP-ANALYTICS": "Analytics",
  "EXP-RUNTIME": "Runtime",
  "EXP-REGISTRY": "Registry",
  "EXP-ARCHIVE": "Archive",
};

export const EXPERIMENTAL_STATUS = {
  WAITING: "waiting",
  READY: "ready",
  VALIDATING: "validating",
  APPROVED: "approved",
  PROTOTYPE: "prototype",
  MVP: "mvp",
  PRODUCTION: "production",
  ARCHIVED: "archived",
  BLOCKED: "blocked",
} as const;

export type ExperimentalStatus =
  (typeof EXPERIMENTAL_STATUS)[keyof typeof EXPERIMENTAL_STATUS];

export function getExperimentalTitle(
  label: ExperimentalLabel,
): string {
  return EXPERIMENTAL_TITLES[label];
}

export function getLayerIndex(
  label: ExperimentalLabel,
): number {
  return EXPERIMENTAL_LAYER_ORDER.indexOf(label);
}

export function nextLayer(
  label: ExperimentalLabel,
): ExperimentalLabel | null {
  const index = getLayerIndex(label);

  if (index < 0) return null;

  return EXPERIMENTAL_LAYER_ORDER[index + 1] ?? null;
}

export function previousLayer(
  label: ExperimentalLabel,
): ExperimentalLabel | null {
  const index = getLayerIndex(label);

  if (index <= 0) return null;

  return EXPERIMENTAL_LAYER_ORDER[index - 1] ?? null;
}
