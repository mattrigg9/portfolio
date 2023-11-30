import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Navbar from "./Navbar";
import { smoothScrollToAnchor } from "../utils/smoothScrollTo";

export default function Hero() {
  return (
    <header className="relative h-screen w-full">
      <Navbar />
      <StaticImage
        src="../images/mountain-top.jpg"
        // Absolute must be important to override gatsby-image-wrapper https://github.com/gatsbyjs/gatsby/issues/34457
        className="!absolute inset-0 -z-30 h-full w-full object-cover"
        loading="eager"
        layout="fullWidth"
        quality={90}
        alt="Building a better world."
      />

      <div className="absolute inset-0 mx-auto  mt-[22vh] h-fit max-w-2xl sm:mt-[25vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
            Building a better world.
          </h1>
          <p className="mt-6 px-6 text-lg leading-8 text-gray-50 drop-shadow-md sm:px-12 md:px-0">
            I use my skills as a software engineer to build solutions for our climate crisis.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#projects"
              onClick={smoothScrollToAnchor}
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-gray-50"
              onClick={smoothScrollToAnchor}
            >
              Contact <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
