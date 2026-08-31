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
    title: "Understanding Burnout vs. Stress: Why the Difference Matters",
    excerpt:
      "Stress feels like having too much to do; burnout feels like having nothing left to give. Understanding the distinction helps you find the right support.",
    date: "2026-08-01",
    category: "Stress & Burnout",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "Stress and burnout are often confused, but they require very different responses. Stress is usually a temporary reaction to high demands. Your heart rate rises, focus sharpens, and once the task is finished, your body returns to normal. In short bursts, stress can even be helpful.",
      },
      {
        type: "paragraph",
        text: "Burnout is different. It happens when stress continues for months without adequate recovery. Instead of feeling overwhelmed by a single task, burnout feels like emptiness, detachment, and persistent exhaustion that a weekend off cannot fix. You might notice growing cynicism, difficulty concentrating, or feeling like you are simply going through the motions.",
      },
      {
        type: "paragraph",
        text: "Approaching burnout with standard stress-relief tools often leads to frustration. Rest is essential, but recovering from burnout also requires examining the underlying pressures, workload, and personal expectations that got you here.",
      },
      {
        type: "callout",
        text: "Counselling offers a quiet, supportive space to step back, understand what is driving your exhaustion, and build a more sustainable way forward.",
      },
    ],
  },
  {
    slug: "burnout-therapist-edinburgh",
    title: "Understanding High-Functioning Burnout in Professionals",
    excerpt:
      "High-functioning burnout is easy to miss because you keep performing well on the outside while depleting quietly on the inside.",
    date: "2026-08-05",
    category: "Burnout Recovery",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "High-functioning burnout is one of the easiest forms of exhaustion to miss. On the outside, everything looks fine. You meet deadlines, attend meetings, and stay reliable. But internally, your energy is steadily draining, and everyday tasks require far more effort than they used to.",
      },
      {
        type: "paragraph",
        text: "High achievers are particularly vulnerable because they often set demanding standards for themselves and view rest as something that must be earned. Common signs include persistent Sunday dread, a sense of disconnect from work you once enjoyed, and rest that no longer feels refreshing.",
      },
      {
        type: "paragraph",
        text: "Because you continue to deliver results, friends and colleagues may not notice you are struggling—and you might convince yourself that you just need to work harder to overcome it.",
      },
      {
        type: "callout",
        text: "You do not need to wait for a total collapse to ask for help. Professional counselling lets you drop the performance mask, explore the pressures you carry, and protect your long-term wellbeing.",
      },
    ],
  },
  {
    slug: "nervous-system-regulation",
    title: "Regulating the Nervous System Under Pressure",
    excerpt:
      "Learn how your body responds to sustained pressure and practical ways to return to a calm, steady baseline.",
    date: "2026-08-10",
    category: "Nervous System",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "When you face high pressure, your nervous system naturally shifts into high alert. Heart rate quickens, muscles tense, and attention sharpens to meet the demand. This alert state is helpful during a crisis, but when it remains active for days or weeks, it leads to chronic physical and mental fatigue.",
      },
      {
        type: "paragraph",
        text: "A dysregulated nervous system can make you feel constantly on edge, unable to unwind after work, or emotionally flat. Simple physical practices can help signal safety back to your body:",
      },
      {
        type: "list",
        items: [
          "Slow exhalations where the out-breath is longer than the in-breath",
          "Sensory grounding by focusing on physical surroundings",
          "Short daily walks to release accumulated tension",
        ],
      },
      {
        type: "paragraph",
        text: "While these quick practices provide immediate relief, long-term calm comes from understanding what keeps your body in high alert.",
      },
      {
        type: "callout",
        text: "Counselling helps you identify chronic stress triggers and rebuild lasting emotional resilience.",
      },
    ],
  },
  {
    slug: "imposter-syndrome-in-professionals",
    title: "Imposter Syndrome: When Success Feels Like a Lie",
    excerpt:
      "Feeling like a fraud despite your achievements is common. Understanding where imposter feelings come from helps diminish their power.",
    date: "2026-08-12",
    category: "Mindset & Anxiety",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "If you have ever worried that your achievements are just luck and that others will eventually find you out, you have experienced imposter syndrome. Paradoxically, these feelings often grow stronger as you take on more senior roles or greater responsibility.",
      },
      {
        type: "paragraph",
        text: "Imposter feelings usually stem from high personal standards, early environments where approval depended on performance, or workplace cultures driven by comparison. Typical patterns include overpreparing for routine tasks, downplaying compliments, and fearing that any mistake will expose you.",
      },
      {
        type: "paragraph",
        text: "Recognising these patterns is the first step toward changing them. Imposter syndrome is not a reflection of your actual ability; it is a sign that you care deeply about your work but are carrying unrealistic expectations.",
      },
      {
        type: "callout",
        text: "Therapy provides a confidential space to challenge self-doubt, internalise your real achievements, and lead with quiet confidence.",
      },
    ],
  },
  {
    slug: "sustainable-boundaries",
    title: "Setting Sustainable Boundaries Without Guilt",
    excerpt:
      "Boundaries are not harsh barriers; they are clear choices about how you protect your energy and time.",
    date: "2026-08-18",
    category: "Work-Life Balance",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "Setting boundaries can feel uncomfortable, especially if you associate saying 'no' with letting people down. However, clear limits are essential for protecting your energy and preventing resentment.",
      },
      {
        type: "paragraph",
        text: "A boundary is simply a decision about what you will accept and how you manage your time. It does not require drama or confrontation. It might mean turning off work emails after dinner, declining an extra project when your workload is full, or taking time to rest without apologizing.",
      },
      {
        type: "paragraph",
        text: "Guilt often arises when you start setting boundaries because you are breaking old habits of pleasing others. Examining where that guilt comes from helps you see that protecting your wellbeing is necessary for long-term health and better relationships.",
      },
      {
        type: "callout",
        text: "In counselling, you can explore healthier boundaries and gain confidence in communicating your limits clearly.",
      },
    ],
  },
  {
    slug: "somatic-therapy-explained",
    title: "Somatic Approaches to Stress: Working With the Body",
    excerpt:
      "Stress lives in the body as well as the mind. Somatic approaches help release physical tension and restore ease.",
    date: "2026-08-22",
    category: "Therapeutic Methods",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "Traditional counselling often focuses on thoughts and words. While talking is valuable, stress and tension are also stored physically in muscle tightness, shallow breathing, and posture.",
      },
      {
        type: "paragraph",
        text: "'Somatic' simply means relating to the body. Somatic techniques involve paying attention to how stress manifests physically and using gentle body-awareness methods to release stored pressure.",
      },
      {
        type: "paragraph",
        text: "In practice, this might include noticing physical sensations during difficult topics, using focused breathing to ground yourself, or recognizing tension patterns before they turn into exhaustion.",
      },
      {
        type: "callout",
        text: "By combining body awareness with traditional talking therapy, you can achieve deeper, more lasting calm for both mind and body.",
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
