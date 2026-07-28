"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'
import Navbarnew from './navbarnew'
import TextType from './TextType'

function Heronew() {
    // useEffect(() => {
    //     Aos.init({
    //      easing:"ease-in-out",
    //       once: true,
    //   offset: 100,})
    //      }, [])
  return (
    <div className="relative h-screen w-full">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute top-0 w-full z-50">
          <Navbarnew/>
        </div>

        <div className="absolute inset-0 w-full h-full object-cover">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4"/>
          </video>
          {/* directional gradient — darker left where text sits, clearer right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>
          {/* subtle bottom fade for the trust strip to sit on */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        {/* hero text */}
      


        <div className="absolute inset-0 z-40 flex flex-col justify-center px-6 lg:px-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-white/50"></span>
            <p className="font-voice text-white/70 text-sm lg:text-base tracking-[0.2em] uppercase">
              Merhaba
            </p>
          </div>

          <h1 className="font-voice text-white text-4xl lg:text-6xl font-medium leading-[1.1] mb-5 max-w-2xl">
      Welcome to Bin Yameen Travels
          </h1>

          <span className="font-sans text-white/80 text-base lg:text-lg max-w-xl mb-10 leading-relaxed">
            <TextType 
  text={["Trusted  Umrah and northern Pakistan tours, planned with heart and delivered with care."]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={[""]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
          </span>

          <div className="flex gap-4">
            <button className="bg-[#800E13] hover:bg-gray-500 text-white px-7 py-3 rounded-md text-md font-serif transition-colors">
              Book your Umrah
            </button>
            <button className="border border-white/50 hover:border-white text-white px-7 py-3 rounded-md text-sm font-serif transition-colors">
              Explore northern tours
            </button>
          </div>
        </div>
      

        {/* trust strip */}
        

        {/* scroll indicator */}
       
      </section>
    </div>
  )
}

export default Heronew