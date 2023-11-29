import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function About() {
  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-0" id="about">
      <BackgroundPattern />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
        <header className="w-full max-w-7xl lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:gap-x-8 lg:px-8">
          <p className="text-base font-semibold leading-7 text-primary">Build better</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I'm Matt.
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-700">
            I build applications that people love to use.
          </p>
        </header>
        <div className="lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-mt-12 lg:overflow-hidden lg:p-12">
          <StaticImage
            src="../images/matt-rigg.jpg"
            alt="Matt Rigg"
            objectPosition="center left"
            className="hidden max-h-[65rem] w-[55rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:block"
          />
          <StaticImage
            src="../images/matt-rigg-cropped.jpg"
            alt="Matt Rigg"
            objectPosition="center left"
            className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:hidden"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pr-4">
          <div className="max-w-xl leading-7 lg:max-w-lg">
            <p>
              Thoughtful and delicate interactions are the cornerstones of how people see a
              product's value. These often subtle interfaces can quietly but undoubtedly sway a
              user's impression of a product. Understanding this psychology is critical to building
              a product that people want to come back to time and time again.
            </p>
            <p className="mt-8">
              A well made application is like an airport. No matter where the user is, they always
              have just the right level of context to orient themselves and know where to go next.
              Providing a user with this sense of control enables them to expertly navigate with
              little to no effort, no matter how large or complex.
            </p>
            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">What I build</h2>
            <p className="mt-6">
              I build enterprise-scale web and React Native applications using the latest adopted
              standards. I'm grateful to have worked with some of the most talented designers and
              engineers out there. My applications have served millions of users over the past
              decade.
            </p>
            <p className="mt-6">
              As a 7+ year AWS veteran, I have intimate experience with building high-availability
              and scalable applications in a way that's performant and cost-effective for your use
              case.
            </p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">
              Building climate solutions
            </h2>
            <p className="mt-6">
              Since my work at TIME CO2, I've become deeply passionate about building solutions for
              our climate crisis. I am actively pursuing opportunities and projects to materially
              improve our planet. Solutions are beginning to scale, but we must continue to rage
              against humanity's slow progress on climate action. CO2 removal, emissions reduction,
              and energy grid modernization are all areas of interest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="square"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#square)" />
      </svg>
    </div>
  );
}
