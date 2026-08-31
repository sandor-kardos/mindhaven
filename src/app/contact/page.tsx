import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, Video, ChevronDown } from "lucide-react";
import { BookingForm } from "@/components/booking/BookingForm";
import { Badge } from "@/components/ui/Badge";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447516785823";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Erika, I'd like to enquire about counselling.")}`;
const MESSENGER_URL = "https://m.me/ErikaMartinCounselling";

export const metadata: Metadata = {
  title: "Contact & Book | Mindhaven",
  description: "Get in touch with Erika Martin to book a free 20-minute initial call or send a message. Available in person in Edinburgh and Dalkeith, and online across the UK.",
  alternates: { canonical: "https://mindhaven.uk/contact" },
  openGraph: {
    title: "Contact & Book | Mindhaven",
    description: "Get in touch with Erika Martin to book a free 20-minute initial call or send a message. Available in person in Edinburgh and Dalkeith, and online across the UK.",
    url: "https://mindhaven.uk/contact",
  },
  twitter: {
    title: "Contact & Book | Mindhaven",
    description: "Get in touch with Erika Martin to book a free 20-minute initial call or send a message. Available in person in Edinburgh and Dalkeith, and online across the UK.",
  }
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24]">

      {/* Header - Compact to ensure Form header is visible above the fold */}
      <section className="relative pt-10 pb-6 sm:pt-16 sm:pb-8 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-center border-b border-[#34D399]/20 overflow-hidden">
        {/* Ambient Floating Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#34D399]/12 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl space-y-3 relative z-10">
          <Badge variant="white">
            Erika Replies Same Day
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-[#0D2E24]/85 font-medium leading-relaxed max-w-xl mx-auto">
            Choose instant messaging via WhatsApp or Messenger below, or fill in the direct contact form to send a message.
          </p>

          {/* Instant Messaging Buttons Side-by-Side (WhatsApp & Messenger) */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-3">
              {/* WhatsApp Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Erika on WhatsApp"
                className="flex items-center justify-center gap-2 p-3.5 bg-white hover:bg-[#ECFDF5] rounded-2xl border border-[#34D399]/30 hover:border-[#25D366] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-[#0D2E24] font-extrabold text-sm group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>

              {/* Messenger Button */}
              <a
                href={MESSENGER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Erika on Messenger"
                className="flex items-center justify-center gap-2 p-3.5 bg-white hover:bg-[#F0F7FF] rounded-2xl border border-[#34D399]/30 hover:border-[#0084FF] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-[#0D2E24] font-extrabold text-sm group"
              >
                <MessageCircle className="w-5 h-5 text-[#0084FF] shrink-0 group-hover:scale-110 transition-transform" />
                <span>Messenger</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Form Section (Visible Above the Fold) */}
      <section id="book" className="relative py-12 sm:py-16 px-4 bg-white border-b border-[#34D399]/15 overflow-hidden">
        {/* Ambient Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#34D399]/12 rounded-full blur-[140px] animate-aura-drift pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-8 space-y-2">
            <Badge>
              Direct Contact Form
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D2E24] font-heading">
              Send a Message to Erika
            </h2>
            <p className="text-[#0D2E24]/80 max-w-xl mx-auto text-xs sm:text-sm font-medium leading-relaxed">
              Fill in your details below to ask a question or arrange your free 20-minute initial call. Erika replies personally the same day.
            </p>
          </div>
          
          <BookingForm />
        </div>
      </section>

      {/* Other Ways & Location Info */}
      <section className="py-16 px-4 bg-[#FEFFF7]">
        <div className="container mx-auto max-w-5xl space-y-12">

          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-[#0D2E24] font-heading">Practice Locations & Alternative Contact</h3>
            <p className="text-xs text-[#0D2E24]/75 font-medium">In-person sessions in Dalkeith/Edinburgh or online across the UK.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Email */}
            <a
              href="mailto:mindhavenuk@gmail.com"
              className="p-6 bg-white rounded-2xl border border-[#34D399]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] border border-[#34D399]/20 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-[#059669]" />
                </div>
                <h4 className="font-extrabold text-base text-[#0D2E24] font-heading mb-1">Direct Email</h4>
                <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed mb-3">
                  Send an email directly to Erika at your convenience.
                </p>
              </div>
              <span className="text-xs font-bold text-[#059669] underline">mindhavenuk@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+447516785823"
              className="p-6 bg-white rounded-2xl border border-[#34D399]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] border border-[#34D399]/20 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-[#059669]" />
                </div>
                <h4 className="font-extrabold text-base text-[#0D2E24] font-heading mb-1">Phone</h4>
                <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed mb-3">
                  Call or leave a voicemail. Mon–Fri, 9am–6pm.
                </p>
              </div>
              <span className="text-xs font-bold text-[#059669] underline">+44 7516 785823</span>
            </a>

            {/* In Person Location */}
            <div className="p-6 bg-white rounded-2xl border border-[#34D399]/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] border border-[#34D399]/20 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-[#059669]" />
                </div>
                <h4 className="font-extrabold text-base text-[#0D2E24] font-heading mb-1">In Person</h4>
                <p className="text-xs text-[#0D2E24]/75 font-medium leading-relaxed mb-3">
                  Mysa Therapy Rooms, Dalkeith (Edinburgh area).
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0D2E24]/60">Dalkeith EH22</span>
            </div>

          </div>

        </div>
      </section>

      {/* Footer reassurance */}
      <section className="py-8 px-4 bg-[#FEFFF7] border-t border-[#34D399]/10">
        <div className="container mx-auto max-w-3xl text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs text-[#0D2E24]/60 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#059669]" />
            <span>All enquiries are treated with complete confidentiality</span>
          </div>
        </div>
      </section>

    </div>
  );
}
