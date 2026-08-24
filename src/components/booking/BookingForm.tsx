"use client";

import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [objective, setObjective] = useState("");
  const [status, setStatus] = useState<Status>("idle");

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
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-[#155D49]/15 bg-white flex flex-col items-center justify-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#E6F2ED] flex items-center justify-center">
          <Calendar className="w-6 h-6 text-[#155D49]" />
        </div>
        <p className="text-lg font-bold text-[#0D2E24] font-heading">
          Thanks, I&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-[#155D49]/15 bg-white">
      <h3 className="text-xl font-bold text-[#0D2E24] mb-6 flex items-center font-heading">
        <Calendar className="w-5 h-5 mr-3 text-[#155D49]" />
        Intake Form
      </h3>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Full Name</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-[#155D49]/30 bg-[#F8FAF8] text-[#0D2E24] focus:outline-none focus:ring-2 focus:ring-[#155D49]"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-[#155D49]/30 bg-[#F8FAF8] text-[#0D2E24] focus:outline-none focus:ring-2 focus:ring-[#155D49]"
            placeholder="jane@company.com"
          />
        </div>
        <div>
          <label htmlFor="objective" className="block text-sm font-bold text-[#0D2E24] mb-1.5">Primary Objective</label>
          <select
            id="objective"
            required
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-[#155D49]/30 bg-[#F8FAF8] text-[#0D2E24] focus:outline-none focus:ring-2 focus:ring-[#155D49]"
          >
            <option value="" disabled>Select an option...</option>
            <option value="burnout">Burnout Recovery</option>
            <option value="stress">Work Stress & Burnout</option>
            <option value="anxiety">High-Functioning Anxiety</option>
            <option value="career">Career Transition</option>
            <option value="other">Other</option>
          </select>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600 font-medium">
            Something went wrong — please try again or email mindhavenuk@gmail.com directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full mt-4 inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#0D2E24] hover:bg-[#155D49] rounded-full transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending…" : <>Proceed to Calendar <ArrowRight className="ml-2 w-4 h-4 text-[#34D399]" /></>}
        </button>
      </form>
    </div>
  );
}
