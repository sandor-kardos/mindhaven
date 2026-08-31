import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Terms of Service | Mindhaven",
  description: "Practice agreement, cancellation policy, and session terms for Mindhaven counselling.",
  alternates: {
    canonical: "https://mindhaven.uk/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Mindhaven",
    description: "Practice agreement, cancellation policy, and session terms for Mindhaven counselling.",
    url: "https://mindhaven.uk/terms-of-service",
  },
  twitter: {
    title: "Terms of Service | Mindhaven",
    description: "Practice agreement, cancellation policy, and session terms for Mindhaven counselling.",
  }
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24]">
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-[#0D2E24] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <Badge variant="white">
            <ShieldCheck className="w-4 h-4 text-[#34D399]" />
            <span>Practice Agreement</span>
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Terms of Service & Practice Agreement
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium max-w-2xl mx-auto">
            Please read these terms carefully. They form part of the agreement between you and Mindhaven when you engage counselling services.
          </p>
          <p className="text-sm text-[#0D2E24]/60 font-medium">Last updated: August 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl border border-[#34D399]/20 shadow-md space-y-10 text-[#0D2E24]">

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">1. The Counselling Relationship</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Mindhaven provides individual counselling delivered by Erika Martin, MNCPS Accredited Psychotherapeutic Counsellor. Counselling is a collaborative process: it is not a medical treatment or crisis intervention service. The therapeutic relationship is professional in nature and is bounded by the NCPS Code of Ethics.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Counselling at Mindhaven is suitable for adults (18+) experiencing stress, anxiety, burnout, relationship difficulties, or life challenges. It is not a substitute for emergency medical or psychiatric care.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">2. Sessions</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Standard sessions are 50 minutes in duration. The initial session is 60 minutes to allow time for a fuller exploration of your situation and to agree how to work together. Sessions are available in person in Edinburgh and Dalkeith, or online via secure video. Session frequency and overall duration are open-ended, agreed collaboratively, and reviewed regularly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">3. Fees & Payment</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Current fees are £60 per 50-minute individual session (pay as you go). A committed loyalty discount package is available: 6 sessions paid in advance for £300 total (saving £60, the cost of one session, compared to paying £60 individually per session). This discount applies exclusively when the 6 sessions are paid upfront as a package. Fees are subject to review and any changes will be communicated with at least four weeks' notice.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Payment is due before or at the time of each session. For the committed loyalty discount package, full payment of £300 is required upfront in advance.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Mindhaven does not currently process payment online through this website. Payment details will be provided directly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">4. Cancellation & Rescheduling</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              At least 48 hours' notice is required to cancel or reschedule a session. Sessions cancelled or rescheduled with less than 48 hours' notice will be charged at the full session rate, unless there are exceptional circumstances.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              If Erika Martin needs to cancel a session, you will be offered an alternative appointment at the earliest convenient time, and no charge will be made for the cancelled session.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">5. Confidentiality & Its Limits</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              All sessions are strictly confidential. What you share in counselling will not be disclosed to any third party without your explicit consent, except in the following circumstances:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-2 list-disc pl-5">
              <li>Where there is a serious and immediate risk of harm to yourself or others</li>
              <li>Where a child or vulnerable adult may be at risk (safeguarding duty)</li>
              <li>Where disclosure is required by law or a court order</li>
            </ul>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Where it is safe and appropriate to do so, any proposed disclosure will be discussed with you beforehand. Erika Martin receives regular professional supervision; this is conducted using anonymised case material only.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">6. Between Sessions</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin is not available for therapeutic support between sessions. Contact between sessions is limited to administrative matters such as booking or cancelling appointments.
            </p>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Mindhaven is not an emergency or crisis service. If you are in immediate distress or danger, please contact:
            </p>
            <ul className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium space-y-1 list-disc pl-5">
              <li><strong>Emergency services:</strong> 999</li>
              <li><strong>NHS 24 (Scotland):</strong> 111</li>
              <li><strong>Samaritans:</strong> 116 123 (free, 24/7)</li>
              <li><strong>Breathing Space (Scotland):</strong> 0800 83 85 87</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">7. Professional Boundaries</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              The therapeutic relationship is a professional one. Erika Martin will not enter into any personal, social, or business relationship with clients outside of the counselling context, in line with the NCPS Code of Ethics. Requests for connections on personal social media platforms will not be accepted.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">8. Ending Counselling</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Either party may end the counselling relationship at any time. Where possible, it is encouraged to discuss ending in advance so that the process can be concluded thoughtfully. If ending is sudden, Erika Martin will aim to offer a final session or written summary where appropriate. Fees for sessions already attended remain payable.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">9. Ethical Framework</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              Erika Martin practises in accordance with the Code of Ethics of the National Counselling and Psychotherapy Society (NCPS) and is registered with the Professional Standards Authority (PSA). A copy of the NCPS Code of Ethics is available at <strong>ncps.com</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">10. Complaints</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              If you have a concern or complaint about the service you have received, please contact Erika Martin in the first instance at{" "}
              <a href="mailto:mindhavenuk@gmail.com" className="text-[#0D2E24] underline underline-offset-2">mindhavenuk@gmail.com</a>. If you are not satisfied with the outcome, you may refer your complaint to the NCPS, whose contact details are available at <strong>ncps.com/complaints</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-heading text-[#0D2E24]">11. Governing Law</h2>
            <p className="text-sm leading-relaxed text-[#0D2E24]/85 font-medium">
              These terms are governed by the laws of Scotland and England and Wales, and any disputes will be subject to the jurisdiction of the courts of Scotland.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
