"use client"

import React from "react";
import { Menu, MapPin, ArrowLeft, ArrowUpRight, HeartHandshake, Trophy, Leaf } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <Hero />
      <StatsBento />
      <AboutUsGrid />
    </div>
  );
}

/**
 * img + stat-card bento section (matching the Dribbble reference):
 *  - Row 1: photo | 98% stat card | tall lagoon photo (spans both rows)
 *  - A "Contact Us" pill floats over the seam between the stat card and the tall photo
 *  - Row 2: 15+ stat card | 12k stat card | (tall photo continues)
 */
function StatsBento() {
  return (
    <section className="px-4 py-12 sm:px-8 lg:py-20">
      {/* Heading */}
      <div className="mb-8 flex flex-col justify-between gap-4 lg:mb-12 lg:flex-row lg:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[2px] w-8 bg-[#800E13]" />
            <span className="text-xs font-semibold tracking-wider text-[#800E13]">
              SINCE 2022
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Global journeys &amp; adventures
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-500">
          This modern travel hub combines booking services, personalized
          itineraries, and expert guidance — all in one place to streamline
          unforgettable travel experiences.
        </p>
      </div>

      {/* Bento grid */}
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
        {/* img 1 */}
        <div className="overflow-hidden rounded-2xl md:col-span-2 lg:col-span-1 lg:row-span-1">
          <img
            src="/flowera.jpg"
            alt="Misty forest lake at sunrise"
            className="h-48 w-full object-cover sm:h-56 lg:h-68"
          />
        </div>

        {/* Stat: 98% happy customers */}
        <StatCard
          icon={HeartHandshake}
          value="98%"
          label="Happy customers, Happy Memories"
          tone="bg-red-50 text-[#800E13]"
          ring="text-[#800E13]"
        />

        {/* Floating Contact Us pill — sits on the seam between col 2 and col 3 */}
        <button
          type="button"
          className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#800E13] bg-white px-5 py-2.5 text-xs font-semibold text-[#800E13] shadow-md transition hover:bg-red-50 sm:text-sm lg:left-2/3"
        >
          Contact Us
        </button>

        {/* img 2 — tall, spans both rows on desktop */}
        <div className="overflow-hidden rounded-2xl md:col-span-3 lg:col-span-1 lg:row-span-2">
          <img
            src="/image23.jpg"
            alt="Forested cove beside calm turquoise water"
            className="h-56 w-full object-cover sm:h-72 lg:h-full"
          />
        </div>

        {/* Stat: 15+ years expertise */}
        <StatCard
          icon={Trophy}
          value="5+"
          label="With years of expertise, we deliver exceptional travel experiences tailored to your unique needs."
          tone="bg-amber-50 text-amber-900"
          ring="text-amber-500"
        />

        {/* Stat: 12k tailored journeys */}
        <StatCard
          icon={Leaf}
          value="2k"
          label="Tailored journeys, seamless success"
          tone="bg-emerald-50 text-emerald-900"
          ring="text-emerald-500"
          className="md:col-span-2 lg:col-span-1"
        />
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label, tone, ring, className = "" }) {
  return (
    <div
      className={`relative flex flex-col justify-center overflow-hidden rounded-2xl p-6 ${tone} ${className}`}
    >
      {/* decorative outline circles, echoing the reference cards */}
      <svg
        className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 opacity-40"
        viewBox="0 0 100 100"
      
      >
        <circle cx="60" cy="40" r="30" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="80" cy="65" r="14" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <Icon className={`mb-3 h-6 w-6 ${ring}`} strokeWidth={2} />
      <p className="text-3xl font-bold">{value}</p>
      <p className="mt-1 max-w-[220px] text-xs leading-snug opacity-80 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function Navbar() {
  const links = ["Home", "Umrah Packages", "International Tours", "About Us", "Contact Us"];
  return (
    <nav className="flex items-center justify-between border-b border-slate-100 px-4 py-4 sm:px-8">
      <div className="flex items-center gap-2 text-xl font-bold text-slate-900 cursor-pointer">
        BinYameen Travels
      </div>

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-500 lg:flex">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className={
              l === "International Tours"
                ? "border-b-2 border-[#800E13] pb-1 text-slate-900"
                : "hover:text-slate-900"
            }
          >
            {l}
          </a>
        ))}
      </div>

      <button className="hidden rounded-full bg-[#800E13] px-5 py-2 text-sm font-semibold text-white hover:bg-[#63080e] lg:block">
        Custom Tour
      </button>
      <Menu className="text-slate-700 lg:hidden" />
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-2xl sm:mx-8">
      <video
        src="/video 2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-56 w-full object-cover sm:h-72 lg:min-h-[300px]"
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute left-4 mt-10 text-white sm:bottom-10 sm:left-8">
        <h1 className="text-2xl font-bold sm:text-4xl">International Tours</h1>
        <p className="mt-2 max-w-sm text-xs text-white/90 sm:text-sm">
          Discover our journey and the passion behind exceptional travel.
        </p>
      </div>
      <div className="absolute bottom-4 right-4 hidden items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm sm:flex">
        <a href="#" className="text-slate-500 hover:text-slate-900">Home</a>
        <span>/</span>
        <span className="text-[#800E13]">International Tours</span>
      </div>
    </div>
  );
}

