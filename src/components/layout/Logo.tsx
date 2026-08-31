"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  variantMark?: "lineM" | "blobM" | "none";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDarkBg = variant === "dark";

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-3 group ${className}`} 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {/* Sleek Minimalist M Monogram */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          width="32" 
          height="32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 shrink-0"
        >
          <path 
            d="M 22 76 V 24 L 50 56 L 78 24 V 76" 
            stroke={isDarkBg ? "#34D399" : "#0D2E24"} 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Minimalist Typographic Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline transition-transform duration-300 group-hover:translate-x-0.5">
          <span className="font-heading text-xl sm:text-[21px] font-extrabold tracking-[-0.05em] leading-[0.85]">
            <span className={isDarkBg ? "text-white" : "text-[#0D2E24]"}>Mind</span>
            <span className={isDarkBg ? "text-[#34D399]" : "text-[#10B981]"}>Haven</span>
          </span>
          <span className="text-[#10B981] text-xl sm:text-[21px] font-black leading-[0.85] ml-0.5 group-hover:text-[#0D2E24] transition-colors">.</span>
        </div>
        <span className={`text-[8px] font-extrabold uppercase tracking-[0.25em] leading-none mt-1 transition-transform duration-300 group-hover:translate-x-0.5 ${
          isDarkBg ? "text-[#34D399]" : "text-[#0D2E24]/50"
        }`}>
          Private Counselling
        </span>
      </div>
    </Link>
  );
}
