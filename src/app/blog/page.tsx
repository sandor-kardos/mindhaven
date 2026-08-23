import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | Mindhaven",
  description: "Insights on stress management, burnout recovery, and emotional well-being.",
  alternates: { canonical: "https://mindhaven.uk/blog" }
};

export default function BlogIndex() {
  // Scaffolded data for MDX posts
  const posts = [
    {
      slug: "understanding-burnout-vs-stress",
      title: "Understanding Burnout vs. Stress",
      excerpt: "Learn the physiological and psychological differences between temporary stress and systemic burnout.",
      date: "2026-10-01"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] min-h-screen">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#155D49] border border-[#155D49]/30 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#155D49]" />
            <span>Insights & Articles</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading">
            Mindhaven Blog
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Practical insights on navigating stress, career challenges, and emotional well-being.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-sm hover:shadow-md transition-shadow group card-flow-effect">
              <p className="text-xs text-[#155D49] font-bold mb-2">{post.date}</p>
              <h2 className="text-2xl font-bold font-heading mb-3 group-hover:text-[#155D49] transition-colors">{post.title}</h2>
              <p className="text-sm text-[#0D2E24]/80 font-medium mb-4">{post.excerpt}</p>
              <div className="flex items-center text-[#155D49] text-sm font-bold">
                Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
