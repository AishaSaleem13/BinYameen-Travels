"use client";

import React from "react";
import Navbarnew from "./navbarnew";
import CustomizeForm from "./Customizepage";
import ContactUs from "./Contact";
import Footer from "./footer";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Customize() {
  const searchparams = useSearchParams();
  const tripType = searchparams.get("TripType");

  return (
    <>
      <Navbarnew />

      {/* ---------- HERO ---------- */}
      <section className="relative w-full">
        <div className="relative h-[360px] w-full overflow-hidden sm:h-[400px] md:h-[460px] lg:h-[420px]">

          {/* Background Image */}
          <img
            src="/img.webp"
            alt="Aerial view of turquoise ocean and beach"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Heading */}
          <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-5 sm:px-7 md:px-10">
            <h1
              className="
                max-w-[330px]
                text-3xl
                font-semibold
                leading-[1.15]
                text-white
                drop-shadow-md

                sm:max-w-[450px]
                sm:text-4xl

                md:max-w-xl
                md:text-5xl
              "
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sit Back, Relax, and Let Us Craft Your Perfect Escape
            </h1>
          </div>

          {/* ---------- READY TO GO CARD ---------- */}
          {/* Hidden on mobile */}
          <div
            className="
              absolute
              bottom-[-18px]
              right-6
              hidden
              rounded-md
              bg-[#1c3a52]
              p-6
              text-center
              shadow-xl

              md:block
              md:right-10
              md:w-64

              lg:w-[280px]
              lg:p-8
            "
          >
            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/90">
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CE
              </span>
            </div>

            {/* Heading */}
            <h3
              className="mb-2 text-xl text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Go?
            </h3>

            {/* Text */}
            <p className="mb-5 text-sm leading-relaxed text-slate-300">
              Our Bin Yameen  advisors are ready to plan the perfect trip for
              you and/or your family.
            </p>

            {/* Button */}
         <Link
         href="/Contact"
              type="button"
              className="rounded-md border border-white/70 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Let&apos;s Get Started &raquo;
            
         </Link>
          </div>
        </div>
      </section>

      {/* ---------- CUSTOMIZE FORM ---------- */}
      <section className="w-full bg-gray-50 px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-5xl">
          <CustomizeForm TripType={tripType} />
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <ContactUs />

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </>
  );
}

export default Customize;