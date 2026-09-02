"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wind, Compass, PieChart, Sparkles, ShieldCheck, BookOpen, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

// ─── Data ────────────────────────────────────────────────────────────────────

type Category = "all" | "tools" | "reading";

interface BaseResourceItem {
  id: string;
  title: string;
  subcategory: string;
  description: string;
}

interface ToolResourceItem extends BaseResourceItem {
  category: "tools";
  href: string;
  icon: React.ElementType;
  image: string;
  cta: string;
}

interface ReadingResourceItem extends BaseResourceItem {
  category: "reading";
  author: string;
  excerpt: string;
  cover?: string;
  publisherUrl?: string;
}

type ResourceItem = ToolResourceItem | ReadingResourceItem;


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
    publisherUrl: "https://www.taylorfrancis.com/books/mono/10.4324/9780429343728/absent-father-effect-daughters-susan-schwartz",
    excerpt:
      "An exploration of how a father's absence, physical or emotional, shapes a daughter's sense of her own worth, and how that pattern can move toward repair.",
    description:
      "This book stayed with me for how gently it treats something that's often dismissed as 'not a big deal.' An absent father doesn't have to mean a father who left. Sometimes it's a father who was there in the room but never quite present, and the daughter learns to read that absence as something about her own worth. What I appreciated most is that the book doesn't stop at naming the wound. It follows daughters toward repair, toward becoming someone who isn't still waiting to be chosen. If this resonates with you, it might be worth exploring in a session, not because you need to read the book first, but because the pattern it describes is one I see often, and it rarely needs a name to be worth talking about.",
  },
  {
    id: "inherited-fate",
    category: "reading",
    title: "Inherited Fate: Family Trauma and the Ways of Healing",
    subcategory: "Intergenerational trauma",
    author: "Noémi Orvos-Tóth",
    excerpt:
      "An accessible guide to how unprocessed family losses and secrets can shape our anxieties and patterns in relationships, and what it means to begin doing things differently.",
    description:
      "Our families shape who we are, often in ways we don't consciously choose. This book traces how the things we struggle with, our anxieties, our repeated patterns in relationships, sometimes even physical symptoms, can trace back further than our own lives: to a parent's or grandparent's unprocessed loss, a family secret that was never named. What I find most useful about this way of thinking is how much lighter it makes self-understanding feel. Not 'what's wrong with me,' but 'what did I inherit, and what can I now do differently.' That reframing alone is often the beginning of real change, and it's exactly the kind of exploration counselling can hold space for.",
  },
  {
    id: "the-myth-of-normal",
    category: "reading",
    title: "The Myth of Normal",
    subcategory: "Stress & Culture",
    author: "Gabor Maté",
    publisherUrl: "https://www.penguin.co.uk/books/443657/the-myth-of-normal-by-mate-gabor/9781785042737",
    excerpt:
      "An exploration of chronic stress, emotional suppression, and the myth that individual struggles are personal failings rather than understandable responses to modern culture.",
    description:
      "I recommend this one carefully, because it's a substantial read, but it says something I think is worth sitting with. Maté's central idea is that a lot of what we struggle with, chronic stress, anxiety, difficulty resting, isn't necessarily a personal failing. It can be an understandable response to a culture that often rewards performance and suppressing how we really feel over genuine connection to ourselves and others. He goes further than many writers in this space, drawing links between emotional suppression and physical health that not everyone in medicine agrees on, and I'd encourage reading it with that in mind rather than as settled fact. What I do find genuinely useful is the underlying reframe: if you've been coping by pushing feelings down, that often made sense at the time, it isn't a character flaw. This isn't a quick fix, but if you've ever felt 'fine' on the surface while something underneath has needed attention for a while, it gives language to that.",
  },
];

// ─── Filter pills config ─────────────────────────────────────────────────────
const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tools", label: "Tools" },
  { id: "reading", label: "Reading" },
];

// ─── Carousel Row Sub-component ──────────────────────────────────────────────

