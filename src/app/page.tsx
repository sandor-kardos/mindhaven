import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    question: "Can I try a free consultation before committing?",
    answer: "Yes. You can start with a free 20-minute initial call to talk about what has brought you here and whether working together feels right. There is no obligation to continue.",
  },
  {
    question: "What do you help with?",
    answer: "I work with adults on anxiety and worry, bereavement and loss, low mood, relationship difficulties, self-esteem, and stress or burnout. If what you are facing is not on this list, get in touch and we can talk about whether counselling with me is the right fit.",
  },
  {
    question: "What therapeutic approach do you use?",
    answer: "I am an integrative person-centred counsellor. You set the pace and I offer a warm, non-judgemental space. I also use the psychodynamic approach, which helps us understand where patterns come from, and I am familiar with Cognitive Behavioural Therapy techniques, which I use when they suit you.",
  },
  {
    question: "How does online counselling work?",
    answer: "Online sessions take place over Microsoft Teams video or by phone, so you can talk from a private space of your choice anywhere in the UK.",
  },
  {
    question: "Is online counselling as effective as meeting in person?",
    answer: "For many people, yes. Research suggests online counselling can be as helpful as face-to-face sessions, and many clients find it easier to fit around work and family. We can talk about which format suits you during the free call.",
  },
  {
    question: "Do you offer in-person sessions?",
    answer: "Yes. In-person sessions take place at Mysa Therapy Rooms in Dalkeith (EH22), easy to reach from south Edinburgh and Midlothian. Online sessions are available across the UK.",
  },
  {
    question: "How much does counselling cost?",
    answer: "Sessions are £60 each (50 minutes), paid as you go. Alternatively, a 6-session package paid in advance costs £300, saving the cost of one session. The discount applies only when the 6 sessions are paid upfront.",
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, I work with Bupa. If you have health insurance, check your cover with your insurer first, as most require a referral before sessions start.",
  },
  {
    question: "Do I need to be in crisis to seek counselling?",
    answer: "No. Many people come to counselling while still managing day to day, but carrying something they have not had space to talk about. If something is getting in the way of how you want to feel or live, that is a reasonable place to start. Counselling is not an emergency service: if you are in crisis, call 999, NHS 24 on 111, or Samaritans on 116 123.",
  },
  {
    question: "Are sessions confidential?",
    answer: "Yes. I follow the NCPS Code of Ethics and UK GDPR. Confidentiality can only be broken in limited circumstances, for example a serious risk of harm to you or others, and I would always try to discuss this with you first.",
  },
  {
    question: "How do I book a session?",
    answer: "Click 'Message Me' or use the form on the Contact page. I reply personally the same day to arrange your free 20-minute initial call.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

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
  ExternalLink,
  MessageCircle,
  ChevronDown
} from "lucide-react";

