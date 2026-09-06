export const office = {
  name: "TradeXpress Office System",
  version: "1.0.0",
  status: "online",

  modules: [
    "customers",
    "invoices",
    "quotations",
    "purchase-orders",
    "packing-lists",
  ],

  execute(action: string) {
    return {
      success: true,
      action,
      module: "office",
    };
  },
};
