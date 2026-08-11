import { Heart, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "Santorini, Greece",
    rating: 4.8,
    reviews: "1.2k",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Bali, Indonesia",
    rating: 4.7,
    reviews: "980",
    image:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Switzerland",
    rating: 4.9,
    reviews: "1.5k",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dubai, UAE",
    rating: 4.6,
    reviews: "870",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Maldives",
    rating: 4.8,
    reviews: "1.1k",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop",
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
          <a
            href="#"
            className="hidden items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 md:flex"
          >
            View all destinations
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Favorite button */}
              <button
                type="button"
                aria-label={`Save ${dest.name}`}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </button>

              {/* Text content */}
              <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                <p className="text-sm font-semibold leading-tight">
                  {dest.name}
                </p>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span className="text-amber-400">★</span>
                  <span>
                    {dest.rating} ({dest.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-6 flex items-center justify-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 md:hidden"
        >
          View all destinations
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}