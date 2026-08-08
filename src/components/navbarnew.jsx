"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

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

      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isDark ? "/t.png" : "/logo.jpeg"}
            alt="Bin Yameen Travel logo"
            width={48}
            height={48}
            className="h-10 w-auto object-contain lg:h-12"
            priority
          />

          <span
            className={`text-lg font-semibold tracking-wide lg:text-xl ${textColor}`}
          >
            Bin Yameen
          </span>
        </Link>
      </div>

      {/* ================= DESKTOP NAVIGATION ================= */}

      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal gap-2 px-1 ${textColor}`}>
          <li>
            <Link href="/" className={hoverColor}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className={hoverColor}>
              About us
            </Link>
          </li>

          <li>
            <Link href="/umrahpackages" className={hoverColor}>
              Umrah Packages
            </Link>
          </li>

          <li>
            <Link href="/international" className={hoverColor}>
              International Tours
            </Link>
          </li>

          <li>
            <Link href="/tours/northern" className={hoverColor}>
              Northern Tours
            </Link>
          </li>

          <li>
            <Link href="/contact" className={hoverColor}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* ================= RIGHT SIDE ================= */}

      <div className="navbar-end">
        {/* Desktop */}

        <div className={`hidden items-center gap-3 lg:flex ${textColor}`}>
          <Link href="/login" className="btn btn-ghost btn-sm normal-case">
            Log in
          </Link>

          <Link
            href="/signup"
            className={`btn btn-outline btn-sm normal-case ${
              isDark
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-[#800E13] text-[#800E13] hover:bg-[#800E13] hover:text-white"
            }`}
          >
            Sign up
          </Link>
        </div>

        {/* Mobile */}

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

          {/* Mobile Menu */}

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-50 mt-3 w-60 rounded-box bg-white p-3 text-black shadow-lg"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About us</Link>
            </li>

            <li>
              <Link href="/umrahpackages">Umrah Packages</Link>
            </li>

            <li>
              <Link href="/international">International Tours</Link>
            </li>

            <li>
              <Link href="/tours/northern">Northern Tours</Link>
            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>

            <div className="divider my-1" />

            <li>
              <Link href="/login">Log in</Link>
            </li>

            <li>
              <Link href="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbarnew;