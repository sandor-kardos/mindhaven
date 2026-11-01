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
  /** Short "in a nutshell" summary shown at the top of the article. */
  summary?: string;
  content: ContentBlock[];
}

const CRISIS_NOTE =
  "If you are in crisis or worried about your safety, please do not wait for a counselling appointment. Call 999 in an emergency, NHS 24 on 111, Samaritans on 116 123 (free, 24/7), or Breathing Space on 0800 83 85 87.";

export const articles: Article[] = [
  {
    slug: "coping-with-anxiety",
    title: "Coping With Anxiety: When Worry Won't Switch Off",
    excerpt:
      "Anxiety can make the mind feel like it never rests. Understanding how worry works is often the first step towards feeling steadier again.",
    date: "2026-11-01",
    category: "Anxiety",
    readTime: "4 min read",
    summary:
      "Worry keeps going because it feels protective and because avoidance brings short-term relief. Naming worries, slowing down and talking to someone can loosen anxiety's grip.",
    content: [
      {
        type: "paragraph",
        text: "Almost everyone feels anxious sometimes. Before an interview, after a difficult conversation, while waiting for news. That kind of anxiety usually passes once the moment is over. For some people, though, the worry does not switch off. It follows them into the evening, wakes them at night, and colours even the quiet parts of the day.",
      },
      {
        type: "paragraph",
        text: "If that sounds familiar, you are not weak and you are not overreacting. Anxiety is one of the most common reasons people come to counselling, and it is something that can be understood and eased.",
      },
      { type: "heading", text: "What anxiety can feel like" },
      {
        type: "paragraph",
        text: "Anxiety shows up differently for different people. Some notice it mostly in their thoughts, others in their body, and many in both.",
      },
      {
        type: "list",
        items: [
          "Thoughts that race ahead to everything that might go wrong",
          "Going over conversations again and again, looking for mistakes",
          "Difficulty concentrating, or feeling on edge for no clear reason",
          "Trouble getting to sleep, or waking early with a busy mind",
          "Physical signs such as a tight chest, a churning stomach or tense shoulders",
          "Avoiding places, people or tasks because they feel too much",
        ],
      },
      { type: "heading", text: "Why worry keeps going" },
      {
        type: "paragraph",
        text: "Worry often feels useful. It can seem as if thinking through every possible problem will keep you safe or prepared. The difficulty is that the mind can always find another \"what if\". Each answer leads to a new question, and the relief never quite arrives.",
      },
      {
        type: "paragraph",
        text: "Avoidance can keep the cycle going too. Staying away from what makes you anxious brings short-term relief, but it also teaches the mind that the situation really was dangerous. Over time, the list of things that feel difficult can quietly grow. This is the same loop described in [breaking the stress cycle](/blog/breaking-the-stress-cycle): thoughts, feelings and habits feeding into each other.",
      },
      { type: "heading", text: "Small things that can help" },
      {
        type: "list",
        items: [
          "Notice the worry and name it: \"I am having the thought that something will go wrong\"",
          "Set aside a short, fixed time each day for worries, and gently postpone them outside it",
          "Slow your breathing, with the out-breath a little longer than the in-breath. The [breathing pacer](/tools/breathing-pacer) can guide you",
          "Keep up the basics where you can: sleep, regular meals, movement and time outdoors",
          "Talk to someone you trust rather than carrying it alone",
        ],
      },
      {
        type: "paragraph",
        text: "None of these will make anxiety disappear overnight, and that is not the aim. The aim is to loosen its grip, so that worry becomes something you have rather than something that runs your day.",
      },
      { type: "heading", text: "When it may help to talk to someone" },
      {
        type: "paragraph",
        text: "It may be worth seeking support if anxiety has lasted for weeks or months, if it is affecting your sleep, work or relationships, or if you have started to avoid things that matter to you. You do not need to wait until things are unbearable.",
      },
      {
        type: "paragraph",
        text: "In counselling, there is no pressure to have the right words or to know where the anxiety comes from. Together, you can explore what sets it off, what keeps it going, and what has helped before. For some people, anxiety is linked to earlier experiences or [patterns that keep coming back](/blog/why-the-same-patterns-keep-coming-back). For others, practical tools for managing worried thoughts make the biggest difference. Often it is a mix of both.",
      },
      {
        type: "paragraph",
        text: "If you have already tried to manage it on your own, through apps, reading or talking it through with friends, that is not wasted effort. It is useful information about what helps and what does not, and a good place to start from.",
      },
      { type: "heading", text: "Anxiety in the body" },
      { type: "paragraph", text: "Anxiety is not only in the mind. When the body senses a threat, it prepares to act: the heart beats faster, breathing becomes quicker and shallower, and muscles tense. These are normal reactions, but when they appear without an obvious reason they can feel alarming in themselves, and the fear of the feeling can add another layer of worry. Knowing that these sensations are uncomfortable but not dangerous can take away some of their power." },
      { type: "paragraph", text: CRISIS_NOTE },
      {
        type: "callout",
        text: "Counselling offers a calm, confidential space to understand your anxiety at your own pace. Sessions are available in Dalkeith, near Edinburgh, and online across the UK. You can start with a [free 20-minute call](/contact).",
      },
    ],
  },
  {
    slug: "living-with-grief",
    title: "Living With Grief: No Right Way to Grieve",
    excerpt:
      "Grief rarely follows neat stages. Whatever you are feeling after a loss, it makes sense, and you do not have to carry it alone.",
    date: "2026-11-01",
    category: "Grief & Loss",
    readTime: "4 min read",
    summary:
      "Grief rarely follows neat stages, and mixed feelings are normal. Counselling offers a place to grieve without a timetable or the need to stay strong for others.",
    content: [
      {
        type: "paragraph",
        text: "Grief is one of the most human experiences there is, and one of the hardest. Whether you have lost someone you love, a relationship has ended, or life has changed in a way you did not choose, the feelings that follow can be overwhelming, confusing, and sometimes surprising.",
      },
      {
        type: "paragraph",
        text: "Many people worry that they are grieving the wrong way. They feel they should be further along, or that they should be more upset, or less. The truth is that there is no right way to grieve.",
      },
      { type: "heading", text: "Grief is not a straight line" },
      {
        type: "paragraph",
        text: "You may have heard of the stages of grief. They can be a helpful way of naming feelings, but grief rarely moves through them in order. It is more common to move back and forth: a good day followed by a hard one, a sudden wave of sadness triggered by a song, a smell, or an ordinary moment.",
      },
      {
        type: "list",
        items: [
          "Deep sadness, emptiness or longing",
          "Anger, at the situation, at others, or even at the person who has gone",
          "Guilt about things said or left unsaid",
          "Numbness, as if the loss has not quite sunk in",
          "Relief, especially after a long illness, sometimes followed by guilt about feeling it",
          "Tiredness, poor sleep, and difficulty concentrating",
        ],
      },
      {
        type: "paragraph",
        text: "All of these are normal responses to loss. Having mixed or contradictory feelings does not mean you loved someone less.",
      },
      { type: "heading", text: "Losses that are not always recognised" },
      {
        type: "paragraph",
        text: "Not every loss is a death. The end of a marriage or friendship, a miscarriage, a diagnosis, losing a job, moving away from home, or caring for someone who is changing can all bring grief. Sometimes these losses are less visible to others, which can make them lonelier to carry.",
      },
      { type: "heading", text: "Looking after yourself while grieving" },
      {
        type: "list",
        items: [
          "Allow the feelings to come and go, rather than pushing them away",
          "Keep some simple routines: eating, sleeping, a short walk",
          "Let people help, even in small, practical ways",
          "Find your own ways to remember, such as writing, photos, or visiting a meaningful place",
          "Be patient with yourself on anniversaries, birthdays and holidays",
        ],
      },
      { type: "heading", text: "When grief feels stuck" },
      {
        type: "paragraph",
        text: "For many people, grief gradually softens over time. It does not disappear, but life slowly grows around it. Sometimes, though, grief stays as intense as it was at the start, or it becomes tangled with other difficulties such as low mood, [anxiety](/blog/coping-with-anxiety), or [old patterns](/blog/why-the-same-patterns-keep-coming-back) that resurface.",
      },
      {
        type: "paragraph",
        text: "Friends and family may want to help but find it hard to know what to say. Some people also feel they have to stay strong for others. Counselling offers a space where you do not need to protect anyone, where you can say what you really feel, and where your grief is met without judgement or a timetable.",
      },
      { type: "heading", text: "What grief counselling can look like" },
      { type: "paragraph", text: "There is no set structure for talking about loss. Some people want to tell the story of what happened, sometimes more than once. Others want to talk about the person they have lost, the relationship they had, or the things that were left unfinished. Some come because grief has stirred up older losses, or because they feel stuck and cannot understand why." },
      { type: "paragraph", text: "Counselling does not try to make grief go away or hurry it along. It offers time and attention, so that feelings that have nowhere else to go can be expressed safely. Over time, many people find they can hold their loss differently: still painful at times, but no longer taking up all the space." },
      {
        type: "list",
        items: [
          "You can come soon after a loss, or years later",
          "You do not need to know what you want to say",
          "Sessions can be in person in Dalkeith or online, whichever feels easier",
        ],
      },
      { type: "paragraph", text: CRISIS_NOTE },
      {
        type: "callout",
        text: "Bereavement and loss are among the areas Erika works with most often. If you would like to talk, you can [arrange a free 20-minute call](/contact), in Dalkeith or online.",
      },
    ],
  },
  {
    slug: "understanding-burnout-vs-stress",
    title: "Burnout vs. Stress: Why the Difference Matters",
    excerpt:
      "Stress is having too much to do; burnout is having nothing left to give. Recognising the difference helps you find the right kind of support.",
    date: "2026-08-01",
    category: "Stress & Burnout",
    readTime: "3 min read",
    summary:
      "Stress feels like too much; burnout feels like not enough. Rest usually eases stress, while burnout needs a closer look at what keeps the cycle going.",
    content: [
      {
        type: "paragraph",
        text: "Stress and burnout are often used as if they mean the same thing. They do not, and the difference matters, because what helps with one can make very little difference to the other.",
      },
      { type: "heading", text: "What stress looks like" },
      {
        type: "paragraph",
        text: "Stress is usually a response to demands that feel bigger than the time or energy you have. Your heart rate rises, your focus narrows, and you push through. Once the deadline passes or the situation settles, you recover. In short bursts, stress can even be useful: it helps you prepare and act.",
      },
      {
        type: "paragraph",
        text: "A helpful way to think about it: stress tends to feel like too much. Too many tasks, too many expectations, too many things happening at once. It often comes with a sense of urgency, irritability, or a mind that will not stop planning.",
      },
      { type: "heading", text: "What burnout looks like" },
      {
        type: "paragraph",
        text: "Burnout develops when pressure continues for months without enough recovery. It can come from paid work, but also from caring for others, studying, running a home, or a combination of all of them. Instead of feeling overwhelmed, people often describe feeling empty. Burnout tends to feel like not enough: not enough energy, not enough motivation, not enough of yourself left to give.",
      },
      {
        type: "list",
        items: [
          "Exhaustion that a weekend or a holiday does not fix",
          "Growing distance or cynicism towards things you once cared about",
          "A sense that your effort no longer makes a difference",
          "Difficulty switching off, even when you finally have time",
          "Feeling flat, low, or disconnected from people around you",
        ],
      },
      { type: "heading", text: "Why the difference matters" },
      {
        type: "paragraph",
        text: "Stress often eases when the pressure eases. Burnout usually does not. Time off can help, but if you return to the same workload, the same expectations and the same habits, the exhaustion tends to come back.",
      },
      {
        type: "paragraph",
        text: "Recovery from burnout usually means looking at what keeps the cycle going: how much you take on, how you respond to pressure, what you expect of yourself, and what you believe will happen if you slow down. For many people, that includes learning to [set boundaries without guilt](/blog/sustainable-boundaries).",
      },
      { type: "heading", text: "Burnout and low mood" },
      {
        type: "paragraph",
        text: "Burnout and depression share some signs, such as tiredness, poor sleep and losing interest. If low mood is spreading into every part of your life, not only the source of pressure, it is worth speaking to your GP as well as considering counselling.",
      },
      { type: "heading", text: "A starting point" },
      {
        type: "paragraph",
        text: "If you are not sure which one you are experiencing, notice how you feel after real rest. If rest restores you, you are likely dealing with stress. If rest barely touches the tiredness, it may be worth taking it more seriously. The [Wheel of Life](/tools/wheel-of-life) can also help you see which areas of life the pressure is coming from. You may also recognise yourself in [high-functioning burnout](/blog/high-functioning-burnout), where everything looks fine from the outside.",
      },
      { type: "heading", text: "Who is more likely to burn out" },
      { type: "paragraph", text: "Burnout can happen to anyone, but some situations make it more likely. People in caring roles, whether professional or at home, often give a great deal without much chance to recover. So do people who find it hard to say no, those who hold very high standards for themselves, and anyone dealing with long-term pressure they cannot easily change, such as money worries or a difficult home situation." },
      { type: "paragraph", text: "It is also more likely when effort is not matched by recognition or control. Working hard on something you believe in, with support around you, is very different from working hard while feeling unseen or powerless. Noticing which of these applies to you can help you see where change is possible." },
      {
        type: "callout",
        text: "Counselling offers a calm, confidential space to understand what is driving your exhaustion and to find a more sustainable way forward. You can begin with a [free 20-minute call](/contact).",
      },
    ],
  },
  {
    slug: "high-functioning-burnout",
    title: "High-Functioning Burnout: When You Look Fine",
    excerpt:
      "High-functioning burnout is easy to miss because you keep going on the outside while quietly running on empty on the inside.",
    date: "2026-08-05",
    category: "Stress & Burnout",
    readTime: "3 min read",
    summary:
      "You can keep performing while running on empty. Noticing the gap between how things look and how they feel is the first step towards recovery.",
    content: [
      {
        type: "paragraph",
        text: "Some people burn out loudly. Others keep going. They still meet deadlines, answer messages and show up for everyone, while quietly running on empty. This is sometimes called high-functioning burnout, and it is easy to miss, including for the person living it.",
      },
      { type: "heading", text: "Why it goes unnoticed" },
      {
        type: "paragraph",
        text: "Because you keep coping, nobody around you sees a problem. Colleagues rely on you, your family sees you managing, and you may tell yourself that if you were really struggling, it would show. So you push a little harder.",
      },
      {
        type: "paragraph",
        text: "Many people in this position hold high standards for themselves and see rest as something that has to be earned. Slowing down can feel like failure, even when the body and mind are asking for it. Some have been the reliable one for so long that they no longer notice how much they carry.",
      },
      { type: "heading", text: "Common signs" },
      {
        type: "list",
        items: [
          "A sense of dread before the week starts, even when things are going well",
          "Feeling flat about achievements that once mattered",
          "Rest that does not feel restful",
          "Irritability, poor sleep, or replaying the day long after it ends",
          "Relying on routines, caffeine or willpower just to keep functioning",
          "Pulling back from friends or things you used to enjoy",
        ],
      },
      { type: "heading", text: "The cost of looking fine" },
      {
        type: "paragraph",
        text: "Keeping up appearances takes energy. Over time, the gap between how things look and how they feel can become its own source of strain. Many people only seek help when something finally gives: their health, a relationship, or their ability to cope.",
      },
      {
        type: "paragraph",
        text: "You do not need to wait for that point. Noticing the pattern early is not weakness. It is useful information.",
      },
      { type: "heading", text: "What can help" },
      {
        type: "paragraph",
        text: "Practical changes matter: realistic workloads, clearer limits, proper breaks. Our article on [setting boundaries without guilt](/blog/sustainable-boundaries) is a good place to start. But it often also helps to look at the beliefs underneath, such as the idea that your worth depends on what you produce, or that asking for help means letting people down.",
      },
      {
        type: "paragraph",
        text: "These beliefs often have a history. They may have been shaped by the role you played in your family, or by times when coping alone felt like the only option. Understanding where they come from can make it easier to loosen them. You can read more about this in [why the same patterns keep coming back](/blog/why-the-same-patterns-keep-coming-back).",
      },
      {
        type: "paragraph",
        text: "It can also help to compare how you feel now with how you felt a year ago. If the answer is \"more tired, less interested, more on edge\", that trend is worth taking seriously, even if your performance has not dropped.",
      },
      { type: "heading", text: "Questions to ask yourself" },
      { type: "paragraph", text: "If you are not sure whether this applies to you, these questions can help you take an honest look:" },
      {
        type: "list",
        items: [
          "When did I last feel properly rested?",
          "What would happen if I stopped doing so much for a week?",
          "Who do I talk to when things are hard, and do I actually do it?",
          "Which parts of my life have quietly shrunk to make room for everything else?",
          "Am I still doing things only because I enjoy them?",
        ],
      },
      { type: "paragraph", text: "There are no right or wrong answers. The point is to notice, without judging yourself, how things really are. If you prefer something visual, the [Wheel of Life](/tools/wheel-of-life) shows at a glance which parts of your life have shrunk." },
      {
        type: "callout",
        text: "You do not need to reach crisis before seeking support. Counselling offers a space to set down the effort of looking fine and to look honestly at what you are carrying. You can [get in touch here](/contact).",
      },
    ],
  },
  {
    slug: "breaking-the-stress-cycle",
    title: "Breaking the Stress Cycle: Thoughts and Habits",
    excerpt:
      "Stress is not only about what happens to you. The way you think and respond can keep the pressure going long after the trigger has passed.",
    date: "2026-08-10",
    category: "Stress & Burnout",
    readTime: "3 min read",
    summary:
      "Stress is kept going by a loop of situations, thoughts, feelings and habits. Noticing the loop is the first step to interrupting it.",
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
        text: "None of these steps is unreasonable on its own. Together, they can keep you stuck in a loop where the pressure never quite lifts. The same loop is often behind [anxiety that will not switch off](/blog/coping-with-anxiety).",
      },
      { type: "heading", text: "Thoughts that keep stress going" },
      {
        type: "list",
        items: [
          "All-or-nothing thinking: \"If it is not perfect, it is a failure.\"",
          "Catastrophising: jumping straight to the worst outcome",
          "Mind-reading: assuming you know what others think of you",
          "\"Should\" statements: rigid rules about how you must behave",
          "Discounting the positive: brushing off what went well",
        ],
      },
      {
        type: "paragraph",
        text: "These are not signs that something is wrong with you. They are common mental shortcuts, and most of us use them, especially when tired or under strain.",
      },
      { type: "heading", text: "Habits that keep stress going" },
      {
        type: "paragraph",
        text: "Behaviour matters as much as thoughts. Under stress, many people stop doing the things that refill them: seeing friends, exercising, eating properly, sleeping enough. Others start doing things that bring quick relief but cost more later, such as scrolling late into the night, saying yes to everything, or putting off a difficult task until it becomes urgent.",
      },
      { type: "heading", text: "Small ways to interrupt the loop" },
      {
        type: "list",
        items: [
          "Notice the thought and name it, rather than treating it as fact",
          "Ask what you would say to a friend in the same situation",
          "Look for the evidence for and against the worry",
          "Change one small behaviour, such as taking the lunch break you usually skip, or a two-minute pause with the [breathing pacer](/tools/breathing-pacer)",
          "Ask what is already working, even a little, and do more of it",
        ],
      },
      {
        type: "paragraph",
        text: "Building on what helps is often easier than trying to fix everything at once. If the same loop keeps returning despite your best efforts, it may help to look at [why patterns repeat](/blog/why-the-same-patterns-keep-coming-back), and at whether the pressure has started to turn into [burnout](/blog/understanding-burnout-vs-stress).",
      },
      { type: "heading", text: "An example" },
      { type: "paragraph", text: "Imagine you make a small mistake in a report. The automatic thought might be: \"I always get things wrong. My manager will think I cannot do my job.\" You feel a rush of anxiety and shame, and you stay late rechecking everything else you have done that week." },
      { type: "paragraph", text: "Looking at it more closely, you might ask: is it true that I always get things wrong? What would I say to a colleague who made the same mistake? A more balanced thought might be: \"I made one error, I noticed it, and I can fix it.\" The situation is the same, but the feeling is lighter, and you are more likely to go home on time and rest." },
      { type: "heading", text: "How counselling can help" },
      {
        type: "paragraph",
        text: "Seeing your own patterns from the inside is hard. In counselling, you have time and space to slow down and notice what happens between the trigger and your response. CBT tools can be useful here, used alongside a supportive relationship in which you set the pace.",
      },
      {
        type: "callout",
        text: "Counselling can help you recognise the patterns that keep stress going and practise new ways of responding, at a pace that feels manageable. [Get in touch](/contact) to arrange a free 20-minute call.",
      },
    ],
  },
  {
    slug: "imposter-syndrome-in-professionals",
    title: "Imposter Syndrome: When Success Feels Like a Lie",
    excerpt:
      "Feeling like a fraud despite what you have achieved is common. Understanding where imposter feelings come from helps reduce their power.",
    date: "2026-08-12",
    category: "Self-Esteem",
    readTime: "3 min read",
    summary:
      "Imposter feelings reflect high standards and self-criticism, not a lack of ability. Understanding where they come from helps separate self-worth from performance.",
    content: [
      {
        type: "paragraph",
        text: "You get the new role, finish the project, or receive the praise, and instead of feeling proud, you feel exposed. As if it is only a matter of time before someone realises you do not really belong. This experience is often called imposter syndrome, and it is far more common than most people think.",
      },
      { type: "heading", text: "Why it shows up" },
      {
        type: "paragraph",
        text: "Imposter feelings often grow from high standards, perfectionism or competitive environments. Many people notice that the feelings become stronger, not weaker, as they progress: a new job, a new course, a new responsibility, and new people to compare yourself with.",
      },
      {
        type: "paragraph",
        text: "Sometimes the roots go further back: a family where achievement was the way to earn approval, or early experiences where mistakes felt dangerous or shameful. These patterns can carry into adult life long after the original situation has changed.",
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
          "Comparing your insides to other people's outsides",
        ],
      },
      { type: "heading", text: "Imposter feelings and self-esteem" },
      {
        type: "paragraph",
        text: "At its heart, imposter syndrome is often about self-esteem: how you see yourself, and whether you feel you are allowed to take up space. When self-worth depends on performing well, every task becomes a test, and rest or praise can feel undeserved. This is closely linked to the pressure described in [high-functioning burnout](/blog/high-functioning-burnout).",
      },
      { type: "heading", text: "What helps" },
      {
        type: "paragraph",
        text: "Imposter feelings do not reflect your actual ability. They usually reflect high standards combined with a habit of self-criticism. Recognising that difference is an important first step.",
      },
      {
        type: "list",
        items: [
          "Keep a simple record of what you have done well, and why",
          "Notice how often the predicted disaster actually happens",
          "Talk about the feeling with someone you trust; it often loses power when spoken",
          "Practise accepting praise with a simple \"thank you\"",
        ],
      },
      {
        type: "paragraph",
        text: "Many of these thoughts follow the same [stress cycle](/blog/breaking-the-stress-cycle): a critical thought, an anxious feeling, and a habit such as overworking that seems to confirm the fear.",
      },
      { type: "heading", text: "It is not only about work" },
      { type: "paragraph", text: "Imposter feelings are often discussed in the context of careers, but they can appear anywhere: as a new parent, as a mature student, in a friendship group, or after a big life change such as moving to a new country. Wherever they appear, the pattern is similar: a sense that everyone else knows what they are doing, and that you are only pretending." },
      { type: "heading", text: "How counselling can help" },
      { type: "paragraph", text: "Counselling gives you space to look at where your inner critic comes from and what it is trying to protect you from. Often it learned its voice a long time ago. In a non-judgemental setting, you can begin to separate that old voice from the facts of your life now, and practise treating yourself with the kind of fairness you would offer someone else. Some people also find practical tools useful, such as noticing and questioning self-critical thoughts as they happen." },
      {
        type: "callout",
        text: "Counselling offers a private, non-judgemental space to explore where self-doubt comes from and to build a steadier sense of your own worth. You can [start with a free call](/contact).",
      },
    ],
  },
  {
    slug: "sustainable-boundaries",
    title: "Setting Sustainable Boundaries Without Guilt",
    excerpt:
      "Boundaries are not walls. They are clear choices about your time and energy, and they often make relationships healthier, not weaker.",
    date: "2026-08-18",
    category: "Relationships",
    readTime: "3 min read",
    summary:
      "Boundaries are clear choices about your time and energy, not walls. Guilt when you start setting them usually means you are doing something new, not something wrong.",
    content: [
      {
        type: "paragraph",
        text: "Setting boundaries can feel uncomfortable, especially if you are used to being the reliable one. Saying no can feel like letting people down. Yet without clear limits, it becomes very hard to protect your time, your energy and your wellbeing, and relationships can slowly fill with resentment.",
      },
      { type: "heading", text: "What a boundary actually is" },
      {
        type: "paragraph",
        text: "A boundary is not a wall or a punishment. It is a clear decision about what you can and cannot take on. It can be quiet and practical: not answering work messages after a certain hour, declining an extra commitment, asking a family member for more notice, or saying that a topic is off limits for now.",
      },
      { type: "heading", text: "Why it feels so hard" },
      {
        type: "list",
        items: [
          "Worry about disappointing others or being seen as difficult",
          "A belief that your value comes from always being available",
          "Past experiences where saying no led to conflict or rejection",
          "Growing up in a family where your needs came last",
          "Simply never having practised it",
        ],
      },
      {
        type: "paragraph",
        text: "If boundaries feel especially difficult, it is often because of what you learned early on about relationships. That is not a flaw. It is a pattern, and patterns can change. You can read more in [why the same patterns keep coming back](/blog/why-the-same-patterns-keep-coming-back).",
      },
      { type: "heading", text: "Starting small" },
      {
        type: "list",
        items: [
          "Pick one area where you feel most stretched and set a single limit there",
          "Use simple, clear language: \"I am not able to take this on this week.\"",
          "You do not need to over-explain or apologise repeatedly",
          "Expect some discomfort at first, and notice that it usually passes",
          "Notice who respects your limits; that tells you something useful too. The [Life Compass](/resources/life-compass) can help you get clearer on what matters most to protect",
        ],
      },
      { type: "heading", text: "About the guilt" },
      {
        type: "paragraph",
        text: "Feeling guilty when you set a boundary does not mean you are doing something wrong. It often means you are doing something new. Over time, most people find that clear limits improve relationships, because others know where they stand and resentment has less room to build.",
      },
      {
        type: "paragraph",
        text: "Over-commitment is also one of the most common routes into [burnout](/blog/understanding-burnout-vs-stress). Protecting your energy is not selfish; it is what allows you to keep caring for the people and things that matter.",
      },
      { type: "heading", text: "Boundaries with yourself" },
      {
        type: "paragraph",
        text: "Boundaries are not only about other people. They can also mean limits on how much you demand of yourself: how late you work, how harshly you judge mistakes, or how often you put your own needs last. These inner boundaries are often closely linked to [self-esteem](/blog/imposter-syndrome-in-professionals).",
      },
      { type: "heading", text: "Phrases that can help" },
      { type: "paragraph", text: "Finding the words is often the hardest part. These are simple starting points you can adapt:" },
      {
        type: "list",
        items: [
          "\"I would like to help, but I do not have capacity this week.\"",
          "\"Can I come back to you on that tomorrow?\"",
          "\"I am not comfortable talking about that right now.\"",
          "\"I can do this part, but not all of it.\"",
          "\"I need to leave by six today.\"",
        ],
      },
      { type: "paragraph", text: "Notice that none of these include a long explanation or an apology. A short, kind and clear message is usually enough." },
      {
        type: "callout",
        text: "Counselling can help you understand what makes boundaries difficult for you, and practise setting them with clarity and calm. [Get in touch](/contact) to talk it through.",
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
    readTime: "3 min read",
    summary:
      "Repeating patterns usually made sense once. Understanding where they come from, and practising something different, is what makes change possible.",
    content: [
      {
        type: "paragraph",
        text: "Many people come to counselling with a familiar frustration: \"I keep ending up in the same place.\" A new job brings the same exhaustion. A new relationship brings the same arguments. You promise yourself things will be different, and somehow they are not.",
      },
      { type: "heading", text: "Patterns are not random" },
      {
        type: "paragraph",
        text: "From a psychodynamic point of view, the ways we relate to others, to work and to ourselves are often shaped by earlier experiences. If, growing up, being helpful was the way to feel valued, you may still take on too much without noticing. If conflict felt unsafe, you may still avoid difficult conversations, even when avoiding them costs you.",
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
          "Being drawn to the same kind of people, even when it hurts",
        ],
      },
      { type: "heading", text: "Why advice alone often does not stick" },
      {
        type: "paragraph",
        text: "Friends, family, articles and apps can all offer useful advice. But if a pattern is rooted deeply, knowing what to do is rarely the problem. Understanding why you do what you do, and feeling safe enough to try something different, is often what makes change possible.",
      },
      { type: "heading", text: "The role of the counselling relationship" },
      {
        type: "paragraph",
        text: "In person-centred counselling, the relationship itself is a key part of the work. Being listened to without judgement, by someone who has no stake in your choices, can make it easier to look at painful patterns honestly. Many people notice that they start to treat themselves with a little more of the acceptance they experience in the room.",
      },
      { type: "heading", text: "Bringing understanding and change together" },
      {
        type: "paragraph",
        text: "Understanding where a pattern comes from is one part. Practising something different is the other. An integrative approach brings both together: exploring the roots, while also working on practical steps you can take now, such as the ideas in [breaking the stress cycle](/blog/breaking-the-stress-cycle) or [setting boundaries without guilt](/blog/sustainable-boundaries).",
      },
      {
        type: "paragraph",
        text: "Change rarely happens all at once. More often, you start to notice the pattern a little earlier each time, and gradually find that you have more choice in how you respond. Reflecting on your values with the [Life Compass](/resources/life-compass) can be a gentle place to begin.",
      },
      { type: "heading", text: "What starting counselling looks like" },
      { type: "paragraph", text: "Many people are unsure what to expect before their first session. It usually begins with a free 20-minute call, simply to talk about what has brought you here and whether working together feels right. If you decide to go ahead, the first session is a chance to share as much or as little as you want about your situation, and to think together about what you would like to change." },
      { type: "paragraph", text: "There is no need to arrive with a clear story or the right words. Patterns often only become visible over time, as you notice similar feelings appearing in different situations. Sessions can be in person in Dalkeith or online, and the number of sessions is agreed together and reviewed as you go." },
      {
        type: "callout",
        text: "Counselling offers a consistent, non-judgemental space to notice the patterns that keep returning and to find new ways of responding. If you would like to talk it through, you can [book a free 20-minute call](/contact).",
      },
    ],
  },
];

/** Header image for an article. Image files are named after the article slug. */
export function articleImage(slug: string): string {
  return `/images/blog/${slug}.webp`;
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
