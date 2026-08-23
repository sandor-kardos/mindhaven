import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: `${params.slug.replace(/-/g, ' ')} | Mindhaven Blog`,
    alternates: { canonical: `https://mindhaven.uk/blog/${params.slug}` }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // This is a scaffold for the MDX route.
  // In a real implementation, you would load the MDX file based on params.slug.
  
  if (!params.slug) {
    notFound();
  }

  return (
    <article className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] min-h-screen">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#E6F2ED] to-[#F8FAF8] text-center border-b border-[#155D49]/20">
        <div className="container mx-auto max-w-3xl space-y-6">
          <Link href="/blog" className="inline-flex items-center text-sm font-bold text-[#155D49] hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading capitalize">
            {params.slug.replace(/-/g, ' ')}
          </h1>
          <p className="text-sm text-[#0D2E24]/70 font-medium">Published on 2026-10-01</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-p:text-[#0D2E24]/85 prose-headings:text-[#0D2E24] prose-headings:font-heading">
          {/* MDX Content would be rendered here */}
          <p>This is a scaffolded MDX post route for: <strong>{params.slug}</strong>.</p>
          <p>To fully support MDX compilation, you would integrate <code>next/mdx</code> or <code>next-mdx-remote</code> in the Next.js configuration.</p>
        </div>
      </section>
    </article>
  );
}
