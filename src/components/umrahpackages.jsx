"use client";

import React from "react";

const umrahPackages = [
  {
    id: "Standard",
    name: "Standard Umrah",
    duration: "7 Nights / 8 Days",
    image: "/l.jpg",
    description:
      "A simple, well-arranged package covering the essentials of your Umrah journey.",
    features: [
      "Guided Ziyarat, Makkah & Madinah sacred sites",
      "Umrah 2026 visa, fully processed end-to-end",
      "3-star hotel Madinah, near Masjid an-Nabawi",
      "Return economy airfare, Karachi / Lahore / Islamabad",
      "Airport and inter-city transfers in Saudi Arabia",
      "Pre-departure Umrah manasik briefing in Karachi",
    ],
  },

  {
    id: "Premium",
    name: "Premium Umrah",
    duration: "14 Nights / 15 Days",
    image: "/l.jpg",
    description:
      "For pilgrims looking for more comfort, more time and a more elevated stay.",
    features: [
      "Umrah 2026 visa, fully processed end-to-end",
      "5-star hotel Makkah, near Masjid al-Haram",
      "5-star hotel Madinah, near Masjid an-Nabawi",
      "VIP Ziyarat, private guided tours Makkah & Madinah",
      "Personal dedicated Islamic guide, small exclusive group",
      "Return economy airfare, Karachi / Lahore / Islamabad",
      "Concierge service, luggage and priority arrangements",
      "Pre-departure VIP briefing and welcome pack",
    ],
  },

  {
    id:     "Comfort",
    name: "Comfort Umrah",
    duration: "10 Nights / 11 Days",
    image: "/l.jpg",
    description:
      "Extra nights, upgraded hotels and greater comfort throughout your stay.",
    features: [
      "Guided Ziyarat, Makkah & Madinah sacred sites",
      "Umrah 2026 visa, fully processed end-to-end",
      "4-star hotel Makkah, near Masjid al-Haram",
      "4-star hotel Madinah, near Masjid an-Nabawi",
      "Return economy airfare, Karachi / Lahore / Islamabad",
      "Airport and inter-city transfers in Saudi Arabia",
      "Pre-departure Umrah manasik briefing in Karachi",
    ],
  },
];

