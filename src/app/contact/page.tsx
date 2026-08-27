import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, Video, ExternalLink, ArrowRight } from "lucide-react";
import { BookingForm } from "@/components/booking/BookingForm";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "447516785823";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Erika, I'd like to enquire about a free introductory call.")}`;

export const metadata: Metadata = {
  title: "Contact & Book | Mindhaven",
  alternates: { canonical: "https://mindhaven.uk/contact" },
  description: "Get in touch with Erika Martin to book a free 15-minute introductory call or ask a question. Available in person in Edinburgh and Dalkeith, and online across the UK.",
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-[#FEFFF7] text-[#0D2E24]">

      {/* Header */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-[#FEFFF7] to-[#FEFFF7] text-center border-b border-[#34D399]/20">
        <div className="container mx-auto max-w-3xl space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D2E24] bg-white border border-[#34D399]/30">
            No Obligation
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D2E24] font-heading">
            Start the Conversation
          </h1>
          <p className="text-lg text-[#0D2E24]/85 font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you have a question or you are ready to book a free introductory call, get in touch in whichever way feels easiest.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* WhatsApp Card */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Erika on WhatsApp"
              className="group flex flex-col p-8 bg-white rounded-3xl border border-[#34D399]/20 shadow-md hover:shadow-xl hover:border-[#34D399]/40 transition-all hover:-translate-y-1 card-flow-effect"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FEFFF7] border border-[#34D399]/20 flex items-center justify-center mb-5 group-hover:bg-[#34D399]/15 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#34D399]" />
              </div>
              <h2 className="text-lg font-extrabold text-[#0D2E24] font-heading mb-2">WhatsApp</h2>
              <p className="text-sm text-[#0D2E24]/75 font-medium leading-relaxed mb-4 flex-1">
                Send a message for a quick, informal first conversation. No pressure, no forms.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#0D2E24]/60 font-medium mb-4">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Usually replies within a few hours</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2E24] group-hover:gap-3 transition-all">
                Message Me
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            {/* Email Card */}
            <a
              href="mailto:mindhavenuk@gmail.com"
              className="group flex flex-col p-8 bg-white rounded-3xl border border-[#34D399]/20 shadow-md hover:shadow-xl hover:border-[#34D399]/40 transition-all hover:-translate-y-1 card-flow-effect"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FEFFF7] border border-[#34D399]/20 flex items-center justify-center mb-5 group-hover:bg-[#34D399]/15 transition-colors">
                <Mail className="w-6 h-6 text-[#34D399]" />
              </div>
              <h2 className="text-lg font-extrabold text-[#0D2E24] font-heading mb-2">Email</h2>
              <p className="text-sm text-[#0D2E24]/75 font-medium leading-relaxed mb-4 flex-1">
                Prefer to write? Send a message at a time that suits you.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#0D2E24]/60 font-medium mb-4">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Response within 1 working day</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2E24] group-hover:gap-3 transition-all">
                mindhavenuk@gmail.com
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+447516785823"
              className="group flex flex-col p-8 bg-white rounded-3xl border border-[#34D399]/20 shadow-md hover:shadow-xl hover:border-[#34D399]/40 transition-all hover:-translate-y-1 card-flow-effect"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FEFFF7] border border-[#34D399]/20 flex items-center justify-center mb-5 group-hover:bg-[#34D399]/15 transition-colors">
                <Phone className="w-6 h-6 text-[#34D399]" />
              </div>
              <h2 className="text-lg font-extrabold text-[#0D2E24] font-heading mb-2">Phone</h2>
              <p className="text-sm text-[#0D2E24]/75 font-medium leading-relaxed mb-4 flex-1">
                Prefer to speak? Call or leave a message and Erika will call back.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#0D2E24]/60 font-medium mb-4">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Monday to Friday, 9am to 6pm</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2E24] group-hover:gap-3 transition-all">
                +44 7516 785823
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* In-person */}
            <div className="p-8 bg-white rounded-3xl border border-[#34D399]/20 shadow-md card-flow-effect space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#34D399]" />
                </div>
                <h2 className="text-lg font-extrabold text-[#0D2E24] font-heading">In Person</h2>
              </div>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Sessions take place at{" "}
                <a
                  href="https://mysatherapyrooms.co.uk/mysa-therapists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0D2E24] font-bold underline underline-offset-2 hover:text-[#0D2E24] transition-colors"
                >
                  Mysa Therapy Rooms
                </a>
                {" "}in Dalkeith, convenient for clients across Edinburgh and Midlothian.
              </p>
              <p className="text-xs text-[#0D2E24]/60 font-medium">Dalkeith EH22 · Edinburgh area</p>
            </div>

            {/* Online */}
            <div className="p-8 bg-white rounded-3xl border border-[#34D399]/20 shadow-md card-flow-effect space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEFFF7] flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-[#34D399]" />
                </div>
                <h2 className="text-lg font-extrabold text-[#0D2E24] font-heading">Online Across the UK</h2>
              </div>
              <p className="text-sm text-[#0D2E24]/80 font-medium leading-relaxed">
                Secure, encrypted video sessions available to adults anywhere in the UK. Engage in therapy from the comfort and privacy of your own space.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#0D2E24] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>End-to-end encrypted</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book" className="py-20 px-4 bg-white border-t border-[#34D399]/15">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D2E24] bg-[#FEFFF7] border border-[#34D399]/30">
              Free · 15 Minutes · No Commitment
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D2E24] font-heading">Book a Free Introductory Call</h2>
            <p className="text-[#0D2E24]/80 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
              A free, informal call to talk about what has brought you here and whether working together feels right. No obligation to proceed.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Footer nudge */}
      <section className="py-12 px-4 bg-[#FEFFF7]/50 border-t border-[#34D399]/10">
        <div className="container mx-auto max-w-3xl text-center space-y-3">
          <p className="text-sm text-[#0D2E24]/75 font-medium leading-relaxed">
            Not ready to book yet? That is completely fine. You are welcome to read about{" "}
            <Link href="/about-erika-martin" className="text-[#0D2E24] font-bold underline underline-offset-2 hover:text-[#0D2E24] transition-colors">
              Erika's approach
            </Link>
            {" "}or browse{" "}
            <Link href="/blog" className="text-[#0D2E24] font-bold underline underline-offset-2 hover:text-[#0D2E24] transition-colors">
              the articles
            </Link>
            {" "}first.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-[#0D2E24]/50 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
            <span>All enquiries are treated with complete confidentiality</span>
          </div>
        </div>
      </section>

    </div>
  );
}
