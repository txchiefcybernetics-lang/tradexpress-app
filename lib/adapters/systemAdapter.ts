import os from "os";

export function getSystemStatus(){

  return {
    hostname: os.hostname(),

    platform: os.platform(),

    node: process.version,

    uptime: process.uptime(),

    memory:{
      total: os.totalmem(),
      free: os.freemem()
    },

    timestamp:
      new Date().toISOString()
  };

}
