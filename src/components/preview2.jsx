import { ArrowUpRight, Sparkles } from "lucide-react";

const activities = [
  {
    title: "Umrah Packages",
    
    
    image:
      "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "International Tour",

    
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Northern Tour",

  
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CuratedActivities() {
  return (
    <section className="w-full bg-white px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#800E13]">
            <Sparkles className="h-4 w-4" />
            What We Offer
          </p>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Curated Luxury Trips &amp; Experiences
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 shadow-lg ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Permanent gradient for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Gold top border accent on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#800E13] transition-transform duration-500 group-hover:scale-x-100" />

              {/* Badge */}
             

              {/* Arrow button */}
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#800E13]group-hover:text-slate-900">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </div>

              {/* Text content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 h-px w-10 bg-[#800E13] transition-all duration-500 group-hover:w-16" />
                <h3 className="mb-1 font-serif text-2xl italic text-white">
                  {activity.title}
                </h3>
                <p className="text-sm text-slate-300">{activity.subtitle}</p>

                {/* Reveal on hover */}
                <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-10 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">
                    View Package
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mx-auto mt-10 block rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[#800E13] hover:bg-[#800E13] hover:text-white"
        >
          Enquiry
        </button>
      </div>
    </section>
  );
}