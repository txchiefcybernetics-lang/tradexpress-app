import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export default function Section({
  children,
}: SectionProps) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      {children}
    </section>
  );
}
