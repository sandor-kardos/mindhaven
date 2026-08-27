import { ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & GDPR | Mindhaven",
  description: "How Mindhaven collects, uses, and protects your personal data. UK GDPR compliant.",
};

export default function PrivacyAndGDPR() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24]">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-[#0D2E24] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0D2E24] border border-[#34D399]/30 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4 text-[#34D399]" />
            <span>UK GDPR Compliant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Privacy Policy
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            How Mindhaven collects, uses, and protects your personal data.
          </p>
          <p className="text-sm text-[#0D2E24]/60 font-medium">Last updated: August 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-[#34D399]/20 shadow-md space-y-10 text-[#0D2E24]">

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">1. Who We Are</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin is the sole Data Controller for Mindhaven, operating as a sole trader from 6 Newmills Rd, Dalkeith EH22 2LE. You can contact her with any data-related query at{" "}
              <a href="mailto:mindhavenuk@gmail.com" className="text-[#0D2E24] underline underline-offset-2">mindhavenuk@gmail.com</a> or by calling{" "}
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
              <li><strong>Booking information:</strong> preferred session times, how you heard about Mindhaven, and any brief description of what you are seeking support with</li>
              <li><strong>Special category (health) data:</strong> session notes, information about your mental and physical health, and relevant personal history, collected only as part of the counselling relationship</li>
              <li><strong>Technical data:</strong> anonymised website analytics (if applicable)</li>
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
              <li><strong>Special category health data</strong> is processed under Article 9(2)(h) of the UK GDPR (the provision of health or social care) and with your explicit consent where required</li>
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
              Clinical records (session notes and related documents) are retained for a minimum of seven years following the end of the therapeutic relationship, in line with NCPS guidance. For clients who were minors, records are retained until seven years after their 18th birthday. After this period, records are securely and permanently destroyed.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Enquiry and booking data from people who do not proceed to sessions is deleted within twelve months.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">6. Data Storage & Security</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              All data is stored on encrypted, password-protected platforms. Online sessions are conducted via secure, end-to-end encrypted video software. We do not use any platforms or tools that are not UK GDPR-compliant.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">7. Third-Party Processors</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              We use a small number of third-party services to operate this website and manage communications. These providers are only given access to personal data where strictly necessary and are contractually required to process data in line with UK GDPR. This includes:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-2 list-disc pl-5">
              <li><strong>Email delivery provider:</strong> used to receive booking enquiries from this website</li>
              <li><strong>Secure video platform:</strong> used to conduct online sessions</li>
            </ul>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              We do not sell or share your personal data with any third party for marketing purposes.
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
              <a href="mailto:mindhavenuk@gmail.com" className="text-[#0D2E24] underline underline-offset-2">mindhavenuk@gmail.com</a>. We will respond within one month.
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
              <a href="mailto:mindhavenuk@gmail.com" className="text-[#0D2E24] underline underline-offset-2">mindhavenuk@gmail.com</a>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">10. Cookies & Analytics</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              This website uses cookies only with your explicit consent, which is requested via a banner on your first visit. You may accept or decline analytics cookies at any time; declining does not affect your use of the site.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              If you accept, we use <strong>Google Analytics</strong> (delivered via Google Tag Manager) to understand how visitors use this website  pages visited, session duration, and device type. No personal identifiers are collected. Data is processed by Google in accordance with their privacy policy and is used solely to improve this site; it is never shared for advertising or marketing purposes.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Your cookie preference is stored as a first-party cookie on your device for up to 12 months. You can withdraw consent at any time by clearing your browser cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">11. Changes to This Policy</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              This policy may be updated from time to time. The date of the most recent revision is shown at the top of this page. Continued use of this website after any changes constitutes acceptance of the updated policy.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
