import { useMemo } from "react";
import { TXTips } from "../tips/engine";
import { Tip } from "../tips/types";

export function useTips() {

  const tips = useMemo(() => {

    return TXTips.getAll();

  }, []);

  return {

    tips,

    byCategory(category: Tip["category"]) {

      return TXTips.getByCategory(category);

    },

    byPriority(priority: Tip["priority"]) {

      return TXTips.getByPriority(priority);

    },

  };

}
