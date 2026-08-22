import ContactUs from "./Contact";
import Footer from "./footer";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-gray-50 text-[#1C2A22]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative w-full overflow-hidden">

          {/* Background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundSize: "56px 56px",
            }}
          />

          <div
            className="
              relative mx-auto max-w-6xl
              px-5
              pt-14 pb-10
              sm:px-8 sm:pt-20 sm:pb-14
              md:px-10 md:pt-24 md:pb-16
            "
          >

            {/* =================================================
                EYEBROW
            ================================================= */}

            <div className="mb-5 flex items-center gap-2 sm:mb-6 sm:gap-3">

              <span
                className="
                  h-[5px]
                  w-[5px]
                  shrink-0
                  rounded-full
                  bg-[#A8402A]
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#A8402A]
                  sm:text-[11px]
                  sm:tracking-[0.22em]
                "
              >
                We are Bin Yameen Travels
              </span>

            </div>


            {/* =================================================
                HEADLINE + DESCRIPTION
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                items-start
                gap-5
                sm:gap-7
                lg:grid-cols-12
                lg:items-end
                lg:gap-6
              "
            >

              {/* Heading */}

              <h1
                className="
                  font-voice
                  text-[13vw]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.02em]
                  text-[#1C2A22]
                  sm:text-6xl
                  md:text-7xl
                  lg:col-span-8
                "
              >
                We set out to build
                <br />

                <span className="font-normal italic text-[#4B5F45]">
                  a better
                </span>

                <br />

                way to travel
              </h1>


              {/* Description */}

              <p
                className="
                  font-body
                  text-[12px]
                  leading-[1.7]
                  text-[#1C2A22]/70
                  sm:text-[15px]
                  sm:leading-relaxed
                  md:text-base
                  lg:col-span-4
                  lg:border-l
                  lg:border-[#1C2A22]/15
                  lg:pb-2
                  lg:pl-6
                "
              >
                Together with the travelers and families who trust Bin
                Yameen Travels, we&apos;re making travel simpler from
                start to finish with thoughtful planning, trusted
                guidance, flexible journeys, and experiences worth
                remembering.
              </p>

            </div>


            {/* =================================================
                IMAGE COLLAGE
            ================================================= */}

            <div
              className="
                relative
                mt-10
                grid
                grid-cols-3
                items-end
                gap-2.5
                sm:mt-14
                sm:gap-4
                md:mt-16
                md:gap-5
              "
            >

              {/* Main Image */}

              <figure
                className="
                  relative
                  col-span-2
                  aspect-[16/10]
                  overflow-hidden
                  rounded-sm
                  shadow-[0_18px_40px_-20px_rgba(28,42,34,0.4)]
                "
              >
                <Image
                  src="/Team.jpg"
                  alt="Bin Yameen Travels team"
                  fill
                  priority
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    transition-transform
                    duration-700
                  "
                />
              </figure>


              {/* Secondary Image */}

              <figure
                className="
                  relative
                  col-span-1
                  aspect-[3/4]
                  overflow-hidden
                  rounded-sm
                  shadow-[0_18px_40px_-20px_rgba(28,42,34,0.4)]
                "
              >
                <Image
                  src="/Team2.jpg"
                  alt="Bin Yameen Travels advisor"
                  fill
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                  "
                />
              </figure>


              {/* =================================================
                  RULER / FOUNDATION LINE
              ================================================= */}

              <div
                className="
                  col-span-3
                  mt-2
                  flex
                  h-2.5
                  items-end
                  sm:mt-3
                  sm:h-4
                "
              >
                {Array.from({ length: 42 }).map((_, i) => (
                  <span
                    key={i}
                    className="flex-1 border-l border-[#1C2A22]/20"
                    style={{
                      height: i % 6 === 0 ? "100%" : "40%",
                    }}
                  />
                ))}
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OUR STORY
        ===================================================== */}

        <section className="w-full bg-gray-50 text-[#1C2A22]">

          <div
            className="
              mx-auto
              max-w-6xl
              px-5
              py-14
              sm:px-8
              sm:py-20
              md:px-10
              md:py-24
            "
          >

            <div
              className="
                grid
                grid-cols-1
                gap-8
                lg:grid-cols-12
                lg:gap-16
              "
            >

              {/* LEFT — HEADING */}

              <div className="lg:col-span-5">

                <h2
                  className="
                    flex
                    items-start
                    gap-2
                    font-voice
                    text-4xl
                    font-bold
                    leading-none
                    sm:text-5xl
                    md:text-6xl
                  "
                >
                  Our Story

                  <span
                    className="
                      translate-y-1
                      font-body
                      text-3xl
                      font-normal
                      sm:text-4xl
                    "
                  >
                    ↘
                  </span>
                </h2>

              </div>


              {/* RIGHT — CONTENT */}

              <div
                className="
                  space-y-5
                  sm:space-y-6
                  lg:col-span-7
                "
              >

                {/* Intro */}

                <p
                  className="
                    font-body
                    text-sm
                    leading-[1.7]
                    text-[#1C2A22]
                    sm:text-base
                    md:text-lg
                  "
                >
                  Our founder, Muhammad Yameen, started Bin Yameen
                  Travels with a simple vision: to make travel easier,
                  more personal, and hassle-free.
                </p>


                {/* First paragraph */}

                <p
                  className="
                    font-body
                    text-[13px]
                    leading-[1.75]
                    text-[#1C2A22]/65
                    sm:text-[15px]
                    sm:leading-relaxed
                  "
                >
                  Founded in March 2024, Bin Yameen Travels began with
                  a commitment to serving both pilgrims and travelers
                  with thoughtful planning and dependable support.
                  Muhammad Yameen wanted to create a travel experience
                  where people could feel confident knowing that the
                  details of their journey were being handled with care.
                  From personalized itineraries to carefully considered
                  travel arrangements, Bin Yameen Travels was built
                  around understanding what each traveler actually needs.
                </p>


                {/* Second paragraph */}

                <p
                  className="
                    font-body
                    text-[13px]
                    leading-[1.75]
                    text-[#1C2A22]/65
                    sm:text-[15px]
                    sm:leading-relaxed
                  "
                >
                  Today, that vision continues to shape the way Bin
                  Yameen Travels approaches every journey. Rather than
                  offering the same experience to everyone, the focus
                  remains on creating bespoke journeys tailored to each
                  person&apos;s requirements, lifestyle, and pace. Every
                  detail is handled with care and precision, allowing
                  travelers to spend less time worrying about logistics
                  and more time experiencing the journey itself.
                  Whether traveling for pilgrimage or adventure, Bin
                  Yameen Travels strives to make every experience
                  smooth, comfortable, personal, and worth remembering.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOUNDER MESSAGE
        ===================================================== */}

        <section className="w-full bg-gray-50 text-[#1C2A22]">

          <div
            className="
              mx-auto
              max-w-6xl
              px-5
              pb-14
              sm:px-8
              sm:pb-20
              md:px-10
              md:pb-24
            "
          >

            <div
              className="
                grid
                overflow-hidden
                rounded-sm
                bg-[#E9E7DF]
                shadow-[0_20px_50px_-25px_rgba(28,42,34,0.35)]
                md:grid-cols-12
              "
            >

              {/* =================================================
                  CEO IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  min-h-[360px]
                  md:col-span-4
                  md:min-h-[470px]
                "
              >

                <Image
                  src="/Yameen.webp"
                  alt="Muhammad Yameen - Founder of Bin Yameen Travels"
                  fill
                  className="object-cover "
                />

              </div>


              {/* =================================================
                  FOUNDER MESSAGE CONTENT
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  justify-center
                  px-6
                  py-10
                  sm:px-10
                  sm:py-12
                  md:col-span-8
                  md:px-12
                  lg:px-14
                  lg:py-14
                "
              >

                {/* Label */}

                <div className="flex items-center gap-3">

                  <span
                    className="
                      h-[5px]
                      w-[5px]
                      shrink-0
                      rounded-full
                      bg-[#A8402A]
                    "
                  />

                  <p
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-[#A8402A]
                      sm:text-[10px]
                    "
                  >
                    Founder Message
                  </p>

                </div>


                {/* Heading */}

                <h3
                  className="
                    mt-5
                    max-w-xl
                    font-voice
                    text-3xl
                    font-semibold
                    leading-[1.05]
                    tracking-tight
                    text-[#1C2A22]
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Travel should feel
                  <span className="font-normal italic text-[#4B5F45]">
                    {" "}personal.
                  </span>
                </h3>


                {/* Divider */}

                <div className="mt-6 h-px w-12 bg-[#A8402A]" />


                {/* Message */}

                <blockquote
                  className="
                    mt-6
                    max-w-2xl
                    font-voice
                    text-lg
                    font-medium
                    leading-[1.6]
                    text-[#1C2A22]/80
                    sm:text-xl
                    md:text-2xl
                  "
                >
                  “Our goal is simple: to take the stress out of travel
                  and replace it with confidence, care, and experiences
                  that stay with you long after the journey ends.”
                </blockquote>


                {/* Signature */}

                <div className="mt-8">

                  <p
                    className="
                      font-voice
                      text-base
                      font-semibold
                      text-[#1C2A22]
                      sm:text-lg
                    "
                  >
                    Muhammad Yameen
                  </p>

                  <p
                    className="
                      mt-1
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-[#1C2A22]/50
                    "
                  >
                    Founder Of Bin Yameen Travels
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <ContactUs />


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Footer />

      </section>
    </>
  );
}