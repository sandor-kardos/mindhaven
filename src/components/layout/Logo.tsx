import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDarkBg = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group ${className}`}>
      {/* Official MindHaven Image Icon - 20% Bigger */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          width="44" 
          height="44" 
          fill={isDarkBg ? "#34D399" : "#155D49"}
          className="transition-transform group-hover:scale-105"
        >
          <path d="M 22 25 L 38 25 C 42 35, 46 42, 50 42 C 54 42, 58 35, 62 25 L 78 25 L 78 75 L 63 75 L 63 56 C 59 50, 54 46, 50 46 C 46 46, 41 50, 37 56 L 37 75 L 22 75 Z" />
        </svg>
      </div>

      {/* Refined Executive Typography */}
      <div className="flex flex-col justify-center">
        <span className="font-heading text-[26px] font-extrabold tracking-tight leading-none">
          <span className={isDarkBg ? "text-white" : "text-[#0D2E24]"}>Mind</span>
          <span className={isDarkBg ? "text-[#34D399]" : "text-[#155D49]"}>Haven</span>
        </span>
        <span className={`text-[10.5px] font-bold uppercase tracking-[0.2em] leading-none mt-1.5 ${
          isDarkBg ? "text-slate-300" : "text-[#155D49]/90"
        }`}>
          Personal Growth and Emotional Well-being
        </span>
      </div>
    </Link>
  );
}
