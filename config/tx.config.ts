export const TX_CONFIG = {

  app: {
    name: "TradeXpress",
    version: "2.0.0",
    environment:
      process.env.NODE_ENV ?? "development",
  },


  runtime: {
    platform: "Next.js",
    node:
      process.version,
    monitoring: true,
  },


  security: {
    auth: true,
    jwt: true,
    auditLogs: true,
    sessionTimeout: 86400,
  },


  database: {
    provider: "Supabase",
    knowledgeBase: true,
    analytics: true,
  },


  ai: {
    enabled: true,
    commandCenter: true,
    knowledgeSearch: true,
  },


  recovery: {
    routeRecovery: true,
    errorRecovery: true,
    autoDiagnostics: true,
  },


  deployment: {
    mode: "self-hosted",
    port: 3000,
    hostname: "0.0.0.0",
  }

};