export default function UmrahPackages() {
  return (
    <section className="bg-[#FDF9F2] px-5 py-20 sm:px-8 md:px-10 lg:px-14 lg:py-24">

      {/* =========================
          SECTION INTRO
      ========================== */}
      <div className="mx-auto mb-16 max-w-3xl text-center">

        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#800E13] sm:text-[11px]">
          Umrah 2026
        </p>

        <h2 className="font-serif text-4xl leading-[1.1] text-[#351414] sm:text-5xl">
          Choose your{" "}
          <span className="italic text-[#800E13]">
            journey.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#665b52] sm:text-base">
          Three thoughtfully arranged Umrah packages, designed to give
          you the comfort and support you need throughout your pilgrimage.
        </p>

      </div>


      {/* =========================
          PACKAGE CARDS
      ========================== */}
      <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-3 lg:gap-6">

        {umrahPackages.map((pkg) => {

          const isPremium = pkg.name === "Premium Umrah";

          return (
            <article
              key={pkg.name}
              className={`
                group relative flex flex-col overflow-hidden border
                transition-all duration-500

                ${
                  isPremium
                    ? `
                      z-10
                      border-[#4a181b]
                      bg-[#4a181b]
                      text-[#f7eee2]
                      shadow-[0_20px_55px_rgba(60,20,20,0.18)]
                      lg:-my-7
                    `
                    : `
                      border-[#d8cdbd]
                      bg-[#fbf8f1]
                      text-[#351414]
                      hover:-translate-y-2
                      hover:shadow-[0_20px_45px_rgba(60,30,20,0.12)]
                    `
                }
              `}
            >

              {/* =========================
                  PREMIUM BADGE
              ========================== */}
              {/* {isPremium && (
                <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
                  <span className="whitespace-nowrap bg-[#d0aa70] px-5 py-3 text-[9px] font-semibold top-2 uppercase tracking-[0.22em] text-[#351414]">
                    Premium Experience
                  </span>
                </div>
              )} */}


              {/* =========================
                  IMAGE
              ========================== */}
              <div
                className={`
                  relative w-full 
                  ${isPremium ? "h-[225px]" : "h-[205px]"}
                `}
              >

                <img
                  src={pkg.image}
                  alt={`${pkg.name} - Bin Yameen Travels`}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image overlay */}
                <div
                  className={`
                    absolute inset-0
                    bg-gradient-to-t
                    ${
                      isPremium
                        ? "from-[#4a181b]/70 via-[#4a181b]/5 to-transparent"
                        : "from-black/35 via-black/5 to-transparent"
                    }
                  `}
                />

                {/* Package number */}
                <span className="absolute bottom-4 left-5 text-[10px] font-medium tracking-[0.25em] text-white/90">
                  {isPremium
                    ? "02"
                    : pkg.name === "Standard Umrah"
                    ? "01"
                    : "03"}
                </span>

              </div>


              {/* =========================
                  CARD CONTENT
              ========================== */}
              <div
                className={`
                  flex flex-1 flex-col px-6 py-7 sm:px-7
                  ${isPremium ? "lg:px-8 lg:py-8" : ""}
                `}
              >

                {/* Small heading */}
                <div className="mb-4 flex items-center gap-3">

                  <span
                    className={`
                      h-px w-8
                      ${
                        isPremium
                          ? "bg-[#d6b27a]"
                          : "bg-[#800E13]"
                      }
                    `}
                  />

                  <span
                    className={`
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      ${
                        isPremium
                          ? "text-[#d6b27a]"
                          : "text-[#800E13]"
                      }
                    `}
                  >
                    {isPremium
                      ? "Featured Package"
                      : "Umrah 2026"}
                  </span>

                </div>


                {/* Package name */}
                <h3
                  className={`
                    font-serif
                    text-3xl
                    leading-tight
                    ${
                      isPremium
                        ? "text-[#f7eee2]"
                        : "text-[#351414]"
                    }
                  `}
                >
                  {pkg.name}
                </h3>


                {/* Duration */}
                <p
                  className={`
                    mt-3
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    ${
                      isPremium
                        ? "text-[#d6b27a]"
                        : "text-[#800E13]"
                    }
                  `}
                >
                  {pkg.duration}
                </p>


                {/* Divider */}
                <div
                  className={`
                    my-6 h-px
                    ${
                      isPremium
                        ? "bg-[#765052]"
                        : "bg-[#ded5c8]"
                    }
                  `}
                />


                {/* Description */}
                <p
                  className={`
                    text-sm
                    leading-7
                    ${
                      isPremium
                        ? "text-[#eaded1]"
                        : "text-[#665b52]"
                    }
                  `}
                >
                  {pkg.description}
                </p>


                {/* =========================
                    FEATURES
                ========================== */}
                <div
                  className={`
                    mt-7
                    overflow-y-auto
                    pr-2
                    scrollbar-thin

                    ${
                      isPremium
                        ? "max-h-[215px]"
                        : "max-h-[190px]"
                    }
                  `}
                >

                  <ul className="space-y-4">

                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >

                        {/* Bullet */}
                        <span
                          className={`
                            mt-[7px]
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full

                            ${
                              isPremium
                                ? "bg-[#d6b27a]"
                                : "bg-[#800E13]"
                            }
                          `}
                        />

                        {/* Feature text */}
                        <span
                          className={`
                            text-[13px]
                            leading-5

                            ${
                              isPremium
                                ? "text-[#eee3d6]"
                                : "text-[#493d36]"
                            }
                          `}
                        >
                          {feature}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>


                {/* =========================
                    BUTTON
                ========================== */}
                <div className="mt-auto pt-7">
  <div className="grid grid-cols-2 gap-3">

    {/* View Package Details */}
    <button
      type="button"
      className={`
        group/details
        flex
        min-h-[52px]
        items-center
        justify-between
        border
        px-4
        py-3
        text-[8px]
        sm:text-[9px]
        font-semibold
        uppercase
        tracking-[0.16em]
        transition-all
        duration-300

        ${
          isPremium
            ? `
              border-[#d6b27a]
              text-[#f7eee2]
              hover:bg-[#d6b27a]
              hover:text-[#4a181b]
            `
            : `
              border-[#800E13]
              text-[#800E13]
              hover:bg-[#800E13]
              hover:text-white
            `
        }
      `}
    >
      <span className="text-left">
        View Details
      </span>

      <span className="ml-2 text-base transition-transform duration-300 group-hover/details:translate-x-1">
        →
      </span>
    </button>

    {/* Customize Package */}
    <button
      type="button"
      onClick={() => openCustomize(pkg)}
      className={`
        group/customize
        flex
        min-h-[52px]
        items-center
        justify-between
        border
        px-4
        py-3
        text-[8px]
        sm:text-[9px]
        font-semibold
        uppercase
        tracking-[0.16em]
        transition-all
        duration-300

        ${
          isPremium
            ? `
              border-[#d6b27a]/70
              text-[#d6b27a]
              hover:bg-[#d6b27a]
              hover:text-[#4a181b]
            `
            : `
              border-[#800E13]/60
              text-[#800E13]
              hover:bg-[#800E13]
              hover:text-white
            `
        }
      `}
    >
      <span className="text-left">
        Customize
      </span>

      <span className="ml-2 text-base transition-transform duration-300 group-hover/customize:translate-x-1">
        →
      </span>
    </button>

  </div>
</div>
              

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}