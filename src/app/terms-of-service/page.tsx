import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service | MindHaven Executive Therapy",
  description: "Terms of service, practice agreements, and cancellation policies for MindHaven.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24]">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-[#0D2E24] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#155D49]" />
            <span>Practice Agreement</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Terms of Service & Practice Agreement
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Clear guidelines on session bookings, cancellation terms, and clinical ethics.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-[#155D49]/20 shadow-md space-y-8 text-[#0D2E24]">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">1. Appointment Cancellations</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              We require at least 48 hours notice for any session cancellation or rescheduling. Sessions cancelled with less than 48 hours notice will be charged at the full rate.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">2. Ethical Framework</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin abides strictly by the Code of Ethics of the National Counselling and Psychotherapy Society (NCPS) and the Professional Standards Authority (PSA).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
