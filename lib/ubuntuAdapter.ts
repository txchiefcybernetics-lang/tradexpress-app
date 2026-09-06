import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);


export async function getUbuntuUpdates(){

  try {

    const { stdout } =
      await execAsync(
        "apt list --upgradable 2>/dev/null"
      );


    const packages =
      stdout
        .split("\n")
        .filter(
          line =>
          line &&
          !line.startsWith("Listing")
        );


    return {

      os:"Ubuntu",

      updatesAvailable:
        packages.length,

      packages,

      status:
        "checked",

      timestamp:
        new Date().toISOString()

    };


  } catch(error){

    return {

      os:"Ubuntu",

      status:"error",

      message:
        String(error)

    };

  }

}
