import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getArticle, getAllArticles, type ContentBlock } from "@/lib/articles";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found | Mindhaven" };
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
    },
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
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#155D49] shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <blockquote
          key={index}
          className="my-6 px-6 py-5 bg-[#E6F2ED] border-l-4 border-[#155D49] rounded-r-2xl"
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

  return (
    <article className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      {/* Header */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-bold text-[#155D49] hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#155D49] text-white">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#155D49]/30 text-[#155D49]">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-[#0D2E24] leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-[#0D2E24]/75 font-medium max-w-2xl mx-auto leading-relaxed">
            {article.excerpt}
          </p>

          <p className="text-sm text-[#0D2E24]/50 font-medium">
            By Erika Martin &nbsp;·&nbsp;{" "}
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {article.content.map((block, index) => renderBlock(block, index))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-[#E6F2ED] border-t border-[#155D49]/20">
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D2E24] text-white font-bold text-base rounded-full hover:bg-[#155D49] transition-all shadow-md"
          >
            Book a Free Introductory Call
          </Link>
        </div>
      </section>
    </article>
  );
}
