export function calculateVAT(
  cif: number,
  duty: number,
  vatRate = 12
): number {
  return (cif + duty) * (vatRate / 100);
}


export function extractVATInclusive(
  amount: number,
  vatRate = 12
): number {
  return amount * (vatRate / (100 + vatRate));
}
