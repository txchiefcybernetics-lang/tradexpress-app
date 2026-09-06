export function isTxDebugEnabled() {
  return process.env.TX_DEBUG === "true";
}

export function txDebugLog(
  label: string,
  data?: unknown
) {
  if (!isTxDebugEnabled()) return;

  console.log(
    `[TX DEBUG] ${label}`,
    data ?? ""
  );
}
