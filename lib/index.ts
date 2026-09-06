import os from "os";


export const TX = {

  app: {

    name:
      "TradeXpress Enterprise",

    version:
      "2.0"

  },


  system: {

    hostname(){

      return os.hostname();

    },


    platform(){

      return os.platform();

    },


    node(){

      return process.version;

    },


    uptime(){

      return os.uptime();

    }

  },


  request: {

    userAgent(request:any){

      return (
        request.headers.get(
          "user-agent"
        )
        ||
        "unknown"
      );

    }

  }

};
