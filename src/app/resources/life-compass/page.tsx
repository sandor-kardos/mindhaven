import { Metadata } from "next";
import { LifeCompassClient } from "./LifeCompassClient";

export const metadata: Metadata = {
  title: "Life Compass Interactive Self-Reflection Tool | Mindhaven",
  description: "Assess alignment across key life areas with our interactive Life Compass tool. Private, client-side self-reflection by MNCPS counsellor Erika Martin.",
  alternates: { canonical: "https://mindhaven.uk/resources/life-compass" },
  openGraph: {
    title: "Life Compass Interactive Self-Reflection Tool | Mindhaven",
    description: "Assess alignment across key life areas with our interactive Life Compass tool. Private, client-side self-reflection by MNCPS counsellor Erika Martin.",
    url: "https://mindhaven.uk/resources/life-compass",
    siteName: "Mindhaven Counselling",
    images: [{ url: "https://mindhaven.uk/images/og-image.png", width: 1200, height: 630, alt: "Mindhaven Life Compass Tool" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Compass Interactive Self-Reflection Tool | Mindhaven",
    description: "Assess alignment across key life areas with our interactive Life Compass tool.",
    images: ["https://mindhaven.uk/images/og-image.png"],
  },
};

export default function LifeCompassPage() {
  return (
    <div className="flex flex-col w-full bg-[#F4F7F6] text-[#0D2E24] min-h-screen">
      <section className="pt-20 pb-12 px-4 bg-[#0D2E24] text-white text-center border-b border-[#34D399]/30">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white">
            Mindhaven Life Compass
          </h1>
          <p className="text-lg text-slate-200 font-medium max-w-2xl mx-auto [text-wrap:balance]">
            A private self-reflection tool to explore your core values and current alignment.
            This interactive worksheet runs entirely on your device with no data stored.
          </p>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <LifeCompassClient />
        </div>
      </section>
    </div>
  );
}
