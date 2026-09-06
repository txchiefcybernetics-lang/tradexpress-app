import { ai } from "./ai";
import { office } from "./office";
import { weather } from "./weather";
import { analytics } from "./analytics";
import { diagnostics } from "./diagnostics";
import { network } from "./network";
import { hscode } from "./hscode";

export const Registry = {
  ai,
  office,
  weather,
  analytics,
  diagnostics,
  network,
  hscode,
} as const;
