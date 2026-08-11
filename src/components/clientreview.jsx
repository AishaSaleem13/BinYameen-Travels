"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Play } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Muhammad Osama Ashqeen",
    location: "Karachi, Pakistan",
    poster:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=600&auto=format&fit=crop",
    video: "/videoreview.mp4",
  },
  {
    name: "Muhammad Fareed Shaikh",
    location: "Karachi, Pakistan",
    poster:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=600&auto=format&fit=crop",
    video: "",
  },
  {
    name: "Mr. Muhammad Asad",
    location: "Dubai, UAE",
    poster:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=600&auto=format&fit=crop",
    video: "",
  },
  {
    name: "Mr. Muhammad Manzoor Ahmed",
    location: "Chicago, USA",
    poster:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=600&auto=format&fit=crop",
    video: "",
  },
];

export default function ValuedPilgrims() {
  const scrollerRef = useRef(null);
  // Tracks which cards currently have a video playing, keyed by index.
  const [playingMap, setPlayingMap] = useState({});

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  const setPlaying = (index, value) => {
    setPlayingMap((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#800E13] sm:justify-start">
              <span className="h-px w-6 bg-[#800E13]" />
              Real Stories, Real Journeys
            </p>

            <h1 className="flex flex-wrap items-center justify-center gap-2 text-3xl font-medium text-black sm:justify-start md:text-4xl">
              Every journey leaves a story worth sharing
              <span className="font-serif italic text-[#800E13]">
                Pilgrims thought and experiences
              </span>
              <Heart className="h-6 w-6 fill-red-500 text-red-500" />
            </h1>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollByCard(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#800E13]/40 hover:bg-[#800E13] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollByCard(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#800E13]/40 hover:bg-[#800E13] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item, index) => {
            const isPlaying = !!playingMap[index];

            return (
              <div
                key={item.name}
                data-card
                className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:ring-[#800E13]/30 sm:w-[46%] lg:w-[23%]"
              >
                {/* Gold corner accent */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Brand badge overlay — hidden once the video starts playing */}
                <div
                  className={`absolute inset-x-3 top-3 z-10 flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 backdrop-blur-md transition-opacity duration-300 ${
                    isPlaying ? "pointer-events-none opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold tracking-wide text-white">
                      Bin Yameen
                    </p>
                    <p className="text-[9px] uppercase tracking-wider text-white/80">
                      Travels
                    </p>
                  </div>
                  <span className="rounded-full border border-amber-300/30 px-2 py-0.5 text-[9px] font-semibold text-white">
                    1447 · 2026
                  </span>
                </div>

                {/* Video */}
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
                      <source src={item.video} type="video/mp4" />
                    )}
                    Your browser does not support the video tag.
                  </video>

                  {/* Decorative play affordance — also hidden during playback */}
                  {!isPlaying && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-300/50 bg-slate-950/40 backdrop-blur-sm">
                        <Play className="ml-0.5 h-5 w-5 fill-[#800E13] text-[#800E13]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Name overlay — hidden once the video starts playing */}
                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-14 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 transition-opacity duration-300 ${
                    isPlaying ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="mb-1.5 h-px w-8 bg-[#800E13]" />
                  <p className="text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-slate-300">
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