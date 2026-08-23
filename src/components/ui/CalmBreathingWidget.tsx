"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

export function CalmBreathingWidget() {
  const [phase, setPhase] = useState<"Inhale" | "Hold" | "Exhale">("Inhale");
  const [displaySeconds, setDisplaySeconds] = useState(4);
  const [progress, setProgress] = useState(1);
  const [scale, setScale] = useState(1);

  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const INHALE_MS = 4000;
    const HOLD_MS = 7000;
    const EXHALE_MS = 8000;
    const TOTAL_CYCLE_MS = INHALE_MS + HOLD_MS + EXHALE_MS; // 19,000ms

    const startTime = performance.now();

    const loop = (now: number) => {
      const elapsed = (now - startTime) % TOTAL_CYCLE_MS;

      if (elapsed < INHALE_MS) {
        setPhase("Inhale");
        const phaseElapsed = elapsed;
        const phaseRemaining = INHALE_MS - phaseElapsed;
        const ratio = phaseElapsed / INHALE_MS; // 0 -> 1
        
        setDisplaySeconds(Math.max(1, Math.ceil(phaseRemaining / 1000)));
        setProgress(1 - ratio);
        // Smooth expansion during Inhale
        setScale(1 + ratio * 0.08);

      } else if (elapsed < INHALE_MS + HOLD_MS) {
        setPhase("Hold");
        const phaseElapsed = elapsed - INHALE_MS;
        const phaseRemaining = HOLD_MS - phaseElapsed;
        const ratio = phaseElapsed / HOLD_MS; // 0 -> 1

        setDisplaySeconds(Math.max(1, Math.ceil(phaseRemaining / 1000)));
        setProgress(1 - ratio);
        // Gentle micro-pulse during Hold
        setScale(1.08 + Math.sin(ratio * Math.PI * 2) * 0.015);

      } else {
        setPhase("Exhale");
        const phaseElapsed = elapsed - (INHALE_MS + HOLD_MS);
        const phaseRemaining = EXHALE_MS - phaseElapsed;
        const ratio = phaseElapsed / EXHALE_MS; // 0 -> 1

        setDisplaySeconds(Math.max(1, Math.ceil(phaseRemaining / 1000)));
        setProgress(1 - ratio);
        // Smooth contraction during Exhale
        setScale(1.08 - ratio * 0.08);
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Circular progress calculations (radius = 50, circumference ≈ 314.16)
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="bg-[#E6F2ED] border border-[#155D49]/30 rounded-3xl p-6 shadow-lg text-center space-y-4 relative overflow-hidden card-flow-glow">
      
      {/* Header Pill */}
      <div className="flex items-center justify-center gap-2 text-[#155D49] font-bold text-xs uppercase tracking-wider font-heading">
        <Sparkles className="w-4 h-4 text-[#155D49]" />
        <span>Nervous System Pacer</span>
      </div>
      
      {/* Center Circle Container with Fluent Scale & Continuous Ring */}
      <div 
        className="relative w-36 h-36 mx-auto flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        
        {/* Background Ambient Pulsing Aura */}
        <div className="absolute inset-2 rounded-full border border-[#155D49]/20 animate-calm-ring pointer-events-none" />

        {/* SVG Time Progress Ring */}
        <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_8px_rgba(21,93,73,0.25)]" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="pacerRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#155D49" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>

          {/* Base Track */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            className="stroke-[#155D49]/15"
            strokeWidth="3"
            fill="none"
          />
          {/* Fluent Animated Ring */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#pacerRingGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Center Digital Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-3xl font-extrabold text-[#0D2E24] font-heading tracking-tight">
            {displaySeconds}s
          </span>
          <span className="text-xs font-bold text-[#155D49] uppercase tracking-wider mt-0.5 font-heading">
            {phase}
          </span>
        </div>

      </div>

      {/* Subtitle */}
      <div className="text-xs text-[#0D2E24]/85 font-semibold leading-relaxed max-w-xs mx-auto">
        4-7-8 Parasympathetic Regulation Rhythm
      </div>

    </div>
  );
}
