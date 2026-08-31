"use client";

import React, { useState, useEffect, useRef } from "react";
import { Save, Trash2, Download, CheckCircle2, Info } from "lucide-react";

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

export function LifeCompassClient() {
  const [data, setData] = useState<CompassData>(DEFAULT_DATA);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(1);
  const contentRef = useRef<HTMLDivElement>(null);
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
      {/* Sticky Progress Bar & Section Navigator (Crisp Mint-Grey Background) */}
      <div className="sticky top-20 z-30 bg-[#F4F7F6]/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#0D2E24]/12 shadow-lg shadow-[#0D2E24]/5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Self-Reflection Progress</span>
            <h3 className="text-base font-extrabold text-[#0D2E24] font-heading">
              {completedCount} of 6 Sections Explored
            </h3>
          </div>
          <span className="text-sm font-black text-[#0D2E24] bg-white px-3.5 py-1.5 rounded-full border border-[#34D399]/40 shadow-xs self-start sm:self-auto">
            {progressPercentage}% Completed
          </span>
        </div>

        {/* Smooth Emerald Progress Bar */}
        <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-[#34D399]/30">
          <div
            className="bg-[#34D399] h-full transition-all duration-500 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-6 gap-1.5 pt-1">
          {[1, 2, 3, 4, 5, 6].map((stepNum, idx) => {
            const isDone = sectionCompletions[idx];
            return (
              <button
                key={stepNum}
                onClick={() => scrollToSection(idx)}
                className={`py-1.5 px-1 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1 transition-all border ${
                  activeStep === stepNum
                    ? "bg-[#0D2E24] text-white border-[#0D2E24] shadow-xs"
                    : isDone
                    ? "bg-white text-[#0D2E24] border-[#34D399]/60 shadow-2xs"
                    : "bg-white/60 text-[#0D2E24]/50 border-slate-200 hover:border-[#34D399]/40"
                }`}
              >
                <span>Step {stepNum}</span>
                {isDone && <CheckCircle2 className="w-3 h-3 text-[#059669] shrink-0 hidden sm:inline" />}
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
          className={`relative bg-white p-6 md:p-9 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-6px_22px_-4px_rgba(13,46,36,0.08)] transition-all ${
            activeStep === 1 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-xs rounded-full border border-[#34D399]/40">
              Step 01
            </span>
            {isSection1Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] mb-2">
            1. Core Values – What matters most?
          </h2>
          <p className="text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Identify 2 to 4 words or principles that represent what you value in each domain of your life.
          </p>

          {/* Concrete Example Box (Item 8 Guidance) */}
          <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium">
            <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Guidance & Examples:</strong>
              <p>Relationships: <em>"mutual trust, unhurried presence, warmth"</em> | Work: <em>"autonomy, creative impact, fair compensation"</em> | Health: <em>"vitality, restful sleep, physical resilience"</em>.</p>
            </div>
          </div>

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

        {/* CARD 2: Current Situation (Overlapping Card) */}
        <div
          ref={stepRefs[1]}
          onClick={() => setActiveStep(2)}
          className={`relative -mt-6 sm:-mt-8 bg-white p-6 md:p-9 rounded-3xl border border-[#0D2E24]/12 shadow-[0_-8px_25px_-5px_rgba(13,46,36,0.12)] transition-all ${
            activeStep === 2 ? "ring-2 ring-[#34D399] z-20" : "z-10"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-[#ECFDF5] text-[#0D2E24] font-extrabold text-xs rounded-full border border-[#34D399]/40">
              Step 02
            </span>
            {isSection2Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Assessed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Move sliders to set score</span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] mb-2">
            2. Current Alignment – Where are you now?
          </h2>
          <p className="text-sm text-[#0D2E24]/80 mb-4 font-medium">
            On a scale from 1 to 10, rate how closely your current daily reality reflects these values.
          </p>

          {/* Concrete Example Box (Item 8 Guidance for Sliders) */}
          <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium">
            <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Scale Guidance & Practical Meaning:</strong>
              <p><strong>1–3 (Low Alignment):</strong> Chronic tension or neglect (e.g. severe Health neglect, skipped meals, burnout).<br />
              <strong>4–6 (Moderate):</strong> Functional but routine or uninspired.<br />
              <strong>7–10 (High Alignment):</strong> Deep fulfillment, flow, and daily living in sync with your values.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start bg-[#F9FBF9] p-6 rounded-2xl border border-[#34D399]/20">
            <div className="flex-1 w-full space-y-5">
              {LABELS.map((label, i) => (
                <div key={label} className="bg-white p-3.5 rounded-xl border border-[#34D399]/25 shadow-xs">
                  <div className="flex justify-between mb-1.5">
                    <label className="text-sm font-bold text-[#0D2E24]">{label}</label>
                    <span className="text-sm font-extrabold text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-md border border-[#34D399]/30">
                      {data.scores[i]} / 10
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={data.scores[i]}
                    onChange={e => updateSlider(i, parseInt(e.target.value))}
                    className="w-full accent-[#34D399] cursor-pointer"
                  />
                </div>
              ))}
            </div>

            <div className="w-[300px] h-[300px] relative flex-shrink-0 bg-white p-4 rounded-2xl border border-[#34D399]/25 flex items-center justify-center">
              <svg width={RADAR_SIZE} height={RADAR_SIZE} className="overflow-visible">
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
              Step 03
            </span>
            {isSection3Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] mb-2">
            3. Future Intentions – What would alignment look like?
          </h2>
          <p className="text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Describe in 1 sentence for each area: "If I lived fully by my values here, my daily experience would look like..."
          </p>

          {/* Concrete Example Box (Item 8 Guidance) */}
          <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium">
            <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
              <p><em>"If I lived by my values in Health, I would step away from my desk for a 20-minute walk every lunch hour and protect 8 hours of sleep."</em></p>
            </div>
          </div>

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
              Step 04
            </span>
            {isSection4Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] mb-2">
            4. Practical Micro-Steps – Small, doable shifts
          </h2>
          <p className="text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Commit to one realistic action for each area that takes less than 15 minutes to initiate.
          </p>

          {/* Concrete Example Box (Item 8 Guidance) */}
          <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium">
            <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
              <p><em>"For Relationships: Send a message to a friend right now to confirm a catch-up coffee this Thursday."</em></p>
            </div>
          </div>

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
              Step 05
            </span>
            {isSection5Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] mb-2">
            5. Anticipating Friction & Building Supports
          </h2>
          <p className="text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Recognise potential internal or external hurdles, and name the resources or habits that will support you.
          </p>

          {/* Concrete Example Box (Item 8 Guidance) */}
          <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium">
            <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
              <p>Obstacles: <em>"Evening exhaustion, tendency to say yes to extra demands."</em> | Supports: <em>"Pre-booking focus blocks in my calendar, asking my partner to hold me accountable."</em></p>
            </div>
          </div>

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
              Step 06
            </span>
            {isSection6Complete ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#059669]">
                <CheckCircle2 className="w-4 h-4 text-[#34D399]" /> Completed
              </span>
            ) : (
              <span className="text-xs font-semibold text-slate-400">Incomplete</span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0D2E24] mb-2">
            6. Personal Anchor Statement
          </h2>
          <p className="text-sm text-[#0D2E24]/80 mb-4 font-medium">
            Formulate a clear statement that grounds you when daily demands test your boundaries.
          </p>

          {/* Concrete Example Box (Item 8 Guidance) */}
          <div className="mb-6 p-3.5 bg-[#F0F5F2] rounded-2xl border border-[#34D399]/25 flex items-start gap-2.5 text-xs text-[#0D2E24]/85 leading-relaxed font-medium">
            <Info className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
            <div>
              <strong className="font-extrabold text-[#0D2E24] block mb-0.5">Concrete Example:</strong>
              <p><em>"I choose intentional clarity over reactive busyness."</em></p>
            </div>
          </div>

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
