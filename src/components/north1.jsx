import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link"
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
    <section className="w-full bg-white px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-orange-500">
              TOP DESTINATIONS
            </p>

            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Popular Destinations
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Favorite */}
              <button
                type="button"
                aria-label={`Save ${dest.name}`}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </button>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                <p className="text-sm font-semibold leading-tight">
                  {dest.name}
                </p>

                {/* Get Details */}
            <Link
  href={`/BookingForm?PackageId=${encodeURIComponent(dest.id)}&PackageName=${encodeURIComponent(dest.name)}&PackageImage=${encodeURIComponent(dest.image)}`}

                
                  type="button"
                  className="
                    mt-2
                    inline-flex
                    items-center
                    gap-1
                    rounded-full
                    bg-white/95
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-[#800E13]
                    shadow-sm
                    transition-all
                    duration-200
                    hover:bg-[#800E13]
                    hover:text-white
                  "
                >
                  Get Details
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}