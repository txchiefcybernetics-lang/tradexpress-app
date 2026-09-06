import fs from "fs";
import path from "path";


export function scanCodebase(
 directory:string
){

 const files:string[]=[];


 function walk(dir:string){

   for(
    const file of fs.readdirSync(dir)
   ){

    const full =
      path.join(dir,file);


    if(
      fs.statSync(full).isDirectory()
    ){

      walk(full);

    }
    else if(
      file.endsWith(".ts") ||
      file.endsWith(".tsx")
    ){

      files.push(full);

    }

   }

 }


 walk(directory);


 return files;

}
