import { Tip } from "@/tx-runtime/tips/types";
import TipActions from "./TipActions";

interface Props {
  tip: Tip;
}

export default function TipCard({ tip }: Props) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">

      <h3 className="font-semibold">
        {tip.title}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {tip.message}
      </p>

      <TipActions tip={tip} />

    </div>
  );
}
