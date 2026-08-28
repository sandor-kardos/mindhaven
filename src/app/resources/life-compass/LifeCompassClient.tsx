"use client";

import React, { useState, useEffect, useRef } from "react";
import { Save, Trash2, Download } from "lucide-react";

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
};

const DEFAULT_DATA: CompassData = {
  values: ["", "", "", "", ""],
  scores: [5, 5, 5, 5, 5],
  directions: ["", "", "", "", ""],
  steps: ["", "", "", "", ""],
  obstacles: "",
  supports: "",
  anchor: "",
};

export function LifeCompassClient() {
  const [data, setData] = useState<CompassData>(DEFAULT_DATA);
  const [isLoaded, setIsLoaded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mindhaven_life_compass_v2");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {}
    }
    setIsLoaded(true);
  }, []);

  const handleSave = () => {
    localStorage.setItem("mindhaven_life_compass_v2", JSON.stringify(data));
    alert("Your Life Compass has been saved on this device.");
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

  if (!isLoaded) return <div className="h-96" />;

  const updateArray = (key: keyof CompassData, index: number, val: string | number) => {
    setData(prev => {
      const arr = [...(prev[key] as any[])];
      arr[index] = val;
      return { ...prev, [key]: arr };
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
    <div className="space-y-8">
      <div ref={contentRef} className="space-y-8 p-4 bg-[#F0F8F5]">
        {/* Step 1 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#34D399]/30 shadow-lg shadow-[#0D2E24]/5">
          <h2 className="text-2xl font-bold font-heading text-[#0D2E24] mb-2">1. Values – What truly matters to you?</h2>
          <p className="text-sm text-[#0D2E24]/75 mb-6">Write 3–5 keywords for each area.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LABELS.map((label, i) => (
              <div key={label}>
                <label className="block text-sm font-bold text-[#0D2E24] mb-2">{label}</label>
                <textarea
                  className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-[#FEFFF7] text-[#0D2E24] resize-y min-h-[80px]"
                  value={data.values[i]}
                  onChange={e => updateArray("values", i, e.target.value)}
                  placeholder="e.g. growth, stability, creativity..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Slider & Chart */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#34D399]/30 shadow-lg shadow-[#0D2E24]/5">
          <h2 className="text-2xl font-bold font-heading text-[#0D2E24] mb-2">2. Current situation – Where are you now?</h2>
          <p className="text-sm text-[#0D2E24]/75 mb-6">On a scale from 1–10, how much does your life reflect these values right now?</p>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <div className="flex-1 w-full space-y-6">
              {LABELS.map((label, i) => (
                <div key={label}>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-bold text-[#0D2E24]">{label}</label>
                    <span className="text-sm font-bold text-[#34D399]">{data.scores[i]} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={data.scores[i]}
                    onChange={e => updateArray("scores", i, parseInt(e.target.value))}
                    className="w-full accent-[#34D399]"
                  />
                </div>
              ))}
            </div>

            <div className="w-[300px] h-[300px] relative flex-shrink-0">
              <svg width={RADAR_SIZE} height={RADAR_SIZE} className="overflow-visible">
                {/* Background Web */}
                {[2, 4, 6, 8, 10].map(level => {
                  const r = (level / 10) * MAX_RADIUS;
                  const pts = ANGLES.map(a => `${CENTER + r * Math.sin(a)},${CENTER - r * Math.cos(a)}`).join(" ");
                  return (
                    <polygon key={level} points={pts} fill="none" stroke="#e3e7e1" strokeWidth="1" />
                  );
                })}
                {/* Axes */}
                {ANGLES.map((a, i) => (
                  <line key={i} x1={CENTER} y1={CENTER} x2={CENTER + MAX_RADIUS * Math.sin(a)} y2={CENTER - MAX_RADIUS * Math.cos(a)} stroke="#e3e7e1" strokeWidth="1" />
                ))}
                
                {/* Data Polygon */}
                <polygon points={points} fill="rgba(52, 211, 153, 0.3)" stroke="#34D399" strokeWidth="3" />
                
                {/* Data Points */}
                {data.scores.map((score, i) => {
                  const r = (score / 10) * MAX_RADIUS;
                  return (
                    <circle key={i} cx={CENTER + r * Math.sin(ANGLES[i])} cy={CENTER - r * Math.cos(ANGLES[i])} r="4" fill="#0D2E24" />
                  );
                })}
                
                {/* Labels */}
                {ANGLES.map((a, i) => {
                  const r = MAX_RADIUS + 25;
                  const x = CENTER + r * Math.sin(a);
                  const y = CENTER - r * Math.cos(a);
                  return (
                    <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className="text-xs font-bold fill-[#0D2E24]">
                      {LABELS[i]}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#34D399]/30 shadow-lg shadow-[#0D2E24]/5">
          <h2 className="text-2xl font-bold font-heading text-[#0D2E24] mb-2">3. Directions – If you lived by your values…</h2>
          <p className="text-sm text-[#0D2E24]/75 mb-6">One sentence for each area: “If I lived more by my values here, my life would look like…”</p>
          <div className="space-y-4">
            {LABELS.map((label, i) => (
              <div key={label}>
                <label className="block text-sm font-bold text-[#0D2E24] mb-2">{label}</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-[#FEFFF7] text-[#0D2E24]"
                  value={data.directions[i]}
                  onChange={e => updateArray("directions", i, e.target.value)}
                  placeholder="e.g. I would spend more intentional time..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#34D399]/30 shadow-lg shadow-[#0D2E24]/5">
          <h2 className="text-2xl font-bold font-heading text-[#0D2E24] mb-2">4. Next steps – Small, realistic actions</h2>
          <p className="text-sm text-[#0D2E24]/75 mb-6">Choose one small, doable step for each area.</p>
          <div className="space-y-4">
            {LABELS.map((label, i) => (
              <div key={label}>
                <label className="block text-sm font-bold text-[#0D2E24] mb-2">{label}</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-[#FEFFF7] text-[#0D2E24]"
                  value={data.steps[i]}
                  onChange={e => updateArray("steps", i, e.target.value)}
                  placeholder="e.g. One honest conversation this week..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#34D399]/30 shadow-lg shadow-[#0D2E24]/5">
          <h2 className="text-2xl font-bold font-heading text-[#0D2E24] mb-2">5. Possible obstacles & supports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-bold text-[#0D2E24] mb-2">Obstacles</label>
              <textarea
                className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-[#FEFFF7] text-[#0D2E24] resize-y min-h-[100px]"
                value={data.obstacles}
                onChange={e => setData({ ...data, obstacles: e.target.value })}
                placeholder="e.g. fatigue, self-doubt, busy schedule..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#0D2E24] mb-2">Supports / coping strategies</label>
              <textarea
                className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-[#FEFFF7] text-[#0D2E24] resize-y min-h-[100px]"
                value={data.supports}
                onChange={e => setData({ ...data, supports: e.target.value })}
                placeholder="e.g. asking for support, planning smaller steps..."
              />
            </div>
          </div>
        </div>

        {/* Step 6 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#34D399]/30 shadow-lg shadow-[#0D2E24]/5">
          <h2 className="text-2xl font-bold font-heading text-[#0D2E24] mb-2">6. Anchor sentence</h2>
          <p className="text-sm text-[#0D2E24]/75 mb-6">Write one short sentence that reminds you why this matters.</p>
          <input
            type="text"
            className="w-full p-3 rounded-xl border border-[#34D399]/30 focus:outline-none focus:ring-2 focus:ring-[#34D399] bg-[#FEFFF7] text-[#0D2E24] font-semibold"
            value={data.anchor}
            onChange={e => setData({ ...data, anchor: e.target.value })}
            placeholder="e.g. I am doing this because living by my values matters more than staying stuck."
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center pt-4 pb-8">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D2E24] text-white font-bold rounded-full hover:bg-[#34D399] transition-colors shadow-md"
        >
          <Save className="w-4 h-4" /> Save to Device
        </button>
        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#34D399]/30 text-[#0D2E24] font-bold rounded-full hover:bg-[#FEFFF7] transition-colors shadow-md"
        >
          <Download className="w-4 h-4" /> Download PDF
        </button>
        <button
          onClick={handleClear}
          className="inline-flex items-center gap-2 px-6 py-3 text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" /> Clear Data
        </button>
      </div>
    </div>
  );
}
