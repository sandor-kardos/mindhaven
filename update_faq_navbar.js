const fs = require('fs');

const pagePath = 'src/app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// Replace FAQ Section HTML
const newFaqHTML = `
      {/* SECTION: FAQ */}
      <section id="faq" className="py-24 bg-[#E6F2ED]/40 px-4 border-t border-[#155D49]/15">
        <div className="container mx-auto max-w-3xl space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2E24] font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">Can I try a free consultation before committing?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                You can book an initial consultation to discuss your needs and see if we are a good fit before committing to a broader course of therapy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">How does online counselling work (video/phone)?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Online sessions are conducted securely via encrypted video calls or over the phone, allowing you to engage in therapy from the comfort and privacy of your own space, anywhere in the UK.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">Is online counselling as effective as meeting in person?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Yes, evidence indicates that online counselling—whether via video or phone—is just as effective as face-to-face sessions, offering the same level of professional support, depth, and confidentiality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">Do you help with stress and anxiety specifically?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Yes, as an MNCPS Accredited Counsellor, I specialize in nervous system regulation, stress, burnout, and anxiety, helping clients restore mental clarity and emotional control.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">Who can benefit from counselling (not just crisis — professionals too)?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Counselling is not solely for those in immediate crisis. It is highly beneficial for ambitious professionals and adults navigating career, relationship, or personal growth challenges who want to thrive, not just survive.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">Are sessions confidential?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Yes, all sessions are strictly confidential. We adhere to the ethical guidelines and data protection standards of the National Counselling and Psychotherapy Society (MNCPS) and GDPR, ensuring your privacy and clinical records are fully protected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">How many sessions will I need?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                The number of sessions depends on your individual circumstances. Some clients find the structure of our 6-session Growth Package (£480) sufficient, while others prefer ongoing individual sessions (£85 per session) for long-term well-being.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">How do I book a session?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                You can book a session by visiting our Fees & Booking page, where you can select between an individual session or a Growth Package and contact us directly to schedule your appointment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">Do you see clients in person in Edinburgh?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Yes, in addition to online sessions across the UK, I see clients in person at Mysa Therapy Rooms, located at 6 Newmills Rd in Dalkeith, just outside Edinburgh.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">What therapeutic approach/methodology do you use?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                I utilize an integrative approach that includes person-centered therapy, Cognitive Behavioural Therapy (CBT), and mindfulness-based practices, alongside somatic and nervous system regulation techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
`;

const oldHtmlRegex = /\{\/\* SECTION: FAQ \*\/\}(.|\n)*?<\/section>/m;
content = content.replace(oldHtmlRegex, newFaqHTML.trim());

// Replace FAQ JSON-LD Schema
const newJsonLD = `const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I try a free consultation before committing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book an initial consultation to discuss your needs and see if we are a good fit before committing to a broader course of therapy."
      }
    },
    {
      "@type": "Question",
      "name": "How does online counselling work (video/phone)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Online sessions are conducted securely via encrypted video calls or over the phone, allowing you to engage in therapy from the comfort and privacy of your own space, anywhere in the UK."
      }
    },
    {
      "@type": "Question",
      "name": "Is online counselling as effective as meeting in person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, evidence indicates that online counselling—whether via video or phone—is just as effective as face-to-face sessions, offering the same level of professional support, depth, and confidentiality."
      }
    },
    {
      "@type": "Question",
      "name": "Do you help with stress and anxiety specifically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as an MNCPS Accredited Counsellor, I specialize in nervous system regulation, stress, burnout, and anxiety, helping clients restore mental clarity and emotional control."
      }
    },
    {
      "@type": "Question",
      "name": "Who can benefit from counselling (not just crisis — professionals too)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Counselling is not solely for those in immediate crisis. It is highly beneficial for ambitious professionals and adults navigating career, relationship, or personal growth challenges who want to thrive, not just survive."
      }
    },
    {
      "@type": "Question",
      "name": "Are sessions confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all sessions are strictly confidential. We adhere to the ethical guidelines and data protection standards of the National Counselling and Psychotherapy Society (MNCPS) and GDPR, ensuring your privacy and clinical records are fully protected."
      }
    },
    {
      "@type": "Question",
      "name": "How many sessions will I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The number of sessions depends on your individual circumstances. Some clients find the structure of our 6-session Growth Package (£480) sufficient, while others prefer ongoing individual sessions (£85 per session) for long-term well-being."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a session by visiting our Fees & Booking page, where you can select between an individual session or a Growth Package and contact us directly to schedule your appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you see clients in person in Edinburgh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, in addition to online sessions across the UK, I see clients in person at Mysa Therapy Rooms, located at 6 Newmills Rd in Dalkeith, just outside Edinburgh."
      }
    },
    {
      "@type": "Question",
      "name": "What therapeutic approach/methodology do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I utilize an integrative approach that includes person-centered therapy, Cognitive Behavioural Therapy (CBT), and mindfulness-based practices, alongside somatic and nervous system regulation techniques."
      }
    }
  ]
};`;

const oldJsonRegex = /const faqSchema = \{[\s\S]*?\};\n/m;
content = content.replace(oldJsonRegex, newJsonLD + '\n');

fs.writeFileSync(pagePath, content);


// Navbar changes
const navbarPath = 'src/components/layout/Navbar.tsx';
let navContent = fs.readFileSync(navbarPath, 'utf8');

navContent = navContent.replace(
  '<Link href="/#contact" className="hover:text-[#155D49] transition-colors">\n              Contact\n            </Link>',
  '<Link href="/fees-and-booking" className="hover:text-[#155D49] transition-colors">\n              Contact\n            </Link>'
);
navContent = navContent.replace(
  '<Link href="/#contact" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">Contact</Link>',
  '<Link href="/fees-and-booking" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">Contact</Link>'
);
fs.writeFileSync(navbarPath, navContent);