function CarouselRow({ children, count }: { children: React.ReactNode; count: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const totalScrollable = scrollWidth - clientWidth;
    if (totalScrollable <= 0) {
      setActiveIndex(0);
      return;
    }
    const ratio = scrollLeft / totalScrollable;
    const index = Math.min(Math.round(ratio * (count - 1)), count - 1);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement | undefined;
    const cardWidth = firstChild?.offsetWidth || 340;
    scrollRef.current.scrollTo({
      left: index * (cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-3">
      {/* Scrollable container across Mobile, Tablet & Desktop */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-1 pt-3 pb-4 items-stretch no-scrollbar scroll-smooth"
      >
        {children}
      </div>

      {/* Single Centered Dots Controller */}
      <div className="flex items-center justify-center pt-3">
        <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pagination">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === i
                  ? "w-6 h-2 bg-[#34D399]"
                  : "w-2 h-2 bg-[#34D399]/40 hover:bg-[#34D399]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function ToolCard({ item }: { item: ToolResourceItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#34D399]/30 hover:border-[#34D399] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between min-h-[40px]">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider bg-[#0D2E24]">
            {item.subcategory}
          </span>
          <div className="w-10 h-10 rounded-xl bg-white border border-[#34D399]/30 flex items-center justify-center text-[#34D399] group-hover:scale-110 transition-transform">
            <Icon className="w-5 h-5 text-[#34D399]" />
          </div>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0D2E24]/5">
          <Image
            src={item.image}
            alt={`${item.title} interactive tool preview`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="min-h-[32px] flex items-center">
          <h2 className="text-2xl font-bold font-heading text-[#0D2E24] group-hover:text-[#34D399] transition-colors">
            {item.title}
          </h2>
        </div>

        <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed min-h-[80px]">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-[#34D399]/20 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0D2E24] group-hover:text-[#34D399] transition-colors">
          <span>{item.cta}</span>
          <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

function BookModal({
  item,
  onClose,
}: {
  item: ReadingResourceItem | null;
  onClose: () => void;
}) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D2E24]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#34D399] space-y-5 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#34D399]/10 text-[#0D2E24] hover:bg-[#34D399] hover:text-[#0D2E24] flex items-center justify-center transition-colors font-bold text-sm"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Badge & Category */}
        <div className="flex items-center gap-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider bg-[#0D2E24]">
            {item.subcategory}
          </span>
          <span className="text-xs font-bold text-[#0D2E24]/50 uppercase tracking-wider">
            Reading Recommendation
          </span>
        </div>

        {/* Title & Author */}
        <div className="space-y-1.5 pr-8">
          <h2 id="book-modal-title" className="text-2xl font-bold font-heading text-[#0D2E24] leading-snug">
            {item.title}
          </h2>
          <p className="text-sm font-bold text-[#34D399] uppercase tracking-wider">
            By {item.author}
          </p>
        </div>

        {/* Note / Review */}
        <div className="pt-3 border-t border-[#34D399]/20 space-y-3">
          <p className="text-xs font-extrabold text-[#0D2E24]/60 uppercase tracking-wider">
            Erika&apos;s Note &amp; Context
          </p>
          <p className="text-sm text-[#0D2E24]/90 font-medium leading-relaxed italic bg-[#34D399]/10 p-5 rounded-2xl border border-[#34D399]/30">
            &ldquo;{item.description}&rdquo;
          </p>
        </div>

        {/* Publisher Link & Footer CTA */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
          {item.publisherUrl ? (
            <a
              href={item.publisherUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D2E24] hover:bg-[#34D399] text-white text-xs font-bold rounded-full transition-colors shadow-sm"
            >
              <span>View Publisher Page</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#34D399]" />
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-[#34D399]/40 hover:border-[#34D399] text-[#0D2E24] font-bold text-xs rounded-full transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function ReadingCard({
  item,
  onSelect,
}: {
  item: ReadingResourceItem;
  onSelect: (item: ReadingResourceItem) => void;
}) {
  return (
    <div
      className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#34D399]/30 hover:border-[#34D399] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between w-full h-full cursor-pointer group"
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(item); }}
    >
      <div className="space-y-4 flex-1">
        {/* Badge row */}
        <div className="flex items-center justify-between min-h-[40px]">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider bg-[#0D2E24]">
            {item.subcategory}
          </span>
          <div className="w-10 h-10 rounded-xl bg-white border border-[#34D399]/30 flex items-center justify-center shrink-0 ml-2 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5 text-[#34D399]" />
          </div>
        </div>

        {/* Title + author (Author line pinned to bottom for horizontal alignment) */}
        <div className="min-h-[84px] flex flex-col justify-between">
          <h2 className="text-xl font-bold font-heading text-[#0D2E24] leading-snug group-hover:text-[#34D399] transition-colors">
            {item.title}
          </h2>
          <p className="text-xs font-bold text-[#0D2E24]/60 mt-1 uppercase tracking-wider">
            {item.author}
          </p>
        </div>

        {/* Excerpt (always visible) */}
        <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed min-h-[84px]">
          {item.excerpt}
        </p>
      </div>

      {/* Expand indicator (opens popup modal) */}
      <div className="mt-6 pt-4 border-t border-[#34D399]/20 flex items-center justify-between">
        <span className="text-xs font-bold text-[#0D2E24]/50 uppercase tracking-wider">
          Erika&apos;s note
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#34D399] group-hover:underline">
          <span>Read note</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#34D399] group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedBook, setSelectedBook] = useState<ReadingResourceItem | null>(null);

  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24] min-h-screen relative">
      {/* Book Recommendation Detail Popup Modal */}
      <BookModal item={selectedBook} onClose={() => setSelectedBook(null)} />

      {/* Hero */}
      <section className="pt-8 pb-8 sm:pt-10 sm:pb-10 px-4 bg-[#0D2E24] text-white border-b border-[#34D399]/30 relative overflow-hidden text-center">
        <div className="container mx-auto max-w-3xl relative z-10 space-y-3">
          <Badge variant="white" className="bg-white/10 text-[#34D399] border-[#34D399]/40 gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Wellbeing Resources</span>
          </Badge>

          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Resources
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Free interactive tools and reading recommendations to support self-reflection, stress regulation, and personal clarity.
          </p>

          <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Tools are 100% private &amp; client-side. No personal data recorded.</span>
          </div>
        </div>
      </section>

      {/* Filter pills + Grid */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl space-y-12">

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
                      : "bg-white text-[#0D2E24] border-[#34D399]/40 hover:border-[#34D399] hover:bg-[#34D399]/10"
                  }`}
                  aria-pressed={isActive}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Apps / Interactive Tools Row */}
          {(activeFilter === "all" || activeFilter === "tools") && (
            <div className="space-y-4">
              {activeFilter === "all" && (
                <div className="border-b border-[#34D399]/20 pb-3 flex items-center justify-between">
                  <h2 className="text-xl font-bold font-heading text-[#0D2E24] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#34D399]" />
                    <span>Interactive Tools</span>
                  </h2>
                  <span className="text-xs font-semibold text-[#0D2E24]/60">3 self-assessment tools</span>
                </div>
              )}
              <CarouselRow count={3}>
                {resources
                  .filter((r): r is ToolResourceItem => r.category === "tools")
                  .map((item) => (
                    <div key={item.id} className="w-[82vw] sm:w-[340px] md:w-[360px] lg:w-[370px] shrink-0 snap-start flex">
                      <ToolCard item={item} />
                    </div>
                  ))}
              </CarouselRow>
            </div>
          )}

          {/* Books / Reading Recommendations Row */}
          {(activeFilter === "all" || activeFilter === "reading") && (
            <div className="space-y-4">
              {activeFilter === "all" && (
                <div className="border-b border-[#34D399]/20 pb-3 flex items-center justify-between">
                  <h2 className="text-xl font-bold font-heading text-[#0D2E24] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#34D399]" />
                    <span>Recommended Reading</span>
                  </h2>
                  <span className="text-xs font-semibold text-[#0D2E24]/60">3 book recommendations</span>
                </div>
              )}
              <CarouselRow count={3}>
                {resources
                  .filter((r): r is ReadingResourceItem => r.category === "reading")
                  .map((item) => (
                    <div key={item.id} className="w-[82vw] sm:w-[340px] md:w-[360px] lg:w-[370px] shrink-0 snap-start flex">
                      <ReadingCard item={item} onSelect={(book) => setSelectedBook(book)} />
                    </div>
                  ))}
              </CarouselRow>
            </div>
          )}

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
