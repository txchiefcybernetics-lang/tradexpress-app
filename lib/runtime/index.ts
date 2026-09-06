import os from "os";


export function TXRuntime(){

return {

 hostname:
   os.hostname(),

 node:
   process.version,

 uptime:
   process.uptime(),

 memory:{
   total:
    os.totalmem(),

   free:
    os.freemem()
 },

 status:"online"

};

}
