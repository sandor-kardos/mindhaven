const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    for (const {target, replacement} of replacements) {
        content = content.replace(target, replacement);
    }
    fs.writeFileSync(filePath, content);
}

// 1. src/app/fees-and-booking/page.tsx
replaceInFile('src/app/fees-and-booking/page.tsx', [
    {
        target: 'title: "Fees & Booking | Private Executive Therapy UK",',
        replacement: 'title: "Fees & Booking | Mindhaven",\n  alternates: { canonical: "https://mindhaven.uk/fees-and-booking" },'
    },
    {
        target: /<div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch\">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
        replacement: `<div className=\"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto\">
            <div className=\"bg-white p-8 rounded-3xl border border-[#155D49]/20 shadow-md card-flow-effect flex flex-col justify-between h-full\">
              <div>
                <div className=\"inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E6F2ED] text-[#155D49] text-xs font-bold rounded-full mb-4 border border-[#155D49]/30\">
                  <span>Standard Session</span>
                </div>
                <h3 className=\"text-xl font-bold text-[#0D2E24] mb-2 font-heading min-h-[56px] flex items-center\">Individual Session</h3>
                <div className=\"flex items-baseline mb-4\">
                  <span className=\"text-4xl font-extrabold text-[#0D2E24]\">£85</span>
                  <span className=\"text-[#0D2E24]/70 ml-2 font-semibold text-sm\">/ 50 mins</span>
                </div>
                <p className=\"text-[#0D2E24]/80 text-sm font-medium leading-relaxed mb-6 min-h-[40px]\">Targeted therapeutic intervention and ongoing support.</p>
                <ul className=\"space-y-3 mb-8 text-[#0D2E24]\">
                  <li className=\"flex items-start text-sm font-medium\"><Check className=\"w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5\" /><span>Flexible scheduling</span></li>
                  <li className=\"flex items-start text-sm font-medium\"><Check className=\"w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5\" /><span>Online or in-person</span></li>
                  <li className=\"flex items-start text-sm font-medium\"><Check className=\"w-5 h-5 text-[#155D49] mr-2.5 shrink-0 mt-0.5\" /><span>Evidence-based clinical modalities</span></li>
                </ul>
              </div>
              <Link href=\"#booking\" className=\"w-full text-center py-3.5 px-4 bg-[#E6F2ED] text-[#0D2E24] font-bold text-sm rounded-full border border-[#155D49]/30 hover:bg-[#155D49] hover:text-white transition-colors\">Book Single Session</Link>
            </div>
            <div className=\"bg-[#0D2E24] text-white p-8 rounded-3xl border-2 border-[#155D49] shadow-2xl card-flow-effect flex flex-col justify-between h-full relative overflow-hidden\">
              <div>
                <div className=\"inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#155D49] text-white text-xs font-bold rounded-full mb-4\">
                  <Sparkles className=\"w-3.5 h-3.5 text-[#34D399]\" />
                  <span>Growth Package</span>
                </div>
                <h3 className=\"text-xl font-bold font-heading text-white mb-2 min-h-[56px] flex items-center\">Growth Package</h3>
                <div className=\"flex items-baseline mb-4\">
                  <span className=\"text-4xl font-extrabold text-white\">£480</span>
                  <span className=\"text-slate-300 ml-2 text-sm font-semibold\">(£80/session)</span>
                </div>
                <p className=\"text-slate-200 text-sm font-normal leading-relaxed mb-6 min-h-[40px]\">A structured pathway with progress tracking.</p>
                <ul className=\"space-y-3 mb-8 text-white font-medium\">
                  <li className=\"flex items-start text-sm text-slate-100\"><Check className=\"w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5\" /><span className=\"font-semibold text-white\">Full 6-session prepaid course</span></li>
                  <li className=\"flex items-start text-sm text-slate-100\"><Check className=\"w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5\" /><span className=\"font-semibold text-white\">Structured plan tailored for you</span></li>
                  <li className=\"flex items-start text-sm text-slate-100\"><Check className=\"w-5 h-5 text-[#34D399] mr-2.5 shrink-0 mt-0.5\" /><span className=\"font-semibold text-white\">Ongoing progress tracking</span></li>
                </ul>
              </div>
              <Link href=\"#booking\" className=\"w-full text-center py-3.5 px-4 bg-[#155D49] hover:bg-[#0A4C3A] text-white font-bold text-sm rounded-full transition-colors shadow-md relative z-10\">Select Package Pathway</Link>
            </div>
          </div>
        </div>
      </section>`
    }
]);

