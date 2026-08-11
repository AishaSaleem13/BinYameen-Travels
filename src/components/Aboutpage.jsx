

import Image from "next/image";
import Navbarnew from "./navbarnew";
import layout from "./layout";
import Hero from "./about2";
export default function CraftedEscapesHero() {
  return (
    <>
      {/* ---------- NAVBAR ---------- */}

<Navbarnew/>
      {/* ---------- HERO ---------- */}
      <section className="relative">
        <div className="relative h-[420px] w-full overflow-hidden md:h-[460px]">
          <Image
            src="/img.jpg"
            alt="Aerial view of turquoise ocean and beach"
            fill
            priority
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
          <div className="absolute bottom-[-18px] right-6 w-60 rounded-md bg-[#1c3a52] p-8 text-center shadow-xl md:right-10 md:w-70">
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
              Our Crafted Escapes advisors are ready to plan the perfect
              trip for you and/or your family.
            </p>
            <button className="rounded-md border border-white/70 px-5 py-2 text-sm font-medium text-white hover:bg-white/10">
              Let&apos;s Get Started &raquo;
            </button>
          </div>
        </div>
      </section>

      {/* ---------- TRAVEL IS OUR BUSINESS ---------- */}
      {/* <section className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2"> */}
          {/* left copy */}
          {/* <div>
            <h2
              className="mb-6 text-3xl text-[#1c3a52] md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Travel is Our Business
            </h2>
            <p className="mb-5 text-[15px] leading-relaxed text-slate-500">
              At Binyameen travels, we believe in returning from a trip with
              memories, not just souvenirs. We love every single part of
              curating ultra-customized travel experiences for our clients,
              and are deeply invested in their satisfaction and the joy
              that they derive from their travels.
            </p>
            <p className="mb-8 text-[15px] leading-relaxed text-slate-500">
              Our advisors are constantly on the go  traveling
              worldwide in search of the best experiences and hidden gems
              to share with clients. Our meticulous attention to detail
              coupled with extensive travel experience are what will take
              your vacation from a &ldquo;trip&rdquo; to the &ldquo;trip of
              a lifetime&rdquo;.
            </p>
            <button className="rounded-md bg-[#1c3a52] px-6 py-3 text-sm font-semibold text-white hover:bg-[#152c3f]">
              Why work with Crafted Escapes?
            </button>
          </div> */}

          {/* right image with rotating badge */}
          {/* <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative h-80 w-full overflow-hidden rounded-sm shadow-lg md:h-96">
                <Image
                  src="/img.jpg"
                  alt="Blue domed church in Santorini"
                  fill
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover"
                />
              </div> */}

              {/* rotating circular badge */}
              {/* <div className="absolute -left-15 -top-10 h-28 w-28 animate-[spin_14s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
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
                    <textPath href="#circlePath" startOffset="0%">
                      craft your next trip &#8226;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Hero/>
    </>
  );
}
