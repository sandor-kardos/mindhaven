import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const blogEntries: MetadataRoute.Sitemap = articles.map((article, index) => ({
    url: `https://mindhaven.uk/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: index < 3 ? 0.75 : 0.7,
  }));

  return [
    {
      url: "https://mindhaven.uk",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://mindhaven.uk/about-erika-martin",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindhaven.uk/burnout-therapist-edinburgh",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindhaven.uk/fees-and-booking",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindhaven.uk/contact",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://mindhaven.uk/blog",
      lastModified: new Date(articles[0]?.date ?? new Date()),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogEntries,
    {
      url: "https://mindhaven.uk/resources",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindhaven.uk/tools/wheel-of-life",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindhaven.uk/tools/nervous-system-pacer",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindhaven.uk/resources/life-compass",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mindhaven.uk/privacy-and-gdpr",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://mindhaven.uk/terms-of-service",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://mindhaven.uk/legal-notice",
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
