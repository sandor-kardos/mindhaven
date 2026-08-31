import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, GraduationCap, ArrowRight, Heart, Brain, User, Activity } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "About Erika Martin | MNCPS Accredited Psychotherapeutic Counsellor",
  description: "Learn more about Erika Martin, an accredited psychotherapeutic counsellor specialising in stress, burnout, and personal growth in Edinburgh.",
  alternates: { canonical: "https://mindhaven.uk/about-erika-martin" },
  openGraph: {
    title: "About Erika Martin | MNCPS Accredited Psychotherapeutic Counsellor",
    description: "Learn more about Erika Martin, an accredited psychotherapeutic counsellor specialising in stress, burnout, and personal growth in Edinburgh.",
    url: "https://mindhaven.uk/about-erika-martin",
  },
  twitter: {
    title: "About Erika Martin | MNCPS Accredited Psychotherapeutic Counsellor",
    description: "Learn more about Erika Martin, an accredited psychotherapeutic counsellor specialising in stress, burnout, and personal growth in Edinburgh.",
  }
};

export default function AboutErikaMartin() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24]">

      {/* Hero: Portrait with name overlay + bio - Rich Evergreen Theme */}
      <section className="py-16 lg:py-24 px-4 bg-[#0D2E24] text-white border-b border-[#34D399]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Portrait with name overlaid - Reverted from blob to rounded-3xl frame */}
            <div className="lg:col-span-5 flex justify-center mb-6 sm:mb-0">
              <div className="relative w-full max-w-[260px] sm:max-w-md lg:max-w-lg mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#34D399]/30 via-[#0D2E24] to-[#34D399]/20 rounded-[2.5rem] blur-2xl opacity-80 animate-aura-drift" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-white shadow-2xl animate-portrait-float">
                  <Image
                    src="/images/erika-portrait.png"
                    alt="Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor, Edinburgh"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
                {/* Name overlay floating in front - Slim & Sleek */}
                <div className="absolute -bottom-4 sm:-bottom-5 left-3 right-3 sm:left-4 sm:right-4 bg-[#FEFFF7] text-[#0D2E24] rounded-xl shadow-lg p-2.5 sm:p-4 z-10 border border-[#34D399]/40 text-center">
                  <h1 className="text-lg sm:text-2xl font-extrabold text-[#0D2E24] font-heading leading-tight">
                    Erika Martin
                  </h1>
                  <p className="text-[10px] sm:text-xs font-extrabold text-[#059669] mt-0.5 tracking-wide">
                    MNCPS Accredited Psychotherapeutic Counsellor
                  </p>
                  <p className="text-[9px] sm:text-[11px] text-[#0D2E24]/70 font-semibold mt-0.5">
                    PSA Registered
                  </p>
                </div>
              </div>
            </div>

            {/* Bio content */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="white" asChild className="bg-white/10 hover:bg-white/20 text-[#34D399] border-[#34D399]/40 transition-colors group">
                <a
                  href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Verify Erika Martin's Official NCPS Listing"
                >
                  <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                  <span>Verify NCPS Accreditation</span>
                </a>
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Therapeutic Philosophy & Approach
              </h2>

              <p className="text-slate-200 leading-relaxed font-medium">
                Many of the people I work with have been coping for a long time, managing high expectations at work, supporting others, or carrying worries they have never quite had space to address. Sometimes it takes a small thing to tip the balance, and you suddenly notice how exhausted, anxious, or disconnected you have become.
              </p>
              <p className="text-slate-200 leading-relaxed font-medium">
                As an MNCPS Accredited Psychotherapeutic Counsellor, I offer a confidential, non-judgemental space where you can slow down, make sense of what you are going through, and work towards feeling better. I draw on a range of therapeutic approaches, tailoring each session to what will be most useful for you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-[#34D399]/30 shadow-xs flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#34D399] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-white font-heading">MNCPS Accredited</p>
                    <p className="text-xs text-slate-200 font-medium">Verified by the National Counselling &amp; Psychotherapy Society</p>
                  </div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-[#34D399]/30 shadow-xs flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#34D399] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-white font-heading">Integrative Training</p>
                    <p className="text-xs text-slate-200 font-medium">CBT, Psychodynamic &amp; Person-centred approaches</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact#book"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#34D399] text-[#0D2E24] font-bold text-base rounded-full hover:bg-white transition-all shadow-md"
                >
                  <span>Book a Free Introductory Call</span>
                  <ArrowRight className="w-5 h-5 text-[#0D2E24]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How I Work - Emerald Tinted Background */}
      <section className="py-20 px-4 bg-[#34D399]/10 border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <Badge variant="white" className="bg-white text-[#0D2E24] border-[#34D399]/40">
              Integrative Approach
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
              How I Work
            </h2>
            <p className="text-[#0D2E24]/85 font-medium leading-relaxed">
              No single model fits everyone. I draw on several established approaches and shape each session around what you need most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#34D399]/30 card-flow-effect space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] flex items-center justify-center border border-[#34D399]/30">
                <User className="w-5 h-5 text-[#34D399]" />
              </div>
              <p className="font-bold text-base text-[#0D2E24] font-heading">Person-Centred</p>
              <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed">You lead the pace and direction. I offer a consistent, accepting, and non-judgemental presence.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#34D399]/30 card-flow-effect space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] flex items-center justify-center border border-[#34D399]/30">
                <Brain className="w-5 h-5 text-[#34D399]" />
              </div>
              <p className="font-bold text-base text-[#0D2E24] font-heading">CBT &amp; Psychodynamic</p>
              <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed">Exploring thought patterns and their deeper roots to create meaningful, lasting change.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#34D399]/30 card-flow-effect space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] flex items-center justify-center border border-[#34D399]/30">
                <Heart className="w-5 h-5 text-[#34D399]" />
              </div>
              <p className="font-bold text-base text-[#0D2E24] font-heading">Solution-Focused</p>
              <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed">Identifying your strengths and what is already working, alongside what needs to shift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards - Evergreen Box */}
      <section className="py-20 px-4 bg-[#FEFFF7] border-b border-[#34D399]/10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#0D2E24] text-white rounded-3xl border border-[#34D399]/30 shadow-xl p-8 md:p-12 space-y-8 card-flow-effect">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-[#34D399]/40">
                <ShieldCheck className="w-6 h-6 text-[#34D399]" />
              </div>
              <div className="space-y-2">
                <p className="font-extrabold text-lg text-white font-heading">Professional Registration &amp; Accreditation</p>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  Erika Martin is an Accredited Member of the National Counselling and Psychotherapy Society (MNCPS Acc.) and registered with the Professional Standards Authority (PSA). Accreditation requires meeting rigorous standards of training, supervised practice, and continuing professional development, and is subject to ongoing review.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#34D399] border border-[#34D399]/40 rounded-full text-xs font-bold transition-colors group"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify NCPS Accreditation</span>
              </a>
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#34D399] hover:bg-white text-[#0D2E24] border border-transparent rounded-full text-xs font-extrabold transition-colors"
              >
                <span>Book a Free Introductory Call</span>
                <ArrowRight className="w-4 h-4 text-[#0D2E24]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
