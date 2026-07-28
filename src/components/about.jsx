import React from 'react'
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

function About() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <h4 className="text-center text-2xl font-serif text-[#800E13] mb-4">
        About Our Company
      </h4>
      <h1 className="text-center text-3xl md:text-4xl font-serif text-black mb-12">
        <span className={`${greatVibes.className} text-5xl md:text-6xl leading-none align-[-16px] mr-1 text-[#712B13]`}>
          E
        </span>
        levate Your Journey with Bin Yameen Travel
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-10 items-center">
        {/* left: text */}
        <div className="max-w-md mx-auto md:mx-0">
          <p className="text-md text-black font-sans leading-relaxed mb-10">
            At Bin Yameen Travel, we serve pilgrims and travelers with one
            goal   a hassle-free journey, every time. We curate deeply
            personalized, high-end itineraries built entirely around your
            lifestyle, pace, and requirements, backed by round-the-clock,
            white-glove concierge care from start to finish. Every detail is
            handled with absolute precision, so you can experience the
            journey, not the hassle.
          </p>

          <button className="bg-[#800E13] text-white px-6 py-3 text-sm font-medium rounded hover:bg-[#800E13] transition">
            Know More →
          </button>
        </div>

        {/* right: video */}
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <video
            src="/video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default About