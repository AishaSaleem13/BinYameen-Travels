"use client";

import React from "react";
import Navbarnew from "./navbarnew";
import TextType from "./TextType";

function Heronew() {
  return (
    <div className="relative h-screen w-full">
      <section className="relative h-screen w-full overflow-hidden">

        {/* Navbar */}
        <div className="absolute left-0 top-0 z-50 w-full">
          <Navbarnew />
        </div>

        {/* Background Video */}
        <div className="absolute inset-0 h-full w-full">
      <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover">
            <source src="/videocompressed.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-40 flex flex-col justify-center px-5 pt-20 sm:px-8 sm:pt-24 md:px-12 lg:px-20">

          {/* Small Label */}
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-px w-6 bg-white/50 sm:w-8" />
            <p className="font-voice text-xs tracking-[0.15em] text-white/70 sm:text-sm sm:tracking-[0.2em] lg:text-base">
              Merhaba
            </p>
          </div>

          {/* Heading */}
          <h1 className="mb-4 max-w-[320px] font-voice text-3xl font-medium leading-tight text-white sm:max-w-xl sm:text-4xl md:text-5xl lg:mb-5 lg:max-w-2xl lg:text-6xl lg:leading-[1.1]">
            Welcome to Bin Yameen Travels
          </h1>

          {/* Description */}
          <div className="mb-7 max-w-[320px] font-sans text-sm leading-relaxed text-white/80 sm:mb-8 sm:max-w-lg sm:text-base md:text-lg lg:mb-10 lg:max-w-xl">
            <TextType
              text={["Trusted Umrah and northern Pakistan tours, planned with heart and delivered with care."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </div>

          {/* Buttons */}
          <div className="flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">

            <button className="w-full rounded-md bg-[#800E13] px-6 py-3 font-serif text-sm text-white transition-colors hover:bg-[#650b0f] sm:w-auto sm:px-7 sm:text-base">
              Book your Umrah
            </button>

            <button className="w-full rounded-md border border-white/50 px-6 py-3 font-serif text-sm text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto sm:px-7">
              Explore northern tours
            </button>

          </div>
        </div>

      </section>
    </div>
  );
}

export default Heronew;