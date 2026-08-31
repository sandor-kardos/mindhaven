"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Mail, Clock, Send, ShieldCheck, ArrowRight, User, BookOpen, Sparkles, HelpCircle, CreditCard } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { BookingForm } from "@/components/booking/BookingForm";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447516785823";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Erika, I'd like to enquire about counselling.")}`;
const MESSENGER_URL = "https://m.me/ErikaMartinCounselling";
const FACEBOOK_URL = "https://www.facebook.com/ErikaMartinCounselling";
const LINKEDIN_URL = "https://www.linkedin.com/in/erika-martin-counselling";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalView, setModalView] = useState<'options' | 'form'>('options');

  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => {
      if (window.scrollY > 10) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FEFFF7]/90 backdrop-blur-md border-b border-[#34D399]/20 transition-all">
        <div className="container mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/contact" className="text-sm font-semibold text-[#0D2E24] hover:text-[#059669] transition-colors">
                Contact
              </Link>
              <Link href="/about-erika-martin" className="text-sm font-semibold text-[#0D2E24] hover:text-[#059669] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-sm font-semibold text-[#0D2E24] hover:text-[#059669] transition-colors">
                Blog
              </Link>
              <Link href="/tools" className="text-sm font-semibold text-[#0D2E24] hover:text-[#059669] transition-colors">
                Tools
              </Link>
              <Link href="/#faq" className="text-sm font-semibold text-[#0D2E24] hover:text-[#059669] transition-colors">
                FAQs
              </Link>
              <Link href="/fees-and-booking" className="text-sm font-semibold text-[#0D2E24] hover:text-[#059669] transition-colors">
                Fees
              </Link>
            </nav>

            {/* Right side socials + Message Me button */}
            <div className="hidden md:flex items-center gap-3">
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

              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="group inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-[#0D2E24] hover:bg-[#34D399] rounded-full transition-all shadow-md cursor-pointer"
              >
                Message Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-[#0D2E24] hover:bg-[#FEFFF7] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#FEFFF7] border-b border-[#34D399]/20 px-4 pt-4 pb-6 space-y-2 shadow-2xl absolute w-full max-h-[calc(100vh-5rem)] overflow-y-auto z-40">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-white shadow-sm rounded-xl text-sm font-extrabold text-[#0D2E24] transition-all border border-[#34D399]/15">
              <Mail className="w-4 h-4 text-[#059669]" />
              <span>Contact</span>
            </Link>
            <Link href="/about-erika-martin" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-white shadow-sm rounded-xl text-sm font-extrabold text-[#0D2E24] transition-all border border-[#34D399]/15">
              <User className="w-4 h-4 text-[#059669]" />
              <span>About</span>
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-white shadow-sm rounded-xl text-sm font-extrabold text-[#0D2E24] transition-all border border-[#34D399]/15">
              <BookOpen className="w-4 h-4 text-[#059669]" />
              <span>Blog</span>
            </Link>
            <Link href="/tools" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-white shadow-sm rounded-xl text-sm font-extrabold text-[#0D2E24] transition-all border border-[#34D399]/15">
              <Sparkles className="w-4 h-4 text-[#059669]" />
              <span>Tools</span>
            </Link>
            <Link href="/#faq" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-white shadow-sm rounded-xl text-sm font-extrabold text-[#0D2E24] transition-all border border-[#34D399]/15">
              <HelpCircle className="w-4 h-4 text-[#059669]" />
              <span>FAQs</span>
            </Link>
            <Link href="/fees-and-booking" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-white shadow-sm rounded-xl text-sm font-extrabold text-[#0D2E24] transition-all border border-[#34D399]/15">
              <CreditCard className="w-4 h-4 text-[#059669]" />
              <span>Fees</span>
            </Link>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-extrabold text-white bg-[#0D2E24] hover:bg-[#34D399] rounded-full transition-colors cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#34D399] group-hover:text-white transition-colors" />
                <span>Message Me</span>
              </button>
              <p className="text-[11px] text-center text-[#0D2E24]/60 font-semibold mt-2">
                Erika replies the same day.
              </p>
            </div>
          </div>
        )}
      </header>

      {/* 3-Option "Message Me" Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D2E24]/75 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white border-2 border-[#34D399]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative card-flow-glow my-8">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setIsContactModalOpen(false);
                setModalView('options');
              }}
              className="absolute top-5 right-5 p-2 rounded-full text-[#0D2E24]/60 hover:text-[#0D2E24] hover:bg-[#FEFFF7] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {modalView === 'options' ? (
              <>
                {/* Modal Title & Reassurance Note */}
                <div className="space-y-2 pr-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEFFF7] border border-[#34D399]/30 text-xs font-bold text-[#059669]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Erika replies the same day.</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0D2E24] font-heading">
                    Message Erika
                  </h3>

                  <p className="text-xs text-[#0D2E24]/80 font-medium">
                    Select your preferred way to get in touch. No pressure or commitment.
                  </p>
                </div>

                {/* 3 Contact Options Grid */}
                <div className="space-y-3">
                  {/* Option 1: WhatsApp */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setIsContactModalOpen(false);
                      setModalView('options');
                    }}
                    className="group flex items-center justify-between p-4 bg-[#FEFFF7] hover:bg-white rounded-2xl border border-[#34D399]/30 hover:border-[#34D399] shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#0D2E24] font-heading">WhatsApp</h4>
                        <p className="text-[11px] text-[#0D2E24]/70 font-medium">Quick, informal messaging</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Option 2: Email Form Option */}
                  <button
                    type="button"
                    onClick={() => setModalView('form')}
                    className="w-full text-left group flex items-center justify-between p-4 bg-[#FEFFF7] hover:bg-white rounded-2xl border border-[#34D399]/30 hover:border-[#34D399] shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center text-[#059669]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#0D2E24] font-heading">Email Message Form</h4>
                        <p className="text-[11px] text-[#0D2E24]/70 font-medium">Send a quick note with contact details</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Option 3: Messenger */}
                  <a
                    href={MESSENGER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setIsContactModalOpen(false);
                      setModalView('options');
                    }}
                    className="group flex items-center justify-between p-4 bg-[#FEFFF7] hover:bg-white rounded-2xl border border-[#34D399]/30 hover:border-[#34D399] shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                        <Send className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-[#0D2E24] font-heading">Messenger</h4>
                        <p className="text-[11px] text-[#0D2E24]/70 font-medium">Facebook Messenger</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#34D399] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Direct Link to Email client */}
                <div className="pt-2 text-center border-t border-[#34D399]/20">
                  <a
                    href="mailto:mindhavenuk@gmail.com"
                    className="text-xs font-bold text-[#0D2E24]/70 hover:text-[#059669] underline underline-offset-4 transition-colors"
                  >
                    Or open email app directly (mindhavenuk@gmail.com) &rarr;
                  </a>
                </div>
              </>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setModalView('options')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] hover:underline mb-4 cursor-pointer"
                >
                  &larr; Back to contact options
                </button>
                <BookingForm />
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
