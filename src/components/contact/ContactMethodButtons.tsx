"use client";

import { MessageCircle, Mail } from "lucide-react";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447516785823";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Erika, I'd like to enquire about counselling.")}`;
const MESSENGER_URL = "https://m.me/ErikaMartinCounselling";

function trackContactMethod(method: "whatsapp" | "messenger" | "email") {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "contact_method_selected", method });
  }
}

export function InstantMessagingButtons() {
  return (
    <div className="pt-4 max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-3">
        {/* WhatsApp Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactMethod("whatsapp")}
          aria-label="Message Erika on WhatsApp"
          className="flex items-center justify-center gap-2 p-3.5 bg-white hover:bg-[#ECFDF5] rounded-2xl border border-[#34D399]/30 hover:border-[#25D366] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-[#0D2E24] font-extrabold text-sm group"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" />
          <span>WhatsApp</span>
        </a>

        {/* Messenger Button */}
        <a
          href={MESSENGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactMethod("messenger")}
          aria-label="Message Erika on Messenger"
          className="flex items-center justify-center gap-2 p-3.5 bg-white hover:bg-[#F0F7FF] rounded-2xl border border-[#34D399]/30 hover:border-[#0084FF] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-[#0D2E24] font-extrabold text-sm group"
        >
          <MessageCircle className="w-5 h-5 text-[#0084FF] shrink-0 group-hover:scale-110 transition-transform" />
          <span>Messenger</span>
        </a>
      </div>
    </div>
  );
}

export function DirectEmailCardLink() {
  return (
    <a
      href="mailto:mindhavenuk@gmail.com"
      onClick={() => trackContactMethod("email")}
      className="p-6 bg-white rounded-2xl border border-[#34D399]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-[#34D399]/20 flex items-center justify-center mb-4">
          <Mail className="w-5 h-5 text-[#059669]" />
        </div>
        <h4 className="font-extrabold text-base text-[#0D2E24] font-heading mb-1">Direct Email</h4>
        <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed mb-3">
          Send an email directly to Erika at your convenience.
        </p>
      </div>
      <span className="text-xs font-bold text-[#059669] underline">mindhavenuk@gmail.com</span>
    </a>
  );
}
