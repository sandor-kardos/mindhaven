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
      "name": "Do I need to be in crisis to seek counselling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Counselling is not only for acute crisis. Many of the people I work with are managing well by most measures, but carrying something they have not had space to address. If something is getting in the way of how you want to feel or function, that is a reasonable place to start."
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
        "text": "The number of sessions depends on your individual circumstances. Some clients find the structure of the 6-session Growth Package (£480) sufficient, while others prefer ongoing individual sessions (£85 per session) for long-term well-being."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a session by visiting the Fees & Booking page, where you can select between an individual session or a Growth Package and contact us directly to schedule your appointment."
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
import { HalftonePattern } from "@/components/ui/HalftonePattern";
import { Gallery4 } from "@/components/ui/gallery4";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Brain,
  Activity,
  Calendar,
  Lock,
  Compass,
  Zap,
  ExternalLink,
  MessageCircle,
  Video,
  MapPin,
  ChevronDown
} from "lucide-react";

export const metadata = { 
  title: "Mindhaven | Personal Counselling for Stress & Burnout",
  description: "Evidence-based counselling for stress, burnout, and anxiety. Erika Martin provides a safe, private space in Edinburgh and online across the UK.",
  alternates: { canonical: "https://mindhaven.uk" },
  openGraph: {
    title: "Mindhaven | Personal Counselling for Stress & Burnout",
    description: "Evidence-based counselling for stress, burnout, and anxiety. Erika Martin provides a safe, private space in Edinburgh and online across the UK.",
  },
  twitter: {
    title: "Mindhaven | Personal Counselling for Stress & Burnout",
    description: "Evidence-based counselling for stress, burnout, and anxiety. Erika Martin provides a safe, private space in Edinburgh and online across the UK.",
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24] overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* HERO SECTION */}
      <section className="relative pt-6 pb-20 sm:pt-12 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FEFFF7] via-[#FEFFF7] to-[#FEFFF7] text-[#0D2E24] overflow-hidden border-b border-[#34D399]/20 ">
        
        {/* Ambient Floating Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#34D399]/12 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-stretch">
            
            {/* Left Column: Headlines & CTA */}
            <div className="md:col-span-7 flex flex-col justify-between py-2 md:py-4">
              <div className="space-y-8">
                
                {/* Tagline & Trust Badges Row */}
                <div className="flex items-center gap-2">
                  <div className="inline-flex items-center justify-center p-2 rounded-full bg-white border border-[#34D399]/30 shadow-xs text-[#0D2E24]">
                    <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                  </div>

                  <a 
                    href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEFFF7] hover:bg-[#34D399] text-[#0D2E24] hover:text-white border border-[#34D399]/30 shadow-xs text-xs font-extrabold uppercase tracking-wider transition-colors group cursor-pointer"
                    title="Verify Erika Martin's Official NCPS Accreditation"
                  >
                    <span>MNCPS Accredited · PSA Registered</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                  </a>
                </div>
                
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#0D2E24] font-heading">
                  Counselling for the weight you carry.
                </h1>
                
                {/* Subheadline */}
                <p className="text-lg sm:text-xl lg:text-2xl text-[#0D2E24]/90 font-medium leading-relaxed max-w-2xl">
                  Confidential counselling for stress, burnout, and the demands that ambitious lives bring. Available in Edinburgh, Dalkeith, and online across the UK.
                </p>

              </div>
              
              {/* Action Button: 1 Clean Message Me Button on Mobile */}
              <div className="mt-8 md:mt-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#0D2E24] hover:bg-[#34D399] rounded-full transition-all shadow-lg shadow-[#0D2E24]/15 hover:-translate-y-0.5 border border-[#34D399]/30 group text-center"
                  >
                    <MessageCircle className="w-5 h-5 text-[#34D399]" />
                    <span>Message Me</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#34D399]" />
                  </Link>

                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447516785823"}?text=${encodeURIComponent("Hi Erika, I'd like to enquire about counselling.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message Erika on WhatsApp"
                    className="hidden sm:inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-[#0D2E24] bg-white hover:bg-[#ECFDF5] border border-[#34D399]/30 hover:border-[#25D366] rounded-full shadow-md transition-all hover:-translate-y-0.5 group"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              
            </div>
            
            {/* Right Column: Erika Martin Card */}
            <div className="md:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-xl mt-10 md:mt-0">
                
                {/* Image Container Card - Reverted from blob to clean rounded square frame with calm floating effect */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white bg-white shadow-2xl animate-portrait-float">
                  <Image 
                    src="/images/erika-portrait.png"
                    alt="Erika Martin - MNCPS Accredited Psychotherapeutic Counsellor"
                    width={500}
                    height={625}
                    priority
                    className="w-full h-auto object-cover aspect-[4/5] filter brightness-[1.02]"
                  />
                </div>
                  
                {/* Sharp Floating Overlay Badge with Direct NCPS Link */}
                <a 
                  href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 border border-[#34D399]/40 shadow-2xl flex items-center justify-between group hover:border-[#34D399] transition-all cursor-pointer z-10"
                  title="Verify Erika Martin's Official NCPS Register Listing"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] flex items-center justify-center text-[#0D2E24] shrink-0 border border-[#34D399]/30">
                      <ShieldCheck className="w-5 h-5 text-[#34D399]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-[#0D2E24] font-heading group-hover:text-[#0D2E24] transition-colors">
                        Erika Martin 
                      </h4>
                      <div className="text-xs text-[#0D2E24] font-extrabold mt-0.5">
                        <span>Accredited Counsellor</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-8 flex justify-center">
            <Link href="#approach" aria-label="Scroll to approach section" className="p-3 text-[#0D2E24]/60 hover:text-[#0D2E24] transition-colors animate-calm-arrow cursor-pointer">
              <ChevronDown className="w-8 h-8 text-[#34D399]" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 1.5: Clinical Insights Articles Carousel (Placed right after Hero) */}
      <Gallery4 />

      {/* SECTION 2: Problem Validation - Rich Evergreen Background */}
      <section className="py-24 bg-[#0D2E24] text-white px-4 border-b border-[#34D399]/30 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <HalftonePattern color="#34D399" className="-top-8 right-0 w-[380px] h-[380px]" opacity={0.15} />
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40">
              When work takes its toll
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
              Burnout is more than feeling exhausted.
            </h2>
            <p className="text-slate-200 text-lg font-medium leading-relaxed">
              Burnout affects how you think, how you feel about your work, and your energy for everything else. The three patterns seen most often:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-[#34D399]/30 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-3 md:block md:mb-0">
                  <Activity className="w-9 h-9 text-[#34D399] shrink-0 group-hover:scale-110 transition-transform md:mb-6" />
                  <h3 className="text-xl font-bold text-white font-heading md:mb-3">Exhaustion that rest does not fix</h3>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  Persistent tiredness that sleep doesn't resolve, paired with an inability to down-regulate and unwind.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-[#34D399]/30 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-3 md:block md:mb-0">
                  <Brain className="w-9 h-9 text-[#34D399] shrink-0 group-hover:scale-110 transition-transform md:mb-6" />
                  <h3 className="text-xl font-bold text-white font-heading md:mb-3">Disconnection from work you once valued</h3>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  Growing mental detachment from your role, rising cynicism, and a loss of strategic clarity.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-[#34D399]/30 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-3 md:block md:mb-0">
                  <Clock className="w-9 h-9 text-[#34D399] shrink-0 group-hover:scale-110 transition-transform md:mb-6" />
                  <h3 className="text-xl font-bold text-white font-heading md:mb-3">Doubting your own effectiveness</h3>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  Rising imposter anxiety and over-working to overcompensate for diminished focus.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: When counselling helps - Emerald Tinted Background */}
      <section id="comparison" className="py-24 bg-[#34D399]/10 text-[#0D2E24] px-4 relative overflow-hidden border-b border-[#34D399]/30">
        <div className="container mx-auto max-w-3xl relative z-10 text-center space-y-8">

          <div className="space-y-4">
            <Badge variant="white" className="font-extrabold shadow-xs bg-white text-[#0D2E24] border-[#34D399]/40">
              When counselling helps
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D2E24] font-heading">
              When structured support makes a difference
            </h2>
          </div>

          <p className="text-[#0D2E24]/90 text-lg font-medium leading-relaxed text-left">
            Talking to someone you trust is genuinely valuable, and professional counselling does not replace those relationships. What it offers is something different: a consistent, confidential space dedicated entirely to you, with a trained practitioner who has no stake in the outcome and no existing relationship to protect. That structure tends to matter most when the same patterns keep recurring, when what you are carrying has been there a long time, or when the people around you are too close to the situation to see it clearly. If you are not sure whether counselling is right for you, a free 20-minute call is available with no obligation to proceed.
          </p>

            <div>
              <Link
                href="/contact#book"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#0D2E24] hover:bg-[#34D399] hover:text-[#0D2E24] rounded-full transition-all shadow-lg shadow-[#0D2E24]/15 hover:-translate-y-0.5 border border-[#34D399]/30 group"
              >
                <Calendar className="w-5 h-5 text-[#34D399] group-hover:text-[#0D2E24] transition-colors" />
                <span>Book a Free 20-Min Initial Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#34D399] group-hover:text-[#0D2E24] transition-colors" />
              </Link>
            </div>

          <div className="pt-4 flex justify-center">
            <Link href="#approach" aria-label="Scroll to approach section" className="p-3 text-[#0D2E24]/40 hover:text-[#0D2E24] transition-colors animate-calm-arrow cursor-pointer">
              <ChevronDown className="w-8 h-8" strokeWidth={1.5} />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4 & 5: Modalities, Calm Pacer Widget & Credentials */}
      <section id="approach" className="py-24 bg-[#FEFFF7] px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <HalftonePattern color="#34D399" className="-bottom-8 left-0 w-[380px] h-[380px]" opacity={0.20} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left: Approach */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <Badge>
                  Therapeutic Approach
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
                  An Evidence-Based Therapeutic Approach
                </h2>
                <p className="text-[#0D2E24]/85 text-lg font-medium leading-relaxed">
                  Erika Martin combines Cognitive Behavioural Therapy (CBT), Psychodynamic Psychotherapy, and Solution-Focused Brief Therapy to help you manage stress and build sustainable clarity.
                </p>
              </div>
              
              <div className="pt-2">
                <Link
                  href="/about-erika-martin#approach"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0D2E24] hover:text-[#059669] transition-colors group"
                >
                  <span>Read more about Erika&apos;s therapeutic approach</span>
                  <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Right: Credentials */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">

              {/* Bio & Credentials Box */}
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-[#34D399]/20 space-y-4 card-flow-effect">
                <div className="flex items-center gap-4">
                  <Image 
                    src="/images/erika-portrait.png" 
                    alt="Erika Martin" 
                    width={60} 
                    height={60} 
                    className="rounded-2xl object-cover aspect-square border-2 border-[#34D399]"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#0D2E24] font-heading">Erika Martin</h3>
                    <p className="text-xs font-bold text-[#0D2E24]">MNCPS Accredited Psychotherapeutic Counsellor</p>
                    <p className="text-[11px] text-[#0D2E24]/70 font-medium mt-0.5">PSA Registered</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: Consultation CTA & Process - Evergreen Background */}
      <section className="py-24 bg-[#0D2E24] text-white px-4 border-t border-[#34D399]/30 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl space-y-12 relative z-10">
          <HalftonePattern 
            color="#34D399" 
            className="-top-10 -left-6 w-[350px] h-[350px]" 
            opacity={0.15} 
          />
          <HalftonePattern 
            color="#059669" 
            className="-bottom-12 -right-6 w-[320px] h-[320px]" 
            opacity={0.15} 
          />
          
          <div className="space-y-4">
            <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40">
              Simple 3-Step Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
              A simple, structured start
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-[#34D399]/30 card-flow-effect space-y-3 flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#34D399] font-heading">01</span>
                <h4 className="font-bold text-white font-heading mt-1">Free 20-Min Initial Call</h4>
                <p className="text-xs text-slate-200 font-medium leading-relaxed mt-2">A free, informal 20-minute call to talk about what's brought you here and whether working together feels right.</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-[#34D399]/30 card-flow-effect space-y-3 flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#34D399] font-heading">02</span>
                <h4 className="font-bold text-white font-heading mt-1">First Session (60 mins)</h4>
                <p className="text-xs text-slate-200 font-medium leading-relaxed mt-2">An in-depth first session to explore your situation together and establish the best way forward.</p>
              </div>
            </div>
            
            <div className="bg-[#34D399] text-[#0D2E24] p-6 rounded-2xl border border-[#34D399] card-flow-effect space-y-3 shadow-md flex flex-col justify-between h-full">
              <div>
                <span className="text-2xl font-black text-[#0D2E24] font-heading">03</span>
                <h4 className="font-bold text-[#0D2E24] font-heading mt-1">Flexible & Prepaid Options</h4>
                <p className="text-xs text-[#0D2E24]/90 leading-relaxed font-semibold mt-2">Pay £60 per session as you go, or choose the £300 prepaid 6-session committed loyalty package (saving £60 upfront).</p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-[#0D2E24] bg-[#34D399] hover:bg-white rounded-full transition-all shadow-xl shadow-black/20 hover:-translate-y-0.5 border border-[#34D399] group"
            >
              <MessageCircle className="w-5 h-5 text-[#0D2E24]" />
              <span>Send Erika a Message</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#0D2E24]" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION: FAQ */}
      <section id="faq" className="py-24 bg-[#FEFFF7] px-4 border-t border-[#34D399]/15">
        <div className="container mx-auto max-w-3xl space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="white" className="font-extrabold">
              Clear Answers
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          
          <FaqAccordion 
            faqs={[
              {
                question: "Can I try a free consultation before committing?",
                answer: "Yes, you can start with a Free 20-Minute Initial Call to discuss your needs and see if we are a good fit before deciding to move forward."
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
                question: "Do I need to be in crisis to seek counselling?",
                answer: "No. Counselling is not only for acute crisis. Many of the people I work with are managing well by most measures, but carrying something they have not had space to address. If something is getting in the way of how you want to feel or function, that is a reasonable place to start."
              },
              {
                question: "Are sessions confidential?",
                answer: "Yes, all sessions are strictly confidential. I adhere to the NCPS Code of Ethics and the UK GDPR, ensuring your privacy and records are fully protected. There are limited circumstances where confidentiality may need to be broken, for example if there is a serious risk of harm to yourself or others, and this would always be discussed with you first where possible."
              },
              {
                question: "How much does counselling cost and what options are available?",
                answer: "Single sessions are £60 per 50-minute session (pay as you go). Alternatively, a 6-session package paid in advance is available for £300 total, saving £60 (the cost of one full session) compared to paying £60 x 6 = £360 individually. Please note that the discount applies exclusively when the 6 sessions are paid upfront as a package."
              },
              {
                question: "How do I book a session?",
                answer: "You can get in touch by clicking 'Message Me' or submitting the contact form on the Contact page. Erika replies personally the same day to arrange your free 20-minute initial call."
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
