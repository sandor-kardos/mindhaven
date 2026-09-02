# Site Audit Report

=== SEO ===
1. **Sitemap and Live Routes**
   - **Sitemap contents:** `sitemap.ts` includes the root `/`, `/about-erika-martin`, `/burnout-therapist-edinburgh`, `/fees-and-booking`, `/contact`, `/blog`, dynamic blog entries, `/resources`, `/tools/wheel-of-life`, `/tools/nervous-system-pacer`, `/resources/life-compass`, `/privacy-and-gdpr`, `/terms-of-service`, and `/legal-notice`.
   - **Route Match:** This perfectly matches the live route structure. The 6th blog post slug (`/blog/working-with-the-body-stress-recovery`) is correctly mapped. No stale or removed routes remain listed.

2. **Redirects**
   - The redirect from `/blog/somatic-therapy-explained` to `/blog/working-with-the-body-stress-recovery` is present in `next.config.ts` and set to `permanent: true`.

3. **Title, Meta Description, and Canonical Tags**
   - Unique metadata exports (`export const metadata`) are present in all page files across the `src/app` directory (except for strictly client pages).
   - Canonical tags (`alternates: { canonical: "..." }`) are correctly present on all standard routes. 
   - *Note:* `/resources/page.tsx` uses `"use client"` so it cannot export metadata directly. It relies on inherited layout metadata and lacks a specific canonical tag in its own file.

4. **Image Alt Text**
   - `grep` audit for `<Image` found one instance of empty alt text (`alt=""`) in `src/components/ui/gallery4.tsx` (Line 61). All other `<Image>` tags have descriptive alt text.
   - For the 3 new tool preview images, descriptive alt text is correctly assigned in the metadata open graph arrays (e.g., `alt: "Mindhaven Life Compass"`). 
   - *Note:* The 3 reading resources in `/resources/page.tsx` do not currently utilize the `cover` property or render an `<Image>` tag for book covers.

=== Security ===
5. **Content-Security-Policy (CSP)**
   - The CSP string in `next.config.ts` is: `default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://static.cloudflareinsights.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self' data:; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://static.cloudflareinsights.com https://challenges.cloudflare.com;`

6. **Security Headers**
   - All standard security headers are present in `next.config.ts`: `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `Cross-Origin-Opener-Policy`.

7. **npm audit**
   - `npm audit` returned: `found 0 vulnerabilities` (Exit code: 0).

8. **Secrets and API Keys**
   - A grep for secrets confirmed no hardcoded keys exist in the `src/` directory. `GMAIL_APP_PASSWORD` and `RESEND_API_KEY` are securely accessed via `process.env`.

9. **.secrets/ Git History**
   - Verified that `.secrets/` is properly gitignored.
   - `git log --all --full-history -- .secrets/` returned no output, confirming the directory was never committed to history.

=== Performance / Images ===
10. **Image File Sizes**
    - **Tool Previews:** `compass-preview.png` (48KB), `pacer-preview.png` (43KB), `wheel-preview.png` (159KB). These are reasonably optimized.
    - **Book Images:** `absent-father-effect.png` (591KB) and `inherited-fate.png` (385KB). The `absent-father-effect.png` is slightly oversized for a web asset and could benefit from compression. The `the-myth-of-normal` cover image does not exist in the repository.

11. **Image Optimization (sharp)**
    - A `curl` check against the `/_next/image` API for `compass-preview.png` successfully returned a `Content-Type: image/webp` with a reduced payload (12KB), confirming `sharp` is active and correctly processing/optimizing images on the fly.

=== Refactor / Code Cleanliness ===
12. **Leftover Scripts**
    - The previously mentioned test scripts (`test-admin.js`, `test-analytics.js`, etc.) have already been removed.
    - Current leftover utility scripts in the root include: `generate-og.js`, `screenshot-life-compass.js`, and `screenshot-mobile.js`.
    - In `scripts/`, there are `generate-compass-preview.js` and `generate-pacer-preview.js`. None of these have been deleted yet.

13. **Unused Imports / Dead Code**
    - `npm run lint` returned 75 problems (56 errors, 19 warnings), primarily related to `react-hooks/set-state-in-effect` rule violations (e.g., in `CookieConsentBanner.tsx` and `carousel.tsx`).

14. **Off-Palette Colors**
    - A regex grep for hex codes found a few variations outside the strict palette (Emerald #34D399, Evergreen #0D2E24, Pine Teal #26433A, White):
      - `#059669` (Darker green used for text/badges in UI components)
      - `#ECFDF5`, `#E6F7F0`, `#F4F7F6`, `#F0F5F2`, `#F9FBF9` (Various off-white/mint background shades used in the Life Compass and Pacer).
