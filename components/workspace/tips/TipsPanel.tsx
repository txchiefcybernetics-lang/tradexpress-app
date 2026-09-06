"use client";

import { useTips } from "@/tx-runtime/hooks/useTips";
import TipCard from "./TipCard";

export default function TipsPanel() {

  const { tips } = useTips();

  return (

    <section className="space-y-4">

      <h2 className="text-lg font-bold">
        💡 TX Smart Tips
      </h2>

      {tips.map((tip) => (

        <TipCard
          key={tip.id}
          tip={tip}
        />

      ))}

    </section>

  );

}
