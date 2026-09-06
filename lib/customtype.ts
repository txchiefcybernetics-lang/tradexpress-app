export interface CalculationInput {
  cif: number;
  dutyRate: number;
  vatRate?: number;
  exchangeRate?: number;
}

export interface CalculationResult {
  cif: number;
  duty: number;
  vat: number;
  totalTaxes: number;
  landedCost: number;
}
