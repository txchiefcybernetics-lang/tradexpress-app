export const weather = {
  name: "Weather Service",
  status: "online",

  getStatus() {
    return {
      service: "weather",
      status: "available",
    };
  },
};
