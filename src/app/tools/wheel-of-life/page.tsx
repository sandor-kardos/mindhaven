import { Metadata } from "next";
import { WheelOfLifeClient } from "./WheelOfLifeClient";

export const metadata: Metadata = {
  title: "Wheel of Life Interactive Self-Assessment Tool | Mindhaven",
  description: "Assess alignment across 8 key life categories with our interactive Wheel of Life tool. Private, client-side self-reflection by MNCPS counsellor Erika Martin.",
  alternates: { canonical: "https://mindhaven.uk/tools/wheel-of-life" },
  openGraph: {
    title: "Wheel of Life Interactive Self-Assessment Tool | Mindhaven",
    description: "Assess alignment across 8 key life categories with our interactive Wheel of Life tool. Private, client-side self-reflection by MNCPS counsellor Erika Martin.",
    url: "https://mindhaven.uk/tools/wheel-of-life",
    siteName: "Mindhaven Counselling",
    images: [{ url: "https://mindhaven.uk/images/tools/wheel-preview.png", width: 1200, height: 630, alt: "Mindhaven Wheel of Life Tool" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheel of Life Interactive Self-Assessment Tool | Mindhaven",
    description: "Assess alignment across 8 key life categories with our interactive Wheel of Life tool.",
    images: ["https://mindhaven.uk/images/tools/wheel-preview.png"],
  },
};

export default function WheelOfLifePage() {
  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24] min-h-screen">
      <section className="py-6 sm:py-10 md:py-16 px-4 bg-[#0D2E24] text-white text-center border-b border-[#34D399]/30">
        <div className="container mx-auto max-w-3xl space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            Wheel of Life Assessment
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-slate-200 font-medium max-w-2xl mx-auto [text-wrap:balance]">
            Assess your balance across 8 essential life domains. 100% private &amp; client-side.
          </p>
        </div>
      </section>

      <section className="py-4 sm:py-8 md:py-12 px-2 sm:px-4">
        <div className="container mx-auto max-w-5xl">
          <WheelOfLifeClient />
        </div>
      </section>
    </div>
  );
}
