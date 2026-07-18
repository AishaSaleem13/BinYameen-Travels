"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";

/**
 * HeroSlider
 * -----------------------------------------------------------------
 * Full-bleed hero with:
 *  - Crossfading background image per destination
 *  - Headline + description that slides in from the left
 *  - A row of thumbnail cards on the right showing the OTHER
 *    destinations — click one and IT becomes the background.
 *
 * Key idea: there is only ONE image per destination. That same
 * image is used as the full-bleed background when its destination
 * is active, and as a thumbnail when a different one is active.
 * This is what keeps "the picture you click" and "the picture that
 * appears in back" perfectly in sync — no separate bg/thumb lists
 * to accidentally mismatch.
 *
 * Install once: npm install framer-motion
 * Put your images in /public/hero/*  (see paths below)
 * -----------------------------------------------------------------
 */

const SLIDES = [
  {
    id: "bali",
    title: "BALI",
    label: "Bali, Indonesia",
    description:
      "Bali is an Indonesian island known for its forested volcanoes, iconic rice paddies, beaches and coral reefs.",
    image: "/l2.jpg",
  },
  {
    id: "Madina",
    title: "Madina",
    label: "Madina, Saudi Arabia",
    description:
      "Madina is a city in Saudi Arabia, known for its historical and religious significance.",
    image: "/image2.jpg",
   
  },
  {
    id: "indonesia",
    title: "INDONESIA",
    label: "Indonesia",
    description:
      "Indonesia is a Southeast Asian nation made up of thousands of volcanic islands, rainforests and beaches.",
    image: "/image3.jpg",
     
  },
];

const AUTOPLAY_MS = 9000;
const THUMBS_TO_SHOW = 2; // how many "next up" cards to show at once

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (next) => {
      setDirection(next > index ? 1 : -1);
      setIndex((prev) => (next + SLIDES.length) % SLIDES.length);
    },
    [index]
  );

  // autoplay
  useEffect(() => {
    const t = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [index, goTo]);

  const active = SLIDES[index];

  // The thumbnails are just "the next N destinations after the active one",
  // wrapping around the array. Nothing here is separately configured —
  // it's derived straight from SLIDES + the current index.
  const upcoming = useMemo(() => {
    const list = [];
    for (let i = 1; i <= THUMBS_TO_SHOW; i++) {
      list.push({ ...SLIDES[(index + i) % SLIDES.length], offset: i });
    }
    return list;
  }, [index]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* ---------- Background crossfade ---------- */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={active.image}
            alt={active.label}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
        </motion.div>
      </AnimatePresence>

<div className="relative  ">
<Navbar/>
</div>

      {/* ---------- Headline block ---------- */}
      <div className="relative z-10 flex h-[calc(100%-88px)] items-center px-12">
        <div className="max-w-xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -60 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 * direction }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              
              
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- Thumbnail stack: click one -> it becomes the background ---------- */}
        <div className="pointer-events-none absolute right-10 top-98 hidden -translate-y-1/2 gap-4 md:flex">
          <AnimatePresence mode="popLayout">
            {upcoming.map((slide) => (
              <motion.button
                key={slide.id}
                layout
                onClick={() => goTo(index + slide.offset)}
                className="pointer-events-auto relative h-52 w-40 overflow-hidden rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: slide.offset === 1 ? 1 : 0.92 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5, delay: slide.offset * 0.08, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.label}
                  fill
                  sizes="160px"
                  className="object-fill"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-xs font-medium text-white">
                    {slide.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ---------- Dots / controls ---------- */}
      <div className="absolute bottom-8 left-10 z-10 flex items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.title}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-10 z-10 flex gap-3 text-white">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition hover:bg-white/10"
        >
          ←
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition hover:bg-white/10"
        >
          →
        </button>
      </div>
    </section>
  );
}
