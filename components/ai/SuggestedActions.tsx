const actions = [
  "Find HS Code",
  "Compute Duties",
  "Calculate Landed Cost",
  "Explain CMTA",
  "Check Import Permit",
  "Generate Customs Report",
];

export default function SuggestedActions() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <button
          key={action}
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-100"
        >
          {action}
        </button>
      ))}
    </div>
  );
}