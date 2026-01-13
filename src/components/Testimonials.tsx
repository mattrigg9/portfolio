import Image from "next/image";
import { useMemo } from "react";
import SectionHeader from "./SectionHeader";

interface Author {
  name: string;
  title: string;
  image: string;
  companyLogo?: string;
  companyName?: string;
}

interface Testimonial {
  body: string;
  author: Author;
}

function TestimonialCard({ testimonial, featured = false }: { testimonial: Testimonial; featured?: boolean }) {
  if (featured) {
    return (
      <figure className="col-span-2 hidden sm:flex sm:flex-col sm:rounded-xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
        <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
          <p>{testimonial.body}</p>
        </blockquote>
        <figcaption className="mt-auto flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
          <Image
            className="h-10 w-10 flex-none rounded-full bg-gray-50"
            src={testimonial.author.image}
            alt=""
            width={40}
            height={40}
          />
          <div className="flex-auto">
            <div className="font-semibold">{testimonial.author.name}</div>
            <div className="text-gray-600">{testimonial.author.title}</div>
          </div>
          {testimonial.author.companyLogo && testimonial.author.companyName && (
            <Image
              src={testimonial.author.companyLogo}
              alt={testimonial.author.companyName}
              width={120}
              height={40}
              className="flex-none"
            />
          )}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
      <blockquote className="text-gray-900 text-lg">
        <p>{testimonial.body}</p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-x-4">
        <Image
          className="h-10 w-10 flex-none rounded-full bg-gray-50"
          src={testimonial.author.image}
          alt=""
          width={40}
          height={40}
        />
        <div>
          <div className="font-semibold leading-7">{testimonial.author.name}</div>
          <div className="text-gray-600">{testimonial.author.title}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const featuredTestimonial = useMemo<Testimonial>(
    () => ({
      body: "Matt is regarded as a pillar of our team. Working tirelessly and without ego, Matt is a rare breed in this industry. His eye for design and user experience shines through in tools that he passionately creates. He is constantly coming up with ideas and mechanisms that I never knew I wanted until I got them.",
      author: {
        name: "Ian Webb",
        title: "Senior Engineer, Amazon",
        image: "/images/headshots/ian-webb.jpg",
        companyLogo: "/images/amazon-logo.png",
        companyName: "Amazon",
      },
    }),
    [],
  );

  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        body: "Collaborating with Matt has been a privilege. His unwavering dedication, creative problem-solving, and impeccable design sense have been remarkable. Matt's contributions have significantly shaped CO2.com's success, making it both technically robust and user-friendly. I'm confident that his expertise will continue to drive positive changes in any project he's a part of.",
        author: {
          name: "Nathan Fixler",
          title: "Senior Engineer, TIME",
          image: "/images/headshots/nathan-fixler.jpg",
        },
      },
      {
        body: "Matt is a talented engineer who is excellent at dealing with ambiguity. Though what sets him apart is his ability to don the various hats as needed to deliver on any given project: UX Designer, Researcher, or Product Manager, in addition to engineering great customer facing software solutions. Matt's customer empathy, team engagement, and strong design and technical skills enables him to work directly with customers to understand their key problems. Matt is a great asset for any solution.",
        author: {
          name: "Trevor Gruby",
          title: "Principal Engineering Manager, Microsoft",
          image: "/images/headshots/trevor-gruby.jpg",
        },
      },
      {
        body: "Matt has a super-human ability to build and deliver features. He routinely completes tasks much faster than I would expect. He is excellent at building trust with others and is quick to speak up and provide praise when warranted. Matt cares deeply about his customers, whether internal or external, and he always strives to improve their experience.",
        author: {
          name: "Fernando Hernandez",
          title: "Front End Engineer, Amazon",
          image: "/images/headshots/placeholder-male.png",
        },
      },
    ],
    [],
  );

  return (
    <section className="relative min-h-screen" id="testimonials" aria-labelledby="testimonials-heading">
      <Image
        src="/images/little-tahoma.jpg"
        alt=""
        fill
        className="object-cover lg:object-top-right -z-10 object-bottom"
        role="presentation"
      />
      <div className="mx-auto max-w-screen-2xl px-6 pb-32 pt-24 lg:px-8">
        <SectionHeader
          eyebrow="Build confidently"
          heading="Testimonials"
          theme="dark"
          className="mx-auto max-w-xl text-center"
        />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 sm:mt-24 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4">
          <TestimonialCard testimonial={featuredTestimonial} featured />
          
          <div className="space-y-8 xl:row-span-2">
            <TestimonialCard testimonial={testimonials[0]} />
          </div>

  

          <div className="space-y-8 xl:row-span-2">
            <TestimonialCard testimonial={testimonials[2]} />
          </div>
          <div className="space-y-8 xl:row-span-4 sm:col-span-2">
            <TestimonialCard testimonial={testimonials[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
