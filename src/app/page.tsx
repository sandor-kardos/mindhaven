import Link from "next/link";
import Image from "next/image";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I try a free consultation before committing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book an initial consultation to discuss your needs and see if we are a good fit before committing to a broader course of therapy."
      }
    },
    {
      "@type": "Question",
      "name": "How does online counselling work (video/phone)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Online sessions are conducted securely via encrypted video calls or over the phone, allowing you to engage in therapy from the comfort and privacy of your own space, anywhere in the UK."
      }
    },
    {
      "@type": "Question",
      "name": "Is online counselling as effective as meeting in person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, evidence indicates that online counselling, whether by video or phone, is just as effective as face-to-face sessions, offering the same level of professional support, depth, and confidentiality."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with stress and anxiety specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as an MNCPS Accredited Psychotherapeutic Counsellor, I specialise in stress, burnout, and anxiety. I work with clients to better understand what's driving these difficulties and to develop more effective ways of managing them."
      }
    },
    {
      "@type": "Question",
      "name": "Who can benefit from counselling (not just crisis; professionals too)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Counselling is not solely for those in immediate crisis. It is highly beneficial for ambitious professionals and adults navigating career, relationship, or personal growth challenges who want to thrive, not just survive."
      }
    },
    {
      "@type": "Question",
      "name": "Are sessions confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all sessions are strictly confidential. I adhere to the NCPS Code of Ethics and the UK GDPR, ensuring your privacy and records are fully protected. There are limited circumstances where confidentiality may need to be broken, for example if there is a serious risk of harm to yourself or others, and this would always be discussed with you first where possible."
      }
    },
    {
      "@type": "Question",
      "name": "How many sessions will I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The number of sessions depends on your individual circumstances. Some clients find the structure of our 6-session Growth Package (£480) sufficient, while others prefer ongoing individual sessions (£85 per session) for long-term well-being."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a session by visiting our Fees & Booking page, where you can select between an individual session or a Growth Package and contact us directly to schedule your appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you see clients in person in Edinburgh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in addition to online sessions across the UK, I see clients in person in Edinburgh and Dalkeith. Get in touch to arrange a suitable time and location."
      }
    },
    {
      "@type": "Question",
      "name": "What therapeutic approach/methodology do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I use an integrative approach that includes person-centred therapy, Cognitive Behavioural Therapy (CBT), and mindfulness-based practices, alongside somatic and nervous system regulation techniques."
      }
    }
  ]
};

import { BackgroundParticles } from "@/components/ui/BackgroundParticles";
import { CalmBreathingWidget } from "@/components/ui/CalmBreathingWidget";
import { Gallery4 } from "@/components/ui/gallery4";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
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
  Zap,
  ExternalLink,
  MessageCircle
} from "lucide-react";

