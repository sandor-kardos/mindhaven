"use client";

import { ArrowRight, Leaf, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { articles, Article } from "@/lib/articles";

export interface Gallery4Props {
  title?: string;
  description?: string;
}

export function Gallery4({
  title = "Insights on Resilience & Clarity",
  description = "Evidence-based perspectives on burnout, stress, and nervous system resilience by Erika Martin.",
}: Gallery4Props) {
  // Select top 5 articles for the homepage display
  const featuredArticles: Article[] = articles.slice(0, 5);

  const categoryColors: Record<string, string> = {
    "Stress & Burnout": "#0D2E24",
    "Burnout Recovery": "#059669",
    "Nervous System": "#047857",
    "Mindset & Anxiety": "#065F46",
    "Work-Life Balance": "#0D2E24",
    "Therapeutic Methods": "#047857",
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0D2E24] text-white relative overflow-hidden border-y border-[#34D399]/30">
      {/* Decorative Abstract Nature & Crystal SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Glowing Ambient Orbs */}
        <div className="absolute -top-32 -left-20 w-[600px] h-[600px] bg-[#34D399]/15 rounded-full blur-[140px] animate-aura-drift" />
        <div className="absolute -bottom-32 -right-20 w-[550px] h-[550px] bg-[#059669]/20 rounded-full blur-[130px] animate-aura-drift" />

        {/* Abstract Geometric Crystal & Organic Nature Vector Art */}
        <svg
          className="absolute w-full h-full opacity-25 mix-blend-screen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="crystalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0D2E24" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="crystalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#064E3B" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Faceted Crystal Gemstone Polygons */}
          <polygon points="150,50 320,120 280,300 110,240" fill="url(#crystalGrad1)" />
          <polygon points="320,120 450,40 420,220 280,300" fill="url(#crystalGrad2)" />
          <polygon points="280,300 420,220 380,420 210,380" fill="url(#crystalGrad1)" opacity="0.6" />
          
          {/* Right Crystal Array */}
          <polygon points="900,100 1080,180 1020,400 860,320" fill="url(#crystalGrad2)" />
          <polygon points="1080,180 1180,90 1150,310 1020,400" fill="url(#crystalGrad1)" />
          <polygon points="860,320 1020,400 950,580 790,480" fill="url(#crystalGrad2)" opacity="0.5" />

          {/* Organic Leaf / Wave Curves */}
          <path
            d="M -100,500 Q 250,350 600,550 T 1300,450 L 1300,900 L -100,900 Z"
            fill="url(#crystalGrad1)"
            opacity="0.25"
          />
          <path
            d="M -100,600 Q 350,480 750,620 T 1300,520 L 1300,900 L -100,900 Z"
            fill="url(#leafGrad)"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-12 max-w-3xl mx-auto text-center flex flex-col items-center space-y-4">
          <Badge variant="white" className="gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-[#34D399]/40 text-[#34D399]">
            <Sparkles className="w-4 h-4 text-[#34D399]" />
            <span className="font-extrabold uppercase tracking-wider text-xs">Wellbeing Insights</span>
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
            {title}
          </h2>
          
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
            {description}
          </p>
        </div>

        {/* 5 Plain Text Cards Grid (No photos of people) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={`group relative p-7 rounded-2xl bg-[#FEFFF7] text-[#0D2E24] border border-[#34D399]/30 hover:border-[#34D399] shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Header Row: Category Badge + Read Time */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-extrabold text-white uppercase tracking-wider"
                    style={{ backgroundColor: categoryColors[article.category] || "#0D2E24" }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs font-semibold text-[#0D2E24]/60">
                    {article.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold font-heading leading-snug text-[#0D2E24] group-hover:text-[#059669] transition-colors">
                  {article.title}
                </h3>

                {/* Plain 1-Line Excerpt */}
                <p className="text-xs sm:text-sm text-[#0D2E24]/80 font-medium line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="mt-6 pt-4 border-t border-[#34D399]/20 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0D2E24] group-hover:text-[#059669] transition-colors">
                  <BookOpen className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Read Article</span>
                </span>
                <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
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
