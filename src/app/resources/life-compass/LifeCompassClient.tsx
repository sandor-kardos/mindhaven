"use client";

import React, { useState, useEffect, useRef } from "react";
import { Save, Trash2, Download, CheckCircle2, Info, HelpCircle } from "lucide-react";

// Radar chart geometry for 5 axes
const RADAR_SIZE = 300;
const CENTER = RADAR_SIZE / 2;
const MAX_RADIUS = 100;
const ANGLES = [0, 72, 144, 216, 288].map(deg => (deg * Math.PI) / 180);

const LABELS = ["Relationships", "Work", "Health", "Growth", "Community"];

type CompassData = {
  values: string[];
  scores: number[];
  directions: string[];
  steps: string[];
  obstacles: string;
  supports: string;
  anchor: string;
  hasSliderInteracted?: boolean;
};

const DEFAULT_DATA: CompassData = {
  values: ["", "", "", "", ""],
  scores: [5, 5, 5, 5, 5],
  directions: ["", "", "", "", ""],
  steps: ["", "", "", "", ""],
  obstacles: "",
  supports: "",
  anchor: "",
  hasSliderInteracted: false,
};

const STEP_LABELS = ["Values", "Alignment", "Intentions", "Actions", "Friction", "Anchor"];

export function LifeCompassClient() {
  const [data, setData] = useState<CompassData>(DEFAULT_DATA);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [openHelp, setOpenHelp] = useState<Record<number, boolean>>({});
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleHelp = (secNum: number) => {
    setOpenHelp(prev => ({ ...prev, [secNum]: !prev[secNum] }));
  };
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const saved = localStorage.getItem("mindhaven_life_compass_v2");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData(parsed);
      } catch (e) {}
    }
    setIsLoaded(true);
  }, []);

  // Strict non-empty section completion checks (reverts when cleared)
  const isSection1Complete = data.values.some(v => typeof v === "string" && v.trim().length > 0);
  const isSection2Complete = Boolean(data.hasSliderInteracted);
  const isSection3Complete = data.directions.some(d => typeof d === "string" && d.trim().length > 0);
  const isSection4Complete = data.steps.some(s => typeof s === "string" && s.trim().length > 0);
  const isSection5Complete = (typeof data.obstacles === "string" && data.obstacles.trim().length > 0) || (typeof data.supports === "string" && data.supports.trim().length > 0);
  const isSection6Complete = typeof data.anchor === "string" && data.anchor.trim().length > 0;

  const sectionCompletions = [
    isSection1Complete,
    isSection2Complete,
    isSection3Complete,
    isSection4Complete,
    isSection5Complete,
    isSection6Complete,
  ];

  const completedCount = sectionCompletions.filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / 6) * 100);

  const handleSave = () => {
    localStorage.setItem("mindhaven_life_compass_v2", JSON.stringify(data));
    alert("Your Life Compass reflection has been saved on this device.");
  };

  const handleClear = () => {
    if (confirm("Clear saved Life Compass data from this browser?")) {
      localStorage.removeItem("mindhaven_life_compass_v2");
      setData(DEFAULT_DATA);
    }
  };

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return;
    try {
      // @ts-ignore
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: 10,
        filename: "mindhaven-life-compass.pdf",
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm" as const, format: "a4", orientation: "portrait" as const },
      };
      html2pdf().set(opt).from(contentRef.current).save();
    } catch (e) {
      console.error("Failed to generate PDF", e);
      alert("Failed to generate PDF. Check console for details.");
    }
  };

  const scrollToSection = (index: number) => {
    setActiveStep(index + 1);
    stepRefs[index].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!isLoaded) return <div className="h-96" />;

  const updateArray = (key: keyof CompassData, index: number, val: string | number) => {
    setData(prev => {
      const arr = [...(prev[key] as any[])];
      arr[index] = val;
      return { ...prev, [key]: arr };
    });
  };

  const updateSlider = (index: number, val: number) => {
    setData(prev => {
      const arr = [...prev.scores];
      arr[index] = val;
      return { ...prev, scores: arr, hasSliderInteracted: true };
    });
  };

  // Radar chart points
  const points = data.scores.map((score, i) => {
    const r = (score / 10) * MAX_RADIUS;
    const x = CENTER + r * Math.sin(ANGLES[i]);
    const y = CENTER - r * Math.cos(ANGLES[i]);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="space-y-10">
      {/* Sticky Progress Bar & Section Navigator (Ultra Compact Bar) */}
      <div className="sticky top-20 z-30 bg-[#F4F7F6]/95 backdrop-blur-md p-2 sm:p-2.5 rounded-xl border border-[#0D2E24]/12 shadow-sm space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-extrabold text-[#0D2E24] font-heading">Progress:</span>
            <span className="text-[11px] font-bold text-[#059669]">{completedCount} / 6 Sections</span>
          </div>
          <span className="text-[10px] font-black text-[#0D2E24] bg-white px-2 py-0.5 rounded-full border border-[#34D399]/40 shadow-2xs">
            {progressPercentage}% Completed
          </span>
        </div>

        {/* Thin Emerald Progress Bar */}
        <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-[#34D399]/30">
          <div
            className="bg-[#34D399] h-full transition-all duration-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Interactive Step Navigator with Small Descriptive Labels */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 pt-0.5">
          {STEP_LABELS.map((label, idx) => {
            const stepNum = idx + 1;
            const isDone = sectionCompletions[idx];
            return (
              <button
                key={label}
                onClick={() => scrollToSection(idx)}
                className={`py-0.5 px-1 rounded-md text-[10px] sm:text-[11px] font-semibold flex items-center justify-center gap-1 transition-all border ${
                  activeStep === stepNum
                    ? "bg-[#0D2E24] text-white border-[#0D2E24] shadow-2xs"
                    : isDone
                    ? "bg-white text-[#0D2E24] border-[#34D399]/60 shadow-2xs"
                    : "bg-white/60 text-[#0D2E24]/60 border-slate-200 hover:border-[#34D399]/40"
                }`}
              >
                <span className="truncate">{label}</span>
                {isDone && <CheckCircle2 className="w-2.5 h-2.5 text-[#059669] shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* OVERLAPPING / STACKED CARDS CONTAINER */}
      <div ref={contentRef} className="relative space-y-0 pb-6">
        
        {/* CARD 1: Values */}
        <div
          ref={stepRefs[0]}
          onClick={() => setActiveStep(1)}
          className={`relative bg-white p-5 md:p-8 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-6px_22px_-4px_rgba(13,46,36,0.08)] transition-all ${
            activeStep === 1 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="px-2.5 py-0.5 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-[10px] sm:text-xs rounded-full border border-[#34D399]/40">
              Values
            </span>
            {isSection1Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h2 className="text-lg sm:text-2xl font-extrabold font-heading text-[#0D2E24] flex items-center gap-2">
              <span>1. Core Values – What matters most?</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleHelp(1);
                }}
                className="p-1 rounded-full text-[#059669] hover:bg-[#ECFDF5] transition-colors shrink-0"
                title="Toggle guidance & examples"
                aria-label="Toggle guidance & examples"
              >
                <HelpCircle className="w-5 h-5 text-[#059669]" />
              </button>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Identify 2 to 4 words or principles that represent what you value in each domain of your life.
          </p>

          {/* Interactive Guidance Box */}
          {openHelp[1] && (
            <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium transition-all">
              <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Guidance & Examples:</strong>
                <p>Relationships: <em>"mutual trust, unhurried presence, warmth"</em> | Work: <em>"autonomy, creative impact, fair compensation"</em> | Health: <em>"vitality, restful sleep, physical resilience"</em>.</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LABELS.map((label, i) => (
              <div key={label} className="bg-[#F9FBF9] p-4 rounded-2xl border border-[#34D399]/20">
                <label className="block text-sm font-bold text-[#0D2E24] mb-2">{label}</label>
                <textarea
                  className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-white text-[#0D2E24] resize-y min-h-[75px] text-sm font-medium"
                  value={data.values[i]}
                  onChange={e => updateArray("values", i, e.target.value)}
                  placeholder="e.g. mutual trust, deep connection, warmth..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* CARD 2: Current Situation (Overlapping Card - Half/Half Layout & Reduced Size Sliders) */}
        <div
          ref={stepRefs[1]}
          onClick={() => setActiveStep(2)}
          className={`relative -mt-6 sm:-mt-8 bg-white p-6 md:p-9 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-8px_25px_-5px_rgba(13,46,36,0.12)] transition-all ${
            activeStep === 2 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-xs rounded-full border border-[#34D399]/40">
              Alignment
            </span>
            {isSection2Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Assessed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Move sliders to set score</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] flex items-center gap-2">
              <span>2. Current Alignment – Where are you now?</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleHelp(2);
                }}
                className="p-1 rounded-full text-[#059669] hover:bg-[#ECFDF5] transition-colors shrink-0"
                title="Toggle guidance & scale meaning"
                aria-label="Toggle guidance & scale meaning"
              >
                <HelpCircle className="w-5 h-5 text-[#059669]" />
              </button>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0D2E24]/80 mb-4 font-medium">
            On a scale from 1 to 10, rate how closely your current daily reality reflects these values.
          </p>

          {/* Interactive Guidance Box */}
          {openHelp[2] && (
            <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium transition-all">
              <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Scale Guidance & Practical Meaning:</strong>
                <p><strong>1–3 (Low Alignment):</strong> Chronic tension or neglect.<br />
                <strong>4–6 (Moderate):</strong> Functional but routine or uninspired.<br />
                <strong>7–10 (High Alignment):</strong> Deep fulfillment and daily living in sync with values.</p>
              </div>
            </div>
          )}

          {/* Half / Half Layout for Sliders (50%) & Net Diagram (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-[#F9FBF9] p-4 sm:p-6 rounded-2xl border border-[#34D399]/20">
            {/* Left 50%: Compact Single-Row Inline Sliders */}
            <div className="space-y-2.5">
              {LABELS.map((label, i) => (
                <div key={label} className="bg-white p-2.5 sm:p-3 rounded-xl border border-[#34D399]/25 shadow-2xs flex items-center gap-3">
                  <label className="w-24 sm:w-28 text-xs sm:text-sm font-bold text-[#0D2E24] shrink-0 truncate">
                    {label}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={data.scores[i]}
                    onChange={e => updateSlider(i, parseInt(e.target.value))}
                    className="flex-1 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#34D399]"
                  />
                  <span className="text-xs font-extrabold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#34D399]/30 shrink-0 min-w-[48px] text-center">
                    {data.scores[i]} / 10
                  </span>
                </div>
              ))}
            </div>

            {/* Right 50%: Net Diagram Radar Chart (Enlarged) */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#34D399]/25 flex items-center justify-center h-full min-h-[320px] sm:min-h-[360px]">
              <svg viewBox={`0 0 ${RADAR_SIZE} ${RADAR_SIZE}`} className="w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[440px] h-auto overflow-visible">
                {[2, 4, 6, 8, 10].map(level => {
                  const r = (level / 10) * MAX_RADIUS;
                  const pts = ANGLES.map(a => `${CENTER + r * Math.sin(a)},${CENTER - r * Math.cos(a)}`).join(" ");
                  return (
                    <polygon key={level} points={pts} fill="none" stroke="#e3e7e1" strokeWidth="1" />
                  );
                })}
                {ANGLES.map((a, i) => (
                  <line key={i} x1={CENTER} y1={CENTER} x2={CENTER + MAX_RADIUS * Math.sin(a)} y2={CENTER - MAX_RADIUS * Math.cos(a)} stroke="#e3e7e1" strokeWidth="1" />
                ))}
                <polygon points={points} fill="rgba(52, 211, 153, 0.35)" stroke="#34D399" strokeWidth="3" />
                {data.scores.map((score, i) => {
                  const r = (score / 10) * MAX_RADIUS;
                  return (
                    <circle key={i} cx={CENTER + r * Math.sin(ANGLES[i])} cy={CENTER - r * Math.cos(ANGLES[i])} r="4.5" fill="#0D2E24" />
                  );
                })}
                {ANGLES.map((a, i) => {
                  const r = MAX_RADIUS + 24;
                  const x = CENTER + r * Math.sin(a);
                  const y = CENTER - r * Math.cos(a);
                  return (
                    <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[11px] font-extrabold fill-[#0D2E24]">
                      {LABELS[i]}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* CARD 3: Directions (Overlapping Card) */}
        <div
          ref={stepRefs[2]}
          onClick={() => setActiveStep(3)}
          className={`relative -mt-6 sm:-mt-8 bg-white p-6 md:p-9 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-8px_25px_-5px_rgba(13,46,36,0.12)] transition-all ${
            activeStep === 3 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-xs rounded-full border border-[#34D399]/40">
              Intentions
            </span>
            {isSection3Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] flex items-center gap-2">
              <span>3. Future Intentions – What would alignment look like?</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleHelp(3);
                }}
                className="p-1 rounded-full text-[#059669] hover:bg-[#ECFDF5] transition-colors shrink-0"
                title="Toggle guidance & examples"
                aria-label="Toggle guidance & examples"
              >
                <HelpCircle className="w-5 h-5 text-[#059669]" />
              </button>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Describe in 1 sentence for each area: "If I lived fully by my values here, my daily experience would look like..."
          </p>

          {/* Interactive Guidance Box */}
          {openHelp[3] && (
            <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium transition-all">
              <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
                <p><em>"If I lived by my values in Health, I would step away from my desk for a 20-minute walk every lunch hour and protect 8 hours of sleep."</em></p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {LABELS.map((label, i) => (
              <div key={label} className="bg-[#F9FBF9] p-4 rounded-2xl border border-[#34D399]/20">
                <label className="block text-sm font-bold text-[#0D2E24] mb-2">{label}</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-white text-[#0D2E24] text-sm font-medium"
                  value={data.directions[i]}
                  onChange={e => updateArray("directions", i, e.target.value)}
                  placeholder="e.g. I would dedicate unhurried weekend mornings to shared meals..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* CARD 4: Next Steps (Overlapping Card) */}
        <div
          ref={stepRefs[3]}
          onClick={() => setActiveStep(4)}
          className={`relative -mt-6 sm:-mt-8 bg-white p-6 md:p-9 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-8px_25px_-5px_rgba(13,46,36,0.12)] transition-all ${
            activeStep === 4 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-xs rounded-full border border-[#34D399]/40">
              Actions
            </span>
            {isSection4Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] flex items-center gap-2">
              <span>4. Practical Micro-Steps – Small, doable shifts</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleHelp(4);
                }}
                className="p-1 rounded-full text-[#059669] hover:bg-[#ECFDF5] transition-colors shrink-0"
                title="Toggle guidance & examples"
                aria-label="Toggle guidance & examples"
              >
                <HelpCircle className="w-5 h-5 text-[#059669]" />
              </button>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Commit to one realistic action for each area that takes less than 15 minutes to initiate.
          </p>

          {/* Interactive Guidance Box */}
          {openHelp[4] && (
            <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium transition-all">
              <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
                <p><em>"For Relationships: Send a message to a friend right now to confirm a catch-up coffee this Thursday."</em></p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            {LABELS.map((label, i) => (
              <div key={label} className="bg-[#F9FBF9] p-4 rounded-2xl border border-[#34D399]/20">
                <label className="block text-sm font-bold text-[#0D2E24] mb-2">{label}</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-white text-[#0D2E24] text-sm font-medium"
                  value={data.steps[i]}
                  onChange={e => updateArray("steps", i, e.target.value)}
                  placeholder="e.g. Schedule a 20-minute coffee catch-up this Thursday..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* CARD 5: Obstacles & Supports (Overlapping Card) */}
        <div
          ref={stepRefs[4]}
          onClick={() => setActiveStep(5)}
          className={`relative -mt-6 sm:-mt-8 bg-white p-6 md:p-9 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-8px_25px_-5px_rgba(13,46,36,0.12)] transition-all ${
            activeStep === 5 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-xs rounded-full border border-[#34D399]/40">
              Friction
            </span>
            {isSection5Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] flex items-center gap-2">
              <span>5. Anticipating Friction & Building Supports</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleHelp(5);
                }}
                className="p-1 rounded-full text-[#059669] hover:bg-[#ECFDF5] transition-colors shrink-0"
                title="Toggle guidance & examples"
                aria-label="Toggle guidance & examples"
              >
                <HelpCircle className="w-5 h-5 text-[#059669]" />
              </button>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Recognise potential internal or external hurdles, and name the resources or habits that will support you.
          </p>

          {/* Interactive Guidance Box */}
          {openHelp[5] && (
            <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium transition-all">
              <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
                <p>Obstacles: <em>"Evening exhaustion, tendency to say yes to extra demands."</em> | Supports: <em>"Pre-booking focus blocks in my calendar, asking my partner to hold me accountable."</em></p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F9FBF9] p-4 rounded-2xl border border-[#34D399]/20">
              <label className="block text-sm font-bold text-[#0D2E24] mb-2">Potential Obstacles & Triggers</label>
              <textarea
                className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-white text-[#0D2E24] resize-y min-h-[90px] text-sm font-medium"
                value={data.obstacles}
                onChange={e => setData({ ...data, obstacles: e.target.value })}
                placeholder="e.g. fatigue after long meetings, tendency to overcommit..."
              />
            </div>
            <div className="bg-[#F9FBF9] p-4 rounded-2xl border border-[#34D399]/20">
              <label className="block text-sm font-bold text-[#0D2E24] mb-2">Support Systems & Coping Anchors</label>
              <textarea
                className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-white text-[#0D2E24] resize-y min-h-[90px] text-sm font-medium"
                value={data.supports}
                onChange={e => setData({ ...data, supports: e.target.value })}
                placeholder="e.g. transparent communication with my partner, setting calendar blocks..."
              />
            </div>
          </div>
        </div>

        {/* CARD 6: Anchor Sentence (Overlapping Card) */}
        <div
          ref={stepRefs[5]}
          onClick={() => setActiveStep(6)}
          className={`relative -mt-6 sm:-mt-8 bg-white p-6 md:p-9 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-8px_25px_-5px_rgba(13,46,36,0.12)] transition-all ${
            activeStep === 6 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-xs rounded-full border border-[#34D399]/40">
              Anchor
            </span>
            {isSection6Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] flex items-center gap-2">
              <span>6. Personal Anchor Statement</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleHelp(6);
                }}
                className="p-1 rounded-full text-[#059669] hover:bg-[#ECFDF5] transition-colors shrink-0"
                title="Toggle guidance & examples"
                aria-label="Toggle guidance & examples"
              >
                <HelpCircle className="w-5 h-5 text-[#059669]" />
              </button>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Formulate a clear statement that grounds you when daily demands test your boundaries.
          </p>

          {/* Interactive Guidance Box */}
          {openHelp[6] && (
            <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium transition-all">
              <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
              <div>
                <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
                <p><em>"I choose intentional clarity over reactive busyness."</em></p>
              </div>
            </div>
          )}

          <div className="bg-[#F9FBF9] p-5 rounded-2xl border border-[#34D399]/20">
            <input
              type="text"
              className="w-full p-4 rounded-xl border border-[#34D399]/40 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-white text-[#0D2E24] font-extrabold text-base sm:text-lg"
              value={data.anchor}
              onChange={e => setData({ ...data, anchor: e.target.value })}
              placeholder="e.g. I choose intentional clarity over reactive busyness."
            />
          </div>
        </div>

      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap gap-4 items-center justify-center pt-2 pb-10">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0D2E24] text-white font-bold rounded-full hover:bg-[#34D399] hover:text-[#0D2E24] transition-all shadow-md hover:-translate-y-0.5"
        >
          <Save className="w-4 h-4 text-[#34D399]" /> Save Reflection
        </button>
        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-[#34D399]/30 text-[#0D2E24] font-bold rounded-full hover:bg-[#ECFDF5] transition-all shadow-md hover:-translate-y-0.5"
        >
          <Download className="w-4 h-4 text-[#34D399]" /> Download Summary PDF
        </button>
        <button
          onClick={handleClear}
          className="inline-flex items-center gap-2 px-6 py-3.5 text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" /> Clear Data
        </button>
      </div>
    </div>
  );
}
