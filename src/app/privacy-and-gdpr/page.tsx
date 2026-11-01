import Link from "next/link";
import { ShieldCheck, Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Privacy Policy & GDPR | Mindhaven",
  description: "How Mindhaven collects, uses, and protects your personal data. UK GDPR compliant.",
  alternates: {
    canonical: "https://mindhaven.uk/privacy-and-gdpr",
  },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mindhaven counselling with Erika Martin" }],
    title: "Privacy Policy & GDPR | Mindhaven",
    description: "How Mindhaven collects, uses, and protects your personal data. UK GDPR compliant.",
    url: "https://mindhaven.uk/privacy-and-gdpr",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "Privacy Policy & GDPR | Mindhaven",
    description: "How Mindhaven collects, uses, and protects your personal data. UK GDPR compliant.",
  }
};

export default function PrivacyAndGDPR() {
  return (
    <div className="flex flex-col w-full bg-white text-[#0D2E24]">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-white to-white text-[#0D2E24] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <Badge variant="white">
            <Lock className="w-4 h-4 text-[#34D399]" />
            <span>UK GDPR Compliant</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            How Mindhaven collects, uses, and protects your personal data.
          </p>
          <p className="text-sm text-[#0D2E24]/60 font-medium">Last updated: November 2026</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-[#34D399]/20 shadow-md space-y-10 text-[#0D2E24]">

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">1. Who We Are</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin is the sole Data Controller for Mindhaven and works as a sole trader. In-person sessions take place at Mysa Therapy Rooms, 6a Newmills Rd, Dalkeith EH22 1DU. You can contact her with any data-related query at{" "}
              <Link href="/contact#book" className="text-[#0D2E24] underline underline-offset-2">the contact form</Link> or by calling{" "}
              <a href="tel:+447516785823" className="text-[#0D2E24] underline underline-offset-2">+44 7516 785823</a>.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              All personal data is processed in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">2. What Personal Data We Collect</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Depending on how you engage with Mindhaven, we may collect:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-2 list-disc pl-5">
              <li><strong>Contact details:</strong> name, email address, phone number</li>
              <li><strong>Enquiry information:</strong> your preferred contact method, the main area you would like support with (selected on the contact form), and anything you choose to write in your message</li>
              <li><strong>Insurer referral details:</strong> if you are referred by a health insurer such as Bupa, the referral information they share with Erika</li>
              <li><strong>Special category (health) data:</strong> session notes, information about your mental and physical health, and relevant personal history, collected only as part of the counselling relationship</li>
              <li><strong>Technical data:</strong> website usage data, as described in section 10</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">3. Legal Basis for Processing</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              We process your data on the following legal grounds:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-2 list-disc pl-5">
              <li><strong>Contract:</strong> to deliver the counselling sessions you have booked and to manage your appointment</li>
              <li><strong>Legitimate interests:</strong> to respond to enquiries and to maintain accurate practice records</li>
              <li><strong>Legal obligation:</strong> where we are required by law to retain or share information (e.g. a court order or safeguarding duty)</li>
              <li><strong>Special category health data</strong> is processed under Article 9(2)(h) of the UK GDPR (the provision of health or social care). Information you choose to share through the contact form, such as the area you want support with, is processed with your explicit consent, which you give by submitting the form</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">4. Confidentiality</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Everything discussed in sessions is held in strict confidence. Session notes and personal information are not shared with any third party without your explicit consent, except in the following limited circumstances:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-2 list-disc pl-5">
              <li>Where there is a serious and immediate risk of harm to yourself or others</li>
              <li>Where disclosure is required by a court of law</li>
              <li>Where child protection or safeguarding concerns arise</li>
              <li>For professional supervision (all supervision is conducted with anonymised case material)</li>
            </ul>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Where possible, we will discuss any proposed disclosure with you beforehand.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">5. Data Retention</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Clinical records (session notes and related documents) are retained for a minimum of seven years following the end of the therapeutic relationship, in line with NCPS guidance. After this period, records are securely and permanently destroyed.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Enquiry and booking data from people who do not proceed to sessions is deleted within twelve months.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">6. Data Storage & Security</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              All data is stored on encrypted, password-protected platforms. Online sessions take place over Microsoft Teams, which encrypts calls in transit, or by phone. Erika only uses services that offer appropriate safeguards under UK GDPR.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">7. Third-Party Processors</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              We use a small number of third-party services to operate this website and manage communications. These providers are only given access to personal data where strictly necessary and are contractually required to process data in line with UK GDPR. This includes:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-2 list-disc pl-5">
              <li><strong>Resend:</strong> email delivery, used to forward contact form enquiries to Erika</li>
              <li><strong>Microsoft Teams:</strong> video platform used for online sessions</li>
              <li><strong>Website hosting and security:</strong> a UK-based virtual server and Cloudflare, which protects the site and handles web traffic</li>
              <li><strong>Google Analytics and Google Tag Manager:</strong> website analytics, only if you accept cookies</li>
            </ul>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Some of these providers may process data outside the UK. Where they do, they rely on recognised safeguards such as the UK International Data Transfer Agreement or adequacy regulations. We do not sell or share your personal data with any third party for marketing purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">8. Your Rights Under UK GDPR</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              You have the following rights in relation to your personal data:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-2 list-disc pl-5">
              <li><strong>Right of access:</strong> to request a copy of the personal data held about you</li>
              <li><strong>Right to rectification:</strong> to ask us to correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure:</strong> to request deletion of your data, subject to legal and professional obligations to retain records</li>
              <li><strong>Right to restriction:</strong> to ask us to limit how we use your data in certain circumstances</li>
              <li><strong>Right to data portability:</strong> to receive your data in a structured, commonly used format</li>
              <li><strong>Right to object:</strong> to object to processing based on legitimate interests</li>
              <li><strong>Right to withdraw consent:</strong> where processing is based on consent, you may withdraw it at any time</li>
            </ul>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              To exercise any of these rights, please contact Erika Martin at{" "}
              <Link href="/contact#book" className="text-[#0D2E24] underline underline-offset-2">the contact form</Link> or by phone on <a href="tel:+447516785823" className="text-[#0D2E24] underline underline-offset-2">+44 7516 785823</a>. We will respond within one month.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">9. Complaints</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              If you are dissatisfied with how your personal data has been handled, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection regulator.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              ICO website: <strong>ico.org.uk</strong> &nbsp;|&nbsp; Helpline: <strong>0303 123 1113</strong>
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              We would, however, always welcome the chance to resolve any concern directly. Please contact us first at{" "}
              <Link href="/contact#book" className="text-[#0D2E24] underline underline-offset-2">the contact form</Link>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">10. Cookies & Analytics</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              This website uses cookies only with your explicit consent, which is requested via a banner on your first visit. You may accept or decline analytics cookies at any time; declining does not affect your use of the site.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              If you accept, we use <strong>Google Analytics</strong> (delivered via Google Tag Manager) to understand how visitors use this website: pages visited, session duration, and device type. Google Analytics uses cookies with pseudonymous identifiers; we do not use it to identify you, and IP addresses are not stored in Google Analytics. Data is processed by Google in accordance with their privacy policy and is used solely to improve this site; it is never shared for advertising or marketing purposes.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              We also use <strong>Umami</strong>, a privacy-friendly analytics tool hosted on our own server. Umami sets no cookies, stores nothing on your device, and does not collect IP addresses or any information that identifies you. It records only anonymous, aggregated figures such as page views, referring websites, and device type, so it runs without needing your consent. This data is never shared with third parties.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Your cookie preference is stored as a first-party cookie on your device for up to 12 months. You can withdraw consent at any time by clearing your browser cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">11. Changes to This Policy</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              This policy may be updated from time to time. The date of the most recent revision is shown at the top of this page. If a change significantly affects how your data is used, clients will be told directly.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
