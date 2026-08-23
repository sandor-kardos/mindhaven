import Link from "next/link";
import Image from "next/image";
import { BackgroundParticles } from "@/components/ui/BackgroundParticles";
import { CalmBreathingWidget } from "@/components/ui/CalmBreathingWidget";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Brain, 
  Activity, 
  Sparkles, 
  Check, 
  Calendar,
  Lock,
  Compass,
  Zap
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] overflow-hidden relative">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E6F2ED] via-[#EEF7F4] to-[#F8FAF8] text-[#0D2E24] overflow-hidden border-b border-[#155D49]/20 bg-calm-gradient">
        
        {/* Ambient Floating Orbs & Background Particles */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#155D49]/12 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />
        <BackgroundParticles />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#155D49]/30 shadow-xs text-xs font-bold uppercase tracking-wider text-[#155D49]">
                <ShieldCheck className="w-4 h-4 text-[#155D49]" />
                <span>MNCPS Accredited · PSA Registered · Bupa Specialist</span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#0D2E24] font-heading">
                Executive Burnout & High-Performer Therapy in <span className="text-[#155D49] border-b-4 border-[#155D49]/30">Edinburgh & Online UK</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[#0D2E24]/90 font-medium leading-relaxed max-w-2xl">
                Restoring psychological clarity, strategic resilience, and nervous system balance for corporate leaders, business owners, and senior professionals.
              </p>
              
              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  href="/fees-and-booking"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#0D2E24] hover:bg-[#155D49] rounded-full transition-all shadow-lg shadow-[#0D2E24]/15 hover:-translate-y-0.5 border border-[#155D49]/30 group"
                >
                  <Calendar className="w-5 h-5 text-[#34D399]" />
                  <span>Book Confidential Discovery Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#34D399]" />
                </Link>
                
                <Link 
                  href="#approach"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[#0D2E24] bg-white hover:bg-[#E6F2ED] border border-[#155D49]/30 rounded-full shadow-xs transition-colors"
                >
                  <Compass className="w-5 h-5 text-[#155D49]" />
                  <span>Explore Approach</span>
                </Link>
              </div>
              
              {/* Key Bullet Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#0D2E24]">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                  <span className="font-bold">100% Private Pay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                  <span className="font-bold">Encrypted Video</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                  <span className="font-bold">Edinburgh & Dalkeith</span>
                </div>
              </div>

            </div>
            
            {/* Right Column: Erika Martin Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Dynamic Aura Glow Backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#155D49]/30 via-[#E6F2ED] to-[#C88A58]/20 rounded-[2.5rem] blur-2xl opacity-90 animate-aura-drift"></div>
                
                {/* Image Container Card */}
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white bg-white shadow-2xl animate-breathe animate-shimmer-border">
                  <Image 
                    src="/images/erika-portrait.png"
                    alt="Erika Martin - MNCPS Accredited Psychotherapist"
                    width={500}
                    height={625}
                    priority
                    className="w-full h-auto object-cover aspect-[4/5] filter brightness-[1.02]"
                  />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 border border-[#155D49]/30 shadow-xl flex items-center gap-3">
                    <Sparkles className="w-7 h-7 text-[#155D49] shrink-0 animate-pulse" />
                    <div>
                      <h4 className="font-bold text-sm text-[#0D2E24] font-heading flex items-center gap-1.5">
                        Erika Martin 
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E6F2ED] text-[#155D49] border border-[#155D49]/30 font-bold">MNCPS (Acc.)</span>
                      </h4>
                      <p className="text-xs text-[#0D2E24]/80 font-medium mt-0.5">Integrative Psychotherapist & Executive Specialist</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Problem Validation - Perfectly Aligned Flow Cards */}
      <section className="py-24 bg-white px-4 border-b border-[#155D49]/15 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#155D49] bg-[#E6F2ED] border border-[#155D49]/30">
              The Reality of High Performance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2E24] font-heading">
              High Performance Should Not Require Systemic Self-Depletion
            </h2>
            <p className="text-[#0D2E24]/85 text-lg font-medium leading-relaxed">
              Burnout is not simple fatigue. It is a profound neurological shift that compromises executive function. We target the three core dimensions of occupational burnout:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            <div className="bg-[#F8FAF8] p-8 rounded-3xl border border-[#155D49]/20 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <Activity className="w-9 h-9 text-[#155D49] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0D2E24] mb-3 font-heading">1. Physiological Exhaustion</h3>
                <p className="text-[#0D2E24]/80 text-sm font-medium leading-relaxed">
                  Persistent tiredness that sleep doesn't fix, Sunday dread, and a braced nervous system unable to down-regulate after high-stakes meetings.
                </p>
              </div>
            </div>
            
            <div className="bg-[#F8FAF8] p-8 rounded-3xl border border-[#155D49]/20 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <Brain className="w-9 h-9 text-[#155D49] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0D2E24] mb-3 font-heading">2. Cognitive Distance</h3>
                <p className="text-[#0D2E24]/80 text-sm font-medium leading-relaxed">
                  Mental detachment from roles once enjoyed, rising cynicism, irritability with colleagues, and a loss of strategic clarity.
                </p>
              </div>
            </div>
            
            <div className="bg-[#F8FAF8] p-8 rounded-3xl border border-[#155D49]/20 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <Clock className="w-9 h-9 text-[#B8860B] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0D2E24] mb-3 font-heading">3. Reduced Efficacy</h3>
                <p className="text-[#0D2E24]/80 text-sm font-medium leading-relaxed">
                  Rising imposter anxiety, decision fatigue, and over-working to overcompensate for diminished focus and emotional bandwidth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Coaching vs Therapy Table */}
      <section className="py-24 bg-[#E6F2ED] text-[#0D2E24] px-4 relative overflow-hidden border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#155D49] bg-white border border-[#155D49]/30 shadow-xs">
              Structural Differences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2E24] font-heading">
              Executive Coaching vs. MindHaven Therapy
            </h2>
            <p className="text-[#0D2E24]/85 text-lg font-medium">
              Coaching focuses on tactical output. Executive therapy resolves the underlying root-cause stress architecture.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#155D49]/30 overflow-hidden shadow-xl card-flow-effect">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              
              {/* Coaching Column */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#155D49]/15 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F8FAF8] text-[#0D2E24]/80 border border-slate-300">
                    Performance Coaching
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D2E24] font-heading">Executive Coaching</h3>
                  <ul className="space-y-4 text-[#0D2E24]/80 text-sm font-medium">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#0D2E24]/50 shrink-0"></div>
                      <span>Targets external goals, KPI metrics, and short-term tactical leadership strategies.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#0D2E24]/50 shrink-0"></div>
                      <span>Assumes healthy baseline nervous system regulation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[#0D2E24]/50 shrink-0"></div>
                      <span>Optimizes outward behavioral performance.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* MindHaven Therapy Column */}
              <div className="p-8 md:p-12 bg-[#E6F2ED]/70 space-y-6 relative border-t md:border-t-0 border-[#155D49]/30 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#155D49] text-white shadow-xs font-bold">
                    Root-Cause Psychology
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D2E24] font-heading flex items-center justify-between">
                    MindHaven Therapy
                    <CheckCircle2 className="w-6 h-6 text-[#155D49]" />
                  </h3>
                  <ul className="space-y-4 text-[#0D2E24] text-sm font-semibold">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                      <span>Targets underlying nervous system dysregulation, imposter dynamics, and perfectionism.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                      <span>Directly treats physiological chronic stress and fight/flight survival states.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                      <span>Builds sustainable capacity, authentic boundaries, and deep psychological resilience.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 & 5: Modalities, Calm Pacer Widget & Credentials - Perfectly Aligned Grids */}
      <section id="approach" className="py-24 bg-[#F8FAF8] px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left: Approach */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#155D49] bg-[#E6F2ED] border border-[#155D49]/30">
                  Integrative Methodology
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
                  An Evidence-Based Therapeutic Approach
                </h2>
                <p className="text-[#0D2E24]/85 text-lg font-medium leading-relaxed">
                  Erika Martin combines Cognitive Behavioural Therapy (CBT), Psychodynamic Psychotherapy, Solution-Focused Brief Therapy, and Somatic/Nervous System Regulation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                <div className="p-6 bg-white rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect flex flex-col justify-between h-full">
                  <div>
                    <Zap className="w-8 h-8 text-[#B8860B] mb-3" />
                    <h4 className="font-bold text-[#0D2E24] mb-2 font-heading">CBT & Psychodynamic</h4>
                    <p className="text-[#0D2E24]/80 text-xs font-medium leading-relaxed">Deconstructing perfectionism and historical drivers of over-functioning.</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect flex flex-col justify-between h-full">
                  <div>
                    <Activity className="w-8 h-8 text-[#155D49] mb-3" />
                    <h4 className="font-bold text-[#0D2E24] mb-2 font-heading">Somatic Regulation</h4>
                    <p className="text-[#0D2E24]/80 text-xs font-medium leading-relaxed">Shifting your autonomic system from sympathetic dominance to calm safety.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Calm Pacer & Credentials */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Calm Pacer Widget */}
              <CalmBreathingWidget />

              {/* Bio & Credentials Box */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-[#155D49]/20 space-y-4 card-flow-effect">
                <div className="flex items-center gap-4">
                  <Image 
                    src="/images/erika-portrait.png" 
                    alt="Erika Martin" 
                    width={60} 
                    height={60} 
                    className="rounded-2xl object-cover aspect-square border-2 border-[#155D49]"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#0D2E24] font-heading">Erika Martin</h3>
                    <p className="text-xs font-bold text-[#155D49]">MNCPS Accredited Psychotherapist</p>
                    <p className="text-[11px] text-[#0D2E24]/70 font-medium mt-0.5">PSA Registered · Bupa Specialist</p>
                  </div>
                </div>
                
                <div className="p-4 bg-[#0D2E24] text-white rounded-2xl space-y-2 relative overflow-hidden shadow-md">
                  <div className="flex items-center gap-2 text-[#34D399] font-bold text-xs font-heading">
                    <Lock className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>100% Private & Discreet</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    MindHaven is an exclusive private-pay practice. No medical insurance records and end-to-end encrypted consultations.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: Consultation CTA & Process - Perfectly Aligned Flow Cards */}
      <section className="py-24 bg-white px-4 border-t border-[#155D49]/15 text-center">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#155D49] bg-[#E6F2ED] border border-[#155D49]/30">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2E24] font-heading">
              Your Path to Recovery
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
            <div className="bg-[#E6F2ED]/60 p-6 rounded-2xl border border-[#155D49]/20 card-flow-effect space-y-3 flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#155D49] font-heading">01</span>
                <h4 className="font-bold text-[#0D2E24] font-heading mt-1">Free 15-Min Intro Call</h4>
                <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed mt-2">Confidential chemistry check to discuss your objectives and verify clinical fit.</p>
              </div>
            </div>
            
            <div className="bg-[#E6F2ED]/60 p-6 rounded-2xl border border-[#155D49]/20 card-flow-effect space-y-3 flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#155D49] font-heading">02</span>
                <h4 className="font-bold text-[#0D2E24] font-heading mt-1">75-Min Assessment</h4>
                <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed mt-2">Deep-dive clinical evaluation and bespoke nervous system treatment roadmap.</p>
              </div>
            </div>
            
            <div className="bg-[#0D2E24] text-white p-6 rounded-2xl border border-[#155D49]/30 card-flow-effect space-y-3 shadow-md flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#34D399] font-heading">03</span>
                <h4 className="font-bold text-white font-heading mt-1">6-Week Program</h4>
                <p className="text-xs text-slate-200 leading-relaxed font-normal mt-2">Structured therapeutic recovery course tailored for high-functioning executives.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link 
              href="/fees-and-booking"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-[#0D2E24] hover:bg-[#155D49] rounded-full transition-all shadow-xl shadow-[#0D2E24]/15 hover:-translate-y-0.5 border border-[#155D49]/30 group"
            >
              <Calendar className="w-5 h-5 text-[#34D399]" />
              <span>Book Your Confidential Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#34D399]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
