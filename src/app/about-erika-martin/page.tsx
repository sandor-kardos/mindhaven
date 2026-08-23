import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, GraduationCap, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Erika Martin | MNCPS Accredited Psychotherapist",
  alternates: { canonical: "https://mindhaven.uk/about-erika-martin" },
  description: "Learn more about Erika Martin (MNCPS Acc.), an accredited psychotherapeutic counsellor specializing in stress, burnout, and personal growth in Edinburgh.",
};

export default function AboutErikaMartin() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24]">
      
      {/* Header */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-[#0D2E24] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#155D49]" />
            <span>MNCPS (Acc.) · PSA Registered Practitioner</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Erika Martin
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Integrative Psychotherapist specializing in stress, anxiety, and nervous system regulation.
          </p>
        </div>
      </section>

      {/* Main Bio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column with Calm Breathing & Aura Effect */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#155D49]/25 via-[#E6F2ED] to-[#C88A58]/15 rounded-[2.5rem] blur-2xl opacity-90 animate-aura-drift"></div>
                <div className="relative rounded-[2.2rem] overflow-hidden border-4 border-white bg-white shadow-2xl animate-breathe animate-shimmer-border">
                  <Image 
                    src="/images/erika-portrait.png" 
                    alt="Erika Martin Psychotherapist"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto object-cover aspect-[4/5] filter brightness-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Right Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">
                Clinical Philosophy & Approach
              </h2>
              <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
                Ambitious professionals are often praised for their ability to push through stress, mask fatigue, and maintain flawless professional output. However, sustained activation of the nervous system inevitably leads to physiological exhaustion, decision fatigue, and emotional depletion.
              </p>
              <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
                As an MNCPS Accredited Psychotherapeutic Counsellor, I provide an evidence-informed space tailored to adults navigating career, relationship, or personal growth challenges. who require absolute discretion, therapeutic depth, and practical tools to restore psychological balance.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-[#155D49]/20 shadow-xs flex items-start gap-3">
                  <Award className="w-6 h-6 text-[#155D49] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0D2E24] font-heading">MNCPS Accredited</h4>
                    <p className="text-xs text-[#0D2E24]/75 font-medium">Verified by the National Counselling & Psychotherapy Society</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-2xl border border-[#155D49]/20 shadow-xs flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#155D49] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-[#0D2E24] font-heading">Integrative Training</h4>
                    <p className="text-xs text-[#0D2E24]/75 font-medium">Combining CBT, Psychodynamic, and Somatic Regulation</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link 
                  href="/fees-and-booking"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] text-white font-bold text-base rounded-full hover:bg-[#155D49] transition-all shadow-md"
                >
                  <span>Book Initial Consultation</span>
                  <ArrowRight className="w-5 h-5 text-[#34D399]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
