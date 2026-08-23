const fs = require('fs');

const pagePath = 'src/app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const faqSection = `
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
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">How do I know if I'm burnt out?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Burnout often presents as emotional exhaustion, cynicism towards your work, and a sense of reduced professional efficacy. If rest no longer restores your energy, you may be experiencing burnout.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">Are sessions strictly confidential?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Yes. Mindhaven is a 100% private-pay practice, which means no diagnostic information or session notes are shared with medical insurance companies or employers, ensuring absolute discretion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#155D49]/20 shadow-sm card-flow-effect">
              <h3 className="font-bold text-lg text-[#0D2E24] font-heading mb-2">How long does the therapy take?</h3>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Duration varies depending on individual goals. Some clients find clarity in our 6-session structured Growth Package, while others prefer ongoing individual sessions to maintain long-term well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
`;

const schemaImportStr = `import { BackgroundParticles } from "@/components/ui/BackgroundParticles";`;

const faqSchemaStr = `
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if I'm burnt out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Burnout often presents as emotional exhaustion, cynicism towards your work, and a sense of reduced professional efficacy. If rest no longer restores your energy, you may be experiencing burnout."
      }
    },
    {
      "@type": "Question",
      "name": "Are sessions strictly confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mindhaven is a 100% private-pay practice, which means no diagnostic information or session notes are shared with medical insurance companies or employers, ensuring absolute discretion."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the therapy take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Duration varies depending on individual goals. Some clients find clarity in our 6-session structured Growth Package, while others prefer ongoing individual sessions to maintain long-term well-being."
      }
    }
  ]
};
`;

if (!content.includes('id="faq"')) {
    content = content.replace('    </div>\n  );\n}\n', faqSection + '\n    </div>\n  );\n}\n');
    content = content.replace(schemaImportStr, faqSchemaStr + '\n' + schemaImportStr);
    
    // Add schema script inside the return
    const returnStart = content.indexOf('<div className="flex flex-col w-full');
    const newDivStart = `<div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] overflow-hidden relative">\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />`;
    content = content.replace('<div className="flex flex-col w-full bg-[#F8FAF8] text-[#0D2E24] overflow-hidden relative">', newDivStart);
    
    fs.writeFileSync(pagePath, content);
}
