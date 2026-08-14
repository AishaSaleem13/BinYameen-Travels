import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "BinYameen made our trip absolutely perfect! Everything was well-planned and the support team was amazing.",
    name: "Sana javed",
    location: "Karachi,Pakistan",
    rating: 5.0,

  },
  {
    quote:
      "The guide was super knowledgeable and the itinerary was just perfect. Can't wait to book my next trip with BinYameen!",
    name: "Muneeb akhtar",
    location: "Karachi,Pakistan",
    rating: 5.0,
    
  },
  {
    quote:
      "From booking to the last day of our trip, everything was seamless. Highly recommended!",
    name: "Balaj Sikandar",
    location: "Lahore,Pakistan",
    rating: 5.0,

  },
];

export default function HappyTravelers() {
  return (
    <section className="w-full bg-white px-6 py-14 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-2 text-xs font-semibold tracking-widest text-orange-500">
          WHAT TRAVELERS SAY
        </p>
        <h2 className="mb-10 text-2xl font-bold text-slate-900 md:text-3xl">
          Trusted by Happy Travelers
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="mb-3 h-6 w-6 fill-blue-600 text-blue-600" />

              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                {t.quote}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {t.rating.toFixed(1)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel dots (static, matches design) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-2 w-6 rounded-full bg-blue-600" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}