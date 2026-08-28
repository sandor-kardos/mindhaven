import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Legal Notice | Mindhaven",
  description: "Statutory and regulatory information for Mindhaven, operated by Erika Martin.",
  alternates: { canonical: "https://mindhaven.uk/legal-notice" },
  openGraph: {
    title: "Legal Notice | Mindhaven",
    description: "Statutory and regulatory information for Mindhaven, operated by Erika Martin.",
    url: "https://mindhaven.uk/legal-notice",
  },
  twitter: {
    title: "Legal Notice | Mindhaven",
    description: "Statutory and regulatory information for Mindhaven, operated by Erika Martin.",
  }
};

export default function LegalNotice() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24]">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-[#0D2E24] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <Badge variant="white">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span>Legal Notice</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Legal & Regulatory Information
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Statutory information regarding the operation of Mindhaven.
          </p>
          <p className="text-sm text-[#0D2E24]/60 font-medium">Last updated: August 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-[#34D399]/20 shadow-md space-y-10 text-[#0D2E24]">

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">1. Operator Information</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Mindhaven is operated by Erika Martin, trading as a sole trader.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              <strong>Practice address:</strong> 6 Newmills Rd, Dalkeith EH22 2LE, Scotland<br />
              <strong>Email:</strong>{" "}
              <a href="mailto:mindhavenuk@gmail.com" className="text-[#0D2E24] underline underline-offset-2">mindhavenuk@gmail.com</a><br />
              <strong>Telephone:</strong>{" "}
              <a href="tel:+447516785823" className="text-[#0D2E24] underline underline-offset-2">+44 7516 785823</a>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">2. Professional Registration</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin is an Accredited Member of the National Counselling and Psychotherapy Society (NCPS), holding the designation MNCPS Acc. Her registration can be verified via the NCPS online register.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              The NCPS is an Accredited Register holder with the Professional Standards Authority for Health and Social Care (PSA), meaning that NCPS Accredited members are also listed on the PSA's accredited register. This provides an additional layer of public assurance regarding professional standards.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin is bound by the NCPS Code of Ethics and subject to the NCPS complaints procedure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">3. Professional Indemnity</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin holds professional indemnity and public liability insurance appropriate for her level of practice, as required by the NCPS.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">4. Website Content</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              The information on this website is provided for general informational purposes only. It does not constitute medical, psychiatric, or legal advice. Nothing on this website should be relied upon as a substitute for professional advice from a qualified healthcare or legal practitioner.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              While every effort is made to keep the information on this website accurate and up to date, Erika Martin makes no representations or warranties about the completeness, accuracy, or suitability of the information for any particular purpose.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">5. Complaints Procedure</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              If you have a concern about the services provided by Mindhaven, please contact Erika Martin directly in the first instance:
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              <a href="mailto:mindhavenuk@gmail.com" className="text-[#0D2E24] underline underline-offset-2">mindhavenuk@gmail.com</a>
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              If the matter is not resolved to your satisfaction, you may escalate your complaint to the National Counselling and Psychotherapy Society (NCPS) at <strong>ncps.com/complaints</strong>, or to the Professional Standards Authority (PSA) at <strong>professionalstandards.org.uk</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">6. Copyright</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              All content on this website (including text, images, and design) is the property of Erika Martin / Mindhaven and is protected by copyright. You may not reproduce or redistribute any content without prior written permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">7. Governing Law</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              This legal notice and the operation of this website are governed by the laws of Scotland and England and Wales.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
