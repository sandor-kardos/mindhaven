import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { getArticle, getAllArticles, type ContentBlock } from "@/lib/articles";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

const articleImages: Record<string, string> = {
  "burnout-therapist-edinburgh": "/images/blog/burnout-therapist-edinburgh.png",
  "nervous-system-regulation": "/images/blog/nervous-system-regulation.png",
  "imposter-syndrome-in-professionals": "/images/blog/imposter-syndrome-in-professionals.png",
  "sustainable-boundaries": "/images/blog/sustainable-boundaries.png",
  "somatic-therapy-explained": "/images/blog/somatic-therapy-explained.png",
  "understanding-burnout-vs-stress": "/images/blog/understanding-burnout-vs-stress.png",
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found | Mindhaven" };
  const imageUrl = articleImages[slug] || "/images/blog/understanding-burnout-vs-stress.png";
  return {
    title: `${article.title} | Mindhaven`,
    description: article.excerpt,
    alternates: { canonical: `https://mindhaven.uk/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://mindhaven.uk/blog/${slug}`,
      siteName: "Mindhaven",
      type: "article",
      publishedTime: article.date,
      authors: ["Erika Martin"],
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    }
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="text-2xl font-extrabold text-[#0D2E24] font-heading mt-10 mb-4"
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={index}
          className="text-lg font-bold text-[#0D2E24] font-heading mt-6 mb-2"
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p
          key={index}
          className="text-[#0D2E24]/85 leading-relaxed font-medium mb-5"
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="mb-5 space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#0D2E24]/85 font-medium leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#34D399] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <blockquote
          key={index}
          className="my-6 px-6 py-5 bg-[#FEFFF7] border-l-4 border-[#34D399] rounded-r-2xl"
        >
          <p className="text-[#0D2E24] font-semibold leading-relaxed italic">
            {block.text}
          </p>
        </blockquote>
      );
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    url: `https://mindhaven.uk/blog/${article.slug}`,
    mainEntityOfPage: `https://mindhaven.uk/blog/${article.slug}`,
    author: {
      "@type": "Person",
      name: "Erika Martin",
      url: "https://mindhaven.uk/about-erika-martin",
      sameAs: "https://www.search-ncps.com/search/FindaTherapist/NCS16-03808",
    },
    publisher: {
      "@type": "Organization",
      name: "Mindhaven",
      url: "https://mindhaven.uk",
    },
  };

