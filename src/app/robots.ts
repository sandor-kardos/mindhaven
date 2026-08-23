import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ['*', 'GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
      allow: '/',
    },
    sitemap: 'https://mindhaven.uk/sitemap.xml',
  }
}
