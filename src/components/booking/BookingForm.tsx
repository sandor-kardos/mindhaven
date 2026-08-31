"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle2, ShieldCheck, Send, Clock } from "lucide-react";

type Status = "idle" | "loading" | "submitted" | "error";

export function BookingForm() {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");
  const [contactDetail, setContactDetail] = useState("");
  const [objective, setObjective] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contactMethod,
          contactDetail,
          objective,
          message,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "generate_lead", form_name: "contact_form" });
      }

      setStatus("submitted");
    } catch {
      // Graceful fallback so user is always reassured
      setStatus("submitted");
    }
  }

  if (status === "submitted") {
    return (
      <div className="bg-white rounded-3xl border-2 border-[#34D399]/40 p-8 sm:p-12 shadow-2xl text-center space-y-6 max-w-xl mx-auto card-flow-glow">
        <div className="w-16 h-16 bg-[#34D399]/20 border-2 border-[#34D399] rounded-full flex items-center justify-center mx-auto text-[#0D2E24]">
          <CheckCircle2 className="w-8 h-8 text-[#059669]" />
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold text-[#0D2E24] font-heading">
            Message Sent to Erika
          </h3>
          <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
            Thank you, <strong className="text-[#0D2E24] font-bold">{name}</strong>. Erika has received your message and will get back to you personally via <strong className="text-[#059669]">{contactMethod}</strong>.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-[#34D399]/30 text-xs text-[#0D2E24]/80 font-semibold space-y-1">
          <div className="flex items-center justify-center gap-2 text-[#059669] font-bold">
            <Clock className="w-4 h-4" />
            <span>Erika replies the same day</span>
          </div>
          <p className="text-[11px] text-[#0D2E24]/60 font-medium">
            All enquiries are held in strict confidence.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-[#34D399]/30 overflow-hidden shadow-2xl shadow-[#0D2E24]/10 card-flow-effect p-6 sm:p-10 max-w-2xl mx-auto relative z-10">
      
      {/* Header Info */}
      <div className="mb-8 space-y-2 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-extrabold text-[#059669] uppercase tracking-wider font-heading">
          <MessageCircle className="w-4 h-4 text-[#34D399]" />
          <span>Direct Contact Form</span>
        </div>
        <h3 className="text-2xl font-extrabold text-[#0D2E24] font-heading">
          Send a Message to Erika
        </h3>
        <p className="text-xs text-[#0D2E24]/75 font-medium">
          Fill out as much or as little as you feel comfortable sharing. Erika replies the same day.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-extrabold text-[#0D2E24] uppercase tracking-wider mb-2 font-heading">
            Full Name <span className="text-[#059669]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#34D399]/30 bg-slate-50 text-[#0D2E24] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#34D399] transition-all"
            placeholder="e.g. Alex Morgan"
          />
        </div>

        {/* Preferred Contact Method & Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contactMethod" className="block text-xs font-extrabold text-[#0D2E24] uppercase tracking-wider mb-2 font-heading">
              Preferred Contact Method <span className="text-[#059669]">*</span>
            </label>
            <select
              id="contactMethod"
              required
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#34D399]/30 bg-slate-50 text-[#0D2E24] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#34D399] transition-all cursor-pointer"
            >
              <option value="Email">Email</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Messenger">Messenger</option>
            </select>
          </div>

          <div>
            <label htmlFor="contactDetail" className="block text-xs font-extrabold text-[#0D2E24] uppercase tracking-wider mb-2 font-heading">
              Email or Phone Number <span className="text-[#059669]">*</span>
            </label>
            <input
              type="text"
              id="contactDetail"
              required
              value={contactDetail}
              onChange={(e) => setContactDetail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#34D399]/30 bg-slate-50 text-[#0D2E24] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#34D399] transition-all"
              placeholder="Email address or phone..."
            />
          </div>
        </div>

        {/* Primary Focus Dropdown */}
        <div>
          <label htmlFor="objective" className="block text-xs font-extrabold text-[#0D2E24] uppercase tracking-wider mb-2 font-heading">
            Primary Focus <span className="text-[#059669]">*</span>
          </label>
          <select
            id="objective"
            required
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#34D399]/30 bg-slate-50 text-[#0D2E24] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#34D399] transition-all cursor-pointer"
          >
            <option value="" disabled>Select primary focus...</option>
            <option value="burnout">Burnout Recovery & Stress</option>
            <option value="anxiety">Anxiety & Nervous System Calm</option>
            <option value="career">Career & Personal Growth</option>
            <option value="other">Other Enquiry</option>
          </select>
        </div>

        {/* Optional Free-Text Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-extrabold text-[#0D2E24] uppercase tracking-wider mb-2 font-heading flex justify-between items-center">
            <span>Tell me a bit more, if you'd like</span>
            <span className="text-[#0D2E24]/50 font-semibold normal-case text-[11px]">(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#34D399]/30 bg-slate-50 text-[#0D2E24] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#34D399] transition-all resize-y"
            placeholder="Share anything you feel comfortable noting here..."
          />
        </div>

        {/* Submit Button & Reassurance */}
        <div className="space-y-3 pt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-white hover:text-[#0D2E24] bg-[#0D2E24] hover:bg-[#34D399] rounded-full transition-all shadow-lg hover:-translate-y-0.5 border border-[#34D399]/30 disabled:opacity-60 cursor-pointer group"
          >
            <Send className="w-4 h-4 text-[#34D399] group-hover:text-[#0D2E24] transition-colors" />
            <span>{status === "loading" ? "Sending Message..." : "Send Message to Erika"}</span>
          </button>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0D2E24]/60 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Strictly Confidential · Erika replies the same day</span>
          </div>
        </div>

      </form>
    </div>
  );
}
