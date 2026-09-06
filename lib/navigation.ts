export type PageConfig = {
  id: string;
  title: string;
  path: string;
  icon?: string;
  description?: string;
  module?: string;
};

export const pages: PageConfig[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
    module: "Core",
  },
  {
    id: "executive",
    title: "Executive Office",
    path: "/dashboard/executive",
    module: "Executive",
  },
  {
    id: "ai",
    title: "AI Command Center",
    path: "/dashboard/ai",
    module: "AI",
  },
  {
    id: "finance",
    title: "Finance & Accounting",
    path: "/dashboard/finance",
    module: "Finance",
  },
  {
    id: "logistics",
    title: "Logistics",
    path: "/dashboard/logistics",
    module: "Logistics",
  },
  {
    id: "analytics",
    title: "Analytics",
    path: "/dashboard/analytics",
    module: "Analytics",
  },
];
