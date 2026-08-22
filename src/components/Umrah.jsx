import Image from "next/image";
import Navbarnew from "./navbarnew";
import UmrahPackages from "./umrahpackages";
import FaqSection from "./faq";
import Footer from "./footer"

export default function UmrahPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative h-[430px] w-full overflow-hidden text-[#FAF3E7] font-jost sm:h-[450px] md:h-[400px]">
        <Navbarnew variant="light" />

        <Image
          src="/umrah4.jpg"
          alt="Masjid al-Haram"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#2a0f0f]/50 to-black/65" />

        {/* Hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-6">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#E4C98A] sm:text-[11px] sm:tracking-[0.25em]">
            <span>Home</span>
            <span className="text-[#E4C98A]/50">/</span>
            <span className="text-[#FAF3E7]">Umrah 2026</span>
          </div>

          {/* Divider */}
          <div className="mb-5 h-[1.5px] w-10 bg-[#FDF9F2]" />

          {/* Heading */}
          <h1 className="font-serif text-3xl leading-[1.1] tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-4xl md:text-[52px]">
            Umrah <span className="text-[#E4C98A]">2026</span> Packages
          </h1>

          {/* Subheading */}
          <p className="mt-4 max-w-md text-[13px] leading-relaxed tracking-wide text-[#F1E7D6]/90 sm:text-[15px] md:text-base">
            Three thoughtfully built pathways to Makkah and Madinah.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRO + SACRED SITES
      ====================================================== */}
      <section className="w-full bg-[#f6f1e7] px-5 pb-20 pt-14 text-[#241C17] font-jost sm:px-6 sm:pb-24 sm:pt-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:mb-16">
            {/* Left */}
            <div className="font-serif text-2xl font-medium leading-[1.35] text-[#6b5f54] sm:text-[28px] md:text-[32px]">
              Every pilgrimage begins with intention…{" "}
              <strong className="font-semibold text-[#4A0D18]">
                your Umrah, thoughtfully arranged.
              </strong>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <p className="text-[13px] font-light leading-[1.8] text-[#6b5f54] sm:text-sm sm:leading-[1.85]">
                At Bin Yameen Travels, we believe every Umrah journey deserves
                the same care as the intention behind it. From your first
                steps into ihram to the final farewell at the Haram, we handle
                the details so you can stay present in the moment.
              </p>

              <p className="text-[13px] font-light leading-[1.8] text-[#6b5f54] sm:text-sm sm:leading-[1.85]">
                Our team works directly with trusted hotels and transport
                partners across Makkah and Madinah, keeping every arrangement
                transparent — with dedicated support before, during, and after
                your journey.
              </p>
            </div>
          </div>

          {/* =====================================================
              SACRED SITE CARDS
          ====================================================== */}
          <div className="mb-12 grid grid-cols-3 gap-2 sm:gap-4 md:gap-10">
            {/* Quba */}
            <div className="text-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-tl-md rounded-tr-[70px] rounded-b-md border border-[#F1E7D6] shadow-[0_18px_40px_-20px_rgba(74,13,24,0.3)] sm:rounded-tr-[120px] md:rounded-tr-[220px]">
                <Image
                  src="/quba.jpg"
                  alt="Masjid Quba"
                  fill
                  sizes="(max-width: 640px) 33vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-3 text-left pl-0.5 sm:mt-4 sm:pl-1.5">
                <span className="block font-serif text-[12px] font-semibold text-[#4A0D18] sm:text-[15px] md:text-[17px]">
                  Masjid Quba
                </span>

                <span className="text-[8px] font-medium uppercase tracking-wide text-[#C0973F] sm:text-[10px] md:text-xs">
                  Ihram
                </span>
              </div>
            </div>

            {/* Haram */}
            <div className="text-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[70px] rounded-b-md border border-[#F1E7D6] shadow-[0_18px_40px_-20px_rgba(74,13,24,0.3)] sm:rounded-t-[120px] md:rounded-t-[220px]">
                <Image
                  src="/image7.jpg"
                  alt="Masjid al-Haram, the Kaaba"
                  fill
                  sizes="(max-width: 640px) 33vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-3 text-left pl-0.5 sm:mt-4 sm:pl-1.5">
                <span className="block font-serif text-[12px] font-semibold text-[#4A0D18] sm:text-[15px] md:text-[17px]">
                  Masjid al-Haram
                </span>

                <span className="text-[8px] font-medium uppercase tracking-wide text-[#C0973F] sm:text-[10px] md:text-xs">
                  Makkah
                </span>
              </div>
            </div>

            {/* Nabawi */}
            <div className="text-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[70px] rounded-tr-md rounded-b-md border border-[#F1E7D6] shadow-[0_18px_40px_-20px_rgba(74,13,24,0.3)] sm:rounded-tl-[120px] md:rounded-tl-[220px]">
                <Image
                  src="/image2.jpg"
                  alt="Masjid Nabawi"
                  fill
                  sizes="(max-width: 640px) 33vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-3 text-left pl-0.5 sm:mt-4 sm:pl-1.5">
                <span className="block font-serif text-[12px] font-semibold text-[#4A0D18] sm:text-[15px] md:text-[17px]">
                  Masjid Nabawi
                </span>

                <span className="text-[8px] font-medium uppercase tracking-wide text-[#C0973F] sm:text-[10px] md:text-xs">
                  Madinah
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              
              className="inline-block bg-[#6E1423] px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#FAF3E7] transition-colors hover:bg-[#4A0D18] sm:px-9 sm:py-4 sm:text-[12.5px]"
            >
              See Package Details ↓
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAVEL WITH EASE
      ====================================================== */}
      <section className="grid min-h-0 grid-cols-1 md:min-h-[640px] md:grid-cols-[1.15fr_1fr]">
        {/* Image */}
        <div
          aria-label="Couple walking on a beach at sunset"
          className="relative h-[300px] bg-cover bg-center sm:h-[360px] md:h-auto md:min-h-0"
          style={{
            backgroundImage: "url('/umrah.jpg')",
          }}
        />

        {/* Text */}
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#24070D] via-[#3A0A14] to-[#160407] px-7 py-12 text-white sm:px-10 sm:py-14 md:px-[4.5vw] md:py-[5vw]">
          <p className="font-serif text-lg tracking-wide text-[#D6C2A5] sm:text-2xl">
            TRAVEL WITH
          </p>

          <h2 className="mt-1 font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl">
            <span className="text-[#C9A96E]">EASE.</span>
          </h2>

          <p className="mt-6 font-serif text-lg tracking-wide text-[#D6C2A5] sm:text-2xl">
            ARRIVE WITH
          </p>

          <h2 className="mt-1 font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl">
            <span className="text-[#C9A96E]">PEACE.</span>
          </h2>

          <p className="mt-7 max-w-[34ch] font-jost text-[14px] leading-7 text-white/75 sm:mt-8 sm:text-[17px] sm:leading-8">
            From your Umrah visa and flights to carefully selected hotels,
            transportation, and arrangements in Makkah and Madinah, we take
            care of every essential detail with thoughtful planning and
            dedicated support allowing you to remain present throughout your
            sacred journey.
          </p>
        </div>
      </section>

      {/* =====================================================
          PACKAGES
      ====================================================== */}
      <UmrahPackages />

      {/* =====================================================
          FAQ
      ====================================================== */}
      <FaqSection />
      <Footer/>
    </>
  );
}