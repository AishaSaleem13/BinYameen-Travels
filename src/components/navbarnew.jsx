
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

function Navbarnew() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
     
      <div
        className="  navbar  bg-transparent  absolut  top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 ">

        {/* =========================
            LOGO — MOBILE + DESKTOP
        ========================== */}

        <div className="navbar-start">
   <Link href="/"
            className="   flex   items-center   gap-2"  >
            
            <Image
              src="/t.png"
              alt="Bin Yameen Travel logo"
              width={48}
              height={48}
              className="
                h-10
                lg:h-12
                w-auto
                object-contain
              "
              priority
            />
            <span
              className="
                text-lg
                lg:text-xl
                text-white
                font-semibold
                tracking-wide
              "
            >
              Bin Yameen
            </span>
          </Link>
        </div>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

       
        <div
          className="
            navbar-center
            hidden
            lg:flex
          "
        >
          <ul
            className="
              menu
              menu-horizontal
              px-1
              gap-2
              text-white
            "
          >
            <li>
              <Link
                href="/"
                className="hover:bg-white/10"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:bg-white/10"
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                href="/packages/umrah"
                className="hover:bg-white/10"
              >
                Umrah Packages
              </Link>
            </li>

            <li>
              <Link
                href="/international"
                className="hover:bg-white/10"
              >
                International Tours
              </Link>
            </li>

            <li>
              <Link
                href="/tours/northern"
                className="hover:bg-white/10"
              >
                Northern Tours
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:bg-white/10"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>


        {/* =========================
            RIGHT SIDE
        ========================== */}

        <div className="navbar-end">

          {/* =========================
              DESKTOP LOGIN / SIGNUP
          ========================== */}
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-3
              text-white
            "
          >
            <Link
              href="/login"
              className="
                btn
                btn-ghost
                btn-sm
                normal-case
              "
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="
                btn
                btn-outline
                btn-sm
                text-white
                border-white
                hover:bg-white
                hover:text-black
                normal-case
              "
            >
              Sign up
            </Link>
          </div>
          <div
            className="
              dropdown
              dropdown-end
              lg:hidden
            "
          >
            <div
              tabIndex={0}
              role="button"
              className="
                btn
                btn-ghost
                text-white
              "
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


            {/* =========================
                MOBILE MENU
            ========================== */}

            <ul
              tabIndex={-1}
              className="
                menu
                menu-sm
                dropdown-content
                bg-white
                text-black
                rounded-box
                z-50
                mt-3
                w-60
                p-3
                shadow-lg
              "
            >
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About us
                </Link>
              </li>

              <li>
                <Link href="/packages/umrah">
                  Umrah Packages
                </Link>
              </li>

              <li>
                <Link href="/international">
                  International Tours
                </Link>
              </li>

              <li>
                <Link href="/tours/northern">
                  Northern Tours
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

              {/* Divider between navigation and account links */}
              <div className="divider my-1"></div>

              <li>
                <Link href="/login">
                  Log in
                </Link>
              </li>

              <li>
                <Link href="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbarnew;
