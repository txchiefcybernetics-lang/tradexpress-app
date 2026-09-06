import { calculateDuty } from "./duty";
import { calculateLandedCost } from "./landedCost";
import { calculateVAT } from "./vat";

import {
  CalculationInput,
  CalculationResult,
} from "./types";

export function customsCalculator(
  input: CalculationInput
): CalculationResult {

  const duty = calculateDuty(
    input.cif,
    input.dutyRate
  );

  const vat = calculateVAT(
    input.cif,
    duty,
    input.vatRate ?? 12
  );

  const landedCost = calculateLandedCost(
    input.cif,
    duty,
    vat
  );

  return {
    cif: input.cif,
    duty,
    vat,
    totalTaxes: duty + vat,
    landedCost,
  };
}
