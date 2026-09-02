import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wind, Compass, PieChart, Sparkles, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Self-Reflection & Regulation Tools | Mindhaven",
  description: "Explore free interactive wellness tools including the Nervous System Pacer, Life Compass assessment, and Wheel of Life balance tool. Private, client-side tools by MNCPS counsellor Erika Martin.",
  alternates: { canonical: "https://mindhaven.uk/tools" },
  openGraph: {
    title: "Self-Reflection & Regulation Tools | Mindhaven",
    description: "Explore free interactive wellness tools including the Nervous System Pacer, Life Compass, and Wheel of Life balance tool.",
    url: "https://mindhaven.uk/tools",
    siteName: "Mindhaven Counselling",
    images: [{ url: "https://mindhaven.uk/images/og-image.png", width: 1200, height: 630, alt: "Mindhaven Interactive Tools" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Reflection & Regulation Tools | Mindhaven",
    description: "Explore free interactive wellness tools by MNCPS counsellor Erika Martin.",
    images: ["https://mindhaven.uk/images/og-image.png"],
  },
};

export default function ToolsIndexPage() {
  const tools = [
    {
      slug: "wheel-of-life",
      href: "/tools/wheel-of-life",
      title: "Wheel of Life",
      category: "Balance Assessment",
      icon: PieChart,
      image: "/images/tools/wheel-preview.png",
      description: "Map your satisfaction across 8 core life domains with an interactive visual wheel. Gain instant clarity on your overall life balance, export PNG summaries, and track progress privately in your browser.",
      badgeColor: "#059669",
    },
    {
      slug: "nervous-system-pacer",
      href: "/tools/nervous-system-pacer",
      title: "Nervous System Pacer",
      category: "Interactive Breathing",
      icon: Wind,
      image: "/images/tools/pacer-preview.png",
      description: "Down-regulate your nervous system in real-time with our guided 4-7-8 breathing rhythm. Helps slow elevated heart rates, reduce acute anxiety, and restore physiological calm during demanding workdays.",
      badgeColor: "#059669",
    },
    {
      slug: "life-compass",
      href: "/resources/life-compass",
      title: "Life Compass",
      category: "Values Alignment",
      icon: Compass,
      image: "/images/tools/compass-preview.png",
      description: "An interactive self-assessment tool to measure alignment across core life domains including Career, Health, Relationships, and Personal Growth. Private, client-side, with instant visual feedback.",
      badgeColor: "#047857",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24] min-h-screen">
      {/* Page Hero Header */}
      <section className="pt-8 pb-8 sm:pt-10 sm:pb-10 px-4 bg-[#0D2E24] text-white border-b border-[#34D399]/30 relative overflow-hidden text-center">
        <div className="container mx-auto max-w-3xl relative z-10 space-y-3">
          
          <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40 gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Interactive Wellbeing Suite</span>
          </Badge>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Interactive Tools
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Free, client-side tools designed to help you regulate stress, assess values alignment, and gain clarity in demanding professional environments.
          </p>

          <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
            <span>100% Private &amp; Client-Side: No Personal Data Recorded</span>
          </div>

        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#34D399]/30 hover:border-[#34D399] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Header: Badge + Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider"
                        style={{ backgroundColor: tool.badgeColor }}
                      >
                        {tool.category}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-[#34D399]/30 flex items-center justify-center text-[#34D399] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-[#34D399]" />
                      </div>
                    </div>

                    {/* Interactive App Preview Image */}
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0D2E24]/5">
                      <Image
                        src={tool.image}
                        alt={`${tool.title} interactive tool preview`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold font-heading text-[#0D2E24] group-hover:text-[#059669] transition-colors pt-1">
                      {tool.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Card Action Indicator */}
                  <div className="mt-6 pt-5 border-t border-[#34D399]/20 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0D2E24] group-hover:text-[#059669] transition-colors">
                      <span>Try {tool.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Box at Bottom */}
          <div className="mt-16 text-center bg-[#34D399]/10 rounded-3xl p-8 sm:p-12 border border-[#34D399]/30 space-y-4 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0D2E24] font-heading">
              Need personalized support?
            </h3>
            <p className="text-sm text-[#0D2E24]/85 font-medium max-w-xl mx-auto leading-relaxed">
              Tools are valuable for daily maintenance, but sustained change often requires structured conversation. Erika Martin offers one-to-one therapy tailored for professionals.
            </p>
            <div className="pt-4">
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] hover:bg-[#34D399] text-white hover:text-[#0D2E24] font-bold text-sm rounded-full transition-all shadow-md group"
              >
                <span>Book a Free 20-Minute Initial Call</span>
                <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:text-[#0D2E24] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
