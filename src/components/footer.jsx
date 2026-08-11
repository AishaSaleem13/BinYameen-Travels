import Link from "next/link";
// import {
//   Instagram,
 
//   Youtube,
//   Phone,
//   Mail,
//   MapPin,
//   ArrowUpRight,
// } from "lucide-react";

const services = [
  { name: "Umrah", href: "/umrahpackages" },
  { name: "International Tours", href: "/internationalpage" },
  { name: "Northern Tours", href: "/Northtour" },
  { name: "Flight Booking", href: "/booking" },
  { name: "Hotel Booking", href: "/booking" },
];

const support = [
  { name: "Contact Us", href: "/Contact" },
  { name: "FAQs", href: "/faq" },
  { name: "Booking Guide", href: "/booking" },
];

const company = [
  { name: "About Bin Yameen", href: "/aboutpage" },
  { name: "Our Journeys", href: "/aboutpage" },
  { name: "Why Choose Us", href: "/aboutpage" },
];



function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/mountains-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-6 pt-16 sm:px-10 lg:px-14">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="mb-5 flex items-center gap-3"
            >
              <img
                src="/t.png"
                alt="Bin Yameen Travel"
                width={52}
                height={52}
                className="h-13 w-13 object-contain"
              />

              <span className="text-xl font-semibold tracking-wide">
                Bin Yameen
              </span>
            </Link>

            <p className="mb-7 text-sm leading-7 text-neutral-400">
              Creating thoughtful journeys for pilgrims and travelers.
              From sacred journeys to international escapes and northern
              adventures, we make travel simpler, smoother, and more
              meaningful.
            </p>

            {/* Contact */}
            <div className="space-y-4">
              <a
                href="tel:03110405147"
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#800E13] transition-colors group-hover:bg-[#a51219]">
                  {/* <Phone className="h-4 w-4 text-white" /> */}
                </span>

                <span>
                  <span className="block text-xs text-neutral-500">
                    Need assistance?
                  </span>

                  <span className="text-sm font-medium text-white">
                    +92 342 2673475
                  </span>
                </span>
                 
           
                 
              </a>

              <a
                href="mailto:info@binyameen.6363@gmail.com"
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                  {/* <Mail className="h-4 w-4 text-white" /> */}
                </span>

                <span className="text-sm text-neutral-400 transition-colors group-hover:text-white">
                 binyameen.6363@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Services */}
          <FooterColumn
            title="Services"
            links={services}
          />

          {/* Support */}
          <FooterColumn
            title="Support"
            links={support}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={company}
          />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Social icons
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-[#800E13]"
              >
                <Icon className="h-4 w-4 text-white" />
              </a>
            ))}
          </div> */}

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            {/* <MapPin className="h-4 w-4" /> */}
            <span>Pakistan</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-500">
            © 2026 Bin Yameen Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}