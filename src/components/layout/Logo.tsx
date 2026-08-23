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
        <Image 
          src="/images/mindhaven-logo.png" 
          alt="MindHaven Logo" 
          width={44} 
          height={44} 
          priority
          className={`w-[44px] h-[44px] object-contain transition-transform group-hover:scale-105 ${
            isDarkBg 
              ? "filter saturate-[1.6] brightness-[1.05]" 
              : "filter brightness-[0.4] contrast-[1.3] saturate-[1.8] hue-rotate-[10deg]"
          }`}
        />
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
          Executive Therapy
        </span>
      </div>
    </Link>
  );
}
