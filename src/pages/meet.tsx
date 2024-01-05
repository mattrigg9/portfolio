import React from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";
import { LinkButton } from "../components/Button";

export const Head = () => (
  <SEO title="Schedule a Meeting">
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    />
  </SEO>
);

export default function MeetPage() {
  return (
    <main className="relative">
      <StaticImage
        src="../images/redwoods.jpg"
        alt="Redwood forest"
        objectPosition="center center"
        // Absolute must be important to override gatsby-image-wrapper https://github.com/gatsbyjs/gatsby/issues/34457
        className="brightness-70 !absolute -z-10 h-full"
      />
      <Navbar withGradient />
      <section className="relative mx-4 my-8 min-h-[80vh] md:my-28">
        <div className="relative mx-auto flex h-[55rem] max-w-4xl flex-col gap-8 overflow-hidden rounded-xl bg-white p-8 shadow-xl ring-1 ring-gray-700/10 md:h-[36rem] md:flex-row md:px-16 md:py-8">
          <div className="flex flex-col justify-between md:h-full">
            <header className="mx-auto max-w-2xl md:min-w-[20rem] lg:mx-0 xl:sticky xl:top-8 xl:self-start">
              <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 md:text-left">
                Let's meet
              </h1>
              <p className="mt-4 text-center text-lg leading-8 text-gray-600 md:text-left">
                Have a project idea? Let's chat!
              </p>
            </header>
            <div className="mt-4 justify-self-end md:mb-8">
              <p className="text-center text-lg leading-8 text-gray-600 md:text-left">
                Prefer to reach out directly?
              </p>

              <div className="mx-auto mt-4 text-center md:text-left">
                <LinkButton href="/#contact">Send me an email</LinkButton>
              </div>
            </div>
          </div>
          <div
            className="calendly-inline-widget z-10 h-full w-full justify-self-end md:-mt-4"
            data-url="https://calendly.com/matt-rigg/meet?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=404079"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
