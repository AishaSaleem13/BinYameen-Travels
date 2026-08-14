"use client";

import React from "react";
import Navbarnew from "./navbarnew";
import Footer from "./footer";
import ContactUs from "./Contact";
import BookingWidget from "./formbooking";
import { useSearchParams } from "next/navigation";

function Bookingpage() {
  const searchParams = useSearchParams();

  const packageId = searchParams.get("PackageId");
  const packageName = searchParams.get("PackageName");
  const packageImage = searchParams.get("PackageImage");

  console.log("Package ID:", packageId);
  console.log("Package Name:", packageName);
  console.log("Package Image:", packageImage);

  return (
    <>
      <Navbarnew />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[420px] w-full overflow-hidden md:h-[460px]">

          <img
            src="/img.jpg"
            alt="Travel"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-5 sm:px-7 md:px-10">
            <h1
              className="max-w-[55%] text-3xl font-semibold leading-tight text-white drop-shadow-md sm:text-4xl md:max-w-xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Sit Back, Relax, and Let Us Craft Your Perfect Escape
            </h1>
          </div>

        </div>
      </section>

      <BookingWidget
        PackageId={packageId}
        PackageName={packageName}
        PackageImage={packageImage}
        variant="page"
      />

      <ContactUs />
      <Footer />
    </>
  );
}

export default Bookingpage;