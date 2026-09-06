export const TX_SETTINGS = {

  // Application
  app: {
    name: "TradeXpress",
    version: "2.0.0",
    mode: "enterprise",
    environment:
      process.env.NODE_ENV ?? "development",
  },


  // Server
  server: {
    port:
      Number(process.env.PORT ?? 3000),

    hostname:
      "0.0.0.0",

    timezone:
      "Asia/Manila",
  },


  // Security
  security: {

    authentication: true,

    jwt: true,

    auditLogs: true,

    sessionTimeout:
      86400,

    sharing:
      false,
  },


  // Database
  database: {

    provider:
      "Supabase",

    realtime:
      true,

    backups:
      true,

  },


  // AI System
  ai: {

    enabled:
      true,

    commandCenter:
      true,

    knowledgeEngine:
      true,

  },


  // Features
  features: {

    console:
      true,

    workspace:
      true,

    analytics:
      true,

    notifications:
      true,

    sharedStorage:
      false,

  },


  // Enterprise Modules
  modules: {

    customs:
      true,

    logistics:
      true,

    finance:
      true,

    hr:
      true,

    compliance:
      true,

    technology:
      true,

  }

};
