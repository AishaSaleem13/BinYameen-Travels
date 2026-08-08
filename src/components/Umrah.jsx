import Image from "next/image";
import Navbarnew from "./navbarnew";
import UmrahPackages from "./umrahpackages";
import FaqSection from "./faq";

export default function UmrahPage() {
  return (
    <>
      {/* Compact page header — not a homepage hero.
          No nav bar here: your site nav should already live in a shared
          Layout/Navbar component that wraps every page, so it isn't
          duplicated per-page. */}
          
     
            <section className="relative w-full h-[450px] md:h-[400px] text-[#FAF3E7] font-jost">
  <Navbarnew variant="light" />

  <Image
    src="/umrah4.jpg"
    alt="Masjid al-Haram"
    fill
    priority
    className="object-cover object-top"
  />

  {/* warm maroon-black overlay, ties to brand instead of flat neutral black */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#2a0f0f]/50 to-black/65" />

  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

    {/* breadcrumb */}
    <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#E4C98A] mb-4">
      <span>Home</span>
      <span className="text-[#E4C98A]/50">/</span>
      <span className="text-[#FAF3E7]">Umrah 2026</span>
    </div>

    {/* thin gold divider — small, deliberate signature element */}
    <div className="w-10 h-[1.5px] bg-[#FDF9F2]mb-5" />

    {/* headline */}
    <h1 className="font-serif text-4xl md:text-[52px] leading-[1.1] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
      Umrah <span className="text-[#E4C98A]">2026</span> Packages
    </h1>

    {/* subhead */}
    <p className="mt-4 max-w-md text-[15px] md:text-base text-[#F1E7D6]/90 font-light tracking-wide leading-relaxed">
      Three thoughtfully built pathways to Makkah and Madinah.
    </p>

  </div>
</section>

      {/* Intro + sacred sites */}
      <section className="w-full mx-auto px-6 pt-20 pb-24 bg-[#f6f1e7] text-[#241C17] font-jost">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-16 mb-16">
          <div className="font-serif text-[32px] leading-[1.35] text-[#6b5f54] font-medium">
            Every pilgrimage begins with intention…{" "}
            <strong className="text-[#4A0D18] font-semibold">
              your Umrah, thoughtfully arranged.
            </strong>
          </div>

          <div className="space-y-4">
            <p className="text-sm leading-[1.85] text-[#6b5f54] font-light">
              At Bin Yameen Travel, we believe every Umrah journey deserves
              the same care as the intention behind it. From your first
              steps into ihram to the final farewell at the Haram, we
              handle the details so you can stay present in the moment.
            </p>
            <p className="text-sm leading-[1.85] text-[#6b5f54] font-light">
              Our team works directly with trusted hotels and transport
              partners across Makkah and Madinah, keeping every arrangement
              transparent — with dedicated support before, during, and
              after your journey.
            </p>
          </div>
        </div>

        {/* Photo trio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[340px] md:max-w-none mx-auto md:mx-0 mb-12">
          {/* Left — Masjid Quba: only top-right corner rounded */}
          <div className="text-center">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#F1E7D6] shadow-[0_18px_40px_-20px_rgba(74,13,24,0.3)] rounded-tl-md rounded-tr-[220px] rounded-b-md">
              <Image
                src="/quba.jpg"
                alt="Masjid Quba"
                fill
                sizes="(max-width: 820px) 340px, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-left pl-1.5">
              <span className="font-serif font-semibold text-[17px] text-[#4A0D18]">
                Masjid Quba
              </span>
              <span className="text-xs text-[#C0973F] uppercase tracking-wide font-medium ml-1.5">
                Ihram
              </span>
            </div>
          </div>

          {/* Center — Kaaba: full dome, both top corners rounded */}
          <div className="text-center">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#F1E7D6] shadow-[0_18px_40px_-20px_rgba(74,13,24,0.3)] rounded-t-[220px] rounded-b-md">
              <Image
                src="/image7.jpg"
                alt="Masjid al-Haram, the Kaaba"
                fill
                sizes="(max-width: 820px) 340px, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-left pl-1.5">
              <span className="font-serif font-semibold text-[17px] text-[#4A0D18]">
                Masjid al-Haram
              </span>
              <span className="text-xs text-[#C0973F] uppercase tracking-wide font-medium ml-1.5">
                Makkah
              </span>
            </div>
          </div>

          {/* Right — Masjid Nabawi: only top-left corner rounded */}
          <div className="text-center">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#F1E7D6] shadow-[0_18px_40px_-20px_rgba(74,13,24,0.3)] rounded-tl-[220px] rounded-tr-md rounded-b-md">
              <Image
                src="/image2.jpg"
                alt="Masjid Nabawi"
                fill
                sizes="(max-width: 820px) 340px, 33vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-left pl-1.5">
              <span className="font-serif font-semibold text-[17px] text-[#4A0D18]">
                Masjid Nabawi
              </span>
              <span className="text-xs text-[#C0973F] uppercase tracking-wide font-medium ml-1.5">
                Madinah
              </span>
            </div>
          </div>
        </div>

        {/* CTA — scrolls down to the pricing cards on the same page,
            not a duplicate "View Packages" link since you're already
            on the packages page. Point this at your pricing section id. */}
        <div className="text-center">
          <a
            href="#packages"
            className="inline-block px-9 py-4 bg-[#6E1423] hover:bg-[#4A0D18] text-[#FAF3E7] text-[12.5px] tracking-[0.14em] uppercase font-medium transition-colors"
          >
            See Package Details ↓
          </a>
        </div>
      </section>
       <section className="grid min-h-[640px] grid-cols-1 md:grid-cols-[1.15fr_1fr]">
      {/* Image side */}
      <div
        
        aria-label="Couple walking on a beach at sunset"
        className="relative min-h-[340px] bg-cover bg-center md:min-h-0"
        style={{
          backgroundImage:
       "url('/umrah.jpg')",
        }}
      />

      {/* Copy side */}
<div className="flex flex-col justify-center bg-gradient-to-br from-[#24070D] via-[#3A0A14] to-[#160407] px-8 py-16 text-white sm:px-12 md:px-[4.5vw] md:py-[5vw]">

  <p className="font-serif text-xl tracking-wide text-[#D6C2A5] sm:text-2xl">
    TRAVEL WITH 

  </p>

  <h2 className="mt-1 font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
    <span className="text-[#C9A96E]">EASE.</span>
  </h2>

  <p className="mt-6 font-serif text-xl tracking-wide text-[#D6C2A5] sm:text-2xl">
 ARRIVE WITH 
  </p>

  <h2 className="mt-1 font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl">
    <span className="text-[#C9A96E]">PEACE.</span>
  </h2>

  <p className="mt-8 max-w-[34ch] font-jost text-base leading-8 text-white/75 sm:text-[17px]">
    From your Umrah visa and flights to carefully selected hotels,
    transportation, and arrangements in Makkah and Madinah, we take
    care of every essential detail with thoughtful planning and
    dedicated support allowing you to remain present throughout
    your sacred journey.
  </p>
      </div>
    </section>
    <UmrahPackages/>
    <FaqSection/>
    </>
  );
}
