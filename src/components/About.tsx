import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function About() {
  return (
    <section className="relative isolate px-6 py-24 sm:py-32 lg:px-0" id="about">
      <BackgroundPattern />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <header className="w-full max-w-7xl lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:gap-x-8 lg:px-8">
          <p className="text-base font-semibold leading-7 text-primary">Build better</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I'm Matt.
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-700">
            I build applications that people love to use.
          </p>
        </header>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <StaticImage
            src="../images/matt-rigg.jpg"
            alt="Matt Rigg"
            objectPosition="bottom left"
            className="max-h-[70rem] w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pr-4">
          <div className="max-w-xl leading-7 lg:max-w-lg">
            <p>
              Thoughtful and delicate interactions are the cornerstones that shape the user's
              impression of a product's value. They can be incredibly subtle.
            </p>
            <p className="mt-8">
              A well-made application predicts a users need before they even think about the next
              step, offering a seamless experience that feels organic. A well designed application
              should be like an airport. No matter where the user is, they always have the right
              level of context to orient themselves and know where to go next. Providing a user with
              this sense of control enables them to expertly navigate with little to no effort, no
              matter how large or complex.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Building climate solutions
            </h2>
            <p className="mt-6">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
              ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate
              nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed
              convallis diam.
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
