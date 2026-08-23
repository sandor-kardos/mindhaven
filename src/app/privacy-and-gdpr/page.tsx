import { ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & GDPR | MindHaven Executive Therapy",
  description: "Strict privacy and UK GDPR compliance documentation for MindHaven practice.",
};

export default function PrivacyAndGDPR() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24]">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-[#0D2E24] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#155D49]" />
            <span>UK GDPR Compliant · 100% Confidential</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Our commitment to protecting your personal data, clinical records, and absolute executive discretion.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-[#155D49]/20 shadow-md space-y-8 text-[#0D2E24]">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">1. Data Controller</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin (MNCPS Acc.) is the sole Data Controller for MindHaven. All clinical documentation and contact details are processed in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">2. Private-Pay Confidentiality</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Because MindHaven is a 100% private-pay practice, no diagnostic codes, session summaries, or notes are shared with medical insurance providers, employers, or third parties unless mandated by law or explicit written request.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">3. Data Retention & Security</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Clinical notes are stored on encrypted, GDPR-compliant platforms for the statutory 7-year period required by NCPS guidelines, after which they are securely destroyed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
