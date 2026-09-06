import DepartmentCard from "./DepartmentCard";

const departments = [
  {
    title: "Executive Office",
    description: "Corporate strategy and executive oversight.",
    href: "/dashboard/executive",
  },
  {
    title: "Technology & Innovation",
    description: "Systems, AI, cybersecurity and infrastructure.",
    href: "/dashboard/technology",
  },
  {
    title: "Finance & Accounting",
    description: "Financial operations and reporting.",
    href: "/dashboard/finance",
  },
  {
    title: "Human Resources",
    description: "People, recruitment and performance.",
    href: "/dashboard/hr",
  },
  {
    title: "Customs Brokerage",
    description: "Import & export customs processing.",
    href: "/dashboard/brokerage",
  },
  {
    title: "Logistics & Operations",
    description: "Shipment tracking and operational control.",
    href: "/dashboard/logistics",
  },
  {
    title: "Legal & Compliance",
    description: "Compliance, audit and legal management.",
    href: "/dashboard/compliance",
  },
  {
    title: "AI Command Center",
    description: "Enterprise intelligence and automation.",
    href: "/dashboard/ai",
  },
];

export default function OrganizationGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {departments.map((department) => (
        <DepartmentCard
          key={department.title}
          {...department}
        />
      ))}
    </div>
  );
}