/**
 * Each country carries its own `places` array (id, name, image, blurb).
 * When a country card's "Get Details" is clicked, its places are mapped
 * out below by their own `id` — swap the image paths for your real assets.
 */
const countries = [
  {
    id: "dubai",
    name: "Dubai",
    image: "/dubai.jpg",
    places: [
      { id: "dubai-burj-khalifa", name: "Burj Al Arab", image: "/dubaie.jpg", blurb: "The world's tallest tower, with an observation deck above the clouds." },
      { id: "dubai-palm-jumeirah", name: "Palm Jumeirah", image: "/dubai-palm-jumeirah.jpg", blurb: "Man-made island lined with resorts and private beaches." },
      { id: "dubai-desert-safari", name: "Desert Safari", image: "/dubai-desert-safari.jpg", blurb: "Dune bashing, camel rides, and a Bedouin-style dinner under the stars." },
    ],
  },
  {
    id: "bali",
    name: "Bali",
    image: "/bali.jpg",
    places: [
      { id: "bali-ubud", name: "Ubud Rice Terraces", image: "/bali-ubud.jpg", blurb: "Emerald terraced paddies and jungle art villages." },
      { id: "bali-uluwatu", name: "Uluwatu Temple", image: "/bali-uluwatu.jpg", blurb: "Clifftop temple with sweeping Indian Ocean sunsets." },
      { id: "bali-seminyak", name: "Seminyak Beach", image: "/bali-seminyak.jpg", blurb: "Laid-back beach clubs and boutique shopping." },
    ],
  },
  {
    id: "malaysia",
    name: "Malaysia",
    image: "/malysia.jpg",
    places: [
      { id: "malaysia-petronas", name: "Petronas Towers", image: "/malaysia-petronas.jpg", blurb: "Iconic twin towers in the heart of Kuala Lumpur." },
      { id: "malaysia-langkawi", name: "Langkawi Islands", image: "/malaysia-langkawi.jpg", blurb: "Cable car views and duty-free island escapes." },
      { id: "malaysia-batu-caves", name: "Batu Caves", image: "/malaysia-batu-caves.jpg", blurb: "Limestone caves with a towering golden statue." },
    ],
  },
  {
    id: "singapore",
    name: "Singapore",
    image: "/singapore2.jpg",
    places: [
      { id: "singapore-marina-bay", name: "Marina Bay Sands", image: "/singapore-marina-bay.jpg", blurb: "Rooftop infinity pool overlooking the skyline." },
      { id: "singapore-gardens", name: "Gardens by the Bay", image: "/singapore-gardens.jpg", blurb: "Futuristic Supertrees and a glass-domed rainforest." },
      { id: "singapore-sentosa", name: "Sentosa Island", image: "/singapore-sentosa.jpg", blurb: "Theme parks, beaches, and Universal Studios." },
    ],
  },
  {
    id: "baku",
    name: "Baku",
    image: "/baku.jpg",
    places: [
      { id: "baku-old-city", name: "Old City (Icherisheher)", image: "/baku-old-city.jpg", blurb: "UNESCO-listed walled city with the Maiden Tower." },
      { id: "baku-flame-towers", name: "Flame Towers", image: "/baku-flame-towers.jpg", blurb: "Glass towers that light up the night skyline." },
      { id: "baku-boulevard", name: "Baku Boulevard", image: "/baku-boulevard.jpg", blurb: "Seafront promenade along the Caspian." },
    ],
  },
  {
    id: "jeddah",
    name: "Jeddah",
    image: "/jaddah.jpg",
    places: [
      { id: "jeddah-corniche", name: "Jeddah Corniche", image: "/jeddah-corniche.jpg", blurb: "Waterfront walk with the iconic King Fahd Fountain." },
      { id: "jeddah-albalad", name: "Al-Balad Old Town", image: "/jeddah-albalad.jpg", blurb: "Historic coral-stone houses and souks." },
    ],
  },
  {
    id: "thailand",
    name: "Thailand",
    image: "/bangkok2 (1).jpg",
    places: [
      { id: "thailand-grand-palace", name: "Grand Palace, Bangkok", image: "/thailand-grand-palace.jpg", blurb: "Ornate former royal residence and Wat Phra Kaew." },
      { id: "thailand-phuket", name: "Phuket Beaches", image: "/thailand-phuket.jpg", blurb: "Island hopping and turquoise bays." },
      { id: "thailand-chiang-mai", name: "Chiang Mai Temples", image: "/thailand-chiang-mai.jpg", blurb: "Mountain-town temples and night markets." },
    ],
  },
  {
    id: "turkey",
    name: "Turkey",
    image: "/tURKIE.jpg",
    places: [
      { id: "turkey-hagia-sophia", name: "Hagia Sophia, Istanbul", image: "/turkey-hagia-sophia.jpg", blurb: "Byzantine-Ottoman landmark on the Bosphorus." },
      { id: "turkey-cappadocia", name: "Cappadocia", image: "/turkey-cappadocia.jpg", blurb: "Sunrise hot-air balloons over fairy chimneys." },
      { id: "turkey-pamukkale", name: "Pamukkale", image: "/turkey-pamukkale.jpg", blurb: "Terraced white travertine mineral pools." },
    ],
  },
  {
    id: "japan",
    name: "Japan",
    image: "/japan.jpg",
    places: [
      { id: "japan-fuji", name: "Mount Fuji", image: "/japan-fuji.jpg", blurb: "Japan's iconic peak, best seen from Lake Kawaguchi." },
      { id: "japan-kyoto", name: "Kyoto Temples", image: "/japan-kyoto.jpg", blurb: "Fushimi Inari's torii gates and old geisha streets." },
      { id: "japan-tokyo", name: "Tokyo", image: "/japan-tokyo.jpg", blurb: "Neon crossings, Shibuya, and Asakusa's ancient temple." },
    ],
  },
];


