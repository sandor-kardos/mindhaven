import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = slug ? slug.replace(/-/g, ' ') : "Blog Post";
  return {
    title: `${title} | Mindhaven Blog`,
    alternates: { canonical: `https://mindhaven.uk/blog/${slug}` }
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }

  const formattedTitle = slug.replace(/-/g, ' ');

  return (
    <article className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] min-h-screen">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-6">
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-[#155D49] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading capitalize">
            {formattedTitle}
          </h1>
          <p className="text-sm text-[#0D2E24]/70 font-medium">Published on 2026-10-01</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-p:text-[#0D2E24]/85 prose-headings:text-[#0D2E24] prose-headings:font-heading">
          <p>This is a scaffolded MDX post route for: <strong>{formattedTitle}</strong>.</p>
          <p>To publish full articles, content markdown files will be loaded dynamically via the content pipeline.</p>
        </div>
      </section>
    </article>
  );
}
