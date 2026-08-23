import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Legal Notice | Mindhaven",
  description: "Legal notices, company information, and regulatory compliance for Mindhaven.",
  alternates: { canonical: "https://mindhaven.uk/legal-notice" }
};

export default function LegalNotice() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24]">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-[#0D2E24] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#155D49]" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Legal & Regulatory Information
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Statutory information regarding the operation of Mindhaven.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-[#155D49]/20 shadow-md space-y-8 text-[#0D2E24]">
          {/* TODO: Legal Review Required */}
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded mb-8">
            <p className="font-bold text-sm">Draft Content: Pending Legal Review</p>
            <p className="text-xs mt-1">This section contains placeholder information that must be verified by legal counsel to ensure compliance with UK law.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">1. Company Information</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Mindhaven is operated by Erika Martin. 
              <br />
              Registered Address: 6 Newmills Rd, Dalkeith EH22 2LE.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">2. Professional Registration</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin is an accredited member of the National Counselling and Psychotherapy Society (MNCPS Acc.) and registered with the Professional Standards Authority (PSA).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
