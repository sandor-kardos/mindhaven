import Link from "next/link";
import { MapPin, Calendar, ArrowRight, Check, Video } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const title = "Counsellor near Edinburgh | Dalkeith & Online | Mindhaven";
const description =
  "Person-centred counselling with Erika Martin, MNCPS Accredited, at Mysa Therapy Rooms in Dalkeith, near Edinburgh, and online across the UK. £60 per session.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "https://mindhaven.uk/counselling-edinburgh" },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mindhaven counselling with Erika Martin" }],
    title,
    description,
    url: "https://mindhaven.uk/counselling-edinburgh",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title,
    description,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Counselling",
  name: "Person-centred counselling in Dalkeith, Edinburgh and online",
  provider: { "@id": "https://mindhaven.uk/#therapist" },
  areaServed: [
    { "@type": "City", name: "Edinburgh" },
    { "@type": "City", name: "Dalkeith" },
    { "@type": "AdministrativeArea", name: "Midlothian" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  offers: { "@type": "Offer", price: "60", priceCurrency: "GBP" },
  description:
    "Integrative person-centred counselling for adults with anxiety, bereavement, low mood, relationship difficulties, self-esteem, stress and burnout.",
};

const topics = [
  "Anxiety and worry",
  "Bereavement and loss",
  "Low mood",
  "Relationship difficulties",
  "Self-esteem and self-doubt",
  "Stress and burnout",
];

export default function CounsellingEdinburgh() {
  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="pt-20 pb-16 px-4 bg-white text-[#0D2E24] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-4xl space-y-4">
          <Badge variant="white">
            <MapPin className="w-4 h-4 text-[#34D399]" />
            <span>Dalkeith, Edinburgh &amp; Online</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Counselling in Dalkeith and Edinburgh
          </h1>
          <p className="text-lg text-[#0D2E24]/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Confidential, person-centred counselling for adults, in person in Dalkeith or online from anywhere in the UK.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">Support at your own pace</h2>
            <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
              Whether you are living with worry, grieving someone, struggling with how you see yourself, or simply carrying too much, counselling offers a consistent, confidential space to talk without being judged. I am Erika Martin, an MNCPS Accredited integrative person-centred counsellor, and I work with adults of all ages.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topics.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[#0D2E24]/90 font-medium">
                  <Check className="w-5 h-5 text-[#34D399] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-[#34D399]/20 shadow-md card-flow-effect space-y-4">
              <h3 className="text-xl font-bold text-[#0D2E24] font-heading flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#34D399]" />
                <span>In person in Dalkeith</span>
              </h3>
              <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
                Sessions take place at{" "}
                <a
                  href="https://mysatherapyrooms.co.uk/mysa-therapists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 font-bold"
                >
                  Mysa Therapy Rooms
                </a>
                , 6a Newmills Road, Dalkeith EH22 1DU. It is a quiet, private therapy space that is easy to reach from south Edinburgh and across Midlothian.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-[#34D399]/20 shadow-md card-flow-effect space-y-4">
              <h3 className="text-xl font-bold text-[#0D2E24] font-heading flex items-center gap-2">
                <Video className="w-5 h-5 text-[#34D399]" />
                <span>Online across the UK</span>
              </h3>
              <p className="text-sm text-[#0D2E24]/85 font-medium leading-relaxed">
                Sessions by Microsoft Teams video or phone, from a private space of your choice. Online counselling works well if you live elsewhere in Edinburgh or the UK, or prefer not to travel.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[#0D2E24] font-heading">Fees</h2>
            <p className="text-[#0D2E24]/90 leading-relaxed font-medium">
              Sessions are £60 each, or £300 for six sessions paid in advance. I also work with Bupa. The first step is a free 20-minute call, with no obligation to continue. See{" "}
              <Link href="/fees-and-booking" className="underline underline-offset-2 font-bold">fees and booking</Link> for details.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact#book"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D2E24] text-white hover:bg-[#34D399] hover:text-[#0D2E24] font-bold text-base rounded-full transition-all shadow-md group"
            >
              <Calendar className="w-5 h-5 text-[#34D399] group-hover:text-[#0D2E24] transition-colors" />
              <span>Book a Free 20-Minute Initial Call</span>
              <ArrowRight className="w-5 h-5 text-[#34D399] group-hover:text-[#0D2E24] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
