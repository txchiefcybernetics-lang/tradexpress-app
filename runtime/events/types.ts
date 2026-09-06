export interface TXEvent<T = unknown> {
  type: string;
  payload: T;
  timestamp: number;
}

export type TXEventHandler<T = unknown> = (
  event: TXEvent<T>
) => Promise<unknown> | unknown;
