export type ProcessStatus =
  | "Planned"
  | "In Progress"
  | "Testing"
  | "Review"
  | "Completed";

export interface EnterpriseProcess {
  id: string;

  module: string;

  feature: string;

  status: ProcessStatus;

  version: string;

  description: string;
}

export const EnterpriseProcesses: EnterpriseProcess[] = [
  {
    id: "TX-SYS-001",
    module: "System",
    feature: "Enterprise Dashboard",
    status: "Completed",
    version: "2.0",
    description: "Enterprise dashboard foundation.",
  },

  {
    id: "TX-SYS-002",
    module: "System",
    feature: "Sidebar Navigation",
    status: "Completed",
    version: "2.0",
    description: "Enterprise navigation menu.",
  },

  {
    id: "TX-SYS-003",
    module: "System",
    feature: "Dashboard Widgets",
    status: "Completed",
    version: "2.0",
    description: "KPI cards and dashboard components.",
  },

  {
    id: "TX-AI-001",
    module: "Artificial Intelligence",
    feature: "AI Command Center",
    status: "In Progress",
    version: "2.0",
    description: "Enterprise AI workspace.",
  },

  {
    id: "TX-TASK-001",
    module: "Task Runner",
    feature: "Workflow Manager",
    status: "Planned",
    version: "2.0",
    description: "Enterprise task execution engine.",
  },
];