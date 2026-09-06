export function calculateLandedCost(
  cif: number,
  duty: number,
  vat: number
): number {
  return cif + duty + vat;
}
