
import React from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

function About() {
  return (
    <section className="bg-gray-50 px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20">

      {/* Section Heading */}
      <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 md:mb-16">
        <h4 className="mb-3 font-serif text-lg text-[#800E13] sm:text-xl md:text-2xl">
          About Our Company
        </h4>

        <h1 className="font-serif text-2xl leading-snug text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
          <span className={`${greatVibes.className} mr-1 text-5xl leading-none text-[#712B13] sm:text-6xl md:text-7xl`}>
            E
          </span>
          levate Your Journey with Bin Yameen Travel
        </h1>
      </div>

      {/* Content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">

        {/* Text */}
        <div className="max-w-xl">
          <p className="mb-7 font-sans text-sm leading-7 text-gray-700 sm:text-base md:mb-8 md:text-lg">
            At Bin Yameen Travel, we serve pilgrims and travelers with one
            goal — a hassle-free journey, every time. We curate deeply
            personalized, high-end itineraries built entirely around your
            lifestyle, pace, and requirements, backed by round-the-clock,
            white-glove concierge care from start to finish. Every detail is
            handled with absolute precision, so you can experience the
            journey, not the hassle.
          </p>

          <button className="rounded-md bg-[#800E13] px-6 py-3 font-serif text-sm text-white transition hover:bg-[#650b0f] sm:px-7 sm:py-3.5">
            Know More →
          </button>
        </div>

        {/* Video */}
        <div className="w-full overflow-hidden rounded-xl shadow-sm aspect-video">
          <video src="/video.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
        </div>

      </div>
    </section>
  );
}

export default About;

