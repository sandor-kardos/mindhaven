"use client";

import React, { useState, useEffect, useRef } from "react";
import { Save, Trash2, Download, Share2, CheckCircle2, RotateCcw, HelpCircle, Info } from "lucide-react";

const CATEGORIES = [
  "Career",
  "Money",
  "Health",
  "Family & Friends",
  "Romance",
  "Personal Growth",
  "Fun & Recreation",
  "Physical Environment",
];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Career": "Fulfillment, growth, aligned work, and professional balance.",
  "Money": "Financial stability, freedom, security, and sustainable income.",
  "Health": "Physical vitality, mental clarity, restful sleep, and stamina.",
  "Family & Friends": "Deep relationships, mutual trust, belonging, and connection.",
  "Romance": "Emotional intimacy, warmth, partnership, and shared values.",
  "Personal Growth": "Learning, self-awareness, spirituality, and inner peace.",
  "Fun & Recreation": "Playfulness, hobbies, rest, downtime, and joy.",
  "Physical Environment": "Home comfort, surrounding environment, space, and safety.",
};

type WheelData = Record<string, number>;

const DEFAULT_SCORES: WheelData = {
  "Career": 5,
  "Money": 5,
  "Health": 5,
  "Family & Friends": 5,
  "Romance": 5,
  "Personal Growth": 5,
  "Fun & Recreation": 5,
  "Physical Environment": 5,
};

// Wheel Geometry Constants
const SVG_SIZE = 440;
const CENTER = SVG_SIZE / 2;
const MAX_R = 155;
const NUM_CATEGORIES = 8;
const ANGLE_STEP = (2 * Math.PI) / NUM_CATEGORIES;

