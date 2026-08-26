import Link from "next/link";
import { ShieldCheck, Lock, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="bg-[#0D2E24] text-white pt-16 pb-20 sm:pb-24 border-t border-[#155D49]/40 relative z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Logo variant="dark" />
            <p className="text-sm text-slate-200 leading-relaxed font-medium pt-2">
              Personal counselling for adults building something meaningful, whether that's career, relationships, or personal goals.
            </p>
            <a
              href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#34D399] hover:underline font-extrabold group"
              title="Verify Erika Martin's official listing on the NCPS register"
            >
              <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
              <span>NCPS Accredited Practitioner</span>
              <ExternalLink className="w-3 h-3 text-[#34D399]/70 group-hover:text-[#34D399] transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/ErikaMartinCounselling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#34D399] hover:underline font-extrabold group"
              title="Erika Martin Counselling on Facebook"
            >
              {/* Facebook icon */}
              <svg className="w-4 h-4 text-[#34D399] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3 text-[#34D399]/70 group-hover:text-[#34D399] transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/erika-martin-counselling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#34D399] hover:underline font-extrabold group"
              title="Erika Martin Counselling on LinkedIn"
            >
              <svg className="w-4 h-4 text-[#34D399] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#34D399]/70 group-hover:text-[#34D399] transition-colors" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white font-heading uppercase tracking-wider">Practice</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium">
              <li><Link href="/" className="hover:text-[#34D399] transition-colors">Home</Link></li>
              <li><Link href="/about-erika-martin" className="hover:text-[#34D399] transition-colors">About Erika Martin</Link></li>
              <li><Link href="/burnout-therapist-edinburgh" className="hover:text-[#34D399] transition-colors">Edinburgh Practice</Link></li>
              <li><Link href="/fees-and-booking" className="hover:text-[#34D399] transition-colors">Fees & Booking</Link></li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white font-heading uppercase tracking-wider">Governance</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200 font-medium">
              <li><Link href="/privacy-and-gdpr" className="hover:text-[#34D399] transition-colors">Privacy & GDPR Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[#34D399] transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal-notice" className="hover:text-[#34D399] transition-colors">Legal Notice</Link></li>
              <li className="flex items-center gap-1.5 text-slate-200 pt-1">
                <Lock className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <span>Confidential & Discreet</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-white font-heading uppercase tracking-wider">Location</h4>
            <div className="text-xs sm:text-sm text-slate-200 space-y-3 font-medium">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                <span className="text-slate-100">
                  <a
                    href="https://mysatherapyrooms.co.uk/mysa-therapists"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#34D399] transition-colors underline underline-offset-2"
                  >
                    Mysa Therapy Rooms
                  </a>
                  <br />
                  <span className="text-slate-300 text-xs">Dalkeith EH22 · Edinburgh</span>
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="mailto:mindhavenuk@gmail.com" className="text-slate-100 hover:text-[#34D399] transition-colors font-medium">mindhavenuk@gmail.com</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="tel:+447516785823" className="text-slate-100 hover:text-[#34D399] transition-colors font-medium">+44 7516 785823</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright - Clean Bright White Plain Text with NCPS Register Link */}
        <div className="pt-8 border-t border-[#155D49]/50 text-center">
          <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            © {new Date().getFullYear()} Mindhaven. All rights reserved.{" "}
            <a 
              href="https://www.search-ncps.com/search/FindaTherapist/NCS16-03808" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline underline-offset-2 hover:text-[#34D399] transition-colors"
            >
              NCPS Accredited
            </a>{" "}
            & PSA Registered.
          </p>
        </div>

      </div>
    </footer>
  );
}