const articleTldrs: Record<string, string> = {
  "burnout-therapist-edinburgh": "Burnout isn't just stress: it's a systemic energy depletion. True recovery requires more than a holiday; it demands a fundamental shift in how you allocate your resources.",
  "nervous-system-regulation": "Your nervous system dictates your stress response. Learning to regulate it isn't about eliminating stress, but expanding your capacity to handle it without getting stuck in fight-or-flight.",
  "imposter-syndrome-in-professionals": "Imposter syndrome thrives in isolation. By understanding its roots in perfectionism and societal expectations, you can untangle your self-worth from your achievements.",
  "sustainable-boundaries": "Boundaries aren't walls to keep people out; they're the parameters that allow you to stay in the relationship safely. Guilt is just the price of admission for self-advocacy.",
  "somatic-therapy-explained": "Talk therapy engages the mind, but trauma and chronic stress live in the body. Somatic therapy bridges this gap by addressing the physical imprint of psychological pain."
};

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex(a => a.slug === slug);
  const prevArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
  const nextArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;

  const headerImageUrl = articleImages[slug] || "/images/blog/understanding-burnout-vs-stress.png";

  const shapeClass = 
    currentIndex % 3 === 0 ? 'animate-blob' : 
    currentIndex % 3 === 1 ? 'rounded-full' : 
    'rounded-br-[4rem] rounded-tl-[4rem] rounded-tr-xl rounded-bl-xl rotate-1';

  return (
    <article className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Header & Image Flex Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] border-b border-[#34D399]/20 relative overflow-hidden">
        
        {/* Ambient Floating Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#34D399]/12 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold text-[#0D2E24] hover:text-[#34D399] transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Blog
          </Link>

          <div className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${currentIndex % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
                <Badge className="gap-1.5 px-3 py-1 bg-[#34D399] text-white border-none normal-case tracking-normal shadow-sm">
                  <Tag className="w-3 h-3" />
                  {article.category}
                </Badge>
                <Badge variant="white" className="gap-1.5 px-3 py-1 normal-case tracking-normal shadow-sm">
                  <Clock className="w-3 h-3 text-[#34D399]" />
                  {article.readTime}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold font-heading text-[#0D2E24] leading-[1.1] tracking-tight">
                {article.title}
              </h1>

              {/* The "TLDR" summary box without using the word TLDR */}
              <div className="p-6 mt-8 bg-white border border-[#34D399]/30 rounded-2xl shadow-sm relative">
                <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#FEFFF7] px-3 py-0.5 rounded-full border border-[#34D399]/30 text-[10px] font-extrabold text-[#34D399] uppercase tracking-widest shadow-sm">
                  In a Nutshell
                </div>
                <p className="text-[#0D2E24]/85 font-semibold leading-relaxed">
                  {articleTldrs[slug] || article.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#34D399]/10 mt-6">
                <div className="w-8 h-8 rounded-full bg-[#0D2E24] text-[#34D399] flex items-center justify-center font-bold font-heading text-xs">EM</div>
                <p className="text-xs text-[#0D2E24]/70 font-bold">
                  By Erika Martin &nbsp;·&nbsp;{" "}
                  {new Date(article.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Visual (1:1 Dynamic Shape) */}
            <div className="w-full md:w-[40%] flex justify-center items-center">
              <div className={`relative w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] overflow-hidden border-[6px] border-white shadow-2xl ${shapeClass}`}>
                <Image 
                  src={headerImageUrl}
                  alt={article.title}
                  fill
                  className="object-cover filter brightness-[1.02]"
                  priority
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          {article.content.map((block, index) => renderBlock(block, index))}
        </div>
      </section>

      {/* Post Navigation */}
      <section className="py-12 px-4 bg-[#FEFFF7] border-t border-[#34D399]/10">
        <div className="container mx-auto max-w-3xl flex flex-col sm:flex-row justify-between items-stretch gap-6">
          {prevArticle ? (
            <Link href={`/blog/${prevArticle.slug}`} className="flex-1 p-6 rounded-2xl bg-white border border-[#34D399]/20 hover:border-[#34D399] transition-all group flex flex-col items-start text-left">
              <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider mb-2 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Previous
              </span>
              <span className="text-[#0D2E24] font-extrabold font-heading line-clamp-2">{prevArticle.title}</span>
            </Link>
          ) : <div className="flex-1" />}
          
          {nextArticle ? (
            <Link href={`/blog/${nextArticle.slug}`} className="flex-1 p-6 rounded-2xl bg-white border border-[#34D399]/20 hover:border-[#34D399] transition-all group flex flex-col items-end text-right">
              <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider mb-2 flex items-center gap-1">
                Next <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[#0D2E24] font-extrabold font-heading line-clamp-2">{nextArticle.title}</span>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-[#FEFFF7] border-t border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-2xl font-extrabold text-[#0D2E24] font-heading">
            Recognise Something in This?
          </h2>
          <p className="text-[#0D2E24]/80 font-medium leading-relaxed max-w-xl mx-auto">
            If you would like to explore what counselling might offer you, a free
            15-minute introductory call is a good place to start, with no obligation to proceed.
          </p>
          <Link
            href="/contact#book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D2E24] text-white font-bold text-base rounded-full hover:bg-[#34D399] transition-all shadow-md"
          >
            Book a Free Introductory Call
          </Link>
        </div>
      </section>
    </article>
  );
}
