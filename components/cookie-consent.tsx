"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import {
  getConsentStatus,
  setConsentStatus,
  type ConsentStatus,
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const [consentStatus, setConsentStatusState] =
    useState<ConsentStatus>("pending");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const status = getConsentStatus();
    setConsentStatusState(status);
    if (status === "pending") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus("accepted");
    setConsentStatusState("accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setConsentStatus("declined");
    setConsentStatusState("declined");
    setIsVisible(false);
  };

  return (
    <>
      {consentStatus === "accepted" && <Analytics />}

      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground text-center sm:text-left">
              We use cookies to analyze site usage and improve your experience.
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm rounded-lg border border-border bg-background text-foreground hover:bg-muted transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
