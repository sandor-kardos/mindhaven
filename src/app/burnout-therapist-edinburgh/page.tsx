import Link from "next/link";
import { ShieldCheck, MapPin, Calendar, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Burnout Therapist Edinburgh | Stress Counselling",
  alternates: { canonical: "https://mindhaven.uk/burnout-therapist-edinburgh" },
  description: "Private counselling for stress and burnout, online and in-person in Edinburgh.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Psychotherapy & Burnout Counselling",
  provider: {
    "@type": "Psychotherapist",
    name: "Erika Martin",
    url: "https://mindhaven.uk"
  },
  areaServed: [
    { "@type": "City", name: "Edinburgh" },
    { "@type": "City", name: "Dalkeith" },
    { "@type": "AdministrativeArea", name: "Midlothian" },
    { "@type": "Country", name: "United Kingdom" }
  ],
  description: "Targeted psychotherapeutic counselling for stress, burnout, and emotional regulation in Edinburgh, Dalkeith, and Online UK."
};

export default function BurnoutTherapistEdinburgh() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-[#0D2E24] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0D2E24] border border-[#34D399]/30 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#34D399]" />
            <span>Edinburgh & Midlothian Practice</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Counselling for Stress and Burnout in Edinburgh
          </h1>
          <p className="text-lg text-[#0D2E24]/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Professional, confidential counselling for stress and burnout, available in person in Edinburgh and Dalkeith, or online across the UK.
          </p>
        </div>
      </section>

      {/* Content Section with Postcode Coverage */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">
              Support Tailored to You
            </h2>
            <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
              Life in Edinburgh can bring real pressure: a demanding career, busy family responsibilities, or simply the weight of keeping everything going. When stress and burnout take hold, rest alone often isn't enough. Counselling offers a space to understand what's happening for you and to find a more sustainable way forward.
            </p>
          </div>

          {/* Postcode Coverage Box */}
          <div className="bg-white p-8 rounded-3xl border border-[#34D399]/20 shadow-md card-flow-effect space-y-6">
            <h3 className="text-xl font-bold text-[#0D2E24] font-heading flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#34D399]" />
              <span>Location & Postcode Coverage</span>
            </h3>
            <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
              In-person sessions are held at{" "}
              <a
                href="https://mysatherapyrooms.co.uk/mysa-therapists"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D2E24] underline underline-offset-2 font-bold hover:text-[#0D2E24] transition-colors"
              >
                Mysa Therapy Rooms
              </a>
              {" "}, a professional, confidential therapy space in Dalkeith, convenient for clients across Edinburgh and Midlothian.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 rounded-full bg-[#FEFFF7] text-[#0D2E24] text-xs font-bold border border-[#34D399]/30">EH1 · City Centre</span>
              <span className="px-4 py-2 rounded-full bg-[#FEFFF7] text-[#0D2E24] text-xs font-bold border border-[#34D399]/30">EH2 · West End</span>
              <span className="px-4 py-2 rounded-full bg-[#FEFFF7] text-[#0D2E24] text-xs font-bold border border-[#34D399]/30">EH3 · New Town</span>
              <span className="px-4 py-2 rounded-full bg-[#FEFFF7] text-[#0D2E24] text-xs font-bold border border-[#34D399]/30">EH12 · Parkgrove</span>
              <span className="px-4 py-2 rounded-full bg-[#FEFFF7] text-[#0D2E24] text-xs font-bold border border-[#34D399]/30">EH22 · Dalkeith</span>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link 
              href="/contact#book"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] text-white font-bold text-base rounded-full hover:bg-[#34D399] transition-all shadow-md"
            >
              <Calendar className="w-5 h-5 text-[#34D399]" />
              <span>Book a Free Introductory Call</span>
              <ArrowRight className="w-5 h-5 text-[#34D399]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
