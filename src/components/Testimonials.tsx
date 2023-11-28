import React from "react";
import classNames from "../utils/classNames";

const featuredTestimonial = {
  body: "Matt is regarded as a pillar of our team. Working tirelessly and without ego, Matt is a rare breed in this industry. His eye for design and user experience shines through in tools that he passionately creates. He is constantly coming up with ideas and mechanisms that I never knew I wanted until I got them.",
  author: {
    name: "Ian Webb",
    title: "Senior Engineer, Amazon",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    logoUrl: "",
  },
};

const testimonials = [
  [
    [
      {
        body: "Collaborating with Matt has been a privilege. His unwavering dedication, creative problem-solving, and impeccable design sense have been remarkable. Matt's contributions have significantly shaped CO2.com's success, making it both technically robust and user-friendly. I'm confident that his expertise will continue to drive positive changes in any project he's a part of.",
        author: {
          name: "Nathan Fixler",
          title: "Senior Engineer, TIME",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Matt is a talented engineer who is excellent at dealing with ambiguity. Though what sets him apart is his ability to don the various hats as needed to deliver on any given project: UX Designer, Researcher, or Product Manager, in addition to engineering great customer facing software solutions. Matt's customer empathy, team engagement, and strong design and technical skills enables him to work directly with customers to understand their key problems. Matt is a great asset for any solution.",
        author: {
          name: "Trevor Gruby",
          title: "Principal Engineering Manager, Microsoft",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Matt has a super-human ability to build and deliver features. He routinely completes tasks much faster than I would expect. He is excellent at building trust with others and is quick to speak up and provide praise when warranted. Matt cares deeply about his customers, whether internal or external, and he always strives to improve their experience.",
        author: {
          name: "Fernando Hernandez",
          title: "Front End Engineer, Amazon",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
];

export default function Testimonials() {
  return (
    <section
      className="relative isolate pb-32 pt-24 sm:pt-32 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-emerald-200 to-gray-100"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-xl text-center">
          <p className="text-base font-semibold leading-7 text-primary">Build confidently</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Testimonials
          </h2>
        </header>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p className="relative">
                <span className="text-4xl absolute -left-5 -top-1">“</span>
                {`${featuredTestimonial.body}”`}
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <img
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{featuredTestimonial.author.title}</div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "col-span-2 xl:col-start-2 row-start-1 xl:row-end-2",
                    "space-y-8",
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.title}
                      className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold leading-7">{testimonial.author.name}</div>
                          <div className="text-gray-600 leading-4">{testimonial.author.title}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}