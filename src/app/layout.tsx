import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mindhaven | Personal Counselling with Erika Martin",
  alternates: { canonical: "https://mindhaven.uk" },
  verification: { google: "bD4QVDRsDfdhBFZ_owsWlvQOi96pAGKi-ue-Dou4D0g" },
  description: "Personal counselling with Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor based in Edinburgh and Dalkeith, supporting adults with stress, anxiety, and burnout across the UK.",

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
      priceRange: "£80 - £85",
      image: "https://mindhaven.uk/assets/erika-martin.jpg",
      description: "Accredited Psychotherapeutic Counsellor specializing in stress, burnout, and personal growth in Edinburgh, Dalkeith, and Online UK.",
      sameAs: [
        "https://www.search-ncps.com/search/FindaTherapist/NCS16-03808",
        "https://www.facebook.com/ErikaMartinCounselling",
        "https://www.linkedin.com/in/erika-martin-counselling"
      ],
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
        streetAddress: "6 Newmills Rd",
        addressLocality: "Dalkeith",
        addressRegion: "Midlothian",
        postalCode: "EH22 2LE",
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
      name: "Mindhaven",
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFD5W94G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TFD5W94G');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Global Ambient Background Animation */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[#155D49] mix-blend-multiply filter blur-[100px] sm:blur-[140px] opacity-[0.03] animate-aura-drift" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#34D399] mix-blend-multiply filter blur-[100px] sm:blur-[140px] opacity-[0.03] animate-aura-drift" style={{ animationDelay: '-12s' }} />
        </div>

        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