export const metadata = { 
  title: "Counselling in Edinburgh & Online | Mindhaven",
  description: "Person-centred counselling for anxiety, grief, stress and self-esteem with Erika Martin, MNCPS Accredited. In Dalkeith near Edinburgh and online UK.",
  alternates: { canonical: "https://mindhaven.uk" },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mindhaven counselling with Erika Martin" }],
    title: "Counselling in Edinburgh & Online | Mindhaven",
    description: "Person-centred counselling for anxiety, grief, stress and self-esteem with Erika Martin, MNCPS Accredited. In Dalkeith near Edinburgh and online UK.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "Counselling in Edinburgh & Online | Mindhaven",
    description: "Person-centred counselling for anxiety, grief, stress and self-esteem with Erika Martin, MNCPS Accredited. In Dalkeith near Edinburgh and online UK.",
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24] overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* HERO SECTION */}
      <section className="relative pt-6 pb-20 sm:pt-12 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-white text-[#0D2E24] overflow-hidden border-b border-[#34D399]/20 ">
        
        {/* Ambient Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#34D399]/22 rounded-full blur-[150px] animate-aura-drift pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#059669]/15 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />
        
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-[#34D399] text-[#0D2E24] hover:text-white border border-[#34D399]/30 shadow-xs text-xs font-extrabold uppercase tracking-wider transition-colors group cursor-pointer"
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
                  A warm, non-judgemental space for adults dealing with anxiety, loss, stress or self-doubt. In person in Dalkeith, near Edinburgh, and online across the UK.
                </p>

              </div>
              
              {/* Action Button: 1 Clean Message Me Button on Mobile */}
              <div className="mt-8 md:mt-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white hover:text-[#0D2E24] bg-[#0D2E24] hover:bg-[#34D399] rounded-full transition-all shadow-lg shadow-[#0D2E24]/15 hover:-translate-y-0.5 border border-[#34D399]/30 group text-center"
                  >
                    <MessageCircle className="w-5 h-5 text-[#34D399] group-hover:text-[#0D2E24] transition-colors" />
                    <span>Message Me</span>
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
                  
                {/* Sharp Floating Overlay Badge with Direct NCPS Link - Positioned prominently in front of portrait */}
                <a
                  href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-6 left-2 right-2 sm:-bottom-8 sm:left-6 sm:right-6 max-w-xs bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 md:p-3 lg:p-5 border-2 border-[#34D399]/60 shadow-[0_20px_40px_-10px_rgba(13,46,36,0.25)] flex items-center justify-between group hover:border-[#34D399] hover:scale-[1.02] transition-all cursor-pointer z-20"
                  title="Verify Erika Martin's Official NCPS Register Listing"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#ECFDF5] flex items-center justify-center text-[#0D2E24] shrink-0 border border-[#34D399]/40 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#34D399]" />
                    </div>
                    <div className="flex flex-col text-center">
                      <h4 className="font-extrabold text-xs sm:text-sm text-[#0D2E24] font-heading whitespace-normal">
                        Erika Martin
                      </h4>
                      <div className="text-[10px] sm:text-xs text-[#059669] font-extrabold mt-0.5">
                        <span>Accredited Counsellor (MNCPS Acc.)</span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1 transition-transform shrink-0 ml-1 sm:ml-2" />
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

      {/* SECTION 1.5: Articles Articles Carousel (Placed right after Hero) */}
      <Gallery4 />

      {/* SECTION 2: Problem Validation - Pine Teal Background for Tonal Variation */}
      <section className="py-24 bg-[#26433A] text-white px-4 border-b border-[#34D399]/30 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <HalftonePattern color="#34D399" className="-top-8 right-0 w-[380px] h-[380px]" opacity={0.15} />
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40">
              What people bring
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
              You don&apos;t need to be in crisis to start.
            </h2>
            <p className="text-slate-200 text-lg font-medium leading-relaxed">
              People come to counselling for many reasons. These are the ones I see most often:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-[#34D399]/30 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-3 md:block md:mb-0">
                  <Activity className="w-9 h-9 text-[#34D399] shrink-0 group-hover:scale-110 transition-transform md:mb-6" />
                  <h3 className="text-xl font-bold text-white font-heading md:mb-3">Anxiety and worry</h3>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  Racing thoughts, fear of what might happen, or a constant sense of unease that is hard to switch off.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-[#34D399]/30 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-3 md:block md:mb-0">
                  <Brain className="w-9 h-9 text-[#34D399] shrink-0 group-hover:scale-110 transition-transform md:mb-6" />
                  <h3 className="text-xl font-bold text-white font-heading md:mb-3">Grief and loss</h3>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  The death of someone close, the end of a relationship, or a change that has left you feeling lost.
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-[#34D399]/30 card-flow-effect flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center gap-3 mb-3 md:block md:mb-0">
                  <Clock className="w-9 h-9 text-[#34D399] shrink-0 group-hover:scale-110 transition-transform md:mb-6" />
                  <h3 className="text-xl font-bold text-white font-heading md:mb-3">Stress, self-esteem and relationships</h3>
                </div>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  Pressure that has built up for too long, harsh self-criticism, or the same difficulties repeating with the people around you.
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
      <section id="approach" className="py-24 bg-white px-4 relative overflow-hidden">
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
                  An Integrative, Person-Centred Approach
                </h2>
                <p className="text-[#0D2E24]/85 text-lg font-medium leading-relaxed">
                  Erika is an integrative person-centred counsellor. You set the pace, and she offers a warm, safe space without judgement. Where it helps, she draws on psychodynamic understanding to explore where patterns come from, and on CBT tools to work with thoughts and habits in the here and now.
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
      <section id="faq" className="py-24 bg-white px-4 border-t border-[#34D399]/15">
        <div className="container mx-auto max-w-3xl space-y-10">
          <div className="text-center space-y-4">
            <Badge variant="white" className="font-extrabold">
              Clear Answers
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

    </div>
  );
}
