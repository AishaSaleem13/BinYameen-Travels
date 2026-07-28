
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";import React from 'react'

function Navbarnew() {

  useEffect(() => {
    AOS.init({
      duration: 800,
    easing:"ease-in-out",
          once: true,
      offset: 100,})
  }, []);

  return (
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

    <div className="navbar bg-transparent absolute top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4
    ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Home</a></li>
            <li>
              <a>Packages</a>
              <ul className="p-2">
                <li><a>Umrah packages</a></li>
                <li><a>Northern tours</a></li>
              </ul>
            </li>
            <li><a>Contact</a></li>
            <li><a>About us</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white normal-case">Bin Yameen</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-white">
          <li><a className="hover:bg-white/10">Home</a></li>
          <li><a className="hover:bg-white/10">Umrah Packages</a></li>
       <li><a className="hover:bg-white/10">International Tours</a></li>
         
           <li><a className="hover:bg-white/10">Northern Tours</a></li>
          <li><a className="hover:bg-white/10">Contact</a></li>
          <li><a className="hover:bg-white/10">About us</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-3 text-white">
        <button className="btn btn-ghost btn-sm hidden md:flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </button>

        <div className="dropdown dropdown-end hidden md:block">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm normal-case">
            🇵🇰 EN
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-32 p-2 shadow">
            <li><a>English</a></li>
            <li><a>اردو</a></li>
            <li><a>العربية</a></li>
          </ul>
        </div>

        <span className="hidden md:inline text-white/40">|</span>

        <a className="btn btn-ghost btn-sm normal-case">Log in</a>
        <a className="btn btn-outline btn-sm text-white border-white hover:bg-white hover:text-black normal-case">Sign up</a>
      </div>
    </div>
    </div>
  )
}

export default Navbarnew