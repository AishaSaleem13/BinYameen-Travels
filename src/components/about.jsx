
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

        <h1 className="font-serif text-xl leading-snug text-gray-900 sm:text-2xl md:text-4xl lg:text-4xl">
          <span className={`${greatVibes.className} mr-1 text-4xl leading-none text-[#712B13] sm:text-5xl md:text-6xl`}>
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
           At Bin Yameen Travel, we believe every journey should be more than a destination. From the spiritual serenity of Makkah and Madinah to the breathtaking landscapes of Northern Pakistan, we create thoughtfully planned journeys designed around comfort, care, and unforgettable moments.

With personalized travel arrangements and dedicated support throughout your journey, we take care of the details so you can focus on what truly matters — experiencing the places, people, and moments along the way.
          </p>

          <button className="rounded-md bg-[#800E13] px-6 py-3 font-serif text-sm text-white transition hover:bg-[#650b0f] sm:px-7 sm:py-3.5">
            Know More →
          </button>
        </div>

        {/* Video */}
        <div className="w-full overflow-hidden rounded-xl shadow-sm aspect-video -mt-7">
          <video src="/video3.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" />
        </div>

      </div>
    </section>
  );
}

export default About;

