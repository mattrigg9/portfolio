import Image from "next/image";

export default function About() {
  return (
    <section className="relative px-6 py-24 sm:py-32 lg:px-0" id="about">
      <BackgroundPattern />
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
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
          <Image
            src="/images/matt-rigg.jpg"
            alt="Matt Rigg"
            width={700}
            height={1040}
            className="hidden sm:block max-h-45rem w-55rem rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover object-center-left"
          />
          <Image
            src="/images/matt-rigg-cropped.jpg"
            alt="Matt Rigg"
            width={800}
            height={800}
            className="sm:hidden w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover object-center-left"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pr-4">
          <div className="max-w-xl leading-7 lg:max-w-lg flex flex-col gap-4">
            <p>
              I have a personal obsession with human-computer interaction.
            </p>
            <p>
              Thoughtful and delicate interactions are the cornerstones of how people perceive the value of a product.
              These often subtle moments can quietly but undoubtedly sway a
              user's impression of a product. Understanding this psychology is critical to building
              a product that people want to come back to time and time again.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">What I build</h2>
            <p>
              I build enterprise-scale applications using the latest adopted
              standards. I'm grateful to have worked with some of the most talented designers and
              engineers in the market, building applications which have served millions of users.
            </p>
            <p>
              With over a decade of experience, and as a 7+ year AWS veteran, I have intimate experience with building high-availability
              and scalable applications in a way that's performant and cost-effective for any use
              case.
            </p>

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Inventing climate solutions
            </h2>
            <p>
              I believe the climate crisis is one of the most pressing challenges of our time.
              
              Some solutions are beginning to scale, but we must
              continue to rage against humanity's slow progress on climate action on all fronts.
              Carbon sequestration, emissions reduction, and energy grid modernization are some of the most
              compelling challenges that we can tackle today.
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
        className="absolute left-[max(50%,25rem)] top-0 h-64rem w-128rem -translate-x-1/2 stroke-gray-200 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
