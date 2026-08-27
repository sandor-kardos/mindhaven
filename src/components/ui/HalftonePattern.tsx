import React from "react";

interface HalftonePatternProps {
  className?: string;
  color?: string;
  opacity?: number;
  noiseFrequency?: number;
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
}

export function HalftonePattern({
  className = "",
  color = "#34D399", // Pure Mindhaven Emerald Green
  opacity = 0.15,    // Gentle organic green aura
  noiseFrequency = 2.8,
  mixBlendMode = "normal"
}: HalftonePatternProps) {
  // SVG noise filter mapped to pure brand green
  const noiseSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${noiseFrequency}' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E`;

  return (
    <div
      className={`absolute pointer-events-none z-0 ${className}`}
      style={{
        opacity,
        mixBlendMode,
        WebkitMaskImage: "radial-gradient(closest-side, black 35%, transparent 100%)",
        maskImage: "radial-gradient(closest-side, black 35%, transparent 100%)"
      }}
    >
      <div 
        className="w-full h-full"
        style={{
          backgroundColor: color,
          WebkitMaskImage: `url("${noiseSvg}")`,
          maskImage: `url("${noiseSvg}")`,
          WebkitMaskSize: "100px 100px",
          maskSize: "100px 100px",
        }}
      />
    </div>
  );
}
