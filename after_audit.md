=== SEO ===
1. Fetch and list every URL in src/app/sitemap.ts:
- https://mindhaven.uk
- https://mindhaven.uk/about-erika-martin
- https://mindhaven.uk/burnout-therapist-edinburgh
- https://mindhaven.uk/fees-and-booking
- https://mindhaven.uk/contact
- https://mindhaven.uk/blog
- https://mindhaven.uk/blog/understanding-burnout-vs-stress
- https://mindhaven.uk/blog/burnout-therapist-edinburgh
- https://mindhaven.uk/blog/nervous-system-regulation
- https://mindhaven.uk/blog/imposter-syndrome-in-professionals
- https://mindhaven.uk/blog/sustainable-boundaries
- https://mindhaven.uk/blog/somatic-therapy-explained
- https://mindhaven.uk/privacy-and-gdpr
- https://mindhaven.uk/terms-of-service
- https://mindhaven.uk/legal-notice
Result: Validated. The sitemap matches the actual live route structure perfectly with no missing or stale routes.

2. Check every page's generateMetadata/metadata export:
- /page.tsx: Unique title, unique description (in layout.tsx), Canonical: "https://mindhaven.uk" (in page.tsx)
- /about-erika-martin: Unique title, unique description, Canonical: "https://mindhaven.uk/about-erika-martin"
- /burnout-therapist-edinburgh: Unique title, unique description, Canonical: "https://mindhaven.uk/burnout-therapist-edinburgh"
- /fees-and-booking: Unique title, unique description, Canonical: "https://mindhaven.uk/fees-and-booking"
- /contact: Unique title, unique description, Canonical: "https://mindhaven.uk/contact"
- /blog: Unique title, unique description, Canonical: "https://mindhaven.uk/blog"
- /blog/[slug]: Unique dynamic title & description, Canonical: dynamic.
- /privacy-and-gdpr: Unique title, unique description, Canonical: "https://mindhaven.uk/privacy-and-gdpr"
- /terms-of-service: Unique title, unique description, Canonical: "https://mindhaven.uk/terms-of-service"
- /legal-notice: Unique title, unique description, Canonical: "https://mindhaven.uk/legal-notice"
Result: ALL flags resolved. `/privacy-and-gdpr` and `/terms-of-service` now have accurate canonical URL tags.

3. Image alt text check:
- `gallery4.tsx`: `<Image alt={item.title} ...>`
- `MindhavenGalleryCta.tsx`: `<Image alt={img.alt} ...>`
- `page.tsx`: `<Image alt="Erika Martin - MNCPS Accredited Psychotherapeutic Counsellor" ...>`
- `page.tsx`: `<Image alt="Erika Martin" ...>`
- `about-erika-martin/page.tsx`: `<Image alt="Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor, Edinburgh" ...>`
Result: No raw `<img>` tags remain. All `<Image>` usages have non-empty, descriptive alt text.

4. robots.ts:
sitemap is correctly set to 'https://mindhaven.uk/sitemap.xml'. Syntax is valid.

=== GEO ===
5. Validate public/llms.txt:
Lists 6 exact blog post URLs which match the 6 slugs perfectly in `src/lib/articles.ts`. All other routes (`/about-erika-martin`, etc.) are accurate. No stale references.

6. JSON-LD schema blocks:
- `FAQPage` in `src/app/page.tsx`: Matches the `FaqAccordion` questions and answers exactly.
- `Person` / `BlogPosting` in `src/app/blog/[slug]/page.tsx`: Schema matches the rendered visible page text correctly (Erika Martin, MNCPS listing). No drift detected.

7. AI Crawler User-Agents in robots.ts:
Current allowed crawlers:
- `*`
- `GPTBot`
- `ClaudeBot`
- `PerplexityBot`
- `Google-Extended`
Result: All expected AI crawler agents are present and explicitly allowed. None are missing.

=== Security ===
8. Content-Security-Policy string in next.config.ts:
`default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://static.cloudflareinsights.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self' data:; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://static.cloudflareinsights.com https://challenges.cloudflare.com;`

9. Additional Security Headers:
- Strict-Transport-Security: Present
- X-Frame-Options: Present
- X-Content-Type-Options: Present
- Referrer-Policy: Present
- Cross-Origin-Opener-Policy: Present
- Permissions-Policy: Present
Result: ALL flags resolved. `Permissions-Policy` header has been successfully added to `next.config.ts`.

10. npm audit output:
`found 0 vulnerabilities`

11. Hardcoded API keys check:
Grep for `RESEND_API_KEY`, `sk_`, `api_key` found:
- `src/app/api/book/route.ts`: `const resendApiKey = process.env.RESEND_API_KEY;`
- `README.md`: `RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx`
Result: No actual sensitive credentials or tokens are hardcoded. Everything securely uses environment variables.

=== Refactor / Code Cleanliness ===
12. Leftover utility scripts:
Result: ALL flags resolved. The `life compass by mindhaven.html` prototype has been successfully moved out of the repository root.

13. Unused imports or dead code:
Result: ALL flags resolved. 
- `src/components/ui/card.tsx` was deleted entirely.
- All unused imports and variables in `src/components/ui/gallery4.tsx` were stripped out.

14. Duplicate/Near-duplicate components:
Result: ALL flags resolved. The duplicated hardcoded pill UI was completely refactored into a single, cohesive, reusable `Badge` component located at `src/components/ui/Badge.tsx`.
