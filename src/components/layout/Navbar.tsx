"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Calendar, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447516785823";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Erika, I'd like to enquire about a free introductory call.")}`;
const FACEBOOK_URL = "https://www.facebook.com/ErikaMartinCounselling";
const LINKEDIN_URL = "https://www.linkedin.com/in/erika-martin-counselling";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAF8]/90 backdrop-blur-md border-b border-[#155D49]/20 transition-all">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <Logo variant="light" />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#0D2E24]">
            <Link href="/contact" className="hover:text-[#155D49] transition-colors">
              Contact
            </Link>
            <Link href="/about-erika-martin" className="hover:text-[#155D49] transition-colors">
              About
            </Link>
            <Link href="/#faq" className="hover:text-[#155D49] transition-colors">
              FAQs
            </Link>
            <Link href="/fees-and-booking" className="hover:text-[#155D49] transition-colors">
              Fees
            </Link>
          </nav>

          {/* Desktop: Social Icons + CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Erika on WhatsApp"
              className="p-2 rounded-lg text-[#0D2E24]/60 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Erika Martin Counselling on Facebook"
              className="p-2 rounded-lg text-[#0D2E24]/60 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Erika Martin Counselling on LinkedIn"
              className="p-2 rounded-lg text-[#0D2E24]/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <div className="w-px h-5 bg-[#155D49]/20 mx-1" />
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#0D2E24] hover:bg-[#155D49] rounded-full transition-all shadow-md border border-[#155D49]/30"
            >
              <Calendar className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-[#0D2E24] hover:bg-[#E6F2ED] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#155D49]/20 px-4 pt-4 pb-6 space-y-1">
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">Contact</Link>
          <Link href="/about-erika-martin" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">About</Link>
          <Link href="/#faq" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">FAQs</Link>
          <Link href="/fees-and-booking" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]">Fees</Link>

          <div className="flex items-center gap-3 py-2 border-t border-[#155D49]/10 mt-2 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Erika on WhatsApp"
              className="flex items-center gap-2 text-xs font-bold text-[#25D366] hover:text-[#1da851] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <span className="text-[#155D49]/30">·</span>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Erika Martin Counselling on Facebook"
              className="flex items-center gap-2 text-xs font-bold text-[#1877F2] hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <span className="text-[#155D49]/30">·</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Erika Martin Counselling on LinkedIn"
              className="flex items-center gap-2 text-xs font-bold text-[#0A66C2] hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-2">
            <Link
              href="/contact#book"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#0D2E24] rounded-full"
            >
              <Calendar className="w-4 h-4 text-[#34D399]" />
              <span>Book Free Introductory Call</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
