# Mindhaven Counselling Platform

## 1. Project Overview
Mindhaven is a psychotherapeutic counselling platform for adults navigating stress, burnout, and anxiety. It is built as a highly performant, statically optimized web application.
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Hosting:** Self-hosted on Coolify via GitHub auto-deploy pipeline

## 2. Environment Variables
To run this project locally or in production, the following environment variables are required (matching `.env.example`). Do not commit real keys to version control.

- `RESEND_API_KEY`: Server-side API key for sending booking enquiry emails securely.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: (Optional) The business WhatsApp number used to construct direct messaging links across the site. Defaults to the hardcoded practice number if omitted.

## 3. Key Features
- **Secure Booking Form:** Fully integrated with Resend to transmit secure, server-side booking enquiries directly to the practice.
- **MDX-Free Blog Architecture:** A robust blog system powered entirely by a strictly typed `articles.ts` data file, avoiding the overhead of MDX parsers while maintaining rich data structures.
- **Life Compass Tool (`/resources/life-compass`):** A client-side, interactive self-reflection tool. It utilizes `localStorage` for state persistence and `html2pdf.js` for exporting results. Zero user data is transmitted to or stored on the server.
- **Analytics (GTM/GA4):** Fully integrated Google Tag Manager (Container ID: `GTM-TFD5W94G`) with Consent Mode v2. Features a custom `generate_lead` event upon successful booking form submission.
- **Boutique Design System:** A meticulously crafted, high-contrast, nature-inspired palette tailored for calmness and trust:
  - Ivory (`#FEFFF7`)
  - Emerald (`#34D399`)
  - Evergreen (`#0D2E24`)
  - Lime Cream (`#F6FFA2`)

## 4. SEO & GEO Setup
- **Crawling:** Explicitly configured `robots.ts` granting access to major AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`) and a dynamically generated `sitemap.ts`.
- **GEO (Generative Engine Optimization):** Includes a dedicated `public/llms.txt` exposing the site structure clearly for AI consumption.
- **JSON-LD Schema:** Implements structured data across the site, including `ProfessionalService`, `Person`, and `FAQPage` schemas for enhanced SERP presence.
- **Metadata:** Strict enforcement of canonical URLs across all routes to prevent duplicate indexing.
- **Open Graph:** Features a static branding blob for root routes and dynamic, pure Unsplash themed images for individual blog posts (no branding overlay).

## 5. Security Architecture
- **Content Security Policy (CSP):** A strict CSP is enforced via `next.config.ts`, locking down allowed origins for scripts, styles, images, and connections.
- **Security Headers:** Implements comprehensive protection including `Strict-Transport-Security` (HSTS), `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Cross-Origin-Opener-Policy`, and `Permissions-Policy`.
- **Secrets Management:** Strict adherence to a "no hardcoded secrets" policy; all sensitive tokens are restricted to server-side execution via environment variables.

## 6. Deployment
- **Pipeline:** Automated deployment pipeline managed by Coolify, triggered via GitHub webhooks.
- **Build Configuration:** `next.config.ts` is explicitly configured with `output: "standalone"` to bundle the application efficiently for containerized hosting.
- **Routing Note:** The `Domains` field in Coolify requires the explicit `https://` prefix for proper routing and SSL termination.

## 7. Known Limitations / Not Yet Built
- **Content Pipeline Automation:** The blog currently requires developers to add new entries to `articles.ts` manually. An automated bot-to-GitHub publishing pipeline is planned as a separate, future project and is not included in this repository's current scope.
