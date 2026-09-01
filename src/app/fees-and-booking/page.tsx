import { ShieldAlert, Check, ArrowRight, MessageCircle, PiggyBank } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Fees & Pricing | Mindhaven",
  description: "Transparent pricing for private counselling with Erika Martin in Edinburgh and online across the UK. £60 individual pay-as-you-go sessions or £300 prepaid 6-session committed loyalty package.",
  alternates: { canonical: "https://mindhaven.uk/fees-and-booking" },
  openGraph: {
    title: "Fees & Pricing | Mindhaven",
    description: "Transparent pricing for private counselling with Erika Martin in Edinburgh and online across the UK. £60 individual pay-as-you-go sessions or £300 prepaid 6-session committed loyalty package.",
    url: "https://mindhaven.uk/fees-and-booking",
  },
  twitter: {
    title: "Fees & Pricing | Mindhaven",
    description: "Transparent pricing for private counselling with Erika Martin in Edinburgh and online across the UK. £60 individual pay-as-you-go sessions or £300 prepaid 6-session committed loyalty package.",
  }
};

export default function FeesAndBooking() {
  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24]">

      {/* Header */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-white to-white text-[#0D2E24] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <Badge variant="white">
            No Hidden Costs
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Transparent Pricing
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium leading-relaxed max-w-2xl mx-auto">
            Clear, upfront pricing with individual pay-as-you-go sessions or a discounted 6-session prepaid package.
          </p>
        </div>
      </section>

      {/* Rate Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">

            {/* Individual session */}
            <div className="bg-white p-8 rounded-3xl border border-[#34D399]/20 shadow-md card-flow-effect flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-slate-100 text-[#0D2E24] text-xs font-bold rounded-full mb-4 border border-[#34D399]/30">
                  <span>Pay As You Go</span>
                </div>
                <p className="text-xl font-bold text-[#0D2E24] mb-2 font-heading min-h-[56px] flex items-center">Individual Session</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-[#0D2E24]">£60</span>
                  <span className="text-[#0D2E24]/70 ml-2 font-semibold text-sm">/ 50 mins</span>
                </div>
                <p className="text-[#0D2E24]/80 text-sm font-medium leading-relaxed mb-6 min-h-[40px]">Flexible individual sessions tailored to your needs, paid per session.</p>
                <ul className="space-y-3 mb-8 text-[#0D2E24]">
                  <li className="flex items-start text-sm font-medium"><Check className="w-5 h-5 text-[#059669] mr-2.5 shrink-0 mt-0.5" /><span>£60 per 50-minute session</span></li>
                  <li className="flex items-start text-sm font-medium"><Check className="w-5 h-5 text-[#059669] mr-2.5 shrink-0 mt-0.5" /><span>Pay as you go after each session</span></li>
                  <li className="flex items-start text-sm font-medium"><Check className="w-5 h-5 text-[#059669] mr-2.5 shrink-0 mt-0.5" /><span>Online across the UK or in-person in Dalkeith/Edinburgh</span></li>
                  <li className="flex items-start text-sm font-medium"><Check className="w-5 h-5 text-[#059669] mr-2.5 shrink-0 mt-0.5" /><span>No upfront contract or minimum commitment</span></li>
                </ul>
              </div>
              <Link href="/contact" className="w-full text-center py-3.5 px-4 bg-slate-100 text-[#0D2E24] font-bold text-sm rounded-full border border-[#34D399]/30 hover:bg-[#34D399] hover:text-[#0D2E24] transition-colors">Get in Touch</Link>
            </div>

            {/* Prepaid Package Card */}
            <div className="bg-[#0D2E24] text-white p-8 rounded-3xl border-2 border-[#34D399] shadow-2xl card-flow-effect flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#34D399] text-[#0D2E24] text-xs font-bold rounded-full mb-4">
                  <PiggyBank className="w-3.5 h-3.5 text-[#0D2E24]" />
                  <span>Committed Loyalty Discount</span>
                </div>
                <p className="text-xl font-bold font-heading text-white mb-2 min-h-[56px] flex items-center">6-Session Prepaid Package</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-white">£300</span>
                  <span className="text-slate-300 ml-2 text-sm font-semibold">total (Save £60)</span>
                </div>
                <p className="text-slate-200 text-sm font-normal leading-relaxed mb-6 min-h-[40px]">Pay £300 in advance for a 6-session package, saving £60 compared to paying £60 individually per session (£360 total).</p>
                <ul className="space-y-3 mb-8 text-white font-medium">
                  <li className="flex items-start text-sm text-slate-100"><Check className="w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5" /><span className="font-semibold text-white">£300 total prepaid in advance (saving £60)</span></li>
                  <li className="flex items-start text-sm text-slate-100"><Check className="w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5" /><span className="font-semibold text-white">Equivalent to £50 per session</span></li>
                  <li className="flex items-start text-sm text-slate-100"><Check className="w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5" /><span className="font-semibold text-white">Discount applies exclusively when paid upfront as a package</span></li>
                </ul>
              </div>
              <Link href="/contact" className="w-full text-center py-3.5 px-4 bg-[#34D399] hover:bg-white hover:text-[#0D2E24] text-[#0D2E24] font-bold text-sm rounded-full transition-colors shadow-md relative z-10">Enquire About Package</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Confidentiality notice */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-50 border-l-4 border-[#34D399] p-6 md:p-8 rounded-r-2xl flex items-start shadow-sm card-flow-effect">
            <ShieldAlert className="w-8 h-8 text-[#34D399] mr-4 shrink-0" />
            <div>
              <p className="text-lg font-bold text-[#0D2E24] mb-2 font-heading">Confidentiality Guarantee</p>
              <p className="text-[#0D2E24]/85 text-sm leading-relaxed font-medium">
                Your privacy is a priority. Session details are kept strictly confidential and are only shared with a third party, such as an insurer, with your explicit consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free 20-Minute Initial Call CTA */}
      <section className="py-20 px-4 bg-white border-t border-[#34D399]/15 text-center">
        <div className="container mx-auto max-w-2xl space-y-6">
          <Badge>
            Free 20-Minute Initial Call · No Commitment
          </Badge>
          <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">
            Not Sure Where to Start?
          </h2>
          <p className="text-[#0D2E24]/80 font-medium leading-relaxed">
            A free 20-minute initial call is available to talk through what you are looking for and whether working together feels right. Erika replies the same day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 text-base font-bold text-white bg-[#0D2E24] hover:bg-[#34D399] hover:text-[#0D2E24] rounded-full transition-all shadow-xl hover:-translate-y-0.5 border border-[#34D399]/30 group"
          >
            <MessageCircle className="w-5 h-5 text-[#34D399] group-hover:text-[#0D2E24] transition-colors" />
            <span>Message Erika</span>
            <ArrowRight className="w-5 h-5 text-[#34D399] group-hover:text-[#0D2E24] group-hover:translate-x-1 transition-all" />
          </Link>
          
          <div className="pt-4">
            <Link href="/resources/life-compass" className="text-sm font-bold text-[#0D2E24] hover:text-[#34D399] underline underline-offset-4 transition-colors">
              Try the free Life Compass
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
