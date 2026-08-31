# Mindhaven Visual Design & Carousel Specification (`BLOGDesign.md`)

> **Target Audience**: AI Coding Assistants & Front-End Engineers  
> **Purpose**: Complete design system, component specification, and exact text diff ledger for replicating the Mindhaven boutique Counselling & Wellbeing visual identity and responsive gallery carousel.

---

## 1. Core Visual Brand Identity & Tokens

### 1.1 Palette & Color Tokens
* **Primary Deep Forest (Backgrounds & Text)**: `#0D2E24`
* **Vibrant Mint Accent**: `#34D399`
* **Warm Ivory Background**: `#FEFFF7`
* **Category Badge Accents**:
  * Burnout Recovery: `#457A5D` (Pine)
  * Nervous System: `#C06A33` (Terracotta)
  * Mindset & Anxiety: `#E06A17` (Burnt Orange)
  * Work-Life Balance: `#34658C` (Slate Navy)
  * Therapeutic Methods: `#7A6F64` (Warm Taupe)

### 1.2 Logo Lockup Architecture (`Logo.tsx`)
```tsx
<Link href="/" className="inline-flex items-center gap-2.5 group">
  {/* Sanctuary Arch & Botanical Leaf Crest */}
  <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
    <path d="M 22 76 V 44 C 22 28.536 34.536 16 50 16 C 65.464 16 78 28.536 78 44 V 76" stroke="#0D2E24" strokeWidth="6" strokeLinecap="round" />
    <path d="M 50 30 V 76" stroke="#0D2E24" strokeWidth="5" strokeLinecap="round" />
    <path d="M 50 54 C 36 54 30 42 30 42" stroke="#0D2E24" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 50 44 C 64 44 70 32 70 32" stroke="#0D2E24" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
  
  {/* Compact Typography Lockup */}
  <div className="flex flex-col justify-center">
    <div className="flex items-baseline">
      <span className="font-heading text-xl sm:text-[21px] font-extrabold tracking-[-0.05em] leading-[0.85]">
        <span className="text-[#0D2E24]">Mind</span>
        <span className="text-[#0D2E24]/40">haven</span>
      </span>
      <span className="text-[#34D399] text-xl sm:text-[21px] font-black leading-[0.85] ml-0.5">.</span>
    </div>
    <span className="text-[8px] font-extrabold uppercase tracking-[0.25em] leading-none mt-1 text-[#0D2E24]/50">
      Private Counselling
    </span>
  </div>
</Link>
```

---

## 2. Organic Blob Image Gallery Specification (`gallery4.tsx`)

### 2.1 Organic Blob border-radius Curves
Each card features a unique organic blob mask:
* **Shape 1**: `73% 27% 41% 59% / 34% 68% 32% 66%`
* **Shape 2**: `31% 69% 62% 38% / 65% 31% 69% 35%`
* **Shape 3**: `68% 32% 25% 75% / 42% 64% 36% 58%`
* **Shape 4**: `38% 62% 76% 24% / 28% 62% 38% 72%`
* **Shape 5**: `62% 38% 54% 46% / 41% 65% 35% 59%`

### 2.2 Mobile-First Responsive Carousel Grid Sizing
* **Mobile (`< 640px`)**:
  * Item Width: `basis-[78%]` (provides ~22% peek affordance of next slide on right edge)
  * Blob Image Height: `h-[19.5rem]` (20% taller for proper mobile portrait framing)
  * Outer Link Card Height: `h-[25.5rem]`
  * Category Badge: `px-2 py-0.5 text-[9px]`
* **Tablet (`640px - 1024px`)**:
  * Item Width: `sm:basis-[260px]` (displays 2 cards + 3rd card peeking)
  * Blob Image Height: `sm:h-[19rem]`
  * Outer Link Card Height: `sm:h-[25rem]`
* **Desktop (`> 1024px`)**:
  * Item Width: `lg:basis-[20%]` (displays all 5 cards side-by-side with zero right-edge clipping or cut-off)

### 2.3 Embla Carousel Container Structure
```tsx
<Carousel opts={{ align: "start", loop: false }}>
  <CarouselContent className="-ml-4">
    {items.map((item) => (
      <CarouselItem className="basis-[78%] sm:basis-[260px] lg:basis-[20%] pl-4">
        {/* Card Content */}
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
```

---

## 3. Comprehensive Website Text & Copy Diffs

Below is the complete ledger of copy modifications across the Mindhaven project:

| File Location | Previous Text / Value | Updated Text / Value | Rationale |
| :--- | :--- | :--- | :--- |
| `src/components/layout/Logo.tsx` | `Counselling & Wellbeing` | `Private Counselling` | Ethical UK counselling alignment & boutique clarity |
| `src/components/layout/Logo.tsx` | `text-[26px]` | `text-xl sm:text-[21px]` | Compact navbar hierarchy & balance |
| `src/components/layout/Logo.tsx` | `tracking-[0.3em]` | `tracking-[0.25em]` | Cleaner letter spacing at smaller point sizes |
| `src/components/ui/gallery4.tsx` | `Counselling & Wellbeing` | `Wellbeing Insights` | Header badge copy clarity |
| `src/components/ui/gallery4.tsx` | `#155D49` (Dark Teal) | `#34D399` (Mint Accent) | Color harmony across pagination dots & text |
| `next.config.ts` | `img-src 'self' data: https://*.google-analytics.com ...` | `img-src 'self' data: https://images.unsplash.com https://*.google-analytics.com ...` | CSP header fix to load Unsplash article images |

---

## 4. Implementation Rules for AI Agents
1. **Never use `justify-center` or `justify-start` on `CarouselContent`**: Embla Carousel computes slide flex basis internally; adding flex alignment utilities onto `CarouselContent` collapses slides.
2. **Always include `https://images.unsplash.com` in CSP**: Next.js `<Image />` will be blocked by modern browser security policies unless listed in `next.config.ts` `img-src`.
3. **Use `basis-[78%]` for mobile peeking**: Setting item flex basis to `78%` (or `75% - 80%`) guarantees visual affordance without cluttering smaller viewports.
