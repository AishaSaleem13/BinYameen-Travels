"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Play,
} from "lucide-react";

const testimonials = [
  {
    name: "Mr. Muhammad Osama Ashqeen",
    location: "Karachi, Pakistan",
    poster:
    "/poster.jpg",
    video: "/videoreview.mp4",
  },
  {
    name: "Muhammad Fareed Shaikh",
    location: "Karachi, Pakistan",
    poster:
      "/poster.jpg",
    video:"/videoc5.mp4",
  },
  {
    name: "Mr. Muhammad Asad",
    location: "Karachi, Pakistan",
    poster:
    "/poster.jpg",
    video:"/video6.mp4",
  },
  {
    name: "Mr. Muhammad Manzoor Ahmed",
    location: "Karachi, Pakistan",
    poster:
          "/poster.jpg",
    video: "/video4.mp4",
  },
];

export default function ValuedPilgrims() {
  const scrollerRef = useRef(null);
  const [playingMap, setPlayingMap] = useState({});

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;

    if (!el) return;

    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 20 : 300;

    el.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  };

  const setPlaying = (index, value) => {
    setPlayingMap((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col gap-6 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between">

          <div className="text-center md:text-left">

            <p className="mb-2 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#800E13] sm:text-xs md:justify-start md:tracking-[0.25em]">
              <span className="h-px w-5 bg-[#800E13] sm:w-6" />
              Real Stories, Real Journeys
            </p>

            <h1 className="mx-auto max-w-3xl text-2xl font-medium leading-tight text-black sm:text-3xl md:mx-0 md:text-4xl">
              Every journey leaves a story worth sharing{" "}
              <span className="font-serif italic text-[#800E13]">
                Pilgrims thought and experiences
              </span>

              <Heart className="ml-1 inline-block h-5 w-5 fill-red-500 text-red-500 sm:h-6 sm:w-6" />
            </h1>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div className="flex justify-center gap-2 md:justify-end md:gap-3">

            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#800E13]/40 hover:bg-[#800E13] hover:text-white sm:h-10 sm:w-10 md:h-11 md:w-11"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#800E13]/40 hover:bg-[#800E13] hover:text-white sm:h-10 sm:w-10 md:h-11 md:w-11"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

          </div>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div
          ref={scrollerRef}
          className="
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            scroll-smooth
            pb-3
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:gap-5
            md:gap-6
          "
        >

          {testimonials.map((item, index) => {
            const isPlaying = !!playingMap[index];

            return (
              <div
                key={item.name}
                data-card
                className="
                  group
                  relative
                  w-[72%]
                  shrink-0
                  snap-start
                  overflow-hidden
                  rounded-xl
                  bg-slate-900
                  shadow-lg
                  ring-1
                  ring-black/5
                  transition-all
                  duration-500

                  sm:w-[45%]
                  sm:rounded-2xl

                  md:w-[31%]

                  lg:w-[23%]
                "
              >

                {/* ================= TOP ACCENT ================= */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-[#800E13] transition-transform duration-500 group-hover:scale-x-100" />

                {/* ================= BRAND BADGE ================= */}
                <div
                  className={`
                    absolute
                    inset-x-2
                    top-2
                    z-10
                    flex
                    items-center
                    justify-between
                    rounded-md
                    border
                    border-white/10
                    bg-slate-950/70
                    px-2
                    py-1.5
                    backdrop-blur-md
                    transition-opacity
                    duration-300

                    sm:inset-x-3
                    sm:top-3
                    sm:rounded-lg
                    sm:px-3
                    sm:py-2

                    ${
                      isPlaying
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                    }
                  `}
                >
                  <div className="leading-tight">

                    <p className="text-[9px] font-bold tracking-wide text-white sm:text-[11px]">
                      Bin Yameen
                    </p>

                    <p className="text-[7px] uppercase tracking-wider text-white/80 sm:text-[9px]">
                      Travels
                    </p>

                  </div>

                  <span className="rounded-full border border-amber-300/30 px-1.5 py-0.5 text-[7px] font-semibold text-white sm:px-2 sm:text-[9px]">
                    1447 · 2026
                  </span>
                </div>

                {/* ================= VIDEO ================= */}
                <div className="relative aspect-[3/4] w-full bg-slate-950">

                  <video
                    className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    poster={item.poster}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlaying(index, true)}
                    onPause={() => setPlaying(index, false)}
                    onEnded={() => setPlaying(index, false)}
                  >
                    {item.video && (
                      <source
                        src={item.video}
                        type="video/mp4"
                      />
                    )}

                    Your browser does not support the video tag.
                  </video>

                  {/* ================= PLAY BUTTON ================= */}
                  {!isPlaying && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-300/50 bg-slate-950/40 backdrop-blur-sm sm:h-14 sm:w-14">

                        <Play className="ml-0.5 h-4 w-4 fill-[#800E13] text-[#800E13] sm:h-5 sm:w-5" />

                      </div>

                    </div>
                  )}

                </div>

                {/* ================= NAME ================= */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-10
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/70
                    to-transparent
                    p-3
                    transition-opacity
                    duration-300

                    sm:bottom-14
                    sm:p-4

                    ${
                      isPlaying
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  `}
                >

                  <div className="mb-1 h-px w-6 bg-[#800E13] sm:mb-1.5 sm:w-8" />

                  <p className="text-[11px] font-semibold leading-tight text-white sm:text-sm">
                    {item.name}
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-300 sm:text-[11px]">
                    {item.location}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}