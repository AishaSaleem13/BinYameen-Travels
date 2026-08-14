
"use client"
import React from 'react'
import Navbarnew from './navbarnew'
import CustomizeForm from './Customizepage'
import ContactUs from './Contact'
import Footer from './footer'
import { useSearchParams } from 'next/navigation'
function Customize() {
    const searchparams=useSearchParams()
    const tripType=searchparams.get("TripType")
  return (
   <>
   <Navbarnew/>
      {/* ---------- HERO ---------- */}
    <section className="relative">
  <div className="relative h-[420px] w-full overflow-hidden md:h-[460px]">
    
    {/* Background Image */}
    <img
      src="/img.jpg"
      alt="Aerial view of turquoise ocean and beach"
      
      sizes="100vw"
      className="object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/10" />

    {/* Heading */}
    <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-5 sm:px-7 md:px-10">
      <h1
        className="max-w-[55%] text-3xl font-semibold leading-tight text-white drop-shadow-md sm:text-4xl md:max-w-xl md:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Sit Back, Relax, and Let Us Craft Your Perfect Escape
      </h1>
    </div>

    {/* Ready to Go Card */}
    <div className="absolute bottom-[-18px] right-3 w-[190px] hidden rounded-md bg-[#1c3a52] p-5 text-center shadow-xl sm:right-6 sm:w-[230px]  lg:block sm:p-6 md:right-10 md:w-[280px] md: block md:p-8">
      
      {/* Icon */}
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/90 sm:mb-4 sm:h-14 sm:w-14">
        <span
          className="text-sm font-bold text-white sm:text-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          CE
        </span>
      </div>

      {/* Card Heading */}
      <h3
        className="mb-2 text-lg text-white sm:text-xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Ready to Go?
      </h3>

      {/* Card Text */}
      <p className="mb-4 text-xs leading-relaxed text-slate-300 sm:mb-5 sm:text-sm">
        Our BinYameen advisors are ready to plan the perfect trip for
        you and/or your family.
      </p>

      {/* Button */}
      <button
        type="button"
        className="rounded-md border border-white/70 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10 sm:px-5 sm:text-sm"
      >
        Let&apos;s Get Started &raquo;
      </button>
    </div>

  </div>
</section>
<CustomizeForm  TripType={tripType}/>
<ContactUs/>
<Footer/>
   </>
  )
}

export default Customize
