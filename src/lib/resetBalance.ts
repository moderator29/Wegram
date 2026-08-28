// Reset balance to $0 by clearing localStorage
export function resetBalance() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem("ec_deposits_v1");
    localStorage.removeItem("ec_withdraws_v1");
  } catch {
    /* ignore */
  }
}
