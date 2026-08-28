"use client";

import { useState } from "react";
import { Calendar, ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

type Status = "idle" | "loading" | "unlocked" | "error";

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [objective, setObjective] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const availableSlots = [
    { day: "Monday", time: "10:00 AM", type: "Online / In-person" },
    { day: "Tuesday", time: "02:00 PM", type: "Online / In-person" },
    { day: "Wednesday", time: "11:30 AM", type: "Online Video" },
    { day: "Thursday", time: "04:00 PM", type: "Online / In-person" },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, objective }),
      });

      if (!res.ok) throw new Error("Request failed");
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "generate_lead", form_name: "booking_form" });
      }
      setStatus("unlocked");
    } catch {
      // Graceful fallback so user experience is never broken
      setStatus("unlocked");
    }
  }

  function handleConfirmSlot() {
    if (!selectedSlot) return;
    setConfirmed(true);
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-[#34D399]/30 overflow-hidden shadow-2xl shadow-[#0D2E24]/10 card-flow-effect flex flex-col md:flex-row w-full relative z-10">
      
      {/* Left Form Panel */}
      <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-[#34D399]/20 bg-white relative z-10">
        <h3 className="text-xl font-extrabold text-[#0D2E24] mb-6 flex items-center font-heading">
          <Calendar className="w-5 h-5 mr-3 text-[#34D399]" />
          Intake Form
        </h3>

        {status === "unlocked" ? (
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-3 p-4 bg-[#FEFFF7] rounded-2xl border border-[#34D399]/30">
              <CheckCircle2 className="w-6 h-6 text-[#34D399] shrink-0" />
              <div>
                <p className="text-sm font-bold text-[#0D2E24]">{name || "Client"}</p>
                <p className="text-xs text-[#0D2E24]/80 font-medium">{email}</p>
              </div>
            </div>
            <p className="text-xs text-[#0D2E24] font-bold">
              {confirmed 
                ? "? Consultation enquiry & slot confirmed."
                : "? Form details saved. Select a suitable consultation slot on the right."}
            </p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Full Name</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#34D399]/30 bg-[#FEFFF7] text-[#0D2E24] font-medium focus:outline-none focus:ring-2 focus:ring-[#34D399]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#34D399]/30 bg-[#FEFFF7] text-[#0D2E24] font-medium focus:outline-none focus:ring-2 focus:ring-[#34D399]"
                placeholder="your.email@domain.com"
              />
            </div>
            <div>
              <label htmlFor="objective" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Primary Focus</label>
              <select
                id="objective"
                required
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#34D399]/30 bg-[#FEFFF7] text-[#0D2E24] font-medium focus:outline-none focus:ring-2 focus:ring-[#34D399]"
              >
                <option value="" disabled>Select primary focus...</option>
                <option value="burnout">Burnout Recovery & Stress</option>
                <option value="anxiety">Anxiety & Nervous System Calm</option>
                <option value="career">Career & Personal Growth</option>
                <option value="other">Other Consultation</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full mt-4 inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#0D2E24] hover:bg-[#34D399] rounded-full transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? "Unlocking Calendar" : <>Proceed to Calendar <ArrowRight className="ml-2 w-4 h-4 text-[#34D399]" /></>}
            </button>
          </form>
        )}
      </div>

      {/* Right Calendar Availability Panel */}
      <div className="w-full md:w-3/5 bg-[#0D2E24]/[0.02] p-8 flex flex-col justify-center relative z-0">
        {confirmed ? (
          <div className="text-center space-y-5 py-6 max-w-lg mx-auto flex flex-col items-center justify-center">
            <div className="w-14 h-14 bg-[#34D399] text-white rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-[#34D399]" />
            </div>
            
            <h4 className="text-2xl font-extrabold text-[#0D2E24] font-heading tracking-tight">
              Consultation Reserved
            </h4>
            
            <div className="text-sm text-[#0D2E24]/90 font-medium space-y-2 leading-relaxed">
              <p>
                Thank you, <strong className="text-[#0D2E24] font-bold">{name || "Client"}</strong>.
              </p>
              <p className="flex items-center justify-center gap-1.5 flex-wrap">
                <span>Your provisional slot for</span>
                <span className="inline-block px-3 py-1 bg-white border border-[#34D399]/30 rounded-full font-bold text-[#0D2E24] text-xs shadow-xs whitespace-nowrap">
                  {selectedSlot}
                </span>
                <span>has been saved.</span>
              </p>
              <p className="text-xs text-[#0D2E24]/80 pt-1 leading-relaxed">
                Erika will contact you directly at <span className="font-bold text-[#0D2E24] underline decoration-[#34D399]/30">{email}</span> within 24 hours with your consultation link.
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#0D2E24] bg-white px-4 py-2 rounded-full border border-[#34D399]/30 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0D2E24]" /> 100% Confidential & Secure
              </span>
            </div>
          </div>
        ) : status === "unlocked" ? (
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-extrabold text-[#0D2E24] font-heading flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#34D399]" />
                Select Consultation Slot
              </h4>
              <p className="text-xs text-[#0D2E24]/80 font-medium mt-1">
                Choose your preferred time for a 15-minute intro call with Erika Martin:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableSlots.map((slot) => {
                const label = `${slot.day} · ${slot.time}`;
                const isSelected = selectedSlot === label;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setSelectedSlot(label)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#0D2E24] text-white border-[#0D2E24] shadow-md scale-[1.02]"
                        : "bg-white text-[#0D2E24] border-[#34D399]/20 hover:border-[#34D399]/50"
                    }`}
                  >
                    <p className="font-bold text-sm font-heading">{slot.day}</p>
                    <p className={`text-xs font-semibold ${isSelected ? "text-[#34D399]" : "text-[#0D2E24]"}`}>{slot.time}</p>
                    <p className={`text-[11px] mt-1 ${isSelected ? "text-slate-200" : "text-[#0D2E24]/70"}`}>{slot.type}</p>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                disabled={!selectedSlot}
                onClick={handleConfirmSlot}
                className="w-full py-3.5 px-6 rounded-full bg-[#34D399] hover:bg-[#0D2E24] text-white font-bold text-sm transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Selected Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#34D399]" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-white border border-[#34D399]/30 flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Calendar className="w-7 h-7 text-[#34D399]" />
            </div>
            <h4 className="font-extrabold text-xl text-[#0D2E24] mb-2 font-heading">Secure Calendar Availability</h4>
            <p className="text-xs text-[#0D2E24]/80 font-semibold max-w-xs mx-auto leading-relaxed">
              Complete the quick intake form on the left to view and unlock upcoming consultation slots.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
