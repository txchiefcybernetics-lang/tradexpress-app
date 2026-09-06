import os from "os";

export function systemCollector() {

  return {

    platform: os.platform(),

    cpu:
      os.loadavg()[0] ?? 0,

    memoryUsed:
      os.totalmem() - os.freemem(),

    memoryTotal:
      os.totalmem(),

    uptime:
      os.uptime()

  };

}
