import ExportedImage from "next-image-export-optimizer";
import mattRiggImg from "../images/matt-rigg.jpg";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      className="relative px-2 py-24 sm:py-32 lg:px-6"
      id="about"
      aria-labelledby="about-heading"
    >
      <Background />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 px-4 lg:grid-cols-2 lg:items-start lg:px-6">
        <SectionHeader
          heading="Hi, I'm Matt."
          description="I build applications that people love to use."
          headingLevel="h2"
          className="w-full max-w-7xl lg:col-start-1 lg:row-start-1 lg:mx-auto lg:px-8"
        />
        <div className="relative mx-auto aspect-3/4 max-h-[60rem] w-full max-w-[45rem] lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:-mt-12 lg:p-12">
          <ExportedImage
            src={mattRiggImg}
            fill
            alt="Portrait of Matt Rigg"
            className="rounded-xl object-cover object-center shadow-xl ring-1 ring-gray-400/10 transition-transform duration-500 hover:scale-[1.008]"
            draggable={false}
            role="presentation"
          />
        </div>
        <div className="lg:col-start-1 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
          <div className="max-w-xl space-y-4 leading-7 lg:max-w-lg">
            <p>
              Climate work is a tapestry of disciplines, a community working together to solve an
              existential problem.
            </p>
            <p>
              I am only one small thread in this tapestry, but I work with fervor and relentless
              curiosity.
            </p>

            <p>
              While leading the engineering team at The Building Decarbonization Coalition, I'm
              simultaneously investigating reformative solutions for our energy grid.
            </p>

            <p>
              We're barreling towards an energy crisis that will soon be on our doorstep, and this
              feels like something I can move the needle on.
            </p>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">What I love</h3>

            <p>
              In the world of engineering, I have a personal fascination with human-computer
              interaction and intuitive design.
            </p>

            <p>In the world of earth, I cherish the National Park System.</p>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">What I build</h3>
            <p>
              I&apos;m grateful to have worked with some of the most talented designers and
              engineers over the last decade, building applications which have served millions of
              users.
            </p>

            <p>
              While my focus is on climate, I love chatting about big problems. <br /> Have an idea?
              Let's chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Background() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden bg-linear-to-br from-indigo-50 via-white to-indigo-100"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent" />
    </div>
  );
}
