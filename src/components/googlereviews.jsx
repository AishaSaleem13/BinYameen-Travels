"use client";

import { Globe, Backpack, Map, Flower2 } from "lucide-react";

const flags = [
  { code: "pt", label: "Portugal" },
  { code: "nz", label: "New Zealand" },
  { code: "mv", label: "Maldives" },
  { code: "my", label: "Malaysia" },
  { code: "jp", label: "Japan" },
  { code: "ie", label: "Ireland" },
];

// Duplicate the list so the strip can loop seamlessly.
const marqueeFlags = [...flags, ...flags];

const features = [
  {
    icon: Globe,
    title: "Tour & Travel",
    description:
      "Affordable flights, hassle-free visas, and complete holiday packages all in one place.",
  },
  {
    icon: Backpack,
    title: "Adventure",
    description:
      "From Hunza treks to Thailand island tours, we design trips full of thrill and discovery.",
  },
  {
    icon: Map,
    title: "Group Travel",
    description:
      "Special discounts for families, student groups, and corporate teams travel together, save more.",
  },
  {
    icon: Flower2,
    title: "Local Experiences",
    description:
      "Authentic cultural tours, handpicked hotels, and local guides to give you real memories.",
  },
];

export default function ServicesFeatures() {
  return (
    <section className="w-full bg-white">
      {/* Auto-scrolling flag carousel */}
      <div className="border-t border-slate-200 py-10">
        <div className="group relative mx-auto max-w-6xl overflow-hidden px-6 md:px-12 lg:px-20">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-flag-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
            {marqueeFlags.map((flag, index) => (
              <img
                key={`${flag.code}-${index}`}
                src={`https://flagcdn.com/w80/${flag.code}.png`}
                alt={flag.label}
                title={flag.label}
                className="h-8 w-auto shrink-0 rounded-sm shadow-sm"
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes flag-marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-flag-marquee {
            animation: flag-marquee 18s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-flag-marquee {
              animation: none;
            }
          }
        `}</style>
      </div>

      {/* Features */}
      <div className="bg-indigo-50/60 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center px-4 text-center ${
                  index !== 0 ? "lg:border-l lg:border-slate-200" : ""
                }`}
              >
                <Icon className="mb-4 h-8 w-8 text-blue-500" strokeWidth={1.5} />
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}