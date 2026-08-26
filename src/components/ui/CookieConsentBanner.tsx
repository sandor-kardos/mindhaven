"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "mindhaven_cookie_consent";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function getStoredConsent(): "accepted" | "declined" | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${CONSENT_KEY}=([^;]+)`));
  return (match?.[2] as "accepted" | "declined") ?? null;
}

function writeConsentCookie(value: "accepted" | "declined") {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${CONSENT_KEY}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

const updateConsent = (granted: boolean) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied',
      });
    }
    window.dataLayer.push({
      event: granted ? 'cookie_consent_granted' : 'cookie_consent_denied',
    });
  }
};

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === "accepted") {
      // User previously accepted — grant consent as soon as gtag is ready
      updateConsent(true);
    } else if (!stored) {
      // No decision yet — show banner
      setVisible(true);
    }
    // If "declined" → consent stays denied by default; nothing to do
  }, []);

  function handleAccept() {
    writeConsentCookie("accepted");
    updateConsent(true);
    setVisible(false);
  }

  function handleDecline() {
    writeConsentCookie("declined");
    updateConsent(false);
    setVisible(false);
  }

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-[#0D2E24] text-white rounded-2xl border border-[#155D49]/50 shadow-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1 space-y-1.5">
                <p className="text-sm font-bold text-white">Cookie preferences</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  This site uses Google Analytics to understand how visitors use it. No data is shared for advertising. You can decline and the site will work fully.{" "}
                  <Link
                    href="/privacy-and-gdpr"
                    className="underline underline-offset-2 text-[#34D399] hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded-full transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 text-xs font-bold text-[#0D2E24] bg-[#34D399] hover:bg-white rounded-full transition-colors shadow-sm"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
