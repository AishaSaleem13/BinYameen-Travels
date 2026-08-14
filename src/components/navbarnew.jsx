"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
      className={`navbar absolute left-0 right-0 top-0 z-50 px-4 py-3 sm:px-6 lg:px-12 ${
        isDark ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      {/* LOGO */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isDark ? "/t.png" : "/logoblack.png"}
            alt="Bin Yameen Travel logo"
            width={48}
            height={48}
            priority
            className="h-9 w-auto object-contain sm:h-10 lg:h-12"
          />

          <span
            className={`text-base font-semibold tracking-wide sm:text-lg lg:text-xl ${textColor}`}
          >
            Bin Yameen
          </span>
        </Link>
      </div>

      {/* DESKTOP NAV */}
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal items-center gap-1 px-1 ${textColor}`}>
          <li>
            <Link href="/" className={hoverColor}>Home</Link>
          </li>

          <li>
            <Link href="/aboutpage" className={hoverColor}>About us</Link>
          </li>

          <li>
            <Link href="/umrahpackages" className={hoverColor}>
              Umrah Packages
            </Link>
          </li>

          <li>
            <Link href="/internationalpage" className={hoverColor}>
              International Tours
            </Link>
          </li>

          <li>
            <Link href="/Northtour" className={hoverColor}>
              Northern Tours
            </Link>
          </li>

          <li>
            <Link href="/Contact" className={hoverColor}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-2">
        {/* CUSTOMIZE BUTTON */}
        <Link
          href="/Customize?TripType=International"
          className="
            hidden lg:inline-flex
            items-center justify-center
            rounded-full
            border border-[#800E13]
            bg-[#800E13]
            px-4 py-2
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#6d0b10]
            hover:shadow-md
          "
        >
          Customize Trip
        </Link>

        {/* SOCIAL */}
        <div className={`hidden items-center gap-1 lg:flex ${textColor}`}>
          <a
            href="https://www.instagram.com/binyameentravels/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition ${hoverColor}`}
          >
            <FaInstagram className="h-4 w-4" />
          </a>

          <a
            href="https://www.facebook.com/share/199i7B1Tyy/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`flex h-9 w-9 items-center justify-center rounded-full transition ${hoverColor}`}
          >
            <FaFacebookF className="h-4 w-4" />
          </a>
        </div>

        {/* MOBILE MENU */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
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

          <ul
            tabIndex={-1}
            className="menu menu-sm z-50 mt-3 w-64 rounded-2xl bg-white p-3 text-black shadow-xl"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/aboutpage">About us</Link></li>
            <li><Link href="/umrahpackages">Umrah Packages</Link></li>
            <li><Link href="/internationalpage">International Tours</Link></li>
            <li><Link href="/Northtour">Northern Tours</Link></li>
            <li><Link href="/Contact">Contact</Link></li>

            {/* MOBILE CUSTOMIZE */}
            <li className="mt-2 border-t border-gray-100 pt-2">
              <Link
                href="/Customize?TripType=International"
                className="justify-center rounded-full bg-[#800E13] font-semibold text-white hover:bg-[#6d0b10]"
              >
                ✦ Customize Your Trip
              </Link>
            </li>

            {/* SOCIAL */}
            <div className="mt-3 flex  gap-3 border-t border-gray-100 pt-3">
              <a
                href="https://www.instagram.com/binyameentravels/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 rounded-full bg-gray-100 text-gray-700 hover:bg-[#800E13] hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/share/199i7B1Tyy/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-[#800E13] hover:text-white"
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