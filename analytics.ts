export const analytics = {
  name: "Analytics Engine",
  status: "online",

  track(event: string) {
    return {
      event,
      recorded: true,
    };
  },
};
