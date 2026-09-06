import {
 scanCodebase
} from "./scanner";


export function buildTXIndex(){

 const files =
   scanCodebase("./");


 return {

   indexed:
     files.length,

   files,

   generated:
     new Date()

 };

}
