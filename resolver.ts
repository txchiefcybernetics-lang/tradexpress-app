import type { TXEvent } from "./types";

export async function emitEvent(
  event: TXEvent
) {
  return resolveEvent(event);
}


export async function resolveEvent(
  event: TXEvent
) {
  return {
    success: true,
    event,
  };
}
