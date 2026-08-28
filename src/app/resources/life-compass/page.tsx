import { LifeCompassClient } from "./LifeCompassClient";

export const metadata = {
  title: "Life Compass Tool | Mindhaven",
  description: "A self-reflection tool to assess how aligned your life is with your core values.",
  alternates: { canonical: "https://mindhaven.uk/resources/life-compass" },
};

export default function LifeCompassPage() {
  return (
    <div className="flex flex-col w-full bg-[#F0F8F5] text-[#0D2E24] min-h-screen">
      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-[#F0F8F5] to-[#F0F8F5] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-[#0D2E24]">
            Mindhaven Life Compass
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            A self-reflection tool to explore your core values and current alignment.
            This worksheet stays entirely on your device.
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
