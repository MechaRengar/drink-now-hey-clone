"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "how much protein is in each can?",
    answer:
      "each 330ml can of nowhey contains 20g of pure, highly bioavailable pea protein peptides, with only 86 calories and 0g sugar.",
  },
  {
    question: "is nowhey vegan and dairy-free?",
    answer:
      "yes, 100%! nowhey is made with clean plant-based pea protein peptides, making it completely dairy-free, lactose-free, and ideal for vegan and dairy-sensitive diets.",
  },
  {
    question: "how does nowhey taste compared to traditional protein shakes?",
    answer:
      "nowhey is completely clear and drinks like fruit squash or refreshing iced tea. there is zero milkiness, no chalky residue, and no unpleasant shaker bottle odor.",
  },
  {
    question: "how does the 19% regular refill subscription work?",
    answer:
      "you save 19% on every delivery. you can choose delivery every 2, 3, or 4 weeks. there are no contracts or cancellation fees — you can pause, skip a delivery, change flavours, or cancel at any time.",
  },
  {
    question: "how fast is UK delivery?",
    answer:
      "orders placed before 1:00pm GMT are dispatched same or next working day. all orders over £40 qualify for free tracked delivery (2-3 working days).",
  },
  {
    question: "how should nowhey be stored?",
    answer:
      "nowhey is shelf-stable at room temperature, but is best enjoyed ice-cold straight from the fridge!",
  },
];

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#121212] text-white border-t border-white/10" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight lowercase text-center mb-12">
          faq
        </h2>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left text-base sm:text-lg font-bold lowercase tracking-tight hover:text-[#c6f91f] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="p-1 rounded-full text-zinc-400">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
