import Link from "next/link";
import { ShieldCheck, Brain, Activity, Clock, Check, ArrowRight, Lock } from "lucide-react";

export const metadata = {
  title: "Executive Burnout Therapy | High-Performer Psychological Support",
  description: "Specialized executive burnout therapy for corporate leaders, business owners, and senior executives in the UK. 100% private-pay.",
};

export default function ExecutiveBurnoutTherapy() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24]">
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-[#0D2E24] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#155D49]" />
            <span>Specialized High-Performer Practice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Executive Burnout Therapy
          </h1>
          <p className="text-lg text-[#0D2E24]/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Deep-level psychotherapeutic intervention for senior leaders experiencing chronic strain, decision fatigue, and emotional depletion.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            <div className="bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-md card-flow-effect space-y-4 flex flex-col justify-between h-full">
              <div>
                <Activity className="w-8 h-8 text-[#155D49] mb-4" />
                <h3 className="text-xl font-bold text-[#0D2E24] font-heading">Nervous System Recovery</h3>
                <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
                  Transition your physiology out of perpetual fight-or-flight into parasympathetic equilibrium using bio-informed somatic techniques.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-md card-flow-effect space-y-4 flex flex-col justify-between h-full">
              <div>
                <Brain className="w-8 h-8 text-[#155D49] mb-4" />
                <h3 className="text-xl font-bold text-[#0D2E24] font-heading">Cognitive Restructuring</h3>
                <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
                  Dismantle perfectionism, imposter anxiety, and hyper-vigilant responsibility patterns driving over-functioning.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-md card-flow-effect space-y-4 flex flex-col justify-between h-full">
              <div>
                <Clock className="w-8 h-8 text-[#B8860B] mb-4" />
                <h3 className="text-xl font-bold text-[#0D2E24] font-heading">Boundary Architecture</h3>
                <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
                  Establish non-negotiable personal boundaries and sustainable executive capacity without sacrificing career velocity.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center pt-6">
            <Link 
              href="/fees-and-booking"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] text-white font-bold text-base rounded-full hover:bg-[#155D49] transition-all shadow-md"
            >
              <span>Explore Treatment Plans</span>
              <ArrowRight className="w-5 h-5 text-[#34D399]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