function AboutUsGrid() {
    const [selectedCountry, setSelectedCountry] = React.useState(null);
      const placesRef = React.useRef(null);

  React.useEffect(() => {
    if (selectedCountry) {
      placesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedCountry]);

  

  return (
    <section className="px-5 py-12 sm:px-8 md:px-12">
      {/* Heading */}
      <div className="mb-10 lg:mb-14">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-8 bg-[#800E13]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#800E13]">
                DESTINATIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Explore our top destinations
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
              Handpicked countries and cities our travelers love most — tap a
              card to see the places we recommend within each one.
            </p>
          </div>

          <a
            href="#"
            className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-slate-900 lg:flex"
          >
            View all destinations
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 transition group-hover:border-[#800E13] group-hover:bg-[#800E13] group-hover:text-white">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
        <div className="mt-8 h-px w-full bg-slate-200" />
      </div>

   <div className="mx-auto max-w-6xl">

        {/* Country cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {countries.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-60 overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-64 lg:h-72"
            >
              <img
                src={item.image}
                alt={item.name}
            
                
                className="object-cover h-full w-full transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-semibold text-white backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                {item.places.length} Experiences
              </span>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <h3 className="font-serif text-2xl font-semibold text-white">
                  {item.name}
                </h3>

                <button
                  onClick={() => setSelectedCountry(item)}
                  aria-label={`View details for ${item.name}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition hover:bg-[#800E13] hover:text-white"
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected country */}
        {selectedCountry && (
          <div
            ref={placesRef}
            className="scroll-mt-24 mt-10 rounded-2xl bg-gray-50 p-6 sm:p-8"
          >
            <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <button
                  onClick={() => setSelectedCountry(null)}
                  className="mb-2 flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900"
                >
                  <ArrowLeft size={14} />
                  Back to countries
                </button>

                <h3 className="text-2xl font-semibold text-slate-900">
                  Places to visit in {selectedCountry.name}
                </h3>
              </div>

              <button
                className="flex items-center justify-center gap-2 rounded-full bg-[#800E13] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#63080e]"
              >
                Explore {selectedCountry.name}
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedCountry.places.map((place) => (
                <div
                  key={place.id}
                  className="overflow-hidden rounded-xl bg-white shadow-sm"
                >
              <div className="relative h-60 w-full overflow-hidden">
  <img
    src={place.image}
    alt={place.name}
    loading="lazy"
    className="h-60 w-full object-cover"
  />
</div>

                  <div className="p-4">
                    <div className="mb-1 flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#800E13]" />

                      <h4 className="text-sm font-semibold text-slate-900">
                        {place.name}
                      </h4>
                    </div>

                    <p className="text-xs leading-relaxed text-slate-500">
                      {place.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
