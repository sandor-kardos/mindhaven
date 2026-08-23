"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAF8]/90 backdrop-blur-md border-b border-[#155D49]/20 transition-all">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Component */}
          <Logo variant="light" />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#0D2E24]">
            <Link href="/" className="hover:text-[#155D49] transition-colors">
              Home
            </Link>
            <Link href="/about-erika-martin" className="hover:text-[#155D49] transition-colors">
              About Erika
            </Link>
            <Link href="/executive-burnout-therapy" className="hover:text-[#155D49] transition-colors">
              Executive Therapy
            </Link>
            <Link href="/burnout-therapist-edinburgh" className="hover:text-[#155D49] transition-colors">
              Edinburgh Practice
            </Link>
            <Link href="/fees-and-booking" className="hover:text-[#155D49] transition-colors">
              Fees & Investment
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/fees-and-booking"
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
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#155D49]/20 px-4 pt-4 pb-6 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]"
          >
            Home
          </Link>
          <Link 
            href="/about-erika-martin" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]"
          >
            About Erika
          </Link>
          <Link 
            href="/executive-burnout-therapy" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]"
          >
            Executive Therapy
          </Link>
          <Link 
            href="/burnout-therapist-edinburgh" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]"
          >
            Edinburgh Practice
          </Link>
          <Link 
            href="/fees-and-booking" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-bold text-[#0D2E24] hover:text-[#155D49]"
          >
            Fees & Investment
          </Link>
          <div className="pt-2">
            <Link 
              href="/fees-and-booking"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#0D2E24] rounded-full"
            >
              <Calendar className="w-4 h-4 text-[#34D399]" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
