import React from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";

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
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-700/10">
          <div className="mx-auto flex w-full flex-col gap-8 p-8 md:flex-row lg:p-12">
            <header className="mx-auto min-w-[20rem] max-w-2xl lg:mx-0 xl:sticky xl:top-8 xl:self-start">
              <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 md:text-left">
                Let's meet
              </h1>
              <p className="mt-4 text-center text-lg leading-8 text-gray-600 md:text-left">
                Have a project idea? Let's talk.
              </p>
            </header>
            <div
              className="calendly-inline-widget z-10 -mt-4 h-[38rem] w-full min-w-[21rem] justify-self-end"
              data-url="https://calendly.com/matt-rigg/meet?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=404079"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
