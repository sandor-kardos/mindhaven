"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wind, Compass, PieChart, Sparkles, ShieldCheck, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

// ─── Data ────────────────────────────────────────────────────────────────────

type Category = "all" | "tools" | "reading";

interface ResourceItem {
  id: string;
  category: Exclude<Category, "all">;
  title: string;
  subcategory: string;
  description: string;
  href?: string;
  external?: boolean;
  // Tools only
  icon?: React.ElementType;
  image?: string;
  cta?: string;
  // Reading only
  author?: string;
}

const resources: ResourceItem[] = [
  // ── Interactive Tools ──
  {
    id: "wheel-of-life",
    category: "tools",
    title: "Wheel of Life",
    subcategory: "Balance Assessment",
    icon: PieChart,
    image: "/images/tools/wheel-preview.png",
    description:
      "Map your satisfaction across 8 core life domains with an interactive visual wheel. Gain instant clarity on your overall life balance, export PNG summaries, and track progress privately in your browser.",
    href: "/tools/wheel-of-life",
    cta: "Try the Wheel of Life",
  },
  {
    id: "nervous-system-pacer",
    category: "tools",
    title: "Nervous System Pacer",
    subcategory: "Interactive Breathing",
    icon: Wind,
    image: "/images/tools/pacer-preview.png",
    description:
      "Down-regulate your nervous system in real-time with our guided 4-7-8 breathing rhythm. Helps slow elevated heart rates, reduce acute anxiety, and restore physiological calm during demanding workdays.",
    href: "/tools/nervous-system-pacer",
    cta: "Try the Pacer",
  },
  {
    id: "life-compass",
    category: "tools",
    title: "Life Compass",
    subcategory: "Values Alignment",
    icon: Compass,
    image: "/images/tools/compass-preview.png",
    description:
      "An interactive self-assessment tool to measure alignment across core life domains including Career, Health, Relationships, and Personal Growth. Private, client-side, with instant visual feedback.",
    href: "/resources/life-compass",
    cta: "Try the Life Compass",
  },

  // ── Reading ──
  {
    id: "absent-father-effect-on-daughters",
    category: "reading",
    title: "The Absent Father Effect on Daughters",
    subcategory: "Relational patterns",
    author: "Susan E. Schwartz",
    description:
      "This book stayed with me for how gently it treats something that's often dismissed as 'not a big deal.' An absent father doesn't have to mean a father who left. Sometimes it's a father who was there in the room but never quite present, and the daughter learns to read that absence as something about her own worth. What I appreciated most is that the book doesn't stop at naming the wound. It follows daughters toward repair, toward becoming someone who isn't still waiting to be chosen. If this resonates with you, it might be worth exploring in a session, not because you need to read the book first, but because the pattern it describes is one I see often, and it rarely needs a name to be worth talking about.",
  },
  {
    id: "inherited-fate",
    category: "reading",
    title: "Inherited Fate: Family Trauma and the Ways of Healing",
    subcategory: "Intergenerational trauma",
    author: "Noémi Orvos-Tóth",
    description:
      "Our families shape who we are, often in ways we don't consciously choose. This book traces how the things we struggle with, our anxieties, our repeated patterns in relationships, sometimes even physical symptoms, can trace back further than our own lives: to a parent's or grandparent's unprocessed loss, a family secret that was never named. What I find most useful about this way of thinking is how much lighter it makes self-understanding feel. Not 'what's wrong with me,' but 'what did I inherit, and what can I now do differently.' That reframing alone is often the beginning of real change, and it's exactly the kind of exploration counselling can hold space for.",
  },
];

// ─── Filter pills config ─────────────────────────────────────────────────────
// To add a new category: add one entry here and add items to `resources` above.
const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tools", label: "Tools" },
  { id: "reading", label: "Reading" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ToolCard({ item }: { item: ResourceItem }) {
  const Icon = item.icon!;
  return (
    <Link
      href={item.href}
      className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#34D399]/30 hover:border-[#34D399] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider bg-[#059669]">
            {item.subcategory}
          </span>
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-[#34D399]/30 flex items-center justify-center text-[#34D399] group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5 text-[#34D399]" />
          </div>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0D2E24]/5">
          <Image
            src={item.image!}
            alt={`${item.title} interactive tool preview`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h2 className="text-2xl font-bold font-heading text-[#0D2E24] group-hover:text-[#059669] transition-colors pt-1">
          {item.title}
        </h2>

        <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-[#34D399]/20 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0D2E24] group-hover:text-[#059669] transition-colors">
          <span>{item.cta}</span>
          <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

function ReadingCard({ item }: { item: ResourceItem }) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#34D399]/30 shadow-xl flex flex-col h-full">
      <div className="space-y-4 flex-1">
        <div className="flex items-start justify-between min-h-[44px]">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider bg-[#047857]">
            {item.subcategory}
          </span>
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-[#34D399]/30 flex items-center justify-center shrink-0 ml-2">
            <BookOpen className="w-5 h-5 text-[#34D399]" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold font-heading text-[#0D2E24] leading-snug">
            {item.title}
          </h2>
          <p className="text-xs font-bold text-[#0D2E24]/60 mt-1 uppercase tracking-wider">
            {item.author}
          </p>
        </div>

        <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const visible =
    activeFilter === "all"
      ? resources
      : resources.filter((r) => r.category === activeFilter);

  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24] min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-20 px-4 bg-[#0D2E24] text-white border-b border-[#34D399]/30 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10 space-y-6 text-center">
          <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40 gap-2">
            <Sparkles className="w-4 h-4 text-[#34D399]" />
            <span>Wellbeing Resources</span>
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight">
            Resources
          </h1>

          <p className="text-slate-200 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Free interactive tools and reading recommendations to support self-reflection, stress regulation, and personal clarity.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span>Tools are 100% private &amp; client-side. No personal data recorded.</span>
          </div>
        </div>
      </section>

      {/* Filter pills + Grid */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl space-y-10">

          {/* Filter pills */}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter resources by category">
            {filters.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-[#34D399] focus:ring-offset-2 ${
                    isActive
                      ? "bg-[#0D2E24] text-white border-[#0D2E24] shadow-md"
                      : "bg-white text-[#0D2E24] border-[#34D399]/40 hover:border-[#34D399] hover:bg-[#E6F2ED]"
                  }`}
                  aria-pressed={isActive}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {visible.map((item) =>
              item.category === "tools" ? (
                <ToolCard key={item.id} item={item} />
              ) : (
                <ReadingCard key={item.id} item={item} />
              )
            )}
          </div>

          {/* CTA */}
          <div className="mt-6 text-center bg-[#34D399]/10 rounded-3xl p-8 sm:p-12 border border-[#34D399]/30 space-y-4 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0D2E24] font-heading">
              Need personalised support?
            </h3>
            <p className="text-sm text-[#0D2E24]/85 font-medium max-w-xl mx-auto leading-relaxed">
              Tools and reading are valuable for day-to-day maintenance, but sustained change often requires structured conversation. Erika offers one-to-one counselling tailored to your situation.
            </p>
            <div className="pt-4">
              <Link
                href="/contact#book"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] hover:bg-[#34D399] text-white hover:text-[#0D2E24] font-bold text-sm rounded-full transition-all shadow-md group"
              >
                <span>Book a Free Introductory Call</span>
                <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:text-[#0D2E24] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
