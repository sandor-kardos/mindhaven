import Link from "next/link";
import { ShieldCheck, MapPin, Calendar, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Burnout Therapist Edinburgh | Stress Counselling",
  alternates: { canonical: "https://mindhaven.uk/burnout-therapist-edinburgh" },
  description: "Private counselling for stress and burnout, online and in-person in Edinburgh.",
};

export default function BurnoutTherapistEdinburgh() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24]">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-[#0D2E24] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#155D49]" />
            <span>Edinburgh & Midlothian Practice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Counselling for Stress and Burnout in Edinburgh
          </h1>
          <p className="text-lg text-[#0D2E24]/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Discreet, evidence-based stress and burnout counselling designed for professionals navigating high-pressure environments across the Scottish capital.
          </p>
        </div>
      </section>

      {/* Content Section with Postcode Coverage */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">
              Support Tailored to You
            </h2>
            <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
              Edinburgh's financial, legal, tech, and medical sectors demand relentless focus. When workload pressure crosses into physiological burnout, conventional rest is no longer sufficient. Our practice delivers targeted psychotherapeutic intervention to restore nervous system balance without compromising professional drive.
            </p>
          </div>

          {/* Postcode Coverage Box */}
          <div className="bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-md card-flow-effect space-y-6">
            <h3 className="text-xl font-bold text-[#0D2E24] font-heading flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#155D49]" />
              <span>Location & Postcode Coverage</span>
            </h3>
            <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
              In-person sessions are available in Dalkeith and Edinburgh, offering a private, confidential space away from busy city-center corridors.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 rounded-full bg-[#E6F2ED] text-[#155D49] text-xs font-bold border border-[#155D49]/30">EH1 · City Centre</span>
              <span className="px-4 py-2 rounded-full bg-[#E6F2ED] text-[#155D49] text-xs font-bold border border-[#155D49]/30">EH2 · West End</span>
              <span className="px-4 py-2 rounded-full bg-[#E6F2ED] text-[#155D49] text-xs font-bold border border-[#155D49]/30">EH3 · New Town</span>
              <span className="px-4 py-2 rounded-full bg-[#E6F2ED] text-[#155D49] text-xs font-bold border border-[#155D49]/30">EH12 · Parkgrove</span>
              <span className="px-4 py-2 rounded-full bg-[#E6F2ED] text-[#155D49] text-xs font-bold border border-[#155D49]/30">EH22 · Dalkeith</span>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link 
              href="/fees-and-booking"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] text-white font-bold text-base rounded-full hover:bg-[#155D49] transition-all shadow-md"
            >
              <Calendar className="w-5 h-5 text-[#34D399]" />
              <span>Book Confidential Edinburgh Consultation</span>
              <ArrowRight className="w-5 h-5 text-[#34D399]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
