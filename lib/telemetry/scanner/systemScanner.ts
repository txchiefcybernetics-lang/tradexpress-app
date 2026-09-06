import os from "os";


export function scanSystem(){

 return {

   hostname: os.hostname(),

   platform: os.platform(),

   arch: os.arch(),

   cpuCount:
     os.cpus().length,

   uptime:
     os.uptime(),

   scannedAt:
     new Date().toISOString()

 };

}
