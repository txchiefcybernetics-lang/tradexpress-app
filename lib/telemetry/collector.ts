import {
 scanSystem
} from "./scanner/systemScanner";


export function runTelemetryCollector(){

 const system =
   scanSystem();


 return {
   system
 };

}
