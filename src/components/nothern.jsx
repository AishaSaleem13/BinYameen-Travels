import React from 'react'
import Navbarnew from './navbarnew'
import Footer from './footer'
import PopularDestinations from './north1'
import HappyTravelers from './happttraveler'
import ContactUs from './Contact'
function Nothern() {
  return (
   <>
<Navbarnew/>
      {/* ---------- HERO ---------- */}
      <section className="relative">
        <div className="relative  h-full lg:h-[420px] w-full overflow-hidden md:h-[460px]">
          <img
            src="/img.jpg"
            alt="Aerial view of turquoise ocean and beach"
          
            sizes="100vw"
            className="object-cover "
          />
          <div className="absolute inset-0 bg-black/10" />

          {/* heading */}
          <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-6 md:px-10">
            <h1
              className="max-w-xl text-4xl font-semibold leading-tight text-white drop-shadow-md md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sit Back, Relax, and Let Us Craft Your Perfect Escape
            </h1>
          </div>

          {/* overlapping navy card */}
          <div className="absolute bottom-[-18px]  hidden right-6 w-60 rounded-md bg-[#1c3a52]  md:block lg:block p-8 text-center shadow-xl md:right-10 md:w-70">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/90">
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CE
              </span>
            </div>
            <h3
              className="mb-2 text-xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Go?
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-300">
              Our BinYameen advisors are ready to plan the perfect
              trip for you and/or your family.
            </p>
            <button className="rounded-md border border-white/70 px-5 py-2 text-sm font-medium text-white hover:bg-white/10">
              Let&apos;s Get Started &raquo;
            </button>
          </div>
        </div>
        
        
      </section>
      <PopularDestinations/>
      <HappyTravelers/>
      <ContactUs/>
      <Footer/>
   </>
  )
}

export default Nothern
