export interface EnterpriseModule {
  id: string;
  name: string;
  category: "core" | "industry";
  enabled: boolean;
  route: string;
  icon: string;
}

export const enterpriseModules: EnterpriseModule[] = [
  // Core Platform

  {
    id: "dashboard",
    name: "Dashboard",
    category: "core",
    enabled: true,
    route: "/dashboard",
    icon: "LayoutDashboard",
  },

  {
    id: "executive",
    name: "Executive Office",
    category: "core",
    enabled: true,
    route: "/dashboard/executive",
    icon: "Briefcase",
  },

  {
    id: "ai",
    name: "AI Command Center",
    category: "core",
    enabled: true,
    route: "/dashboard/ai",
    icon: "Brain",
  },

  {
    id: "finance",
    name: "Finance",
    category: "core",
    enabled: true,
    route: "/dashboard/finance",
    icon: "DollarSign",
  },

  {
    id: "hr",
    name: "Human Resources",
    category: "core",
    enabled: true,
    route: "/dashboard/hr",
    icon: "Users",
  },

  {
    id: "technology",
    name: "Technology",
    category: "core",
    enabled: true,
    route: "/dashboard/technology",
    icon: "Cpu",
  },

  // Industry Modules

  {
    id: "brokerage",
    name: "Customs Brokerage",
    category: "industry",
    enabled: true,
    route: "/dashboard/brokerage",
    icon: "FileText",
  },

  {
    id: "logistics",
    name: "Logistics",
    category: "industry",
    enabled: true,
    route: "/dashboard/logistics",
    icon: "Truck",
  },

  {
    id: "manufacturing",
    name: "Manufacturing",
    category: "industry",
    enabled: false,
    route: "/dashboard/manufacturing",
    icon: "Factory",
  },

  {
    id: "healthcare",
    name: "Healthcare",
    category: "industry",
    enabled: false,
    route: "/dashboard/healthcare",
    icon: "HeartPulse",
  },

  {
    id: "retail",
    name: "Retail",
    category: "industry",
    enabled: false,
    route: "/dashboard/retail",
    icon: "ShoppingBag",
  },

  {
    id: "education",
    name: "Education",
    category: "industry",
    enabled: false,
    route: "/dashboard/education",
    icon: "GraduationCap",
  },
];
