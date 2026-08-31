"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, BookOpen, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { articles } from "@/lib/articles";

const articleImages: Record<string, string> = {
  "understanding-burnout-vs-stress": "/images/blog/understanding-burnout-vs-stress.png",
  "burnout-therapist-edinburgh": "/images/blog/burnout-therapist-edinburgh.png",
  "nervous-system-regulation": "/images/blog/nervous-system-regulation.png",
  "imposter-syndrome-in-professionals": "/images/blog/imposter-syndrome-in-professionals.png",
  "sustainable-boundaries": "/images/blog/sustainable-boundaries.png",
  "somatic-therapy-explained": "/images/blog/somatic-therapy-explained.png",
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

  const activeArticle = articles.find((a) => a.slug === activeSlug) || articles[0];

  return (
    <section className="py-16 sm:py-20 bg-[#0D2E24] text-white relative overflow-hidden border-y border-[#34D399]/30">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-[#34D399]/15 rounded-full blur-[140px] animate-aura-drift" />
        <div className="absolute -bottom-32 -right-20 w-[550px] h-[550px] bg-[#059669]/20 rounded-full blur-[130px] animate-aura-drift" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-12 max-w-3xl mx-auto text-center flex flex-col items-center space-y-4">
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

        {/* 2 Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Stacked List of 6 Plain Text Titles */}
          <div className="lg:col-span-6 flex flex-col space-y-2.5">
            {articles.map((article) => {
              const isActive = article.slug === activeArticle.slug;
              return (
                <button
                  key={article.slug}
                  onClick={() => setActiveSlug(article.slug)}
                  onMouseEnter={() => setActiveSlug(article.slug)}
                  className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                    isActive
                      ? "bg-white/15 border-[#34D399] text-white shadow-lg translate-x-1"
                      : "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10 hover:border-[#34D399]/50 hover:text-white"
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
          <div className="lg:col-span-6">
            <div className="bg-[#FEFFF7] text-[#0D2E24] p-6 sm:p-8 rounded-3xl border border-[#34D399]/40 shadow-2xl space-y-6 transition-all duration-300">
              
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

              {/* Large Image Container */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-[#34D399]/20 bg-slate-100">
                <Image
                  key={activeArticle.slug}
                  src={articleImages[activeArticle.slug] || "/images/blog/understanding-burnout-vs-stress.png"}
                  alt={activeArticle.title}
                  fill
                  className="object-cover transition-all duration-500"
                  priority
                />
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
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* View All Articles Link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-[#34D399]/40 text-white font-bold text-sm transition-all hover:-translate-y-0.5 group"
          >
            <span>Explore all articles</span>
            <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
