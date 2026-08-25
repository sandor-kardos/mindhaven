"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first question

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-[#155D49]/40 shadow-md"
                : "bg-white/80 hover:bg-white border-[#155D49]/20 shadow-xs"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className="font-extrabold text-base sm:text-lg text-[#0D2E24] font-heading leading-snug">
                {faq.question}
              </h3>
              <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                isOpen ? "bg-[#155D49] text-white rotate-180" : "bg-[#E6F2ED] text-[#155D49]"
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-[#0D2E24]/85 font-medium leading-relaxed border-t border-[#155D49]/10 mt-1">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
