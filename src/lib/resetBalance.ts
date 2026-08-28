// Aggressive localStorage wipe for balance reset
export function resetBalance() {
  if (typeof window === "undefined") return;
  try {
    // Remove ALL EC-related keys
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.includes("ec_") || key.includes("balance") || key.includes("deposit")) {
        localStorage.removeItem(key);
      }
    });

    // Also clear sessionStorage
    const sessionKeys = Object.keys(sessionStorage);
    sessionKeys.forEach((key) => {
      if (key.includes("ec_") || key.includes("balance")) {
        sessionStorage.removeItem(key);
      }
    });

    // Clear service worker cache
    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }

    // Force localStorage clear confirmation
    localStorage.clear();
    sessionStorage.clear();
  } catch (e) {
    console.error("Reset failed:", e);
  }
}
