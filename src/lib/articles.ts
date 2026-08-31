export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: ContentBlock[];
}

export const articles: Article[] = [
  {
    slug: "understanding-burnout-vs-stress",
    title: "Burnout vs. Stress: Why the Difference Matters",
    excerpt:
      "Stress is having too much to do; burnout is having nothing left to give. Recognising the difference helps you find appropriate support.",
    date: "2026-08-01",
    category: "Stress & Burnout",
    readTime: "1 min read",
    content: [
      {
        type: "paragraph",
        text: "Stress is typically a short-term response to pressing demands. Your heart rate rises, focus sharpens, and once the deadline passes, your body recovers. In brief periods, stress can even be functional.",
      },
      {
        type: "paragraph",
        text: "Burnout is fundamentally different. It occurs when pressure continues for months without sufficient rest. Rather than feeling temporarily overwhelmed, burnout feels like emotional depletion, detachment, and persistent fatigue that a quick break cannot resolve.",
      },
      {
        type: "paragraph",
        text: "Recovering from burnout requires looking beyond quick fixes to explore the workload, boundaries, and personal expectations driving your exhaustion.",
      },
      {
        type: "callout",
        text: "Counselling provides a calm, reflective space to understand what is driving your fatigue and re-establish clarity.",
      },
    ],
  },
  {
    slug: "burnout-therapist-edinburgh",
    title: "High-Functioning Burnout: The Cost of Looking Fine",
    excerpt:
      "High-functioning burnout is easy to miss because you keep performing on the outside while depleting quietly on the inside.",
    date: "2026-08-05",
    category: "Burnout Recovery",
    readTime: "1 min read",
    content: [
      {
        type: "paragraph",
        text: "High-functioning burnout is easy to overlook. Externally, you remain reliable, meet deadlines, and perform well. Internally, your energy is steadily draining, making daily responsibilities feel unusually heavy.",
      },
      {
        type: "paragraph",
        text: "Ambitious professionals often set demanding standards and view rest as something that must be earned. Signs include persistent anticipatory dread, emotional detachment from work, and rest that fails to restore you.",
      },
      {
        type: "paragraph",
        text: "Because output remains high, others rarely notice your struggle, making it easy to convince yourself to simply push harder.",
      },
      {
        type: "callout",
        text: "You do not need to reach crisis before seeking support. Counselling offers space to set down the performance mask and protect your health.",
      },
    ],
  },
  {
    slug: "nervous-system-regulation",
    title: "Regulating the Nervous System Under Pressure",
    excerpt:
      "Learn how your body responds to sustained pressure and practical ways to return to a steady baseline.",
    date: "2026-08-10",
    category: "Nervous System",
    readTime: "1 min read",
    content: [
      {
        type: "paragraph",
        text: "Under high pressure, your nervous system shifts into alert mode, quickening heart rate and sharpening attention. While helpful in short bursts, staying in high alert for extended periods causes physical and mental fatigue.",
      },
      {
        type: "paragraph",
        text: "A dysregulated system can leave you feeling tense or unable to unwind. Simple grounding practices can signal safety back to the body:",
      },
      {
        type: "list",
        items: [
          "Slow exhalations with out-breaths longer than in-breaths",
          "Sensory grounding by focusing on physical surroundings",
          "Brief daily walks to release accumulated tension",
        ],
      },
      {
        type: "paragraph",
        text: "While quick techniques provide temporary ease, integrative counselling helps you explore the underlying habits keeping your system on edge.",
      },
      {
        type: "callout",
        text: "Counselling combines reflective dialogue with body awareness to support a calmer, more resilient baseline.",
      },
    ],
  },
  {
    slug: "imposter-syndrome-in-professionals",
    title: "Imposter Syndrome: When Success Feels Like a Lie",
    excerpt:
      "Feeling like a fraud despite achievements is common. Understanding imposter feelings helps diminish their power.",
    date: "2026-08-12",
    category: "Mindset & Anxiety",
    readTime: "1 min read",
    content: [
      {
        type: "paragraph",
        text: "Worrying that your achievements stem from luck rather than capability is the hallmark of imposter syndrome. Paradoxically, these doubts often intensify as you step into more senior roles.",
      },
      {
        type: "paragraph",
        text: "Imposter feelings typically arise from perfectionism, high expectations, or competitive environments. Common patterns include overpreparing, dismissing praise, and fearing that mistakes will reveal inadequacy.",
      },
      {
        type: "paragraph",
        text: "Recognising these patterns is essential. Imposter anxiety does not reflect capability; it indicates high personal standards paired with self-critical habits.",
      },
      {
        type: "callout",
        text: "Counselling offers a private space to unpack self-doubt, internalise achievements, and cultivate grounded confidence.",
      },
    ],
  },
  {
    slug: "sustainable-boundaries",
    title: "Setting Sustainable Boundaries Without Guilt",
    excerpt:
      "Boundaries are not barriers; they are clear choices about how you protect your energy and time.",
    date: "2026-08-18",
    category: "Work-Life Balance",
    readTime: "1 min read",
    content: [
      {
        type: "paragraph",
        text: "Setting boundaries can feel difficult if you equate saying no with letting others down. Yet clear limits are necessary to protect your focus and prevent resentment.",
      },
      {
        type: "paragraph",
        text: "A boundary is simply a clear decision about your time and capacity. It requires no drama, just practical choices like stepping away from email after hours or declining non-essential tasks.",
      },
      {
        type: "paragraph",
        text: "Initial guilt is normal as you alter people-pleasing habits. Over time, establishing boundaries protects your health and improves workplace relationships.",
      },
      {
        type: "callout",
        text: "Counselling provides guidance to explore healthier limits and communicate them with clarity and calm.",
      },
    ],
  },
  {
    slug: "somatic-therapy-explained",
    title: "Somatic Approaches to Stress: Working With the Body",
    excerpt:
      "Stress lives in the body as well as the mind. Somatic awareness helps release physical tension.",
    date: "2026-08-22",
    category: "Therapeutic Methods",
    readTime: "1 min read",
    content: [
      {
        type: "paragraph",
        text: "Talking therapy engages thoughts and emotions, but chronic stress also leaves a physical mark, manifesting as shoulder tightness, shallow breathing, or persistent restlessness.",
      },
      {
        type: "paragraph",
        text: "'Somatic' refers to the physical body. Incorporating somatic awareness means paying attention to physical sensations alongside thoughts, helping release stored tension.",
      },
      {
        type: "paragraph",
        text: "In practice, this includes noticing where you hold stress, using simple breathwork to anchor yourself, and recognising physical warning signals before burnout sets in.",
      },
      {
        type: "callout",
        text: "Combining body awareness with traditional counselling offers a comprehensive, balanced path to emotional calm.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
