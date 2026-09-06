import { TX_CONFIG } from "@/config/tx.config";


export function TXBootstrap(){

 return {

  app:
    TX_CONFIG.app.name,

  version:
    TX_CONFIG.app.version,

  checks:[
    {
      name:"Runtime",
      status:"ready"
    },
    {
      name:"Database",
      status:
        TX_CONFIG.database.provider
    },
    {
      name:"AI Engine",
      status:
        TX_CONFIG.ai.enabled
        ? "enabled"
        : "disabled"
    },
    {
      name:"Security",
      status:
        TX_CONFIG.security.jwt
        ? "active"
        : "off"
    }
  ]

 };

}
