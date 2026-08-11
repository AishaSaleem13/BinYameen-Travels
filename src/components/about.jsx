// "use client";

// import React from "react";
// import Link from "next/link";

// function About() {
//   return (
//     <section className="bg-[#faf9f7] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-16">

//       <div className="mx-auto max-w-6xl">

//         {/* ================= TOP ABOUT SECTION ================= */}
//         <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">

//           {/* LEFT IMAGE */}
//           <div className="w-full">
//             <div className="overflow-hidden rounded-xl">
//               <img
//                 src="/img.jpg"
//                 alt="Travel destination"
//                 className="h-[360px] w-full object-cover sm:h-[420px] md:h-[350px]"
//               />
//             </div>
//           </div>


//           {/* RIGHT CONTENT */}
//           <div className="max-w-xl">

//             {/* Small heading */}
//             <div className="mb-5">

//               <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-[#800E13]">
//                 About Bin Yameen Travels
//               </p>

//               <div className="mt-3 h-[2px] w-8 bg-[#800E13]" />

//             </div>


//             {/* Main Heading */}
//             <h2 className="font-serif text-4xl leading-[1.05] text-[#171717] sm:text-5xl md:text-[48px]">

//               Your Journey,

//               <br />

//               <span className="text-[#800E13]">
//                 Our Priority.
//               </span>

//             </h2>


//             {/* Paragraph 1 */}
//             <p className="mt-6 font-sans text-sm leading-7 text-gray-600 sm:text-[15px] sm:leading-7">

//               At Bin Yameen Travels, we believe that every journey should be
//               seamless, meaningful, and unforgettable. From sacred pilgrimages
//               to breathtaking getaways, we take care of every detail so you can
//               focus on what truly matters.

//             </p>


//             {/* Paragraph 2 */}
//             <p className="mt-4 font-sans text-sm leading-7 text-gray-600 sm:text-[15px] sm:leading-7">

//               With personalized service, trusted partners, and 24/7 support,
//               we ensure your travel experience is comfortable, stress-free,
//               and tailored just for you.

//             </p>


//             {/* Button */}
//             <Link
//               href="/about"
//               className="mt-7 inline-flex items-center gap-4 rounded-md bg-[#800E13] px-6 py-3 font-sans text-sm text-white transition-all duration-300 hover:bg-[#650b0f]"
//             >
//               Know More

//               <span className="text-base">
//                 →
//               </span>

//             </Link>

//           </div>

//         </div>


//         {/* ================= VIDEO ================= */}
//         <div className="mt-14 sm:mt-16 md:mt-20">

//           <div className="relative overflow-hidden rounded-xl">

//             <video
//               src="/video3.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="h-[260px] w-full object-cover sm:h-[320px] md:h-[360px]"
//             />

//           </div>

//         </div>


//         {/* ================= FEATURES ================= */}
//         <div className="mt-10 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 md:grid-cols-4 md:divide-x md:divide-y-0">

//           {/* Feature 1 */}
//           <div className="flex items-center gap-4 px-4 py-5 md:px-6 md:py-3">

//             <div className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl text-[#800E13]">
//               🕋
//             </div>

//             <div>
//               <h4 className="font-sans text-sm font-semibold text-gray-900">
//                 Umrah & Hajj
//               </h4>

//               <p className="mt-1 font-sans text-xs leading-5 text-gray-500">
//                 Spiritual journeys with complete care.
//               </p>
//             </div>

//           </div>


//           {/* Feature 2 */}
//           <div className="flex items-center gap-4 px-4 py-5 md:px-6 md:py-3">

//             <div className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl text-[#800E13]">
//               ◎
//             </div>

//             <div>
//               <h4 className="font-sans text-sm font-semibold text-gray-900">
//                 International Tours
//               </h4>

//               <p className="mt-1 font-sans text-xs leading-5 text-gray-500">
//                 Explore the world with comfort and ease.
//               </p>
//             </div>

//           </div>


//           {/* Feature 3 */}
//           <div className="flex items-center gap-4 px-4 py-5 md:px-6 md:py-3">

//             <div className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl text-[#800E13]">
//               △
//             </div>

//             <div>
//               <h4 className="font-sans text-sm font-semibold text-gray-900">
//                 Northern Tours
//               </h4>

//               <p className="mt-1 font-sans text-xs leading-5 text-gray-500">
//                 Discover the beauty of Northern Pakistan.
//               </p>
//             </div>

//           </div>


//           {/* Feature 4 */}
//           <div className="flex items-center gap-4 px-4 py-5 md:px-6 md:py-3">

//             <div className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl text-[#800E13]">
//               ◉
//             </div>

//             <div>
//               <h4 className="font-sans text-sm font-semibold text-gray-900">
//                 24/7 Support
//               </h4>

//               <p className="mt-1 font-sans text-xs leading-5 text-gray-500">
//                 We're with you at every step of your journey.
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default About;



"use client"


import React from 'react'

function about() {
  return (
    <>
 
     <section className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2"> 
          {/* left copy */}
          <div>
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
             Know More
            </button>
          </div> 

          {/* right image with rotating badge */}
           <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative h-80 w-full overflow-hidden rounded-sm shadow-lg md:h-96">
                <img
                  src="/img.jpg"
                  alt="Blue domed church in Santorini"
                
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover h-full"
                />
              </div> 

              {/* rotating circular badge */}
               <div className="absolute -left-15 -top-10 h-28 w-28 animate-[spin_14s_linear_infinite]">
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
      </section> 
      </>
  )
}

export default about

