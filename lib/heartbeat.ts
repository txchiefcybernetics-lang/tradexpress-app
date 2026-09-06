import {
 collectMetrics
} from "./metrics";


export async function sendHeartbeat(){

 const data =
   collectMetrics();


 await fetch(
   process.env.TX_TELEMETRY_URL!,
   {
    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:
      JSON.stringify(data)
   }
 );


}
