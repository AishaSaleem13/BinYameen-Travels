import { Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    id: "Hunza",
    name: "Hunza Valley",
    image: "/Hunza.jpeg",
  },
  {
    id: "sawat",
    name: "Swat",
    image: "/sawat.jpeg",
  },
  {
    id: "skardu",
    name: "Skardu",
    image: "/skardu.jpeg",
  },
  {
    id: "Neelam",
    name: "Neelum Valley",
    image: "/neelum.jpeg",
  },
  {
    id: "Naran",
    name: "Naran",
    image: "/kagan.jpeg",
  },
];

export default function PopularDestinations() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-7 flex items-center justify-between gap-3 sm:mb-8">
          
          <div className="min-w-0">
            <p className="mb-1.5 text-[9px] font-semibold tracking-[0.16em] text-orange-500 sm:mb-2 sm:text-xs sm:tracking-widest">
              TOP DESTINATIONS
            </p>

            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
              Popular Destinations
            </h2>
          </div>

          {/* Customize */}
          <Link
            prefetch={false}
            href="/Customize?TripType=Northern"
            className="
              shrink-0
              rounded-full
              bg-[#800E13]
              px-3
              py-2
              text-[9px]
              font-serif
              font-medium
              text-white
              transition
              hover:bg-[#63080e]
              sm:px-4
              sm:py-2.5
              sm:text-xs
              md:px-5
              md:py-3
              md:text-sm
            "
          >
            Customize Your Trip
          </Link>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                shadow-sm
                transition-shadow
                hover:shadow-lg
                sm:rounded-2xl
              "
            >
              {/* Image */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                        fill
                         sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="
                    h-full
                    w-full
              
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Favorite */}
              <button
                type="button"
                aria-label={`Save ${dest.name}`}
                className="
                  absolute
                  right-2
                  top-2
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  text-slate-700
                  shadow-sm
                  transition
                  hover:bg-white
                  sm:right-3
                  sm:top-3
                  sm:h-8
                  sm:w-8
                "
              >
                <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                <p className="text-[11px] font-semibold leading-tight text-white sm:text-sm">
                  {dest.name}
                </p>

                {/* Get Details */}
                <Link
                  prefetch={false}
                  href={`/BookingForm?PackageId=${encodeURIComponent(
                    dest.id
                  )}&PackageName=${encodeURIComponent(
                    dest.name
                  )}&PackageImage=${encodeURIComponent(dest.image)}`}
                  className="
                    mt-1.5
                    inline-flex
                    items-center
                    gap-1
                    rounded-full
                    bg-white/95
                    px-2.5
                    py-1.5
                    text-[8px]
                    font-semibold
                    text-[#800E13]
                    shadow-sm
                    transition-all
                    duration-200
                    hover:bg-[#800E13]
                    hover:text-white
                    sm:mt-2
                    sm:px-3
                    sm:py-1.5
                    sm:text-[10px]
                  "
                >
                  Get Details
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}