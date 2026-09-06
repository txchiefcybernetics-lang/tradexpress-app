export function calculateDuty(
  cif: number,
  dutyRate: number
): number {
  return cif * (dutyRate / 100);
}
