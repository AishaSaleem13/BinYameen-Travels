// Hero.jsx
// Next.js + Tailwind hero section, styled for a real-estate investing brand.
//
// Usage in Next.js:
//   - Save as components/Hero.jsx
//   - Swap the <img> tags below for next/image if you want automatic
//     optimization (see commented alternative near the collage).
//   - Load the fonts via next/font instead of the <style> import if you're
//     on the App Router — see the note at the bottom of the file.
"use client"
import { useState } from "react";
import ContactUs from "./Contact";
import Footer from "./footer";

const stats = [
  { label: "TXN VOLUME", value: "$5B+", detail: "combined real estate deals" },
  { label: "REGULATED", value: "50", detail: "states, exempt market dealer" },
  { label: "AVG RETURN", value: "7–13%", detail: "typical annual yield" },
];

export default function Hero() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative w-full bg-gray-50 text-[#1C2A22] overflow-hidden">
      {/* Google Fonts — move to next/font in a real Next.js app, see bottom note */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-variation-settings: 'opsz' 60; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      {/* faint blueprint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
        //   backgroundImage:
        //     "linear-gradient(#1C2A22 1px, transparent 1px), linear-gradient(90deg, #1C2A22 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        {/* eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[6px] w-[6px] rounded-full bg-[#A8402A]" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#A8402A]">
     We are Bin Yameen Travels
          </span>
        </div>

        {/* headline + supporting copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          <h1 className="lg:col-span-8 font-display font-semibold leading-[0.98] text-[#1C2A22] text-[13vw] sm:text-6xl md:text-7xl">
            We set out to build
            <br />
            <span className="italic font-normal text-[#4B5F45]">a better</span> way
            <br />
            way to travel
          </h1>

          <p className="lg:col-span-4 font-body text-[15px] sm:text-base leading-relaxed text-[#1C2A22]/70 lg:pb-2 lg:pl-6 lg:border-l lg:border-[#1C2A22]/15">
           Together with the travelers and families who trust Bin Yameen Travels, we're making travel simpler from start to finish with thoughtful planning, trusted guidance, flexible journeys, and experiences worth remembering.
          </p>
        </div>

        {/* stat row — blueprint dimension line */}
        {/* <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-y border-[#1C2A22]/15 py-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-baseline gap-3 ${
                i !== 0 ? "sm:pl-4 sm:border-l sm:border-[#1C2A22]/15" : ""
              }`}
            >
              <span className="font-display text-2xl sm:text-3xl text-[#1C2A22]">
                {s.value}
              </span>
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#1C2A22]/50">
                {s.label}
                <br />
                <span className="normal-case tracking-normal text-[#1C2A22]/40">
                  {s.detail}
                </span>
              </span>
            </div>
          ))}
        </div> */}

        {/* photo collage — running-bond (brick) offset, the signature element */}
        {/* photo collage — simple side-by-side pair, the signature element */}
           <div className="relative mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-6 max-w-8xl items-end">
          <figure
            onMouseEnter={() => setHovered("a")}
            onMouseLeave={() => setHovered(null)}
            className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-sm shadow-[0_18px_40px_-20px_rgba(28,42,34,0.4)]"
          >
            {/* Next.js: replace with <Image src="..." alt="..." fill className="object-cover" /> */}
            <img
              src="/Team.jpg"
              alt="The Investate team celebrating together"
              className={`h-full w-full object-cover object-top transition-transform duration-700 ${
                hovered === "a" ? "scale-105" : "scale-100"
              }`}
            />
          </figure>
 
          <figure
            onMouseEnter={() => setHovered("b")}
            onMouseLeave={() => setHovered(null)}
            className="relative col-span-1 aspect-[3/4] overflow-hidden rounded-sm shadow-[0_18px_40px_-20px_rgba(28,42,34,0.4)]"
          >
            <img
              src="/Team2.jpg"
              alt="An advisor walking an investor through their portfolio"
              className={`h-full w-full object-cover transition-transform duration-700 ${
                hovered === "b" ? "scale-105" : "scale-100"
              }`}
            />
          </figure>
 
          {/* foundation / ruler line beneath the collage */}
          <div className="col-span-3 mt-4 flex items-end h-4">
            {Array.from({ length: 42 }).map((_, i) => (
              <span
                key={i}
                className="flex-1 border-l border-[#1C2A22]/25"
                style={{ height: i % 6 === 0 ? "100%" : "45%" }}
              />
            ))}
          </div>
        </div>
      </div>
       <section className="w-full bg-gray-50 text-[#1C2A22]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; font-variation-settings: 'opsz' 60; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
 
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* left — heading */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold leading-none text-[#1C2A22] text-5xl sm:text-6xl flex items-start gap-3">
              Our Story
              <span className="font-body font-normal text-4xl sm:text-5xl text-[#1C2A22] translate-y-1">
                ↘
              </span>
            </h2>
          </div>
 
          {/* right — copy + founder quote */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-body text-base sm:text-lg leading-relaxed text-[#1C2A22]">
         Our founder,Muhammad Yameen, started Bin Yameen Travel with a simple vision: to make travel easier, more personal, and hassle-free.
            </p>
 
            <p className="font-body text-[15px] sm:text-base leading-relaxed text-[#1C2A22]/65">
             Founded in March 2024, Bin Yameen Travel began with a commitment to serving both pilgrims and travelers with thoughtful planning and dependable support. Yameen wanted to create a travel experience where people could feel confident knowing that the details of their journey were being handled with care. From personalized itineraries to carefully considered travel arrangements, Bin Yameen Travel was built around understanding what each traveler actually needs.
            </p>
 
            <p className="font-body text-[15px] sm:text-base leading-relaxed text-[#1C2A22]/65">
             Today, that vision continues to shape the way Bin Yameen Travel approaches every journey. Rather than offering the same experience to everyone, the focus remains on creating bespoke journeys tailored to each person's requirements, lifestyle, and pace. Every detail is handled with care and precision, allowing travelers to spend less time worrying about logistics and more time experiencing the journey itself. Whether traveling for pilgrimage or adventure, Bin Yameen Travel strives to make every experience smooth, comfortable, personal, and worth remembering.
            </p>
 
            {/* founder */}
            <div className="pt-4">
              <div className="flex items-center gap-3">
                <img
                  src="/mike-simorangkir.jpg"
                  alt="Mike Simorangkir"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-body font-semibold text-sm text-[#1C2A22]">
                  Muhammad Yameen
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#1C2A22]/50">
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
 
              <blockquote className="mt-4 font-display font-medium italic text-lg sm:text-xl leading-snug text-[#1C2A22] border-l-2 border-[#A8402A] pl-4">
              “Our goal is to create a better way to travel one that is simpler, more personal, and thoughtfully designed around you.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactUs/>
    <Footer/>
    </section>

   
  );
}
 
 
/*
  NOTE on fonts in a real Next.js app (App Router):

  // app/layout.jsx
  import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

  const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
  const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
  const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

  Then apply `${fraunces.variable} ${inter.variable} ${mono.variable}` to <html>,
  drop the <style> @import block above, and map font-display/font-body/font-mono
  to `font-[family-name:var(--font-display)]` etc. in tailwind.config.js.
*/
