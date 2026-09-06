import { Tip } from "../types";

export const WelcomeTip: Tip = {
  id: "workspace-001",
  title: "Welcome to TX Workspace",
  message:
    "Use TX Terminal to execute commands and TX Explorer to browse your project.",
  category: "workspace",
  priority: "info",
  source: "TX Workspace",
  timestamp: new Date().toISOString(),
  actions: [
    {
      label: "Open Terminal",
      route: "/workspace",
    },
    {
      label: "Show Commands",
      command: "help",
    },
  ],
};
