"use client";

import Link from "next/link";

const executives = [
  {
    name: "Dr. Ferddy Mark L. Sardan",
    role: "Founder, President & CEO",
    title: "Chief Vision Architect",
    department: "Executive Office",
    color: "from-blue-600 to-indigo-700",
    href: "/dashboard/executive",
  },

  {
    name: "Mr. Kenny Lungay",
    role: "Chief Technology Officer",
    title: "Chief Cybernetic Systems Architect",
    department: "Technology Division",
    color: "from-cyan-600 to-blue-700",
    href: "/dashboard/technology",
  },

  {
    name: "Atty. Kate Tancinco",
    role: "Corporate Secretary",
    title: "Chief Legal, Trust & Communications Officer",
    department: "Legal & Governance",
    color: "from-purple-600 to-violet-700",
    href: "/dashboard/compliance",
  },

  {
    name: "Dr. Reil Romero",
    role: "Chief Strategy & Research Officer",
    title: "Enterprise Strategy",
    department: "Strategy & Research",
    color: "from-emerald-600 to-green-700",
    href: "/dashboard/analytics",
  },

  {
    name: "Mr. Mohammad Hizam Pacasaring",
    role: "Chief Financial Officer",
    title: "Finance Executive",
    department: "Finance",
    color: "from-amber-500 to-orange-600",
    href: "/dashboard/finance",
  },

  {
    name: "Ms. Joana C. Paraiso",
    role: "Lead UI / UX Architect",
    title: "Experience & Design",
    department: "Technology Division",
    color: "from-pink-500 to-rose-600",
    href: "/dashboard/technology",
  },

  {
    name: "Ms. Charisse Barbosa",
    role: "Lead Software Engineering Architect",
    title: "Software Development",
    department: "Technology Division",
    color: "from-slate-700 to-slate-900",
    href: "/dashboard/technology",
  },
];

export default function OrganizationGrid() {
  return (
    <section className="space-y-6">

      <div>

        <h2 className="text-3xl font-bold text-slate-900">
          Enterprise Leadership
        </h2>

        <p className="mt-2 text-slate-500">
          Executive organization structure of the TradeXpress Enterprise System.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {executives.map((person) => (

          <Link
            key={person.name}
            href={person.href}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className={`h-2 bg-gradient-to-r ${person.color}`} />

            <div className="p-6">

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl font-bold text-slate-700">
                {person.name
                  .split(" ")
                  .filter((v) => v.length > 0)
                  .slice(-2)
                  .map((v) => v[0])
                  .join("")}
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {person.name}
              </h3>

              <p className="mt-1 font-semibold text-blue-700">
                {person.role}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {person.title}
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {person.department}
                </span>

                <span className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  View →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}
