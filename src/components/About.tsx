import ExportedImage from "next-image-export-optimizer";
import mattRiggImg from "../images/matt-rigg.jpg";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section className="relative lg:px-6 px-2 py-24 sm:py-32" id="about" aria-labelledby="about-heading">
      <Background />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 px-4 lg:px-6 gap-y-8 lg:grid-cols-2 lg:items-start">
        <SectionHeader
          eyebrow="Build better"
          heading="Hi, I'm Matt."
          description="I build applications that people love to use."
          headingLevel="h2"
          className="w-full max-w-7xl lg:col-start-1 lg:row-start-1 lg:mx-auto lg:px-8"
        />
        <div className="relative mx-auto lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 w-full aspect-3/4 max-h-[60rem] max-w-[45rem] lg:-mt-12 lg:p-12 lg:mx-0">
          <ExportedImage
            src={mattRiggImg}
            fill
            alt="Portrait of Matt Rigg"
            className="hover:scale-[1.008] transition-transform duration-500 rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover object-center"
            draggable={false}
            role="presentation"
          />
        </div>
        <div className="lg:col-start-1 lg:row-start-2 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
          <div className="max-w-xl leading-7 lg:max-w-lg space-y-4">
            <p>
              I have a personal obsession with human-computer interaction and complex problem solving.
            </p>
            <p>
              Thoughtful and delicate interactions are the cornerstones of how people perceive the value of a product.
              These often subtle moments can quietly but undoubtedly sway a
              user&apos;s impression of a product. Understanding this psychology is critical to building
              a product that people want to come back to time and time again.
            </p>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">What I build</h3>
            <p>
              I build enterprise-scale applications using the latest adopted
              standards. I&apos;m grateful to have worked with some of the most talented designers and
              engineers in the market, building applications which have served millions of users.
            </p>
            <p>
              With over a decade of experience, and as a 7+ year AWS veteran, I have intimate experience with building high-availability
              and scalable applications in a way that&apos;s performant and cost-effective for any use
              case.
            </p>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
              Inventing climate solutions
            </h3>
            <p>
              I believe the climate crisis is one of the most pressing challenges of our time.
              
              Some solutions are beginning to scale, but we must
              continue to rage against humanity&apos;s slow progress on climate action on all fronts.
              Carbon sequestration, emissions reduction, and energy grid modernization are some of the most
              compelling challenges that we can tackle today.
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
