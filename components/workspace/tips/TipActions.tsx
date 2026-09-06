import { Tip } from "@/tx-runtime/tips/types";

interface Props {
  tip: Tip;
}

export default function TipActions({ tip }: Props) {

  if (!tip.actions?.length) return null;

  return (

    <div className="mt-4 flex gap-2">

      {tip.actions.map((action) => (

        <button
          key={action.label}
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
        >
          {action.label}
        </button>

      ))}

    </div>

  );

}
