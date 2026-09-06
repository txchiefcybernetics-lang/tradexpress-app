"use client";

import { EnterpriseIdentity } from "@/lib/system/identity";

interface FieldProps {
  label: string;
  value: string;
  status?: "online" | "warning" | "offline" | "default";
}

function Field({
  label,
  value,
  status = "default",
}: FieldProps) {
  const badgeColor = {
    online: "bg-emerald-500",
    warning: "bg-amber-500",
    offline: "bg-red-500",
    default: "bg-slate-500",
  }[status];

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-slate-400">
          {label}
        </p>

        <span className={`h-2.5 w-2.5 rounded-full ${badgeColor}`} />
      </div>

      <p className="mt-3 font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

export default function IdentityCard() {
  const identity = EnterpriseIdentity;

  return (
    <section className="rounded-2xl bg-slate-900 p-8 text-white">
      <h2 className="text-2xl font-bold">
        Enterprise Runtime Identity
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        <Field label="Project" value={identity.project} />
        <Field label="Workspace" value={identity.workspace} />
        <Field label="Version" value={identity.version} />
        <Field label="Build" value={identity.build} />
        <Field label="Environment" value={identity.environment} status="online" />
        <Field label="AI Engine" value={identity.aiEngine} status="online" />
        <Field label="Database" value={identity.database} status="online" />
        <Field label="License" value={identity.license} />

      </div>
    </section>
  );
}
