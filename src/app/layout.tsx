import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MindHaven Executive Therapy | Edinburgh & Online UK",
  description: "Evidence-informed psychotherapeutic support for high-performing executives, business owners, and corporate leaders navigating burnout, chronic workplace stress, and decision fatigue.",
  icons: {
    icon: "/images/mindhaven-logo.png",
    shortcut: "/images/mindhaven-logo.png",
    apple: "/images/mindhaven-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Psychotherapist",
      "@id": "https://mindhaven.uk/#therapist",
      name: "Erika Martin",
      url: "https://mindhaven.uk",
      telephone: "+447516785823",
      email: "mindhavenuk@gmail.com",
      priceRange: "£95 - £130",
      image: "https://mindhaven.uk/assets/erika-martin.jpg",
      description: "Accredited Psychotherapeutic Counsellor specializing in executive burnout, professional stress, and nervous system regulation in Edinburgh, Dalkeith, and Online UK.",
      memberOf: {
        "@type": "Organization",
        name: "National Counselling and Psychotherapy Society",
        alternateName: "NCPS",
        url: "https://ncps.org.uk"
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "MNCPS Accredited Member",
        recognizedBy: {
          "@type": "Organization",
          name: "Professional Standards Authority",
          alternateName: "PSA"
        }
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mysa Therapy Rooms, 6A Newmills Road",
        addressLocality: "Dalkeith",
        addressRegion: "Midlothian",
        postalCode: "EH22 1DU",
        addressCountry: "GB"
      },
      areaServed: [
        { "@type": "City", name: "Edinburgh" },
        { "@type": "City", name: "Dalkeith" },
        { "@type": "AdministrativeArea", name: "Midlothian" },
        { "@type": "Country", name: "United Kingdom" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mindhaven.uk/#website",
      url: "https://mindhaven.uk",
      name: "MindHaven Executive Therapy",
      publisher: {
        "@id": "https://mindhaven.uk/#therapist"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased bg-[#F8FAF8] text-[#0D2E24]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
