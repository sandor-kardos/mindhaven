import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, GraduationCap, ArrowRight, Heart, Brain, User, Activity } from "lucide-react";

export const metadata = {
  title: "About Erika Martin | MNCPS Accredited Psychotherapeutic Counsellor",
  alternates: { canonical: "https://mindhaven.uk/about-erika-martin" },
  description: "Erika Martin is an MNCPS accredited counsellor in Edinburgh with a person-centred, evidence-based therapeutic approach. Specialising in stress, burnout, and personal resilience.",
};

export default function AboutErikaMartin() {
  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24]">

      {/* Hero: Portrait with name overlay + bio */}
      <section className="py-16 lg:py-24 px-4 bg-white border-b border-[#155D49]/15">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Portrait with name overlaid */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#155D49]/20 via-[#34D399]/15 to-[#C88A58]/10 rounded-[2.5rem] blur-2xl opacity-80 animate-aura-drift" />
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white bg-white shadow-2xl animate-breathe">
                  <Image
                    src="/images/erika-portrait.png"
                    alt="Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor, Edinburgh"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D2E24] via-[#0D2E24]/70 to-transparent pt-12 pb-5 px-5">
                    <h1 className="text-2xl font-extrabold text-white font-heading leading-tight">
                      Erika Martin
                    </h1>
                    <p className="text-xs font-bold text-[#34D399] mt-1 tracking-wide">
                      MNCPS Accredited Psychotherapeutic Counsellor
                    </p>
                    <p className="text-[11px] text-white/80 font-medium mt-0.5">PSA Registered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio content */}
            <div className="lg:col-span-7 space-y-6">
              <a
                href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider hover:bg-[#34D399]/10 transition-colors group"
                title="Verify Erika Martin's Official NCPS Listing"
              >
                <ShieldCheck className="w-4 h-4 text-[#155D49]" />
                <span>Verify NCPS Accreditation</span>
              </a>

              <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">
                Therapeutic Philosophy & Approach
              </h2>

              <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
                Many of the people I work with have been coping for a long time, managing high expectations at work, supporting others, or carrying worries they have never quite had space to address. Sometimes it takes a small thing to tip the balance, and you suddenly notice how exhausted, anxious, or disconnected you have become.
              </p>
              <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
                As an MNCPS Accredited Psychotherapeutic Counsellor, I offer a confidential, non-judgemental space where you can slow down, make sense of what you are going through, and work towards feeling better. For many people, that process also means rebuilding personal resilience in a way that actually holds. I draw on a range of therapeutic approaches, tailoring each session to what will be most useful for you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-2xl border border-[#155D49]/20 shadow-xs flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#155D49] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-[#0D2E24] font-heading">MNCPS Accredited</p>
                    <p className="text-xs text-[#0D2E24]/75 font-medium">Verified by the National Counselling &amp; Psychotherapy Society</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#155D49]/20 shadow-xs flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#155D49] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-sm text-[#0D2E24] font-heading">Integrative Training</p>
                    <p className="text-xs text-[#0D2E24]/75 font-medium">CBT, Psychodynamic, Person-centred & Body-aware approaches</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact#book"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] text-white font-bold text-base rounded-full hover:bg-[#155D49] transition-all shadow-md"
                >
                  <span>Book a Free 20-Minute Initial Call</span>
                  <ArrowRight className="w-5 h-5 text-[#34D399]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 px-4 bg-white border-b border-[#155D49]/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#155D49] bg-[#34D399]/10 border border-[#155D49]/30">
              Integrative Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
              How I Work
            </h2>
            <p className="text-[#0D2E24]/80 font-medium leading-relaxed">
              No single model fits everyone. I draw on several established approaches and shape each session around what you need most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 bg-white rounded-2xl border border-[#155D49]/15 card-flow-effect space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#34D399]/10 flex items-center justify-center">
                <User className="w-5 h-5 text-[#155D49]" />
              </div>
              <p className="font-bold text-sm text-[#0D2E24] font-heading">Person-Centred</p>
              <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed">You lead the pace and direction. I offer a consistent, accepting, and non-judgemental presence.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#155D49]/15 card-flow-effect space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#34D399]/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-[#155D49]" />
              </div>
              <p className="font-bold text-sm text-[#0D2E24] font-heading">CBT &amp; Psychodynamic</p>
              <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed">Exploring thought patterns and their deeper roots to create meaningful, lasting change.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#155D49]/15 card-flow-effect space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#34D399]/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#155D49]" />
              </div>
              <p className="font-bold text-sm text-[#0D2E24] font-heading">Body-Aware &amp; Nervous System</p>
              <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed">Working with the body's signals and the nervous system to release accumulated stress.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#155D49]/15 card-flow-effect space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#34D399]/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#155D49]" />
              </div>
              <p className="font-bold text-sm text-[#0D2E24] font-heading">Solution-Focused</p>
              <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed">Identifying your strengths and what is already working, alongside what needs to shift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-20 px-4 bg-white border-b border-[#155D49]/10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl border border-[#155D49]/20 shadow-md p-8 md:p-12 space-y-8 card-flow-effect">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#34D399]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#155D49]" />
              </div>
              <div className="space-y-2">
                <p className="font-extrabold text-lg text-[#0D2E24] font-heading">Professional Registration &amp; Accreditation</p>
                <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                  Erika Martin is an Accredited Member of the National Counselling and Psychotherapy Society (MNCPS Acc.) and registered with the Professional Standards Authority (PSA). Accreditation requires meeting rigorous standards of training, supervised practice, and continuing professional development, and is subject to ongoing review.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#34D399]/10 hover:bg-[#155D49] text-[#155D49] hover:text-white border border-[#155D49]/30 rounded-full text-xs font-bold transition-colors group"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify NCPS Accreditation</span>
              </a>
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D2E24] hover:bg-[#155D49] text-white border border-transparent rounded-full text-xs font-bold transition-colors"
              >
                <span>Book a Free 20-Minute Initial Call</span>
                <ArrowRight className="w-4 h-4 text-[#34D399]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
