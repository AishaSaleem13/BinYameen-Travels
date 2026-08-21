"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const activities = [
  {
    title: "Umrah Packages",
    href: "/umrahpackages",
    image:
      "/umrah.webp",
  },
  {
    title: "International Tour",
    href: "/internationalpage",
    image:
      "/international.webp",
  },
  {
    title: "Northern Tour",
    href: "/Northtour",
    image:
      "/northern.webp",
  },
];

  export default function CuratedActivities() {
  return (
    <section className="w-full bg-white px-3 py-10 sm:px-6 sm:py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-7 text-center sm:mb-10">
          <p className="mb-2 flex items-center justify-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#800E13] sm:gap-2 sm:text-sm sm:tracking-[0.2em]">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            What We Offer
          </p>

          <h2 className="text-xl font-bold leading-tight text-slate-900 sm:text-2xl md:text-3xl">
            Curated Luxury Trips &amp; Experiences
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-3 gap-2 sm:gap-5 lg:gap-8">

          {activities.map((activity) => (
            <Link
              key={activity.title}
              href={activity.href}
              className="
                group
                relative
                block
                overflow-hidden
                rounded-xl
                bg-slate-900
                shadow-md
                ring-1
                ring-black/5
                sm:rounded-2xl
                lg:rounded-3xl
                lg:transition-all
                lg:duration-500
                lg:hover:-translate-y-2
                lg:hover:shadow-2xl
              "
            >

              {/* ================= IMAGE ================= */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    lg:transition-transform
                    lg:duration-700
                    lg:ease-out
                    lg:group-hover:scale-110
                  "
                />
              </div>

              {/* ================= GRADIENT ================= */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950
                  via-slate-950/30
                  to-transparent
                "
              />

              {/* ================= TOP ACCENT ================= */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-0.5
                  origin-left
                  bg-[#800E13]
                  lg:h-1
                  lg:scale-x-0
                  lg:transition-transform
                  lg:duration-500
                  lg:group-hover:scale-x-100
                "
              />

              {/* ================= ARROW ================= */}
              <div
                className="
                  absolute
                  right-2
                  top-2
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-sm
                  sm:right-3
                  sm:top-3
                  sm:h-9
                  sm:w-9
                  lg:right-4
                  lg:top-4
                  lg:h-10
                  lg:w-10
                  lg:transition-all
                  lg:duration-300
                  lg:group-hover:bg-[#800E13]
                "
              >
                <ArrowUpRight
                  className="
                    h-3
                    w-3
                    sm:h-4
                    sm:w-4
                    lg:transition-transform
                    lg:duration-300
                    lg:group-hover:rotate-45
                  "
                />
              </div>

              {/* ================= TEXT ================= */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-2
                  sm:p-4
                  lg:p-6
                "
              >
                <div
                  className="
                    mb-1.5
                    h-px
                    w-5
                    bg-[#800E13]
                    sm:mb-2
                    sm:w-8
                    lg:mb-3
                    lg:w-10
                    lg:transition-all
                    lg:duration-500
                    lg:group-hover:w-16
                  "
                />

                <h3
                  className="
                    font-serif
                    text-[10px]
                    font-medium
                    italic
                    leading-tight
                    text-white
                    sm:text-base
                    md:text-xl
                    lg:text-2xl
                  "
                >
                  {activity.title}
                </h3>

                {/* Desktop hover text */}
                <div
                  className="
                    mt-0
                    hidden
                    max-h-0
                    overflow-hidden
                    opacity-0
                    lg:block
                    lg:transition-all
                    lg:duration-500
                    lg:group-hover:mt-4
                    lg:group-hover:max-h-10
                    lg:group-hover:opacity-100
                  "
                >
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">
                    View Package
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>

            </Link>
          ))}

        </div>

        {/* ================= ENQUIRY ================= */}
        <Link
          href="/Contact"
          className="
            mx-auto
            mt-7
            block
            w-fit
            rounded-full
            border
            border-slate-300
            px-5
            py-2
            text-[10px]
            font-medium
            text-slate-700
            transition
            hover:border-[#800E13]
            hover:bg-[#800E13]
            hover:text-white
            sm:mt-10
            sm:px-6
            sm:py-2.5
            sm:text-sm
          "
        >
          Enquiry
        </Link>

      </div>
    </section>
  );
}