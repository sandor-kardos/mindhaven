import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDarkBg = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group ${className}`}>
      {/* High-End Mindhaven Sanctuary Crest */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          width="42" 
          height="42" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 shrink-0"
        >
          {/* Sanctuary Outer Arch */}
          <path 
            d="M 22 76 V 44 C 22 28.536 34.536 16 50 16 C 65.464 16 78 28.536 78 44 V 76" 
            stroke={isDarkBg ? "#34D399" : "#155D49"} 
            strokeWidth="6" 
            strokeLinecap="round" 
          />
          {/* Inner Botanical Pillar */}
          <path 
            d="M 50 30 V 76" 
            stroke={isDarkBg ? "#34D399" : "#155D49"} 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          {/* Left Leaf Curve */}
          <path 
            d="M 50 54 C 36 54 30 42 30 42" 
            stroke={isDarkBg ? "#34D399" : "#155D49"} 
            strokeWidth="4.5" 
            strokeLinecap="round" 
          />
          {/* Right Leaf Curve */}
          <path 
            d="M 50 44 C 64 44 70 32 70 32" 
            stroke={isDarkBg ? "#34D399" : "#155D49"} 
            strokeWidth="4.5" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      {/* Modern Readable Typography */}
      <div className="flex flex-col justify-center">
        <span className="font-heading text-[25px] font-extrabold tracking-tight leading-none">
          <span className={isDarkBg ? "text-white" : "text-[#0D2E24]"}>Mind</span>
          <span className={isDarkBg ? "text-[#34D399]" : "text-[#155D49]"}>Haven</span>
        </span>
        <span className={`text-[10.5px] font-bold uppercase tracking-[0.18em] leading-none mt-1.5 ${
          isDarkBg ? "text-slate-300" : "text-[#155D49]"
        }`}>
          Counselling & Wellbeing
        </span>
      </div>
    </Link>
  );
}
