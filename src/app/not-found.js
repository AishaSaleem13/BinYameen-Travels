import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="text-[#800E13] font-serif tracking-[4px] text-sm mb-4">
            BIN YAMEEN TRAVELS
          </p>

          <h1 className="text-[100px] md:text-[150px] leading-none font-bold text-[#800E13]">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mt-2">
            Looks like you took a wrong turn.
          </h2>

          <p className="text-gray-500 text-base md:text-lg mt-5 max-w-lg">
            The page you're looking for has taken a little trip of its own.
            Let's get you back to somewhere beautiful.
          </p>

          <Link
            href="/"
            className="inline-block mt-8 bg-[#800E13] text-white px-8 py-4 rounded-full font-medium hover:bg-[#650b0f] transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden">
          <Image
            src="/l.jpg"
            alt="Beautiful travel destination"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-7 text-white">
            <p className="text-sm tracking-[3px] uppercase">
              Your journey awaits
            </p>
            <p className="text-2xl font-serif mt-1">
              Travel. Discover. Remember.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}