// 2. src/app/page.tsx
replaceInFile('src/app/page.tsx', [
    { target: 'bg-calm-gradient', replacement: '' },
    { target: /<div className="absolute top-1\/4 left-1\/3[^>]*animate-aura-drift[^>]*><\/div>/, replacement: '' },
    { target: 'animate-breathe animate-shimmer-border', replacement: 'animate-breathe' },
    { target: /<div className="absolute -inset-4[^>]*animate-aura-drift"><\/div>/, replacement: '' },
    { target: 'Executive Burnout & High-Performer Therapy in <span className="text-[#155D49] border-b-4 border-[#155D49]/30">Edinburgh & Online UK</span>', replacement: 'Transform Stress Into Success' },
    { target: 'Restoring psychological clarity, strategic resilience, and nervous system balance for corporate leaders, business owners, and senior professionals.', replacement: 'Personal counselling that enhances mental clarity, emotional control, and decision-making performance for ambitious professionals.' },
    { target: '<span>MNCPS Accredited · PSA Registered · Bupa Specialist</span>', replacement: '<span>What if you could thrive, not just survive?</span>' },
    { target: '<p className="text-xs text-[#0D2E24]/80 font-medium mt-0.5">Integrative Psychotherapist & Executive Specialist</p>', replacement: '<p className="text-xs text-[#0D2E24]/80 font-medium mt-0.5">Counsellor (MNCPS Acc.)</p>' }
]);

// 3. src/components/layout/Logo.tsx
replaceInFile('src/components/layout/Logo.tsx', [
    { target: 'Executive Therapy', replacement: 'Personal Growth and Emotional Well-being' }
]);

// 4. src/components/layout/Navbar.tsx
replaceInFile('src/components/layout/Navbar.tsx', [
    {
        target: /<nav className="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0D2E24\]">\s*<Link href=\"\/\" className=\"hover:text-\\[#155D49\\] transition-colors\">\s*Home\s*<\/Link>\s*<Link href=\"\/about-erika-martin\" className=\"hover:text-\\[#155D49\\] transition-colors\">\s*About Erika\s*<\/Link>\s*<Link href=\"\/executive-burnout-therapy\" className=\"hover:text-\\[#155D49\\] transition-colors\">\s*Executive Therapy\s*<\/Link>\s*<Link href=\"\/burnout-therapist-edinburgh\" className=\"hover:text-\\[#155D49\\] transition-colors\">\s*Edinburgh Practice\s*<\/Link>\s*<Link href=\"\/fees-and-booking\" className=\"hover:text-\\[#155D49\\] transition-colors\">\s*Fees & Investment\s*<\/Link>\s*<\/nav>/,
        replacement: `<nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#0D2E24]">
            <Link href="/#contact" className="hover:text-[#155D49] transition-colors">Contact</Link>
            <Link href="/about-erika-martin" className="hover:text-[#155D49] transition-colors">About</Link>
            <Link href="/#faq" className="hover:text-[#155D49] transition-colors">FAQs</Link>
            <Link href="/fees-and-booking" className="hover:text-[#155D49] transition-colors">Book</Link>
          </nav>`
    },
    {
        target: /<div className="md:hidden bg-white border-b border-\[#155D49\]\/20 px-4 pt-4 pb-6 space-y-3\">[\s\S]*?<div className="pt-2">/,
        replacement: `<div className="md:hidden bg-white border-b border-[#155D49]/20 px-4 pt-4 pb-6 space-y-3">
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">Contact</Link>
          <Link href="/about-erika-martin" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">About</Link>
          <Link href="/#faq" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">FAQs</Link>
          <Link href="/fees-and-booking" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">Book</Link>
          <div className="pt-2">`
    }
]);

// 5. src/components/layout/Footer.tsx
replaceInFile('src/components/layout/Footer.tsx', [
    { target: 'Specialized psychotherapeutic support for corporate executives, business owners, and senior leaders in Edinburgh and Online across the UK.', replacement: 'personal counselling for adults building something meaningful — career, relationships, or personal goals.' },
    { target: '<li><Link href="/executive-burnout-therapy" className="hover:text-white transition-colors">Executive Burnout</Link></li>', replacement: '' }
]);

// 6. src/app/layout.tsx
replaceInFile('src/app/layout.tsx', [
    { target: 'title: "MindHaven Executive Therapy | Edinburgh & Online UK",', replacement: 'title: "Mindhaven | Personal Counselling with Erika Martin",\n  alternates: { canonical: "https://mindhaven.uk" },\n  verification: { google: "bD4QVDRsDfdhBFZ_owsWlvQOi96pAGKi-ue-Dou4D0g" },' },
    { target: 'description: "Evidence-informed psychotherapeutic support for high-performing executives, business owners, and corporate leaders navigating burnout, chronic workplace stress, and decision fatigue.",', replacement: 'description: "Personal counselling that enhances mental clarity, emotional control, and decision-making performance for ambitious professionals.",' },
    { target: '      description: "Accredited Psychotherapeutic Counsellor specializing in executive burnout, professional stress, and nervous system regulation in Edinburgh, Dalkeith, and Online UK.",', replacement: '      description: "Accredited Psychotherapeutic Counsellor specializing in executive burnout, professional stress, and nervous system regulation in Edinburgh, Dalkeith, and Online UK.",\n      sameAs: [],' },
    { target: 'name: "MindHaven Executive Therapy",', replacement: 'name: "Mindhaven",' }
]);

// 7 & 8. src/app/privacy-and-gdpr/page.tsx and src/app/terms-of-service/page.tsx
replaceInFile('src/app/privacy-and-gdpr/page.tsx', [
    { target: 'MindHaven Executive Therapy', replacement: 'Mindhaven' },
    { target: 'title: "Privacy Policy & GDPR | MindHaven Executive Therapy",', replacement: 'title: "Privacy Policy & GDPR | Mindhaven",\n  alternates: { canonical: "https://mindhaven.uk/privacy-and-gdpr" },' }
]);
replaceInFile('src/app/terms-of-service/page.tsx', [
    { target: 'MindHaven Executive Therapy', replacement: 'Mindhaven' },
    { target: 'title: "Terms of Service | MindHaven Executive Therapy",', replacement: 'title: "Terms of Service | Mindhaven",\n  alternates: { canonical: "https://mindhaven.uk/terms-of-service" },' }
]);

// 10. src/app/burnout-therapist-edinburgh/page.tsx
replaceInFile('src/app/burnout-therapist-edinburgh/page.tsx', [
    { target: 'Burnout Therapist for Edinburgh\'s Corporate Leaders', replacement: 'Counselling for Stress and Burnout in Edinburgh' },
    { target: 'title: "Burnout Therapist Edinburgh | Executive Stress Counselling",', replacement: 'title: "Burnout Therapist Edinburgh | Stress Counselling",\n  alternates: { canonical: "https://mindhaven.uk/burnout-therapist-edinburgh" },' },
    { target: 'description: "Discreet executive burnout therapy in Edinburgh and Midlothian. MNCPS accredited psychotherapeutic support for high performers.",', replacement: 'description: "Private counselling for stress and burnout, online and in-person in Edinburgh.",' }
]);

// 11. src/app/about-erika-martin/page.tsx
replaceInFile('src/app/about-erika-martin/page.tsx', [
    { target: 'tailored specifically for executives, founders, and leaders', replacement: 'tailored to adults navigating career, relationship, or personal growth challenges.' },
    { target: 'title: "About Erika Martin | MNCPS Accredited Psychotherapist",', replacement: 'title: "About Erika Martin | MNCPS Accredited Psychotherapist",\n  alternates: { canonical: "https://mindhaven.uk/about-erika-martin" },' }
]);

// Add canonical to page.tsx
replaceInFile('src/app/page.tsx', [
    { target: 'export default function Home()', replacement: 'export const metadata = { alternates: { canonical: "https://mindhaven.uk" } };\n\nexport default function Home()' }
]);

// Add prefers-reduced-motion to globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');
if (!css.includes('prefers-reduced-motion')) {
  css += `\n@media (prefers-reduced-motion: reduce) {
  .animate-breathe,
  .animate-aura-drift,
  .animate-calm-ring,
  .animate-shimmer-border,
  .bg-calm-gradient {
    animation: none !important;
    transform: none !important;
  }
}\n`;
  fs.writeFileSync('src/app/globals.css', css);
}
