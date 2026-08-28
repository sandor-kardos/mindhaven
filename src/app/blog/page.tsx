import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

const articleImages: Record<string, { url: string; objectPosition: string }> = {
  "burnout-therapist-edinburgh": { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop", objectPosition: "center 20%" },
  "nervous-system-regulation": { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop", objectPosition: "center 30%" },
  "imposter-syndrome-in-professionals": { url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop", objectPosition: "center 20%" },
  "sustainable-boundaries": { url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop", objectPosition: "center 15%" },
  "somatic-therapy-explained": { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop", objectPosition: "center 25%" },
  "understanding-burnout-vs-stress": { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop", objectPosition: "center 20%" },
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
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Practical perspectives on stress, burnout, anxiety, and emotional health, written by Erika Martin.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col sm:flex-row bg-white p-6 rounded-3xl border border-[#34D399]/20 shadow-sm hover:shadow-md transition-all group card-flow-effect gap-6 items-center lg:items-start"
            >
              {/* Left Side Image */}
              <div className="w-full sm:w-2/5 lg:w-1/3 shrink-0">
                <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shadow-sm">
                  <Image 
                    src={articleImages[post.slug]?.url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: articleImages[post.slug]?.objectPosition || "center 20%" }}
                  />
                </div>
              </div>

              {/* Right Side Content */}
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <Badge className="gap-1.5 px-3 py-1 bg-[#FEFFF7] text-[#0D2E24] border-[#34D399]/20 normal-case tracking-normal shadow-sm">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </Badge>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#0D2E24]/50 font-bold">
                    <Clock className="w-3 h-3 text-[#34D399]" />
                    {post.readTime}
                  </span>
                  <span className="text-xs text-[#0D2E24]/50 font-bold hidden sm:inline-block">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold font-heading mb-3 group-hover:text-[#34D399] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-[#0D2E24]/80 font-medium mb-5 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[#0D2E24] text-sm font-bold">
                  Read Article{" "}
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
