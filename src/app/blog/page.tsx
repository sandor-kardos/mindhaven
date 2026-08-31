import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const articleImages: Record<string, string> = {
  "burnout-therapist-edinburgh": "/images/blog/burnout-therapist-edinburgh.png",
  "nervous-system-regulation": "/images/blog/nervous-system-regulation.png",
  "imposter-syndrome-in-professionals": "/images/blog/imposter-syndrome-in-professionals.png",
  "sustainable-boundaries": "/images/blog/sustainable-boundaries.png",
  "somatic-therapy-explained": "/images/blog/somatic-therapy-explained.png",
  "understanding-burnout-vs-stress": "/images/blog/understanding-burnout-vs-stress.png",
};

export const metadata = {
  title: "Blog | Mindhaven",
  description: "Articles on stress, burnout, anxiety, and emotional health, written by Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor.",
  alternates: { canonical: "https://mindhaven.uk/blog" },
  openGraph: {
    title: "Blog | Mindhaven",
    description: "Articles on stress, burnout, anxiety, and emotional health, written by Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor.",
    url: "https://mindhaven.uk/blog",
  },
  twitter: {
    title: "Blog | Mindhaven",
    description: "Articles on stress, burnout, anxiety, and emotional health, written by Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor.",
  }
};

export default function BlogIndex() {
  const posts = getAllArticles();

  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24] min-h-screen">
      <section className="relative pt-20 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-center border-b border-[#34D399]/20 overflow-hidden">
        {/* Ambient Floating Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#34D399]/12 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl space-y-4 relative z-10">
          <Badge variant="white">
            <BookOpen className="w-4 h-4 text-[#34D399]" />
            <span>Insights & Articles</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading">
            Mindhaven Blog
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto [text-wrap:balance]">
            Practical perspectives on stress, burnout, anxiety, and emotional health, written by Erika&nbsp;Martin.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col bg-white rounded-3xl border border-[#34D399]/25 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden justify-between"
            >
              {/* Bleeding Header Image (No inner frame/padding) */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0D2E24]/5">
                <Image 
                  src={articleImages[post.slug] || "/images/blog/understanding-burnout-vs-stress.png"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge className="gap-1.5 px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] border-[#34D399]/30 normal-case tracking-normal shadow-xs font-bold text-xs">
                      <Tag className="w-3 h-3 text-[#059669]" />
                      {post.category}
                    </Badge>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#0D2E24]/60 font-bold">
                      <Clock className="w-3 h-3 text-[#34D399]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-extrabold font-heading group-hover:text-[#059669] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#0D2E24]/80 font-medium leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#34D399]/15 flex items-center justify-between text-[#0D2E24] text-xs font-extrabold">
                  <span className="group-hover:text-[#059669] transition-colors">Read Article</span>
                  <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
