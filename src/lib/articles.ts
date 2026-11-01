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
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "Stress and burnout are often used as if they mean the same thing. They do not, and the difference matters, because what helps with one can make very little difference to the other.",
      },
      { type: "heading", text: "What stress looks like" },
      {
        type: "paragraph",
        text: "Stress is usually a response to demands that feel bigger than the time or resources you have. Your heart rate rises, your focus narrows, and you push through. Once the deadline passes or the situation settles, you recover. In short bursts, stress can even be useful: it helps you prepare, act and perform.",
      },
      {
        type: "paragraph",
        text: "A useful way to think about it: stress tends to feel like too much. Too many tasks, too many expectations, too many things happening at once.",
      },
      { type: "heading", text: "What burnout looks like" },
      {
        type: "paragraph",
        text: "Burnout develops when pressure continues for months without enough recovery. Instead of feeling overwhelmed, people often describe feeling empty. Burnout tends to feel like not enough: not enough energy, not enough motivation, not enough of yourself left to give.",
      },
      {
        type: "list",
        items: [
          "Exhaustion that a weekend or holiday does not fix",
          "Growing distance or cynicism towards work you once cared about",
          "A sense that your effort no longer makes a difference",
          "Difficulty switching off, even when you finally have time",
        ],
      },
      { type: "heading", text: "Why the difference matters" },
      {
        type: "paragraph",
        text: "Stress often eases when the pressure eases. Burnout usually does not. Taking time off can help, but if you return to the same workload, the same expectations and the same habits, the exhaustion tends to come back.",
      },
      {
        type: "paragraph",
        text: "Recovery from burnout usually means looking at what keeps the cycle going: how much you take on, how you respond to pressure, what you expect of yourself, and what you believe will happen if you slow down.",
      },
      { type: "heading", text: "A starting point" },
      {
        type: "paragraph",
        text: "If you are not sure which one you are experiencing, notice how you feel after real rest. If rest restores you, you are likely dealing with stress. If rest barely touches the tiredness, it may be worth taking it more seriously. You may also recognise yourself in [high-functioning burnout](/blog/high-functioning-burnout).",
      },
      {
        type: "callout",
        text: "Counselling offers a calm, confidential space to understand what is driving your exhaustion and to find a more sustainable way forward.",
      },
    ],
  },
  {
    slug: "high-functioning-burnout",
    title: "High-Functioning Burnout: The Cost of Looking Fine",
    excerpt:
      "High-functioning burnout is easy to miss because you keep performing on the outside while depleting quietly on the inside.",
    date: "2026-08-05",
    category: "Burnout Recovery",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "Some people burn out loudly. Others keep going. They still meet deadlines, answer messages and show up for everyone, while quietly running on empty. This is often called high-functioning burnout, and it is easy to miss, including for the person living it.",
      },
      { type: "heading", text: "Why it goes unnoticed" },
      {
        type: "paragraph",
        text: "Because your output stays high, nobody around you sees a problem. Colleagues rely on you, your family sees you coping, and you may tell yourself that if you were really struggling, your work would show it. So you push a little harder.",
      },
      {
        type: "paragraph",
        text: "Many people who experience this hold high standards and see rest as something that has to be earned. Slowing down can feel like failure, even when the body and mind are asking for it.",
      },
      { type: "heading", text: "Common signs" },
      {
        type: "list",
        items: [
          "A sense of dread before the working week, even when things are going well",
          "Feeling detached or flat about achievements that once mattered",
          "Rest that does not feel restful",
          "Irritability, poor sleep or constant mental replaying of work",
          "Relying on routines, caffeine or sheer willpower just to keep functioning",
        ],
      },
      { type: "heading", text: "The cost of looking fine" },
      {
        type: "paragraph",
        text: "Keeping up appearances takes energy. Over time, the gap between how things look and how they feel can become its own source of strain. Many people only seek help when something finally gives: their health, a relationship, or their ability to cope at work.",
      },
      {
        type: "paragraph",
        text: "You do not need to wait for that point. Noticing the pattern early is not weakness. It is information.",
      },
      { type: "heading", text: "What can help" },
      {
        type: "paragraph",
        text: "Practical changes matter: realistic workloads, clearer boundaries, proper breaks. But it often also helps to look at the beliefs underneath, such as the idea that your worth depends on what you produce, or that asking for help means letting people down. Learning to [set boundaries without guilt](/blog/sustainable-boundaries) is often part of recovery.",
      },
      {
        type: "callout",
        text: "You do not need to reach crisis before seeking support. Counselling offers a space to set down the performance and look honestly at what you are carrying.",
      },
    ],
  },
  {
    slug: "breaking-the-stress-cycle",
    title: "Breaking the Stress Cycle: How Thoughts and Habits Keep Pressure Going",
    excerpt:
      "Stress is not only about what happens to you. The way you think and respond can keep the pressure going long after the trigger has passed.",
    date: "2026-08-10",
    category: "Stress & Burnout",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "When we are under pressure, we usually focus on the situation: the workload, the deadline, the difficult conversation. That makes sense. But stress is also shaped by what happens inside: the thoughts we have about the situation, and the habits we fall into to cope with it.",
      },
      { type: "heading", text: "How the cycle works" },
      {
        type: "paragraph",
        text: "Cognitive Behavioural Therapy (CBT) describes this as a cycle linking situations, thoughts, feelings and behaviour. Each part affects the others. A demanding email arrives. The thought follows: \"I am going to fall behind and everyone will notice.\" Anxiety rises. You work late, skip lunch and cancel plans. You end up more tired, which makes the next email feel even bigger.",
      },
      {
        type: "paragraph",
        text: "None of these steps is unreasonable on its own. Together, they can keep you stuck in a loop where the pressure never quite lifts.",
      },
      { type: "heading", text: "Thoughts that keep stress going" },
      {
        type: "list",
        items: [
          "All-or-nothing thinking: \"If it is not perfect, it is a failure.\"",
          "Catastrophising: jumping straight to the worst outcome",
          "Mind-reading: assuming you know what others think of you",
          "\"Should\" statements: rigid rules about how you must behave",
        ],
      },
      {
        type: "paragraph",
        text: "These are not signs that something is wrong with you. They are common mental shortcuts, and most of us use them, especially when tired or under strain.",
      },
      { type: "heading", text: "Small ways to interrupt the loop" },
      {
        type: "list",
        items: [
          "Notice the thought and name it, rather than treating it as fact",
          "Ask what you would say to a friend in the same situation",
          "Look for the evidence for and against the worry",
          "Change one small behaviour, such as taking the lunch break you usually skip",
        ],
      },
      {
        type: "paragraph",
        text: "A solution-focused question can also help: what is already working, even a little? Building on what helps is often easier than trying to fix everything at once. If the same loop keeps returning, it may help to look at [why patterns repeat](/blog/why-the-same-patterns-keep-coming-back).",
      },
      {
        type: "callout",
        text: "Counselling can help you recognise the patterns that keep stress going and practise new ways of responding, at a pace that feels manageable.",
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
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "You get the promotion, finish the project or receive the praise, and instead of feeling proud, you feel exposed. As if it is only a matter of time before someone realises you do not really belong. This experience is often called imposter syndrome, and it is far more common than most people think.",
      },
      { type: "heading", text: "Why it shows up" },
      {
        type: "paragraph",
        text: "Imposter feelings often grow from high standards, perfectionism or competitive environments. Many people notice that the feelings become stronger, not weaker, as they progress: a new role, new responsibilities and new people to compare yourself with.",
      },
      {
        type: "paragraph",
        text: "Sometimes the roots go further back: a family where achievement was the way to earn approval, or early experiences where mistakes felt dangerous. These patterns can carry into adult working life long after the original situation has changed.",
      },
      { type: "heading", text: "Common patterns" },
      {
        type: "list",
        items: [
          "Overpreparing for everything, just in case",
          "Putting success down to luck, timing or other people",
          "Brushing off praise, or feeling uncomfortable receiving it",
          "Avoiding new opportunities in case you are found out",
          "Fearing that one mistake will undo everything",
        ],
      },
      { type: "heading", text: "What helps" },
      {
        type: "paragraph",
        text: "Imposter feelings do not reflect your actual ability. They usually reflect high standards combined with a habit of self-criticism. Recognising that difference is an important first step.",
      },
      {
        type: "paragraph",
        text: "It can help to keep a simple record of what you have done well and why, to talk about the feeling with someone you trust, and to notice how often the predicted disaster actually happens. Many of these thoughts follow the same [stress cycle](/blog/breaking-the-stress-cycle) described elsewhere on this blog.",
      },
      {
        type: "callout",
        text: "Counselling offers a private space to explore where self-doubt comes from, recognise your achievements and build a steadier sense of confidence.",
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
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "Setting boundaries can feel uncomfortable, especially if you are used to being the reliable one. Saying no can feel like letting people down. Yet without clear limits, it becomes very hard to protect your time, your focus and your wellbeing.",
      },
      { type: "heading", text: "What a boundary actually is" },
      {
        type: "paragraph",
        text: "A boundary is not a wall or a punishment. It is a clear decision about what you can and cannot take on. It can be quiet and practical: not checking emails after a certain hour, declining an extra project, or asking for more notice before a deadline.",
      },
      { type: "heading", text: "Why it feels so hard" },
      {
        type: "list",
        items: [
          "Worry about disappointing others or being seen as difficult",
          "A belief that your value comes from always being available",
          "Past experiences where saying no led to conflict",
          "Simply never having practised it",
        ],
      },
      { type: "heading", text: "Starting small" },
      {
        type: "list",
        items: [
          "Pick one area where you feel most stretched and set a single limit there",
          "Use simple, clear language: \"I am not able to take this on this week.\"",
          "You do not need to over-explain or apologise repeatedly",
          "Expect some discomfort at first, and notice that it usually passes",
        ],
      },
      { type: "heading", text: "About the guilt" },
      {
        type: "paragraph",
        text: "Feeling guilty when you set a boundary does not mean you are doing something wrong. It often means you are doing something new. Over time, most people find that clear limits actually improve relationships, because others know where they stand and resentment has less room to build. Over-commitment is also a common route into [burnout](/blog/understanding-burnout-vs-stress).",
      },
      {
        type: "callout",
        text: "Counselling can help you understand what makes boundaries difficult for you, and practise setting them with clarity and calm.",
      },
    ],
  },
  {
    slug: "why-the-same-patterns-keep-coming-back",
    title: "Why the Same Patterns Keep Coming Back",
    excerpt:
      "Different job, different relationship, same feeling. Understanding where repeating patterns come from is often the first step to changing them.",
    date: "2026-08-22",
    category: "Therapeutic Approach",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "Many people come to counselling with a familiar frustration: \"I keep ending up in the same place.\" A new job brings the same exhaustion. A new relationship brings the same arguments. You promise yourself things will be different, and somehow they are not.",
      },
      { type: "heading", text: "Patterns are not random" },
      {
        type: "paragraph",
        text: "From a psychodynamic point of view, the ways we relate to work, to other people and to ourselves are often shaped by earlier experiences. If, growing up, being helpful was the way to feel valued, you may still take on too much without noticing. If conflict felt unsafe, you may still avoid difficult conversations, even when avoiding them costs you.",
      },
      {
        type: "paragraph",
        text: "These patterns once made sense. They helped you cope with the situation you were in. The difficulty is that they can carry on long after that situation has changed.",
      },
      { type: "heading", text: "Signs you may be repeating a pattern" },
      {
        type: "list",
        items: [
          "Similar problems appearing in different jobs or relationships",
          "Reactions that feel bigger than the situation seems to warrant",
          "Knowing what you \"should\" do, yet doing the opposite",
          "A familiar feeling that you cannot quite explain",
        ],
      },
      { type: "heading", text: "Why advice alone often does not stick" },
      {
        type: "paragraph",
        text: "Friends, family, articles and apps can all offer useful advice. But if a pattern is rooted deeply, knowing what to do is rarely the problem. Understanding why you do what you do is often what makes change possible.",
      },
      { type: "heading", text: "Bringing awareness and change together" },
      {
        type: "paragraph",
        text: "Understanding where a pattern comes from is one part. Practising something different is the other. An integrative approach brings both together: exploring the roots, while also working on practical steps you can take now. If you would like to talk it through, you can [book a free 20-minute call](/contact).",
      },
      {
        type: "callout",
        text: "Counselling offers a consistent, non-judgemental space to notice the patterns that keep returning and to find new ways of responding.",
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
