import Link from "next/link";
import { ShieldCheck, Lock, MapPin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="bg-[#0D2E24] text-white pt-16 pb-12 border-t border-[#155D49]/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Logo variant="dark" />
            <p className="text-xs text-slate-300 leading-relaxed font-normal pt-2">
              personal counselling for adults building something meaningful, whether that's career, relationships, or personal goals.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#34D399] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#34D399]" />
              <span>MNCPS Accredited Practitioner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white font-heading uppercase tracking-wider">Practice</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about-erika-martin" className="hover:text-white transition-colors">About Erika Martin</Link></li>
              
              <li><Link href="/burnout-therapist-edinburgh" className="hover:text-white transition-colors">Edinburgh Practice</Link></li>
              <li><Link href="/fees-and-booking" className="hover:text-white transition-colors">Fees & Booking</Link></li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white font-heading uppercase tracking-wider">Governance</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li><Link href="/privacy-and-gdpr" className="hover:text-white transition-colors">Privacy & GDPR Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li className="flex items-center gap-1.5 text-slate-300 pt-1">
                <Lock className="w-3.5 h-3.5 text-[#34D399]" />
                <span>Confidential & Discreet</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white font-heading uppercase tracking-wider">Location</h4>
            <div className="text-xs text-slate-300 space-y-2 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                <span>6 Newmills Rd, Dalkeith EH22 2LE</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="mailto:mindhavenuk@gmail.com" className="hover:text-white transition-colors">mindhavenuk@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="tel:+447516785823" className="hover:text-white transition-colors">+44 7516 785823</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Mindhaven. All rights reserved. MNCPS Accredited & PSA Registered.</p>
        </div>

      </div>
    </footer>
  );
}
