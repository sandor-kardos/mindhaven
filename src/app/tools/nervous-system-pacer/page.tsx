import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Wind, ShieldCheck, Calendar, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CalmBreathingWidget } from "@/components/ui/CalmBreathingWidget";

export const metadata: Metadata = {
  title: "Nervous System Pacer — 4-7-8 Breathing Tool | Mindhaven",
  description: "A simple 4-7-8 breathing exercise to help you slow down and feel steady when work or stress builds up. Free and private tool by MNCPS counsellor Erika Martin.",
  alternates: { canonical: "https://mindhaven.uk/tools/nervous-system-pacer" },
  openGraph: {
    title: "Nervous System Pacer — Guided 4-7-8 Breathing Tool",
    description: "A simple 4-7-8 breathing exercise to help you slow down and feel steady when work or stress builds up.",
    url: "https://mindhaven.uk/tools/nervous-system-pacer",
    siteName: "Mindhaven Counselling",
    images: [{ url: "https://mindhaven.uk/images/og-image.png", width: 1200, height: 630, alt: "Mindhaven Breathing Pacer Tool" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nervous System Pacer — Guided 4-7-8 Breathing Tool",
    description: "A simple 4-7-8 breathing exercise to help you slow down and feel steady.",
    images: ["https://mindhaven.uk/images/og-image.png"],
  },
};

export default function NervousSystemPacerPage() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24] min-h-screen">
      {/* Hero Header */}
      <section className="pt-16 pb-20 px-4 bg-[#0D2E24] text-white border-b border-[#34D399]/30 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10 space-y-6 text-center">
          
          <div className="flex justify-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#34D399] border border-[#34D399]/40 text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Tools</span>
            </Link>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40 gap-2">
              <Wind className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Simple Breathing Tool</span>
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Nervous System Pacer
            </h1>

            <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed">
              A simple breathing exercise to help you slow down and feel steady when work or daily stress builds up.
            </p>
          </div>

        </div>
      </section>

      {/* Main Interactive Tool Section */}
      <section className="py-16 px-4 bg-[#FEFFF7]">
        <div className="container mx-auto max-w-3xl space-y-12">
          
          {/* Interactive Breathing Card Container */}
          <div className="bg-white rounded-3xl border-2 border-[#34D399]/40 shadow-2xl p-8 sm:p-12 text-center max-w-xl mx-auto space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#059669] uppercase tracking-wider font-heading">
                Guided Rhythm
              </span>
              <h2 className="text-2xl font-bold text-[#0D2E24] font-heading">
                Follow the Breathing Circle
              </h2>
            </div>

            <div className="py-4">
              <CalmBreathingWidget />
            </div>

            <p className="text-xs text-[#0D2E24]/70 font-medium italic">
              Allow your breath to flow smoothly with the circle on screen. Repeat for 3–4 cycles until you feel more grounded.
            </p>
          </div>

          {/* Simple Plain Description & Step-by-Step Instructions */}
          <div className="bg-white p-8 rounded-3xl border border-[#34D399]/30 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-[#0D2E24] font-heading flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#34D399]" />
              <span>How to use the 4-7-8 exercise</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#FEFFF7] border border-[#34D399]/20 space-y-2">
                <span className="text-xl font-extrabold text-[#059669] font-heading">01. Breathe In</span>
                <p className="text-xs text-[#0D2E24]/85 font-medium leading-relaxed">
                  Inhale quietly through your nose for <strong>4 seconds</strong>, letting your chest and belly expand softly.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FEFFF7] border border-[#34D399]/20 space-y-2">
                <span className="text-xl font-extrabold text-[#059669] font-heading">02. Hold</span>
                <p className="text-xs text-[#0D2E24]/85 font-medium leading-relaxed">
                  Hold your breath gently for <strong>7 seconds</strong> without strain or pressure.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FEFFF7] border border-[#34D399]/20 space-y-2">
                <span className="text-xl font-extrabold text-[#059669] font-heading">03. Breathe Out</span>
                <p className="text-xs text-[#0D2E24]/85 font-medium leading-relaxed">
                  Exhale slowly through your mouth for <strong>8 seconds</strong> until your lungs feel empty.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Context & CTA Box */}
          <div className="bg-[#0D2E24] text-white rounded-3xl p-8 sm:p-10 border border-[#34D399]/30 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#34D399]" />
              <h3 className="font-bold text-xl font-heading text-white">
                Need more structured support?
              </h3>
            </div>
            
            <p className="text-slate-200 text-sm font-medium leading-relaxed">
              Breathing exercises are helpful for moment-to-moment calm. If you are experiencing ongoing stress or burnout, talking with a professional counsellor can help you find lasting clarity.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact#book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#34D399] text-[#0D2E24] font-extrabold text-sm hover:bg-white transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#0D2E24]" />
                <span>Book a Free 15-Minute Intro Call</span>
                <ArrowRight className="w-4 h-4 text-[#0D2E24]" />
              </Link>
              
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm border border-[#34D399]/40 hover:bg-white/20 transition-all"
              >
                <span>View All Tools</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