export function WheelOfLifeClient() {
  const [scores, setScores] = useState<WheelData>(DEFAULT_SCORES);
  const [hoveredCell, setHoveredCell] = useState<{ category: string; level: number } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [canShareNative, setCanShareNative] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mindhaven_wheel_of_life_v1");
    if (saved) {
      try {
        setScores(JSON.parse(saved));
      } catch (e) {}
    }
    setIsLoaded(true);

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanShareNative(true);
    }
  }, []);

  const handleScoreChange = (cat: string, val: number) => {
    const newScores = { ...scores, [cat]: val };
    setScores(newScores);
    localStorage.setItem("mindhaven_wheel_of_life_v1", JSON.stringify(newScores));
  };

  const handleSave = () => {
    localStorage.setItem("mindhaven_wheel_of_life_v1", JSON.stringify(scores));
    alert("Your Wheel of Life scores have been saved on this device.");
  };

  const handleReset = () => {
    if (confirm("Reset all Wheel of Life scores back to default?")) {
      setScores(DEFAULT_SCORES);
      localStorage.removeItem("mindhaven_wheel_of_life_v1");
    }
  };

  const generatePNG = async (): Promise<Blob | null> => {
    if (!cardRef.current) return null;
    try {
      // @ts-ignore
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#F4F7F6",
      });
      return new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    } catch (e) {
      console.error("Canvas export failed", e);
      return null;
    }
  };

  const handleDownloadPNG = async () => {
    const blob = await generatePNG();
    if (!blob) {
      alert("Unable to generate image download.");
      return;
    }
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mindhaven-wheel-of-life.png";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleShareNative = async () => {
    const blob = await generatePNG();
    if (!blob) return;

    const file = new File([blob], "mindhaven-wheel-of-life.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          title: "My Mindhaven Wheel of Life",
          text: "Here is my self-reflection Wheel of Life assessment.",
          files: [file],
        });
      } catch (err: any) {
        if (err.name !== "AbortError") {
          handleDownloadPNG();
        }
      }
    } else {
      handleDownloadPNG();
    }
  };

  if (!isLoaded) return <div className="h-96" />;

  // Calculate polygon points connecting outer edges of current scores (precision coordinates to prevent gaps)
  const polygonPoints = CATEGORIES.map((cat, i) => {
    const angle = i * ANGLE_STEP - Math.PI / 2;
    const score = scores[cat] || 1;
    const r = (score / 10) * MAX_R;
    const x = CENTER + r * Math.cos(angle);
    const y = CENTER + r * Math.sin(angle);
    return `${x.toFixed(4)},${y.toFixed(4)}`;
  }).join(" ");

  // Average score
  const avgScore = (
    Object.values(scores).reduce((a, b) => a + b, 0) / NUM_CATEGORIES
  ).toFixed(1);

  return (
    <div className="space-y-10">
      {/* Top Card & Control Summary with Top-Right Save Button */}
      <div className="bg-[#F4F7F6] p-4 sm:p-6 rounded-3xl border border-[#0D2E24]/12 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Interactive Assessment</span>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0D2E24] font-heading flex items-center gap-2">
                <span>Your Life Balance Overview</span>
                <button
                  type="button"
                  onClick={() => setShowHelp(!showHelp)}
                  className="p-1 rounded-full text-[#059669] hover:bg-[#ECFDF5] transition-colors shrink-0"
                  title="Toggle guidance & tips"
                  aria-label="Toggle guidance & tips"
                >
                  <HelpCircle className="w-5 h-5 text-[#059669]" />
                </button>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#0D2E24]/75 font-medium mt-0.5">
              Click or tap any ring segment inside the wheel or adjust the category scales below to reflect your current satisfaction.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-[#34D399]/40 shadow-xs">
              <span className="text-xs font-bold text-[#0D2E24]/70">Overall Balance:</span>
              <span className="text-base font-black text-[#059669]">{avgScore} / 10</span>
            </div>

            {/* Top-Right Save Button */}
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D2E24] hover:bg-[#34D399] text-white hover:text-[#0D2E24] text-xs font-extrabold rounded-2xl transition-all shadow-xs group"
            >
              <Save className="w-4 h-4 text-[#34D399] group-hover:text-[#0D2E24]" />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Interactive Guidance Drawer */}
        {showHelp && (
          <div className="p-3.5 bg-white rounded-2xl border border-[#34D399]/30 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium shadow-xs animate-fadeIn">
            <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold text-[#0D2E24] block mb-0.5">How to Rating Each Area (1 to 10):</strong>
              <p><strong>1–3:</strong> Significant imbalance or dissatisfaction requiring immediate care.<br />
              <strong>4–6:</strong> Moderate satisfaction, baseline routine, room for alignment.<br />
              <strong>7–10:</strong> Strong fulfillment, flow, and daily harmony.</p>
            </div>
          </div>
        )}
      </div>

      {/* Main Wheel Card (Export Target) */}
      <div
        ref={cardRef}
        className="bg-white p-6 sm:p-10 rounded-3xl border border-[#0D2E24]/12 shadow-lg shadow-[#0D2E24]/5 space-y-8"
      >
        <div className="text-center space-y-1 max-w-xl mx-auto">
          <h3 className="text-2xl font-extrabold font-heading text-[#0D2E24]">
            Wheel of Life Assessment
          </h3>
          <p className="text-xs sm:text-sm text-[#0D2E24]/70 font-medium">
            Mindhaven Private Counselling • Private & Client-Side Only
          </p>
        </div>

        {/* Circular SVG Wheel */}
        <div className="flex justify-center items-center overflow-x-auto py-2">
          <svg
            width={SVG_SIZE}
            height={SVG_SIZE}
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            className="overflow-visible select-none max-w-full h-auto"
          >
            {/* Background Base Concentric Circles (Levels 1 to 10) */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => {
              const r = (level / 10) * MAX_R;
              return (
                <circle
                  key={level}
                  cx={CENTER}
                  cy={CENTER}
                  r={r}
                  fill="none"
                  stroke={level === 10 ? "#34D399" : "#E2E8F0"}
                  strokeWidth={level === 10 ? "2" : "1"}
                  strokeDasharray={level === 10 ? "none" : "2,3"}
                />
              );
            })}

            {/* Radial Divider Lines for 8 Categories */}
            {CATEGORIES.map((cat, i) => {
              const angle = i * ANGLE_STEP - Math.PI / 2;
              const x2 = CENTER + MAX_R * Math.cos(angle);
              const y2 = CENTER + MAX_R * Math.sin(angle);
              return (
                <line
                  key={cat}
                  x1={CENTER}
                  y1={CENTER}
                  x2={x2}
                  y2={y2}
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Interactive Ring Arc Cells */}
            {CATEGORIES.map((cat, i) => {
              const currentScore = scores[cat] || 1;
              const centerAngle = i * ANGLE_STEP - Math.PI / 2;
              const startAngle = centerAngle - ANGLE_STEP / 2;
              const endAngle = centerAngle + ANGLE_STEP / 2;

              return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => {
                const innerR = ((level - 1) / 10) * MAX_R;
                const outerR = (level / 10) * MAX_R;

                const x1 = CENTER + innerR * Math.cos(startAngle);
                const y1 = CENTER + innerR * Math.sin(startAngle);
                const x2 = CENTER + outerR * Math.cos(startAngle);
                const y2 = CENTER + outerR * Math.sin(startAngle);
                const x3 = CENTER + outerR * Math.cos(endAngle);
                const y3 = CENTER + outerR * Math.sin(endAngle);
                const x4 = CENTER + innerR * Math.cos(endAngle);
                const y4 = CENTER + innerR * Math.sin(endAngle);

                const d = `
                  M ${x1.toFixed(3)} ${y1.toFixed(3)}
                  L ${x2.toFixed(3)} ${y2.toFixed(3)}
                  A ${outerR.toFixed(3)} ${outerR.toFixed(3)} 0 0 1 ${x3.toFixed(3)} ${y3.toFixed(3)}
                  L ${x4.toFixed(3)} ${y4.toFixed(3)}
                  A ${innerR.toFixed(3)} ${innerR.toFixed(3)} 0 0 0 ${x1.toFixed(3)} ${y1.toFixed(3)}
                  Z
                `;

                const isFilled = level <= currentScore;
                const isExactHovered = hoveredCell?.category === cat && hoveredCell?.level === level;
                const isPreviewHovered = hoveredCell?.category === cat && level <= hoveredCell.level;

                let fillColor = "transparent";
                let strokeColor = isFilled ? "rgba(52, 211, 153, 0.6)" : "#E2E8F0";
                let strokeWidth = "0.5";

                if (isExactHovered) {
                  fillColor = "#26433A"; // Distinct Pine Teal fill for hovered segment
                  strokeColor = "#34D399"; // Bright Emerald border outline
                  strokeWidth = "1.5";
                } else if (isFilled) {
                  fillColor = "rgba(52, 211, 153, 0.45)";
                } else if (isPreviewHovered) {
                  fillColor = "rgba(52, 211, 153, 0.25)";
                }

                return (
                  <path
                    key={`${cat}-${level}`}
                    d={d}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    className="transition-colors duration-150 cursor-pointer"
                    onClick={() => handleScoreChange(cat, level)}
                    onMouseEnter={() => setHoveredCell({ category: cat, level })}
                    onMouseLeave={() => setHoveredCell(null)}
                  >
                    <title>{`${cat}: Level ${level}`}</title>
                  </path>
                );
              });
            })}

            {/* Outer Category Labels & Score Badges */}
            {CATEGORIES.map((cat, i) => {
              const angle = i * ANGLE_STEP - Math.PI / 2;
              const labelR = MAX_R + 32;
              const lx = CENTER + labelR * Math.cos(angle);
              const ly = CENTER + labelR * Math.sin(angle);

              let textAnchor: "middle" | "start" | "end" = "middle";
              if (Math.cos(angle) > 0.3) textAnchor = "start";
              if (Math.cos(angle) < -0.3) textAnchor = "end";

              return (
                <g key={`label-${cat}`}>
                  <text
                    x={lx}
                    y={ly}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    className="text-[11px] font-extrabold fill-[#0D2E24]"
                  >
                    {cat} ({scores[cat]})
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Category Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#34D399]/20">
          {CATEGORIES.map(cat => (
            <div
              key={cat}
              className="p-4 rounded-2xl bg-[#F9FBF9] border border-[#34D399]/20 flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-[#0D2E24] font-heading">{cat}</h4>
                  <p className="text-[11px] text-[#0D2E24]/70 font-medium">
                    {CATEGORY_DESCRIPTIONS[cat]}
                  </p>
                </div>
                <span className="text-xs font-black text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-md border border-[#34D399]/40 shrink-0 ml-2">
                  {scores[cat]} / 10
                </span>
              </div>

              {/* Range Slider for Mobile / Quick Tapping */}
              <input
                type="range"
                min="1"
                max="10"
                value={scores[cat]}
                onChange={e => handleScoreChange(cat, parseInt(e.target.value))}
                className="w-full accent-[#34D399] cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Bar (Download & Native Mobile Share) */}
      <div className="flex flex-wrap gap-4 items-center justify-center pt-2 pb-10">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D2E24] text-white font-bold rounded-full hover:bg-[#34D399] hover:text-[#0D2E24] transition-all shadow-md hover:-translate-y-0.5"
        >
          <Save className="w-4 h-4 text-[#34D399]" /> Save Assessment
        </button>

        <button
          onClick={handleDownloadPNG}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-[#34D399]/40 text-[#0D2E24] font-bold rounded-full hover:bg-[#ECFDF5] transition-all shadow-md hover:-translate-y-0.5"
        >
          <Download className="w-4 h-4 text-[#059669]" /> Download PNG Image
        </button>

        {canShareNative && (
          <button
            onClick={handleShareNative}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#34D399] text-[#0D2E24] font-extrabold rounded-full hover:bg-white transition-all shadow-md hover:-translate-y-0.5 border border-[#34D399]/50"
          >
            <Share2 className="w-4 h-4 text-[#0D2E24]" /> Share Wheel Image
          </button>
        )}

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-slate-600 font-bold rounded-full hover:bg-slate-100 transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Reset Wheel
        </button>
      </div>
    </div>
  );
}