export const metadata = { alternates: { canonical: "https://mindhaven.uk" } };

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E6F2ED] via-[#EEF7F4] to-[#F8FAF8] text-[#0D2E24] overflow-hidden border-b border-[#155D49]/20 ">
        
        {/* Ambient Floating Orbs & Background Particles */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#155D49]/12 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />
        <BackgroundParticles />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-stretch">
            
            {/* Left Column: Headlines & CTA */}
            <div className="md:col-span-7 flex flex-col justify-between py-4">
              <div className="space-y-8">
                
                {/* Tagline & Trust Badges Row */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#155D49]/30 shadow-xs text-xs font-extrabold uppercase tracking-wider text-[#155D49]">
                    <ShieldCheck className="w-4 h-4 text-[#155D49]" />
                    <span>What if you could thrive, not just survive?</span>
                  </div>

                  <a 
                    href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F2ED] hover:bg-[#155D49] text-[#155D49] hover:text-white border border-[#155D49]/30 shadow-xs text-xs font-extrabold uppercase tracking-wider transition-colors group cursor-pointer"
                    title="Verify Erika Martin's Official NCPS Accreditation"
                  >
                    <span>MNCPS Accredited · PSA Registered</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                  </a>
                </div>
                
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#0D2E24] font-heading">
                  Transform Stress Into Success
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-[#0D2E24]/90 font-medium leading-relaxed max-w-2xl">
                  Personal counselling that supports mental clarity, emotional balance, and sustainable change for adults navigating high-pressure lives.
                </p>

              </div>
              
              {/* Action Buttons (Aligned to bottom) */}
              <div className="mt-10 md:mt-auto space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact#book"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#0D2E24] hover:bg-[#155D49] rounded-full transition-all shadow-lg shadow-[#0D2E24]/15 hover:-translate-y-0.5 border border-[#155D49]/30 group"
                  >
                    <Calendar className="w-5 h-5 text-[#34D399]" />
                    <span>Book Free Introductory Call</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#34D399]" />
                  </Link>

                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447516785823"}?text=${encodeURIComponent("Hi Erika, I'd like to enquire about a free introductory call.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message Erika on WhatsApp"
                    className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-[#0D2E24] bg-white hover:bg-[#E6F2ED] border border-[#155D49]/30 rounded-full shadow-md transition-all hover:-translate-y-0.5 group"
                  >
                    <MessageCircle className="w-5 h-5 text-[#155D49]" />
                    <span>Message Me</span>
                  </a>
                </div>
                <div className="pt-1">
                  <Link href="#approach" className="text-sm text-[#0D2E24]/60 hover:text-[#155D49] font-semibold underline underline-offset-4 transition-colors">
                    Explore the approach
                  </Link>
                </div>
              </div>
              
            </div>
            
            {/* Right Column: Erika Martin Card */}
            <div className="md:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md mt-10 md:mt-0">
                
                {/* Image Container Card */}
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white bg-white shadow-2xl animate-breathe">
                  <Image 
                    src="/images/erika-portrait.png"
                    alt="Erika Martin - MNCPS Accredited Psychotherapeutic Counsellor"
                    width={500}
                    height={625}
                    priority
                    className="w-full h-auto object-cover aspect-[4/5] filter brightness-[1.02]"
                  />
                  
                  {/* Sharp Floating Overlay Badge with Direct NCPS Link */}
                  <a 
                    href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 border border-[#155D49]/40 shadow-2xl flex items-center justify-between group hover:border-[#155D49] transition-all cursor-pointer z-10"
                    title="Verify Erika Martin's Official NCPS Register Listing"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E6F2ED] flex items-center justify-center text-[#155D49] shrink-0 border border-[#155D49]/30">
                        <ShieldCheck className="w-5 h-5 text-[#155D49]" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#0D2E24] font-heading group-hover:text-[#155D49] transition-colors">
                          Erika Martin 
                        </h4>
                        <div className="text-xs text-[#155D49] font-extrabold mt-0.5">
                          <span>Accredited Counsellor</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#155D49]/60 group-hover:text-[#155D49] transition-colors shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Key Bullet Highlights */}
          <div className="mt-16 sm:mt-24 py-8 px-6 sm:px-12 bg-white/50 backdrop-blur-md rounded-3xl border border-[#155D49]/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 w-full">
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#E6F2ED] flex items-center justify-center shrink-0 border border-[#155D49]/20">
                <Check className="w-5 h-5 text-[#155D49]" />
              </div>
              <span className="font-extrabold text-[#0D2E24] text-sm sm:text-base">Confidential & Secure</span>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-[#155D49]/20"></div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#E6F2ED] flex items-center justify-center shrink-0 border border-[#155D49]/20">
                <Check className="w-5 h-5 text-[#155D49]" />
              </div>
              <span className="font-extrabold text-[#0D2E24] text-sm sm:text-base">Encrypted Video</span>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-[#155D49]/20"></div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-[#E6F2ED] flex items-center justify-center shrink-0 border border-[#155D49]/20">
                <Check className="w-5 h-5 text-[#155D49]" />
              </div>
              <span className="font-extrabold text-[#0D2E24] text-sm sm:text-base">Edinburgh & Dalkeith</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: Clinical Insights Articles Carousel (Placed right after Hero) */}
      <Gallery4 />

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

      {/* SECTION 3: Surface Advice vs Accredited Counselling */}
      <section className="py-24 bg-[#E6F2ED] text-[#0D2E24] px-4 relative overflow-hidden border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-5xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#155D49] bg-white border border-[#155D49]/30 shadow-xs">
              Professional Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2E24] font-heading">
              Informal Surface Advice vs. Accredited Counselling
            </h2>
            <p className="text-[#0D2E24]/85 text-lg font-medium leading-relaxed">
              Informal support has its place, but some difficulties need the depth and structure of professional counselling to truly work through.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#155D49]/30 overflow-hidden shadow-xl card-flow-effect">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
              
              {/* Informal Surface Advice Column */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#155D49]/15 space-y-6 flex flex-col justify-between h-full bg-[#F8FAF8]/50">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-200/80 text-slate-700 border border-slate-300">
                    Recommended for Occasional Use
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D2E24] font-heading">Informal Surface Advice</h3>
                  <ul className="space-y-4 text-[#0D2E24]/80 text-sm font-medium">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-400 shrink-0"></div>
                      <span>Useful for occasional light stress management or short-term productivity tips.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-400 shrink-0"></div>
                      <span>Focuses on immediate tactical output without addressing deep emotional patterns.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-400 shrink-0"></div>
                      <span>Does not involve professional accountability, regulatory oversight, or an ethical governance framework.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* MindHaven Accredited Counselling Column */}
              <div className="p-8 md:p-12 bg-[#E6F2ED]/70 space-y-6 relative border-t md:border-t-0 border-[#155D49]/30 flex flex-col justify-between h-full">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#155D49] text-white shadow-xs">
                    MNCPS Accredited Care
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D2E24] font-heading flex items-center justify-between">
                    MindHaven Counselling
                    <CheckCircle2 className="w-6 h-6 text-[#155D49]" />
                  </h3>
                  <ul className="space-y-4 text-[#0D2E24] text-sm font-semibold">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                      <span>Delivered by an MNCPS Accredited Counsellor bound by strict professional ethical standards.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                      <span>Works with the underlying causes of stress, burnout, anxiety, and emotional difficulties.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#155D49] shrink-0" />
                      <span>Supports lasting wellbeing, emotional balance, and greater clarity in everyday life.</span>
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
                    <p className="text-[#0D2E24]/80 text-xs font-medium leading-relaxed">Exploring thought patterns and their deeper roots to create meaningful, lasting change.</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect flex flex-col justify-between h-full">
                  <div>
                    <Activity className="w-8 h-8 text-[#155D49] mb-3" />
                    <h4 className="font-bold text-[#0D2E24] mb-2 font-heading">Somatic Regulation</h4>
                    <p className="text-[#0D2E24]/80 text-xs font-medium leading-relaxed">Bringing greater calm and steadiness to an overactivated nervous system.</p>
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
                    <p className="text-xs font-bold text-[#155D49]">MNCPS Accredited Psychotherapeutic Counsellor</p>
                    <p className="text-[11px] text-[#0D2E24]/70 font-medium mt-0.5">PSA Registered</p>
                  </div>
                </div>
                
                <div className="p-4 bg-[#0D2E24] text-white rounded-2xl space-y-2 relative overflow-hidden shadow-md">
                  <div className="flex items-center gap-2 text-[#34D399] font-bold text-xs font-heading">
                    <Lock className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>100% Private & Discreet</span>
                  </div>
                  <p className="text-[11px] text-slate-200 leading-relaxed">
                    Mindhaven prioritises complete confidentiality, with end-to-end encrypted consultations and information shared only with your consent.
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
                <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed mt-2">A free, informal call to talk about what's brought you here and whether working together feels right.</p>
              </div>
            </div>
            
            <div className="bg-[#E6F2ED]/60 p-6 rounded-2xl border border-[#155D49]/20 card-flow-effect space-y-3 flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#155D49] font-heading">02</span>
                <h4 className="font-bold text-[#0D2E24] font-heading mt-1">Initial Session (75 mins)</h4>
                <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed mt-2">An in-depth first session to explore your situation together and agree the best approach for you.</p>
              </div>
            </div>
            
            <div className="bg-[#0D2E24] text-white p-6 rounded-2xl border border-[#155D49]/30 card-flow-effect space-y-3 shadow-md flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#34D399] font-heading">03</span>
                <h4 className="font-bold text-white font-heading mt-1">6-Session Programme</h4>
                <p className="text-xs text-slate-200 leading-relaxed font-normal mt-2">A structured series of sessions, tailored to your individual needs and goals.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-[#0D2E24] hover:bg-[#155D49] rounded-full transition-all shadow-xl shadow-[#0D2E24]/15 hover:-translate-y-0.5 border border-[#155D49]/30 group"
            >
              <Calendar className="w-5 h-5 text-[#34D399]" />
              <span>Book a Free Introductory Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#34D399]" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION: FAQ */}
      <section id="faq" className="py-24 bg-[#E6F2ED]/40 px-4 border-t border-[#155D49]/15">
        <div className="container mx-auto max-w-3xl space-y-10">
          <div className="text-center space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#155D49] bg-white border border-[#155D49]/30">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          
          <FaqAccordion 
            faqs={[
              {
                question: "Can I try a free consultation before committing?",
                answer: "You can book an initial consultation to discuss your needs and see if we are a good fit before committing to a broader course of therapy."
              },
              {
                question: "How does online counselling work (video/phone)?",
                answer: "Online sessions are conducted securely via encrypted video calls or over the phone, allowing you to engage in therapy from the comfort and privacy of your own space, anywhere in the UK."
              },
              {
                question: "Is online counselling as effective as meeting in person?",
                answer: "Yes, evidence indicates that online counselling, whether by video or phone, is just as effective as face-to-face sessions, offering the same level of professional support, depth, and confidentiality."
              },
              {
                question: "Do you help with stress and anxiety specifically?",
                answer: "Yes, as an MNCPS Accredited Psychotherapeutic Counsellor, I specialise in stress, burnout, and anxiety. I work with clients to better understand what's driving these difficulties and to develop more effective ways of managing them."
              },
              {
                question: "Who can benefit from counselling (not just crisis; professionals too)?",
                answer: "Counselling is not solely for those in immediate crisis. It is highly beneficial for ambitious professionals and adults navigating career, relationship, or personal growth challenges who want to thrive, not just survive."
              },
              {
                question: "Are sessions confidential?",
                answer: "Yes, all sessions are strictly confidential. I adhere to the NCPS Code of Ethics and the UK GDPR, ensuring your privacy and records are fully protected. There are limited circumstances where confidentiality may need to be broken, for example if there is a serious risk of harm to yourself or others, and this would always be discussed with you first where possible."
              },
              {
                question: "How many sessions will I need?",
                answer: "The number of sessions depends on your individual circumstances. Some clients find the structure of our 6-session Growth Package (£480) sufficient, while others prefer ongoing individual sessions (£85 per session) for long-term well-being."
              },
              {
                question: "How do I book a session?",
                answer: "You can book a session by visiting our Fees & Booking page, where you can select between an individual session or a Growth Package and contact us directly to schedule your appointment."
              },
              {
                question: "Do you see clients in person in Edinburgh?",
                answer: "Yes, in addition to online sessions across the UK, I see clients in person in Edinburgh and Dalkeith. Get in touch to arrange a suitable time and location."
              },
              {
                question: "What therapeutic approach/methodology do you use?",
                answer: "I use an integrative approach that includes person-centred therapy, Cognitive Behavioural Therapy (CBT), and mindfulness-based practices, alongside somatic and nervous system regulation techniques."
              }
            ]} 
          />
        </div>
      </section>

    </div>
  );
}
