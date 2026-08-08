"use client";

import { useState } from "react";

const faqs = [

  {
    q: "What Is Included In The Umrah 2026 Package?",
    a: "Our Umrah 2026 packages include a fully processed Umrah visa, return economy airfare, hotel accommodation in Makkah and Madinah (3–5 star depending on package), all airport and city transfers, a guided Ziyarat programme, and an experienced Islamic guide.",
  },
  {
    q: "How Quickly Can The Umrah 2026 Visa Be Processed?",
    a: "Umrah 2026 visas are typically processed within 5–7 working days once your documents are complete. We recommend submitting your application at least 3 weeks before your intended travel date.",
  },
  {
    q: "When Is The Best Time To Perform Umrah In 2026?",
    a: "Umrah can be performed year-round, but the cooler months (November through February) are the most comfortable for travel. Ramadan remains the most spiritually significant — and most crowded — time to go.",
  },
  {
    q: "Can Women Perform Umrah 2026 Without A Mahram?",
    a: "Yes. Following Saudi Arabia's updated policies, women of all ages may now perform Umrah 2026 without a mahram, provided they travel as part of an organised group through a licensed operator.",
  },
  {
    q: "Are There Family Discounts On Umrah 2026 Packages?",
    a: "Yes. We offer family group discounts for groups of 3 or more. Children under 2 travel free (no seat), and children aged 2–11 receive a reduced fare. Group discounts apply for parties of 10 or more pilgrims.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-[#FDF9F2] py-24 px-6 md:px-10 font-jost overflow-hidden">
      {/* faint decorative arch outlines in the background */}
      <svg
        className="pointer-events-none absolute -left-24 -top-10 h-[420px] w-[420px] opacity-[0.04]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M20 200 V90 A80 80 0 0 1 180 90 V200"
          stroke="#4a181b"
          strokeWidth="10"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[380px_1fr] gap-16">

        {/* LEFT — sticky intro panel */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B08D57]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a6d3b]">
              FAQ
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-[46px] leading-[1.15] text-[#1f1210]">
            Things you need to{" "}
            <span className="italic text-[#4a181b]">know</span> about Umrah 2026
          </h2>

          <p className="mt-5 text-sm text-[#6b5a45] leading-relaxed max-w-sm">
            Everything pilgrims ask us before booking visas, timing, family
            discounts, and what's actually included. Can't find your answer?
          </p>

          {/* decorative arch card with CTA */}
          <div className="relative mt-8 rounded-t-full overflow-hidden bg-[#4a181b] text-[#FDF9F2] px-8 pt-10 pb-8 max-w-[280px]">
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="100" r="48" stroke="#E4C98A" strokeWidth="1" fill="none" />
                <circle cx="50" cy="100" r="36" stroke="#E4C98A" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <p className="relative font-serif italic text-lg leading-snug">
              "Still unsure about your journey?"
            </p>
            <a
              href="/contact"
              className="relative mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#E4C98A] border-b border-[#E4C98A] pb-1"
            >
              Talk to our team →
            </a>
          </div>
        </div>

        {/* RIGHT — accordion list */}
        <div className="flex flex-col">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border-b border-[#E8DDC8] py-6 transition-colors duration-300 ${
                  isOpen ? "bg-[#FBF3E2]/60 -mx-6 px-6 rounded-xl" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between gap-6 text-left group"
                >
                  <div className="flex gap-5">
                    <span
                      className={`font-serif text-2xl leading-none transition-colors duration-300 ${
                        isOpen ? "text-[#4a181b]" : "text-[#D9C6A3]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-medium text-base md:text-lg pt-0.5 transition-colors duration-300 ${
                        isOpen ? "text-[#1f1210]" : "text-[#3a2a20] group-hover:text-[#4a181b]"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>

                  <span
                    className={`shrink-0 mt-1 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#4a181b] border-[#4a181b] text-[#E4C98A] rotate-180"
                        : "border-[#D9C6A3] text-[#4a181b]"
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 4L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 pl-[52px] pr-10 text-sm text-[#6b5a45] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
