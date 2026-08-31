"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, BookOpen, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { articles } from "@/lib/articles";

const articleImages: Record<string, string> = {
  "understanding-burnout-vs-stress": "/images/blog/understanding-burnout-vs-stress.webp",
  "burnout-therapist-edinburgh": "/images/blog/burnout-therapist-edinburgh.webp",
  "nervous-system-regulation": "/images/blog/nervous-system-regulation.webp",
  "imposter-syndrome-in-professionals": "/images/blog/imposter-syndrome-in-professionals.webp",
  "sustainable-boundaries": "/images/blog/sustainable-boundaries.webp",
  "somatic-therapy-explained": "/images/blog/somatic-therapy-explained.webp",
};


export interface Gallery4Props {
  title?: string;
  description?: string;
}

export function Gallery4({
  title = "Insights on Resilience & Clarity",
  description = "Evidence-based perspectives on burnout, stress, and nervous system resilience by Erika\u00A0Martin.",
}: Gallery4Props) {
  const [activeSlug, setActiveSlug] = useState<string>(articles[0]?.slug || "");
  const [activeMobileIndex, setActiveMobileIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeArticle = articles.find((a) => a.slug === activeSlug) || articles[0];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 20 : 300;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveMobileIndex(Math.min(Math.max(index, 0), articles.length - 1));
  };

  const scrollToMobileCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const child = container.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      setActiveMobileIndex(index);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0D2E24] text-white relative overflow-hidden border-y border-[#34D399]/30">
      {/* Active article image: blurred full-bg, cross-fades on article change */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          key={activeArticle.slug}
          src={articleImages[activeArticle.slug] || "/images/blog/understanding-burnout-vs-stress.png"}
          alt=""
          fill
          className="object-cover opacity-[0.18] blur-sm scale-110 transition-all duration-700"
          priority
        />
        {/* Dark gradient overlay to keep text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2E24]/85 via-[#0D2E24]/70 to-[#0D2E24]/60" />
        {/* Ambient orbs on top for extra depth */}
        <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-[#34D399]/12 rounded-full blur-[140px] animate-aura-drift" />
        <div className="absolute -bottom-32 -right-20 w-[550px] h-[550px] bg-[#059669]/15 rounded-full blur-[130px] animate-aura-drift" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-10 sm:mb-12 max-w-3xl mx-auto text-center flex flex-col items-center space-y-4">
          <Badge variant="white" className="gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-[#34D399]/40 text-[#34D399]">
            <Sparkles className="w-4 h-4 text-[#34D399]" />
            <span className="font-extrabold uppercase tracking-wider text-xs">Wellbeing Insights</span>
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            {title}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed [text-wrap:balance]">
            {description}
          </p>
        </div>

        {/* DESKTOP LAYOUT (lg: grid split left-list + right-preview) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stacked List of 6 Plain Text Titles */}
          <div className="col-span-6 flex flex-col space-y-2.5">
            {articles.map((article) => {
              const isActive = article.slug === activeArticle.slug;
              return (
                <button
                  key={article.slug}
                  onClick={() => setActiveSlug(article.slug)}
                  onMouseEnter={() => setActiveSlug(article.slug)}
                  className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                    isActive
                      ? "bg-white/20 border-[#34D399] text-white shadow-lg translate-x-1"
                      : "bg-[#26433A] border-[#34D399]/25 text-slate-100 hover:bg-[#26433A]/80 hover:border-[#34D399]/60 hover:text-white"
                  }`}
                >
                  <span className={`text-base sm:text-lg font-bold font-heading leading-snug transition-colors ${
                    isActive ? "text-[#34D399]" : "group-hover:text-[#34D399]"
                  }`}>
                    {article.title}
                  </span>
                  <ArrowRight className={`w-5 h-5 shrink-0 ml-3 transition-transform duration-300 ${
                    isActive
                      ? "text-[#34D399] translate-x-1 opacity-100"
                      : "text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Single Large AI Image + Excerpt Preview Card */}
          <div className="col-span-6">
            <div className="bg-white text-[#0D2E24] rounded-3xl border border-[#34D399]/40 shadow-2xl overflow-hidden transition-all duration-300">
              
              {/* Full-bleed Header Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  key={activeArticle.slug}
                  src={articleImages[activeArticle.slug] || "/images/blog/understanding-burnout-vs-stress.png"}
                  alt={activeArticle.title}
                  fill
                  className="object-cover transition-all duration-500"
                  priority
                />
              </div>

              {/* Padded Body */}
              <div className="p-6 sm:p-8 space-y-5">
                {/* Category & Read time */}
                <div className="flex items-center justify-between gap-2">
                  <Badge className="px-3 py-1 bg-[#34D399] text-white border-none normal-case tracking-normal shadow-xs">
                    <Tag className="w-3.5 h-3.5 mr-1" />
                    {activeArticle.category}
                  </Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#0D2E24]/70 font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#34D399]" />
                    {activeArticle.readTime}
                  </span>
                </div>

                {/* Title & Short Excerpt */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#0D2E24] leading-tight">
                    {activeArticle.title}
                  </h3>
                  <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed line-clamp-2">
                    {activeArticle.excerpt}
                  </p>
                </div>

                {/* Read Article Button */}
                <div className="pt-2">
                  <Link
                    href={`/blog/${activeArticle.slug}`}
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0D2E24] text-white font-bold text-sm hover:bg-[#34D399] hover:text-[#0D2E24] transition-all shadow-md group"
                  >
                    <BookOpen className="w-4 h-4 text-[#34D399] group-hover:text-[#0D2E24] transition-colors" />
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:text-[#0D2E24] group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Pagination Dots Centered for Desktop View */}
        <div className="hidden lg:flex items-center justify-center gap-2 pt-8">
          {articles.map((article, idx) => {
            const isActive = article.slug === activeArticle.slug;
            return (
              <button
                key={article.slug}
                onClick={() => setActiveSlug(article.slug)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#34D399] ${
                  isActive
                    ? "w-6 h-2.5 bg-[#34D399] shadow-xs"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Select article ${idx + 1}: ${article.title}`}
              />
            );
          })}
        </div>

        {/* MOBILE & TABLET LAYOUT: Swipeable Carousel with Right Side Spacing */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-5 pb-6 px-5 sm:px-8 scroll-px-5 scrollbar-none"
          >
            {articles.map((article) => (
              <div
                key={article.slug}
                className="w-[78vw] max-w-[340px] shrink-0 snap-center bg-white text-[#0D2E24] rounded-3xl border border-[#34D399]/40 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Full-bleed Top Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={articleImages[article.slug] || "/images/blog/understanding-burnout-vs-stress.png"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Padded Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    {/* Category & Read time */}
                    <div className="flex items-center justify-between gap-2">
                      <Badge className="px-3 py-1 bg-[#34D399] text-white border-none normal-case tracking-normal text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {article.category}
                      </Badge>
                      <span className="inline-flex items-center gap-1 text-xs text-[#0D2E24]/70 font-bold">
                        <Clock className="w-3 h-3 text-[#34D399]" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title & Short Excerpt */}
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-extrabold font-heading text-[#0D2E24] leading-snug line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-[#0D2E24]/80 font-medium leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Link */}
                  <div className="pt-2 border-t border-[#34D399]/20">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0D2E24] hover:text-[#059669] transition-colors group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#34D399] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* Trailing Right-Side Spacer to prevent cards touching right screen edge */}
            <div className="w-3 sm:w-6 shrink-0" aria-hidden="true" />
          </div>

          {/* Interactive Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {articles.map((article, idx) => (
              <button
                key={article.slug}
                onClick={() => scrollToMobileCard(idx)}
                className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#34D399] ${
                  activeMobileIndex === idx
                    ? "w-6 h-2.5 bg-[#34D399] shadow-xs"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to article slide ${idx + 1}: ${article.title}`}
              />
            ))}
          </div>
        </div>

        {/* View All Articles Plain Text Link (Refinement 1) */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#34D399] hover:text-white transition-colors group py-2 px-4"
          >
            <span>Explore all articles</span>
            <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
