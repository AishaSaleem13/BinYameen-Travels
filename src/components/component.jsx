const stats = [
  { value: "10,000+", label: "Pilgrims Depart", highlight: false },
  { value: "500+", label: "5-Star Reviews", highlight: true },
  { value: "26+", label: "Years Experience", highlight: false },
  { value: "100%", label: "Guided Assistance", highlight: false },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-medium text-slate-500">
          Why Choose Us
        </p>

        <h2 className="mb-6 text-3xl font-medium leading-tight text-slate-900 md:text-5xl">
          Our Commitment To{" "}
          <span className="font-serif italic text-indigo-950">
            The Best Pilgrimage Service
          </span>{" "}
          In Pakistan
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base">
          For over 20 years, Labbaik Tours &amp; Travels (Pvt.) Ltd has been
          the pilgrimage partner of choice for thousands of Pakistani
          families. We are not just a travel company, we are your companions
          on the most sacred journey of your life. Here is why pilgrims
          return to us, year after year.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center rounded-2xl px-4 py-10 text-center ${
              stat.highlight
                ? "bg-indigo-950 text-white"
                : "bg-slate-100 text-slate-900"
            }`}
          >
            <p
              className={`mb-3 text-3xl font-bold md:text-4xl ${
                stat.highlight ? "text-white" : "text-slate-900"
              }`}
            >
              {stat.value}
            </p>
            <p
              className={`text-sm font-semibold md:text-base ${
                stat.highlight ? "text-amber-400" : "text-indigo-950"
              }`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}