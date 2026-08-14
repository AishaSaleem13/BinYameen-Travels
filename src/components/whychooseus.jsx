"use client";

import {
  Globe2,
  Backpack,
  Map,
  Flower2,
} from "lucide-react";

const features = [
  {
    title: "Tour & Travel",
    description:
      "Affordable flights, hassle-free visas, and complete holiday packages all in one place.",
    icon: Globe2,
  },
  {
    title: "Adventure",
    description:
      "From Hunza treks to Thailand island tours, we design trips full of thrill and discovery.",
    icon: Backpack,
  },
  {
    title: "Group Travel",
    description:
      "Special discounts for families, student groups, and corporate teams travel together, save more.",
    icon: Map,
  },
  {
    title: "Local Experiences",
    description:
      "Authentic cultural tours, handpicked hotels, and local guides to give you real memories.",
    icon: Flower2,
  },
];

export default function TravelFeatures() {
  return (
    <section className="w-full bg-[#f5f7ff] px-3 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 lg:px-20">
      
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  flex
                  flex-col
                  items-center
                  text-center
                  px-2
                  py-2
                  sm:px-4
                  sm:py-4
                  md:px-6
                  md:py-5
                  ${
                    index !== 0
                      ? "border-l border-slate-200"
                      : ""
                  }
                `}
              >

                {/* ICON */}
                <div className="mb-3 flex items-center justify-center sm:mb-4 md:mb-5">
                  <Icon
                    className="
                      h-6
                      w-6
                      stroke-[1.8]
                      text-[#2879ff]
                      sm:h-7
                      sm:w-7
                      md:h-8
                      md:w-8
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mb-2
                    text-[10px]
                    font-semibold
                    leading-tight
                    text-slate-900
                    sm:mb-2.5
                    sm:text-xs
                    md:mb-3
                    md:text-base
                  "
                >
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    max-w-[85px]
                    text-[8px]
                    leading-[1.5]
                    text-slate-500
                    sm:max-w-[130px]
                    sm:text-[10px]
                    md:max-w-[220px]
                    md:text-sm
                    md:leading-relaxed
                  "
                >
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