"use client";

import ExportedImage from "next-image-export-optimizer";
import mountainTopImg from "../images/mountain-top.jpg";
import { smoothScrollToAnchor } from "../utils/smoothScrollTo";
import { LinkButton } from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-primary relative h-screen w-full">
      <div className="absolute inset-x-0 top-0 z-10">
        <Navbar />
      </div>
      <ExportedImage
        src={mountainTopImg}
        fill
        className="object-cover"
        preload
        alt="Building a better world."
        role="presentation"
      />

      <section
        className="absolute inset-0 mx-auto mt-[22vh] h-fit max-w-2xl sm:mt-[25vh]"
        aria-labelledby="hero-heading"
      >
        <div className="text-center">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl"
          >
            Building a better world.
          </h1>
          <p className="mx-auto mt-6 max-w-100 px-6 text-lg leading-8 text-gray-50 drop-shadow-md sm:max-w-none sm:px-12 md:px-0">
            I use my skills as a software engineer to build climate solutions for our world.
          </p>
          <nav className="mt-10 flex items-center justify-center gap-x-6" aria-label="Hero actions">
            <LinkButton href="#projects" onClick={smoothScrollToAnchor}>
              View my work
            </LinkButton>
            <a
              href="#contact"
              className="text-sm leading-6 font-semibold text-gray-50 transition-colors hover:text-gray-200"
              onClick={smoothScrollToAnchor}
            >
              Contact <span aria-hidden="true">→</span>
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
}
