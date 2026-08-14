"use client";

export default function ContactUs() {
  return (
    <section className="w-full bg-gray-50 py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14">

        <div
          className="
            grid
            overflow-hidden
            rounded-xl
            border
            border-gray-100
            bg-white
            shadow-sm

            lg:grid-cols-3
            lg:rounded-2xl
          "
        >

          {/* =====================================================
              LEFT — CONTACT INFO
          ===================================================== */}
          <div className="p-6 sm:p-8 md:p-10">

            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#800E13] sm:text-sm">
              Contact Us
            </p>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-gray-900 sm:mt-3 sm:text-3xl md:text-4xl">
              Have Questions?
            </h2>

            <p className="mt-2 text-base font-medium leading-snug text-gray-700 sm:mt-3 sm:text-lg">
              Our Travel Experts Are Ready to Help You.
            </p>

            <p className="mt-3 text-[13px] leading-6 text-gray-500 sm:mt-4 sm:text-sm sm:leading-7">
              Whether you need visa assistance, flight booking support, or
              help planning your next holiday, our friendly team is just a
              message away. We aim to respond within 24 hours.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-6 space-y-5 border-t border-gray-100 pt-6 sm:mt-7 sm:space-y-6 sm:pt-7">

              {/* ================= HEAD OFFICE ================= */}
              <div className="flex items-start gap-3 sm:gap-4">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#800E13]/10 text-[#800E13] sm:h-11 sm:w-11">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                </span>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-gray-900 sm:text-base">
                    Head Office
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-gray-500 sm:text-sm sm:leading-6">
                    Plot C, 22 Commercial Area, Sector Z DHA Phase 3,
                    Lahore, 56000
                  </p>

                </div>
              </div>


              {/* ================= EMAIL ================= */}
              <div className="flex items-start gap-3 sm:gap-4">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#800E13]/10 text-[#800E13] sm:h-11 sm:w-11">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4 7 8 6 8-6"
                    />
                  </svg>

                </span>

                <div className="min-w-0">

                  <p className="text-sm font-semibold text-gray-900 sm:text-base">
                    Email Support
                  </p>

                  <a
                    href="mailto:binyameen.6363@gmail.com"
                    className="mt-1 block break-all text-[12px] text-gray-500 transition-colors hover:text-[#800E13] sm:text-sm"
                  >
                    binyameen.6363@gmail.com
                  </a>

                </div>
              </div>


              {/* ================= PHONE ================= */}
              <div className="flex items-start gap-3 sm:gap-4">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#800E13]/10 text-[#800E13] sm:h-11 sm:w-11">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 16.92v3a2 2 0 0 1-2.18 2
                      19.8 19.8 0 0 1-8.63-3.07
                      19.5 19.5 0 0 1-6-6
                      19.8 19.8 0 0 1-3.07-8.67
                      A2 2 0 0 1 4.11 2h3
                      a2 2 0 0 1 2 1.72
                      12.8 12.8 0 0 0 .7 2.81
                      2 2 0 0 1-.45 2.11L8.09 9.91
                      a16 16 0 0 0 6 6l1.27-1.27
                      a2 2 0 0 1 2.11-.45
                      12.8 12.8 0 0 0 2.81.7
                      A2 2 0 0 1 22 16.92Z"
                    />
                  </svg>

                </span>

                <div>

                  <p className="text-sm font-semibold text-gray-900 sm:text-base">
                    Contact Number
                  </p>

                  <div className="mt-1 space-y-1 text-[12px] text-gray-500 sm:text-sm">

                    <a
                      href="tel:+923422673475"
                      className="block transition-colors hover:text-[#800E13]"
                    >
                      +92 342 2673475
                    </a>

                    <a
                      href="tel:+923352846251"
                      className="block transition-colors hover:text-[#800E13]"
                    >
                      +92 335 2846251
                    </a>

                    <a
                      href="tel:+923263569976"
                      className="block transition-colors hover:text-[#800E13]"
                    >
                      +92 326 3569976
                    </a>

                  </div>

                </div>
              </div>

            </div>
          </div>


          {/* =====================================================
              MIDDLE — IMAGE
          ===================================================== */}
          <div className="relative h-[260px] sm:h-[340px] md:h-[400px] lg:h-auto lg:min-h-0">

            <img
              src="/contactimage.jpg"
              alt="Beautiful travel destination"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          </div>


          {/* =====================================================
              RIGHT — FORM
          ===================================================== */}
          <div className="bg-gray-50/70 p-6 sm:p-8 md:p-10">

            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#800E13] sm:text-sm">
              Send us a message
            </p>

            <h2 className="mt-2 text-xl font-bold leading-snug text-gray-900 sm:mt-3 sm:text-2xl md:text-3xl">
              How can we help you?
            </h2>

            <p className="mt-2 text-[12px] leading-5 text-gray-500 sm:mt-3 sm:text-sm sm:leading-6">
              Tell us a little about your travel plans and our team will
              get back to you.
            </p>


            {/* ================= FORM ================= */}
            <form className="mt-5 space-y-4 sm:mt-7 sm:space-y-5">

              {/* NAME */}
              <div>

                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-gray-900 sm:text-sm"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="
                    mt-1.5
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-3
                    py-2.5
                    text-xs
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#800E13]
                    focus:ring-2
                    focus:ring-[#800E13]/10

                    sm:mt-2
                    sm:px-4
                    sm:py-3
                    sm:text-sm
                  "
                />

              </div>


              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-900 sm:text-sm"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="
                    mt-1.5
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-3
                    py-2.5
                    text-xs
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#800E13]
                    focus:ring-2
                    focus:ring-[#800E13]/10

                    sm:mt-2
                    sm:px-4
                    sm:py-3
                    sm:text-sm
                  "
                />

              </div>


              {/* PHONE */}
              <div>

                <label
                  htmlFor="contact"
                  className="block text-xs font-semibold text-gray-900 sm:text-sm"
                >
                  Contact Number
                </label>

                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="+92 XXX XXXXXXX"
                  className="
                    mt-1.5
                    w-full
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-3
                    py-2.5
                    text-xs
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#800E13]
                    focus:ring-2
                    focus:ring-[#800E13]/10

                    sm:mt-2
                    sm:px-4
                    sm:py-3
                    sm:text-sm
                  "
                />

              </div>


              {/* MESSAGE */}
              <div>

                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-900 sm:text-sm"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your travel plans..."
                  className="
                    mt-1.5
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    px-3
                    py-2.5
                    text-xs
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#800E13]
                    focus:ring-2
                    focus:ring-[#800E13]/10

                    sm:mt-2
                    sm:px-4
                    sm:py-3
                    sm:text-sm
                  "
                />

              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  rounded-lg
                  bg-[#800E13]
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#6d0b10]
                  hover:shadow-lg

                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}