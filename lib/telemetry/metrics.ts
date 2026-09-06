import os from "os";

export function collectMetrics(){

  return {

    hostname: os.hostname(),

    platform: os.platform(),

    cpu: os.loadavg()[0],

    memory:{
      total:
        os.totalmem(),

      free:
        os.freemem(),

      used:
        os.totalmem() - os.freemem()
    },

    uptime:
      os.uptime(),

    timestamp:
      new Date().toISOString()

  };

}
