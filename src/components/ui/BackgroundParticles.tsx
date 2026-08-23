"use client";

export function BackgroundParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(rgba(21, 93, 73, 0.18) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      {/* Light Aurora Ribbon Waves */}
      <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M -100 200 C 300 100, 600 400, 1200 200 C 1500 100, 1800 300, 2200 150" 
          fill="none" 
          stroke="url(#auroraGrad)" 
          strokeWidth="3"
          className="animate-aura-drift"
        />
        <defs>
          <linearGradient id="auroraGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#155D49" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#34D399" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#155D49" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
