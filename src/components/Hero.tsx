import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <header className="w-screen h-screen relative">
      <Navbar />

      <StaticImage
        src="../images/hero-home.jpg"
        className="w-full h-full object-cover absolute inset-0 -z-30"
        loading="eager"
        alt="Building a better world."
      />

      <div className="max-w-2xl absolute mx-auto my-auto inset-0 h-fit">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl text-shadow-lg drop-shadow-md">
            Building a better world.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-50 drop-shadow-md">
            I use my skills as a software engineer to build solutions for the climate crisis.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View my work
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-50">
              Contact <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
