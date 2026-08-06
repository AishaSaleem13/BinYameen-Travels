
"use client"

import React from "react";
import { HeartHandshake, Trophy, Leaf, Menu } from "lucide-react";

export default function AboutUsPage() {

  return (
    <div className="w-full bg-white">
      <Navbar />
      <Hero />
      <AboutUsGrid />
    </div>
  );
}

function Navbar() {
  const links = ["Home", "Umrah Packages", "International Tours", "About Us", "Contact Us"];
  return (
    <nav className="flex items-center justify-between border-b border-slate-100 px-4 py-4 sm:px-8">
      <div className="flex items-center gap-2 text-xl font-bold text-slate-900 cursor-pointer">
      
      BinYameen Travels
      </div>

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 lg:flex">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className={
              l === "International Tours"
                ? "border-b-2 border-[#800E13] pb-1 text-slate-900"
                : "hover:text-slate-900"
            }
          >
            {l}
          </a>
        ))}
      </div>

      <button className="hidden rounded-full bg-[#800E13] px-5 py-2 text-sm font-semibold text-white hover:bg-sky-600 lg:block">
        Custom Tour
      </button>
      <Menu className="text-slate-700 lg:hidden" />
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl sm:mx-8">
   <video 
   src="/video 2.mp4" autoPlay muted loop playsInline
     className="h-56 w-full object-cover sm:h-72  lg:min-h-[300px]" 
   >

   </video>
      
     
      
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute bottom-6 left-4 text-white sm:bottom-10 sm:left-8">
        <h1 className="text-2xl font-bold sm:text-4xl">International Tours</h1>
        <p className="mt-2 max-w-sm text-xs text-white/90 sm:text-sm">
          Discover our journey and the passion behind exceptional travel.
        </p>
      </div>
      <div className="absolute bottom-4 right-4 hidden items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm sm:flex">
        <a href="#" className="text-slate-500 hover:text-slate-900">Home</a>
        <span>/</span>
        <span className="text-sky-600">International Tours</span>
      </div>
    </div>
  );
}

function AboutUsGrid() {
    const [selectedCountry, setSelectedCountry] = React.useState(null);
  const countries = [
    { id: "dubai", name: "Dubai", image: "/dubai.jpg" },
    { id: "bali", name: "Bali", image: "/bali.jpg" },
    { id: "malaysia", name: "Malaysia", image: "/malysia.jpg",},
    { id: "singapore", name: "Singapore", image: "/singapore2.jpg" },
    { id: "jeddah", name: "Jeddah", image: "/jaddah.jpg", },
    { id: "baku", name: "Baku", image: "/baku.jpg" },
    { id: "thailand", name: "Thailand", image: "/bangkok2 (1).jpg" },
    { id: "turkey", name: "Turkey", image: "/tURKIE.jpg" },
    { id: "japan", name: "Japan", image: "/japan.jpg" },
  ];

  return (
<section className="px-4 py-12 sm:px-8 lg:py-20">
      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 lg:mb-12 lg:flex-row lg:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#800E13]" />
            <span className="text-xs font-semibold tracking-wider text-[#800E13]">
              SINCE 2022
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Global journeys &amp; adventures
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-500">
          This modern travel hub combines booking services, personalized
          itineraries, and expert guidance — all in one place to streamline
          unforgettable travel experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 lg:gap-5">
        {countries.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl ${
              item.tall ? "lg:row-span-2" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              className="h-60 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 lg:h-72"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                {item.name}
              </h3>

              <button className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 opacity-0 transition duration-300 group-hover:opacity-100"
              onClick={()=>setSelectedCountry(item)}
              >
                Get Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

