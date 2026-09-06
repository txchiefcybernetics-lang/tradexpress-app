export const hscode = {
  name: "HS Code Intelligence",
  status: "online",

  lookup(code: string) {
    return {
      code,
      found: false,
    };
  },
};
