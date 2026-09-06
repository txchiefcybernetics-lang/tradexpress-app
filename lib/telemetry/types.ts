export interface TelemetrySnapshot {

  hostname: string;

  platform: string;

  cpu: number;

  memoryUsed: number;

  memoryTotal: number;

  uptime: number;

  status: "online" | "offline";

  timestamp: string;

}
