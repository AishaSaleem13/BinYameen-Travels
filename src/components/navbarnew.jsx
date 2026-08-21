"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Navbarnew({ variant = "dark" }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const isDark = variant === "dark";

  const textColor = isDark ? "text-white" : "text-[#241C17]";

  const hoverColor = isDark
    ? "hover:bg-white/10"
    : "hover:bg-[#800E13]/10";

  return (
    <div
      className={`navbar absolute left-0 right-0 top-0 z-50 px-6 py-4 lg:px-12 ${
        isDark ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      {/* ================= LOGO ================= */}

<div className="navbar-start min-w-0 lg:w-[250px] lg:flex-none">
  <Link
    href="/"
    prefetch={false}
    className="flex items-center gap-1.5 whitespace-nowrap lg:gap-2"
  >
    <Image
      src={isDark ? "/t.png" : "/logoblack.png"}
      alt="logo"
      width={48}
      height={48}
      className="h-8 w-auto shrink-0 object-contain lg:h-12"
      priority
    />

    <span
      className={`whitespace-nowrap font-serif text-sm font-medium tracking-wide lg:text-xl ${textColor}`}
    >
      Bin Yameen Travels
    </span>
  </Link>
</div>
      {/* ================= DESKTOP NAVIGATION ================= */}

      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal gap-2 px-1 ${textColor}`}
        >
          <li>
            <Link href="/" prefetch={false} className={hoverColor}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/aboutpage"
              prefetch={false}
              className={hoverColor}
            >
              About us
            </Link>
          </li>

          <li>
            <Link
              href="/umrahpackages"
              prefetch={false}
              className={hoverColor}
            >
              Umrah Packages
            </Link>
          </li>

          <li>
            <Link
              href="/internationalpage"
              prefetch={false}
              className={hoverColor}
            >
              International Tours
            </Link>
          </li>

          <li>
            <Link
              href="/Northtour"
              prefetch={false}
              className={hoverColor}
            >
              Northern Tours
            </Link>
          </li>

          <li>
            <Link
              href="/Contact"
              prefetch={false}
              className={hoverColor}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="navbar-end">
        {/* Desktop Social Icons + Book Button */}

        <div
          className={`hidden items-center gap-2 lg:flex ${textColor}`}
        >
            <Link
            href="/Customize"
            prefetch={false}
            className="ml-2 rounded-full bg-[#800E13] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#650B0F]"
          >
            Customize
          </Link>
        
          <a
            href="https://www.instagram.com/binyameentravels/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
              isDark
                ? "hover:bg-white/10"
                : "hover:bg-[#800E13]/10"
            }`}
          >
            <FaInstagram className="h-4 w-4" />
          </a>

          <a
            href="https://www.facebook.com/share/199i7B1Tyy/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
              isDark
                ? "hover:bg-white/10"
                : "hover:bg-[#800E13]/10"
            }`}
          >
            <FaFacebookF className="h-4 w-4" />
          </a>
</div>
          {/* Desktop Book Button */}

        

        {/* ================= MOBILE MENU ================= */}

        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
              aria-label="Open navigation menu"
                aria-haspopup="menu"
            className={`btn btn-ghost ${textColor}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-50 mt-3 w-64 rounded-box bg-white p-3 text-black shadow-xl"
          >
            <li>
              <Link href="/" prefetch={false}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/aboutpage" prefetch={false}>
                About us
              </Link>
            </li>

            <li>
              <Link href="/umrahpackages" prefetch={false}>
                Umrah Packages
              </Link>
            </li>

            <li>
              <Link href="/internationalpage" prefetch={false}>
                International Tours
              </Link>
            </li>

            <li>
              <Link href="/Northtour" prefetch={false}>
                Northern Tours
              </Link>
            </li>

            <li>
              <Link href="/Contact" prefetch={false}>
                Contact
              </Link>
            </li>

            {/* ================= MOBILE BOOK BUTTON ================= */}

            <li className="mt-2">
              <Link
                href="/Customize"
                prefetch={false}
                className="!justify-center rounded-lg !bg-[#800E13] !py-3 !font-semibold !text-white hover:!bg-[#650B0F]"
              >
                Customize
              </Link>
            </li>

            {/* ================= SOCIAL ICONS ================= */}

            <div className="mt-3 flex items-center justify-center gap-3 border-t border-gray-100 pt-4">
              <a
                href="https://www.instagram.com/binyameentravels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-[#800E13] hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/199i7B1Tyy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-[#800E13] hover:text-white"
              >
                <FaFacebookF />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbarnew;