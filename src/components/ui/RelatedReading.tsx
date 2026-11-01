import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getArticle } from "@/lib/articles";

/** "Related reading" links from a tool page to blog articles. */
export function RelatedReading({ slugs }: { slugs: string[] }) {
  const items = slugs.map((s) => getArticle(s)).filter((a) => a !== undefined);
  if (items.length === 0) return null;

  return (
    <section className="py-12 px-4 bg-white border-t border-[#34D399]/20">
      <div className="container mx-auto max-w-3xl space-y-4">
        <h2 className="text-xl font-extrabold text-[#0D2E24] font-heading">Related reading</h2>
        <ul className="space-y-3">
          {items.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/blog/${a.slug}`}
                className="group flex items-center justify-between gap-4 p-4 rounded-2xl border border-[#34D399]/25 hover:border-[#34D399] hover:bg-[#34D399]/5 transition-colors"
              >
                <span>
                  <span className="block font-bold text-[#0D2E24]">{a.title}</span>
                  <span className="block text-sm text-[#0D2E24]/70 font-medium mt-1">{a.excerpt}</span>
                </span>
                <ArrowRight className="w-5 h-5 text-[#34D399] shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
