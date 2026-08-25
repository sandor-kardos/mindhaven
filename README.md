# Mindhaven — mindhaven.uk

Private counselling practice website for Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor. Built with Next.js App Router, deployed via Coolify.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.3.2 (App Router, TypeScript) |
| UI | React 19, Tailwind CSS 4 |
| Components | Radix UI Slot, Lucide React, Embla Carousel, Motion |
| Email | Resend (via `/api/book` route) |
| Analytics | Google Analytics 4 — `G-72M599EYCP`, Consent Mode v2 |
| Hosting | Coolify (self-hosted) |
| Build | Node.js standalone (required — API route prevents static export) |
| Repo | GitHub (private) |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                          # Home
│   ├── about-erika-martin/              # About page
│   ├── burnout-therapist-edinburgh/     # Edinburgh SEO landing page
│   ├── fees-and-booking/                # Pricing + booking form
│   ├── blog/
│   │   ├── page.tsx                     # Blog index (all articles)
│   │   └── [slug]/page.tsx              # Article renderer
│   ├── privacy-and-gdpr/                # UK GDPR privacy policy
│   ├── terms-of-service/                # Practice agreement
│   ├── legal-notice/                    # Statutory/regulatory info
│   ├── api/book/route.ts                # Booking form email handler (Resend)
│   ├── sitemap.ts                       # Dynamic sitemap (includes blog posts)
│   └── robots.ts                        # Allows GPTBot, ClaudeBot, etc.
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── CookieConsentBanner.tsx      # GA Consent Mode v2 banner
│       ├── CalmBreathingWidget.tsx
│       ├── BackgroundParticles.tsx
│       ├── FaqAccordion.tsx
│       └── gallery4.tsx                 # Article carousel (home + about)
└── lib/
    └── articles.ts                      # All blog article content (data-driven, no CMS)
public/
    llms.txt                             # AI/LLM site description
```

---

## Environment Variables

Create a `.env.local` file at the project root:

```env
# Required — Resend API key for the booking form email
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

The booking form (`/api/book`) sends enquiries to `mindhavenuk@gmail.com` via Resend. No other env vars are required for local development.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm run start   # Start production server locally
npm run lint    # ESLint
```

---

## Deployment — Coolify

> **Important:** This project uses `/api/book` (a Node.js API route). It **cannot** be deployed as a static export. Use the Node.js standalone build.

### Coolify settings

| Field | Value |
|---|---|
| Build command | `npm run build` |
| Start command | `node .next/standalone/server.js` |
| Port | `3000` |
| Node version | 20+ |

**Domains field:** Always prefix with `https://` — e.g. `https://mindhaven.uk`. Without the scheme prefix, Traefik routing will not work.

**Recommended deploy flow:**
1. Deploy to a temporary Coolify subdomain first
2. Test booking form end-to-end (check Resend dashboard for delivery)
3. Test on mobile
4. Point `mindhaven.uk` DNS to Coolify
5. Switch Coolify domain to `https://mindhaven.uk`
6. Confirm WordPress is shut down only after the new site is verified live

### `next.config` — standalone output

Ensure `next.config.ts` (or `.js`) includes:

```ts
const nextConfig = {
  output: "standalone",
};
```

---

## Blog Content

Blog articles live in `src/lib/articles.ts` as structured TypeScript data — no CMS, no MDX, no external pipeline required. To add a new article:

1. Add an `Article` object to the `articles` array in `src/lib/articles.ts`
2. The blog index and sitemap update automatically on the next build
3. Article slugs must be URL-safe (lowercase, hyphens)

Current articles:

| Slug | Title |
|---|---|
| `understanding-burnout-vs-stress` | Understanding Burnout vs. Stress |
| `burnout-therapist-edinburgh` | Understanding High-Functioning Burnout in Professionals |
| `nervous-system-regulation` | Regulating the Nervous System Under Pressure |
| `imposter-syndrome-in-professionals` | Imposter Syndrome: When Success Feels Like a Lie |
| `sustainable-boundaries` | Setting Sustainable Boundaries Without Guilt |
| `somatic-therapy-explained` | Somatic Approaches to Stress: Working With the Body |

---

## Analytics & Consent

Google Analytics 4 (`G-72M599EYCP`) is implemented with **Consent Mode v2** for GDPR/EEA compliance:

- GA script loads on every page but operates in cookieless/modelling mode by default
- All consent signals default to `denied`
- `wait_for_update: 500` gives the consent banner time to check stored preference
- User's choice is stored as a first-party cookie (`mindhaven_cookie_consent`) for 12 months
- On accept: `gtag('consent', 'update', { analytics_storage: 'granted' })`
- On decline or no action: signals remain denied

See `src/components/ui/CookieConsentBanner.tsx`.

---

## Key Constraints (from practice brief)

- **No online payment** on the site — Erika's firm decision. Booking form sends an enquiry email only.
- **No testimonials** — likely prohibited under NCPS accreditation ethics. Do not add.
- **Insurance/EAP clients exist** — do not claim "100% private-pay" anywhere.
- **In-person venue:** Mysa Therapy Rooms, Dalkeith — [mysatherapyrooms.co.uk/mysa-therapists](https://mysatherapyrooms.co.uk/mysa-therapists)
- **Registered address:** 6 Newmills Rd, Dalkeith EH22 2LE (Erika's address, not a clinic address)
- **Legal pages** (`/privacy-and-gdpr`, `/terms-of-service`, `/legal-notice`) were drafted for UK GDPR compliance — Erika or a solicitor should review before going live.
