import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "Blog | Mindhaven",
  description:
    "Articles on stress, burnout, anxiety, and emotional health, written by Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor.",
  alternates: { canonical: "https://mindhaven.uk/blog" },
};

export default function BlogIndex() {
  const posts = getAllArticles();

  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24] min-h-screen">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0D2E24] border border-[#34D399]/30 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#34D399]" />
            <span>Insights & Articles</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading">
            Mindhaven Blog
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Practical perspectives on stress, burnout, anxiety, and emotional health, written by Erika Martin.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white p-8 rounded-3xl border border-[#34D399]/20 shadow-sm hover:shadow-md transition-all group card-flow-effect"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEFFF7] text-[#0D2E24] text-xs font-bold border border-[#34D399]/20">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#0D2E24]/50 font-medium">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
                <span className="text-xs text-[#0D2E24]/50 font-medium">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-heading mb-3 group-hover:text-[#0D2E24] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[#0D2E24]/80 font-medium mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center text-[#0D2E24] text-sm font-bold">
                Read Article{" "}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
