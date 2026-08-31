import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wind, Compass, Sparkles, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Self-Reflection & Regulation Tools | Mindhaven",
  description: "Explore free interactive wellness tools including the Nervous System Pacer and Life Compass assessment. Private, client-side tools by MNCPS counsellor Erika Martin.",
  alternates: { canonical: "https://mindhaven.uk/tools" },
  openGraph: {
    title: "Self-Reflection & Regulation Tools | Mindhaven",
    description: "Explore free interactive wellness tools including the Nervous System Pacer and Life Compass assessment.",
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
      slug: "nervous-system-pacer",
      href: "/tools/nervous-system-pacer",
      title: "Nervous System Pacer",
      category: "Interactive Breathing",
      icon: Wind,
      description:
        "Down-regulate your nervous system in real-time with our guided 4-7-8 breathing rhythm. Helps slow elevated heart rates, reduce acute anxiety, and restore physiological calm during demanding workdays.",
      badgeColor: "#059669",
    },
    {
      slug: "life-compass",
      href: "/resources/life-compass",
      title: "Life Compass",
      category: "Values Alignment",
      icon: Compass,
      description:
        "An interactive self-assessment tool to measure alignment across core life domains including Career, Health, Relationships, and Personal Growth. Private, client-side, with instant visual feedback.",
      badgeColor: "#047857",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24] min-h-screen">
      {/* Page Hero Header */}
      <section className="pt-20 pb-20 px-4 bg-[#0D2E24] text-white border-b border-[#34D399]/30 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10 space-y-6 text-center">
          
          <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40 gap-2">
            <Sparkles className="w-4 h-4 text-[#34D399]" />
            <span>Interactive Wellbeing Suite</span>
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            Interactive Tools
          </h1>

          <p className="text-slate-200 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Free, client-side tools designed to help you regulate stress, assess values alignment, and gain clarity in demanding professional environments.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span>100% Private & Client-Side: No Personal Data Recorded</span>
          </div>

        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 px-4 bg-[#FEFFF7]">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.slug}
                  className="bg-white p-8 rounded-3xl border-2 border-[#34D399]/30 hover:border-[#34D399] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div className="space-y-5">
                    {/* Header: Badge + Icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider"
                        style={{ backgroundColor: tool.badgeColor }}
                      >
                        {tool.category}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#FEFFF7] border border-[#34D399]/30 flex items-center justify-center text-[#34D399] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[#34D399]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold font-heading text-[#0D2E24] group-hover:text-[#059669] transition-colors">
                      {tool.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-8 pt-6 border-t border-[#34D399]/20 flex items-center justify-between">
                    <Link
                      href={tool.href}
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0D2E24] group-hover:text-[#059669] transition-colors"
                    >
                      <span>Try {tool.title}</span>
                      <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
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
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] hover:bg-[#34D399] text-white font-bold text-sm rounded-full transition-all shadow-md group"
              >
                <span>Book a Free Introductory Call</span>
                <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
