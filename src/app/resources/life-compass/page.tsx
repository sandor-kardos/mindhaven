import { Metadata } from "next";
import { LifeCompassClient } from "./LifeCompassClient";

export const metadata: Metadata = {
  title: "Life Compass Interactive Self-Reflection Tool | Mindhaven",
  description: "Assess alignment across key life areas with our interactive Life Compass. Private, client-side self-reflection by MNCPS counsellor Erika Martin.",
  alternates: { canonical: "https://mindhaven.uk/resources/life-compass" },
  openGraph: {
    title: "Life Compass Interactive Self-Reflection Tool | Mindhaven",
    description: "Assess alignment across key life areas with our interactive Life Compass. Private, client-side self-reflection by MNCPS counsellor Erika Martin.",
    url: "https://mindhaven.uk/resources/life-compass",
    siteName: "Mindhaven Counselling",
    images: [{ url: "https://mindhaven.uk/images/tools/compass-preview.png", width: 1200, height: 630, alt: "Mindhaven Life Compass" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Compass Interactive Self-Reflection Tool | Mindhaven",
    description: "Assess alignment across key life areas with our interactive Life Compass.",
    images: ["https://mindhaven.uk/images/tools/compass-preview.png"],
  },
};

export default function LifeCompassPage() {
  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24] min-h-screen">
      <section className="py-6 sm:py-10 md:py-16 px-4 bg-[#0D2E24] text-white text-center border-b border-[#34D399]/30">
        <div className="container mx-auto max-w-3xl space-y-2 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white">
            Life Compass
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-slate-200 font-medium max-w-2xl mx-auto [text-wrap:balance]">
            Reflect on core values &amp; alignment across key life areas. 100% private &amp; client-side.
          </p>
        </div>
      </section>
      
      <section className="py-4 sm:py-8 md:py-12 px-2 sm:px-4">
        <div className="container mx-auto max-w-5xl">
          <LifeCompassClient />
        </div>
      </section>
    </div>
  );
}
