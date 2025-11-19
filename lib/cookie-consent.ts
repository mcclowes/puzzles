const COOKIE_CONSENT_KEY = "cookie-consent";

export type ConsentStatus = "accepted" | "declined" | "pending";

export function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return "pending";

  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (consent === "accepted") return "accepted";
  if (consent === "declined") return "declined";
  return "pending";
}

export function setConsentStatus(status: "accepted" | "declined"): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(COOKIE_CONSENT_KEY, status);
}

export function hasConsentBeenGiven(): boolean {
  return getConsentStatus() !== "pending";
}

export function hasAcceptedCookies(): boolean {
  return getConsentStatus() === "accepted";
}
