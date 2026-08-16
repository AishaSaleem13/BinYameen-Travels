"use client";

import Link from "next/link";
import React from "react";

function About() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-16
          sm:px-6
          sm:py-20
          md:px-10
          md:py-24
          lg:px-16
        "
      >

        {/* ================= ABOUT CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-[0.95fr_1.05fr]
            items-center
            gap-3
            sm:grid-cols-2
            sm:gap-8
            md:gap-12
            lg:gap-16
          "
        >

          {/* ================= LEFT TEXT ================= */}
          <div className="min-w-0">

            <h2
              className="
                mb-3
                text-[20px]
                leading-tight
                text-[#1c3a52]
                sm:mb-4
                sm:text-3xl
                md:text-4xl
              "
              style={{ fontFamily: "var(--font-display)" }}
            >
              Travel is Our Business
            </h2>

            <p
              className="
                mb-3
                text-[9px]
                leading-[1.65]
                text-slate-500
                sm:mb-4
                sm:text-[12px]
                sm:leading-relaxed
                md:text-[15px]
              "
            >
              At Bin Yameen Travels, we believe in returning from a trip
              with memories, not just souvenirs. We love every single part
              of curating ultra-customized travel experiences for our
              clients, and are deeply invested in their satisfaction and
              the joy that they derive from their travels.
            </p>

            <p
              className="
                mb-4
                text-[9px]
                leading-[1.65]
                text-slate-500
                sm:mb-5
                sm:text-[12px]
                sm:leading-relaxed
                md:text-[15px]
              "
            >
              Our advisors are constantly on the go traveling worldwide
              in search of the best experiences and hidden gems to share
              with clients. Our meticulous attention to detail coupled
              with extensive travel experience are what will take your
              vacation from a &ldquo;trip&rdquo; to the &ldquo;trip of a
              lifetime&rdquo;.
            </p>

       <Link
       href="/aboutpage"
              className="
                rounded-md
                bg-[#1c3a52]
                px-3
                py-2
                text-[9px]
                font-semibold
                text-white
                transition
                hover:bg-[#152c3f]
                sm:px-5
                sm:py-2.5
                sm:text-xs
                md:px-6
                md:py-3
                md:text-sm
              "
            >
              Know More
           
       </Link>

          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative min-w-0 md:flex md:justify-end">

            {/* IMAGE WRAPPER */}
            <div
              className="
                relative
                w-full
                overflow-visible

                md:w-full
                md:max-w-md
              "
            >

              <div
                className="
                  relative
                  h-[210px]
                  w-full
                  overflow-hidden
                  rounded-sm
                  shadow-lg

                  sm:h-[280px]
                  md:h-96
                "
              >

                <img
                  src="/img.webp"
                  alt="Travel destination"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

              </div>


              {/* ================= ROTATING BADGE ================= */}
              <div
                className="
                  absolute
                  -left-4
                  -top-5
                  h-12
                  w-12
                  animate-[spin_14s_linear_infinite]

                  sm:-left-6
                  sm:-top-6
                  sm:h-16
                  sm:w-16

                  md:-left-8
                  md:-top-8
                  md:h-24
                  md:w-24
                "
              >

                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full"
                >

                  <defs>
                    <path
                      id="circlePath"
                      d="
                        M 50, 50
                        m -38, 0
                        a 38,38 0 1,1 76,0
                        a 38,38 0 1,1 -76,0
                      "
                    />
                  </defs>

                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="white"
                    stroke="#1c3a52"
                    strokeWidth="1"
                  />

                  <text
                    fontSize="8.3"
                    fill="#1c3a52"
                    letterSpacing="1.5"
                    fontFamily="var(--font-body), sans-serif"
                    fontWeight="600"
                  >
                    <textPath
                      href="#circlePath"
                      startOffset="0%"
                    >
                      craft your next trip •
                    </textPath>
                  </text>

                </svg>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;