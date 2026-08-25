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
      "Stress and burnout are often used interchangeably, but they are quite different experiences — and understanding the difference matters when it comes to getting the right kind of support.",
    date: "2026-08-01",
    category: "Stress & Burnout",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Stress and burnout are often used interchangeably, but they are quite different experiences — and understanding the difference matters when it comes to getting the right kind of support.",
      },
      {
        type: "heading",
        text: "What Is Stress?",
      },
      {
        type: "paragraph",
        text: "Stress is the body's response to perceived demands that exceed available resources. It is a normal and often temporary state. When a deadline looms or a difficult conversation is coming, the nervous system activates — heart rate increases, alertness sharpens, and the body prepares to respond. For most people, once the demand passes, the system settles. Stress can even be productive in short bursts.",
      },
      {
        type: "heading",
        text: "What Is Burnout?",
      },
      {
        type: "paragraph",
        text: "Burnout is something different. It develops when stress is sustained over a long period without adequate recovery. The World Health Organisation (WHO) recognises burnout as an occupational phenomenon characterised by three features: exhaustion, increased mental detachment from work, and reduced professional efficacy.",
      },
      {
        type: "paragraph",
        text: "But burnout rarely stays confined to work. Over time, it can seep into relationships, identity, and a person's fundamental sense of themselves.",
      },
      {
        type: "heading",
        text: "The Key Distinction",
      },
      {
        type: "paragraph",
        text: "One way to think about it: stress usually feels like too much. Burnout often feels like nothing left. Someone experiencing burnout may not feel overwhelmed by one specific thing — they may simply feel empty, numb, disconnected, or as though the things that once mattered no longer do.",
      },
      {
        type: "heading",
        text: "Signs You May Be Experiencing Burnout Rather Than Stress",
      },
      {
        type: "list",
        items: [
          "Chronic exhaustion that does not improve with rest",
          "Emotional numbness or detachment from things you once cared about",
          "Growing cynicism or irritability",
          "Difficulty concentrating or making decisions",
          "A sense that you are just going through the motions",
          "Physical symptoms such as frequent illness, headaches, or disrupted sleep",
        ],
      },
      {
        type: "heading",
        text: "Why This Distinction Matters",
      },
      {
        type: "paragraph",
        text: "If you approach burnout as if it were ordinary stress, you might try to push through, rest for a weekend, or take a holiday — only to find you feel exactly the same on your return. That is because burnout typically requires deeper work: understanding the patterns and circumstances that led to it, making space to process accumulated pressure, and rebuilding a more sustainable relationship with yourself and your work.",
      },
      {
        type: "callout",
        text: "Rest is important, but it is rarely sufficient on its own. Understanding what is driving your burnout — whether that is workload, environment, identity, or deeper patterns — is often where real change begins.",
      },
      {
        type: "paragraph",
        text: "Counselling can offer a space to slow down, make sense of what you are experiencing, and explore what a more sustainable way of living and working might look like for you. If you recognise these signs in yourself, you are not failing. Burnout is a serious and common response to prolonged pressure, and it is something that can be worked through with the right support.",
      },
    ],
  },

  {
    slug: "burnout-therapist-edinburgh",
    title: "Understanding High-Functioning Burnout in Professionals",
    excerpt:
      "High-functioning burnout is easy to miss — both from the outside and from the inside. You keep meeting deadlines. You show up to meetings. But underneath, something significant is happening.",
    date: "2026-08-05",
    category: "Burnout Recovery",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "There is a particular kind of burnout that is easy to miss — both from the outside and from the inside. High-functioning burnout is what happens when a person continues to perform well by most visible measures, while quietly depleting on the inside.",
      },
      {
        type: "heading",
        text: "The Danger of Looking Fine",
      },
      {
        type: "paragraph",
        text: "One of the defining features of high-functioning burnout is that it is largely invisible. You keep meeting deadlines. You show up to meetings. You might even be seen as reliable, capable, always dependable. But underneath the surface, something significant is happening: energy reserves are depleting, enjoyment has disappeared, and the effort required to maintain the same output grows relentlessly.",
      },
      {
        type: "paragraph",
        text: "This invisibility is also why high-functioning burnout tends to persist much longer than more obvious forms of exhaustion. When nobody — including you — can see that something is wrong, it is hard to give yourself permission to acknowledge it.",
      },
      {
        type: "heading",
        text: "Signs That Are Easy to Rationalise",
      },
      {
        type: "paragraph",
        text: "People experiencing high-functioning burnout often develop sophisticated explanations for what they are noticing:",
      },
      {
        type: "list",
        items: [
          '"I am just tired. I need to get through this project, then I will rest." — but the rest never seems to help.',
          '"I have always been anxious. This is just who I am." — but the anxiety feels different now; more persistent, less manageable.',
          '"I am not as sharp as I used to be, but that is normal." — the cognitive fog is written off rather than investigated.',
          '"Sunday evenings feel dreadful, but that is normal for people in my field." — the sense of dread grows each week.',
        ],
      },
      {
        type: "heading",
        text: "Why High Achievers Are Particularly Vulnerable",
      },
      {
        type: "paragraph",
        text: "High-functioning burnout frequently affects people who identify strongly with their work, who hold themselves to high personal standards, or who have learned — often from early on — that rest must be earned and that it is safer to keep going than to stop. These are not character flaws. They are strategies that have often served people well, until the cost becomes unsustainable.",
      },
      {
        type: "callout",
        text: "You do not need to have hit rock bottom to seek support. The earlier burnout is acknowledged, the less ground there is to recover.",
      },
      {
        type: "heading",
        text: "What Recovery Can Look Like",
      },
      {
        type: "paragraph",
        text: "Recovery from high-functioning burnout is rarely just a matter of taking time off. It often involves understanding the patterns and pressures that led here, learning to recognise and respond to internal signals earlier, and developing a relationship with work — and with yourself — that is sustainable rather than driven purely by output.",
      },
      {
        type: "paragraph",
        text: "This is often the kind of work that counselling can support: creating a space where the performance mask can be set aside, and what is actually happening can be looked at honestly.",
      },
    ],
  },

  {
    slug: "nervous-system-regulation",
    title: "Regulating the Nervous System Under Pressure",
    excerpt:
      "Understanding a little about how your nervous system works under pressure can make a real difference to how you respond to stress — and what kind of support might help.",
    date: "2026-08-10",
    category: "Nervous System",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "The phrase 'nervous system regulation' has become more commonly used in wellbeing conversations, and for good reason. Understanding a little about how your nervous system works under pressure can make a real difference to how you respond to stress — and what kind of support might help.",
      },
      {
        type: "heading",
        text: "What Nervous System Regulation Means",
      },
      {
        type: "paragraph",
        text: "The autonomic nervous system operates largely outside conscious control, continuously scanning for safety or threat and adjusting our physical and emotional state accordingly. In moments of stress, the sympathetic branch — sometimes called 'fight or flight' — activates. Heart rate increases, muscles tighten, breathing shallows, and attention narrows. This is an adaptive response. The problem arises when this state becomes chronic — when the nervous system struggles to return to a calmer baseline, even when the immediate stressor has passed.",
      },
      {
        type: "heading",
        text: "What a Dysregulated Nervous System Can Feel Like",
      },
      {
        type: "list",
        items: [
          "Persistent background anxiety, even in quiet moments",
          "Difficulty switching off after work",
          "Feeling irritable or on edge for reasons that seem disproportionate",
          "A sense of being physically braced or tense much of the time",
          "Exhaustion that coexists with difficulty sleeping or relaxing",
          "A feeling of emotional flatness or numbness",
        ],
      },
      {
        type: "heading",
        text: "Some Practical Approaches",
      },
      {
        type: "subheading",
        text: "Slow, extended exhale breathing",
      },
      {
        type: "paragraph",
        text: "The exhale activates the parasympathetic (rest and digest) branch of the nervous system. Deliberately making the out-breath longer than the in-breath — for example, breathing in for four counts and out for six or eight — can help bring the body towards a calmer state relatively quickly.",
      },
      {
        type: "subheading",
        text: "Grounding through the senses",
      },
      {
        type: "paragraph",
        text: "When the mind is caught in worried or ruminative thinking, bringing attention to immediate sensory experience — what you can see, hear, feel, smell — can interrupt the loop and anchor you in the present moment.",
      },
      {
        type: "subheading",
        text: "Physical movement",
      },
      {
        type: "paragraph",
        text: "Movement is one of the most effective ways to process accumulated stress. Even a short walk can shift physiological state in ways that thinking alone cannot.",
      },
      {
        type: "heading",
        text: "An Important Caveat",
      },
      {
        type: "callout",
        text: "These techniques can be genuinely helpful as coping tools. But for many people — especially those dealing with chronic stress or burnout — they offer temporary relief rather than addressing the underlying patterns that maintain the dysregulation.",
      },
      {
        type: "paragraph",
        text: "The deeper work involves understanding what drives persistent stress responses and addressing it at a psychological level. This is typically what counselling offers — and somatic approaches in particular can work with the body not just as a coping tool, but as a route into understanding and processing what has accumulated over time.",
      },
    ],
  },

  {
    slug: "imposter-syndrome-in-professionals",
    title: "Imposter Syndrome: When Success Feels Like a Lie",
    excerpt:
      "If you have ever sat in a meeting feeling certain that everyone else truly belongs while you are somehow getting away with it — you are not alone. Understanding what imposter syndrome is (and isn't) is a useful first step.",
    date: "2026-08-12",
    category: "Mindset & Anxiety",
    readTime: "6 min read",
    content: [
      {
        type: "paragraph",
        text: "If you have ever sat in a meeting feeling certain that everyone else truly belongs there while you are somehow getting away with it — welcome to what is commonly called imposter syndrome. It is estimated that a significant proportion of high-achieving people experience this at some point. And yet it remains one of the more isolating experiences in professional life, partly because it tends to be kept quiet.",
      },
      {
        type: "heading",
        text: "What Imposter Syndrome Actually Is",
      },
      {
        type: "paragraph",
        text: "First described by psychologists Pauline Clance and Suzanne Imes in 1978, it refers to an internal experience of intellectual fraudulence — the persistent feeling that you are not as capable as others believe you to be, and that at some point this will be exposed. It typically coexists with external markers of success. In fact, success often intensifies it: the higher you rise, the more you feel the stakes of being 'found out.'",
      },
      {
        type: "heading",
        text: "Some Common Patterns",
      },
      {
        type: "list",
        items: [
          "Attributing success to luck or circumstance rather than to your own ability or effort",
          "Discounting praise while internalising criticism",
          "Overpreparing to compensate for feeling inherently less capable",
          "Procrastination followed by intense effort, partly driven by fear of exposure",
          "Reluctance to take on new roles or visibility in case they reveal your 'real' level",
        ],
      },
      {
        type: "heading",
        text: "Where It Comes From",
      },
      {
        type: "paragraph",
        text: "Imposter feelings do not arise in a vacuum. They are often shaped by early experiences: environments where praise was conditional or unpredictable; messages — explicit or implicit — that your worth depended on performance; or the experience of being 'the only one' in a particular context.",
      },
      {
        type: "paragraph",
        text: "It can also be reinforced by cultures of comparison and perfectionism, where the bar is always moving and there is no resting point at which it is acceptable to say 'I am doing well enough.'",
      },
      {
        type: "heading",
        text: "What Can Help",
      },
      {
        type: "callout",
        text: "Simply knowing about imposter syndrome does not, on its own, make it go away. Awareness is a useful starting point, but the internal experience is more stubborn than that.",
      },
      {
        type: "paragraph",
        text: "What tends to help is examining the beliefs and experiences that underlie it — not to dismiss the feeling, but to understand it more fully. Where did these beliefs about yourself come from? In what contexts do they intensify? What would it mean to genuinely take credit for what you have achieved?",
      },
      {
        type: "paragraph",
        text: "This is work that often benefits from a therapeutic space — where patterns can be explored without judgement, and where new ways of relating to yourself can develop over time. Imposter syndrome is not a sign of weakness. It is often a sign that someone cares deeply and holds themselves to a high standard. The question is whether those standards are serving you, or whether they have become a source of constant self-doubt that quietly erodes your confidence and enjoyment.",
      },
    ],
  },

  {
    slug: "sustainable-boundaries",
    title: "Setting Sustainable Boundaries Without Guilt",
    excerpt:
      "For many people, the idea of setting a limit conjures feelings of selfishness or confrontation. Understanding why limits feel so hard — and what actually makes them work — changes everything.",
    date: "2026-08-18",
    category: "Work-Life Balance",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Boundary-setting has become one of the most discussed topics in wellbeing — and also one of the most misunderstood. For many people, the idea of setting a limit conjures images of confrontation, selfishness, or letting people down. No wonder so few people actually do it.",
      },
      {
        type: "heading",
        text: "What a Limit Actually Is",
      },
      {
        type: "paragraph",
        text: "A limit is simply a choice about what you will do, what you will accept, or how you allow yourself to be treated. It is not a wall, and it rarely requires a dramatic announcement. In most cases, a limit is quiet and undramatic: choosing not to answer work emails after a certain time, saying 'I cannot take that on right now,' or leaving a social event when you have had enough.",
      },
      {
        type: "paragraph",
        text: "What makes limits hard is rarely the act itself — it is the internal discomfort that comes with it.",
      },
      {
        type: "heading",
        text: "Why Guilt Is Such a Common Companion",
      },
      {
        type: "paragraph",
        text: "Guilt is the signal our nervous system gives us when we believe we have done something wrong. For many people, saying no or prioritising their own needs has — for years, possibly decades — felt genuinely wrong. Not in a logical sense, but in an emotional one.",
      },
      {
        type: "paragraph",
        text: "This often has roots. If you grew up in an environment where your needs were secondary to others, where keeping the peace was important, or where being helpful and accommodating was the condition of belonging, then prioritising yourself is likely to feel uncomfortable in a way that is more than just awkward — it can feel unsafe.",
      },
      {
        type: "callout",
        text: "Telling someone 'just set a limit' or 'just say no' is often unhelpful. The difficulty is not informational. It is emotional.",
      },
      {
        type: "heading",
        text: "Some Questions Worth Asking",
      },
      {
        type: "list",
        items: [
          "What is consistently draining me that I am continuing to agree to?",
          "What do I say yes to out of obligation or fear, rather than genuine willingness?",
          "What would I need to protect in my life to feel more like myself?",
        ],
      },
      {
        type: "heading",
        text: "A Word About Guilt",
      },
      {
        type: "paragraph",
        text: "Guilt that arises from genuinely having caused harm is a useful signal worth paying attention to. Guilt that arises from simply having a need, taking a rest, or saying no to something that was never yours to carry — that guilt is worth examining rather than simply obeying.",
      },
      {
        type: "paragraph",
        text: "If the pattern of self-sacrifice and guilt has been long-standing, it is often something that benefits from therapeutic exploration rather than willpower alone. Understanding where it came from, and what it is protecting, tends to be more useful than fighting against it directly.",
      },
    ],
  },

  {
    slug: "somatic-therapy-explained",
    title: "Somatic Approaches to Stress: Working With the Body",
    excerpt:
      "For some people and some experiences, talking alone does not seem to reach what needs to be reached. This is where somatic approaches can be useful — and what they actually involve.",
    date: "2026-08-22",
    category: "Therapeutic Methods",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "When people think about counselling or talking therapy, they often imagine a conversation — speaking about difficult experiences and, over time, gaining clarity or perspective. And that is often how it works. But for some people and some experiences, talking alone does not seem to reach what needs to be reached. This is where somatic approaches can be useful.",
      },
      {
        type: "heading",
        text: "What 'Somatic' Means",
      },
      {
        type: "paragraph",
        text: "Somatic comes from the Greek word soma, meaning body. Somatic approaches to therapy are those that work explicitly with the body — with physical sensation, posture, movement, breath, and the way stress and experience are held in the nervous system.",
      },
      {
        type: "paragraph",
        text: "The underlying principle is that our experiences — particularly overwhelming or sustained ones — do not only exist in our thoughts and memories. They also live in the body. Research on stress suggests that the nervous system can hold the physiological traces of experience, sometimes long after the mind has processed events consciously.",
      },
      {
        type: "heading",
        text: "What This Can Look Like in Practice",
      },
      {
        type: "paragraph",
        text: "In an integrative counselling approach, somatic work does not mean something unusual or esoteric. It might look like:",
      },
      {
        type: "list",
        items: [
          "Noticing together where in the body a particular emotion or memory seems to land",
          "Working with the breath deliberately — not just as a coping technique, but as a way of accessing different states",
          "Paying attention to patterns of tension, bracing, or fatigue that may reflect habitual responses to stress",
          "Moving attention gently between the content of what is being discussed and the physical experience in the room",
        ],
      },
      {
        type: "paragraph",
        text: "None of this requires any particular physical ability or prior knowledge. It is more about cultivating awareness of the connection between mind and body.",
      },
      {
        type: "heading",
        text: "Why It Can Be Useful Alongside Other Approaches",
      },
      {
        type: "paragraph",
        text: "For people dealing with chronic stress or burnout, purely cognitive approaches — like CBT, which focuses on thoughts and beliefs — can sometimes feel frustrating. They understand intellectually that a belief is unhelpful, but the emotional and physical experience does not shift. Somatic work can sometimes access a different level of the experience.",
      },
      {
        type: "callout",
        text: "Understanding why something happened, and what it meant, is valuable — but integration often also requires something that is felt, not just understood.",
      },
      {
        type: "heading",
        text: "An Integrative Approach",
      },
      {
        type: "paragraph",
        text: "At Mindhaven, I draw on a range of approaches — including person-centred therapy, CBT, psychodynamic work, and somatic elements — depending on what each person needs. Somatic work is not appropriate or necessary for everyone, but for some people it opens up a dimension of the work that talking alone does not quite reach.",
      },
      {
        type: "paragraph",
        text: "If you are curious about what a more integrated approach to your stress or anxiety might look like, you are welcome to bring that to an initial conversation.",
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
