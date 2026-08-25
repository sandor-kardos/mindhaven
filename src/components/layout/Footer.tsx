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
                <span className="text-slate-100">6 Newmills Rd, Dalkeith EH22 2LE</span>
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
