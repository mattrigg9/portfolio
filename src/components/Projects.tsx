import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useMemo } from "react";

export default function Projects() {
  // Images cannot be passed to StaticImage as variables, so they must be queried to be managed in an array.
  const data = useStaticQuery(graphql`
    {
      blueprints: file(relativePath: { eq: "alexa-blueprints.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 90)
        }
      }
      time: file(relativePath: { eq: "time-co2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 90)
        }
      }
      amazonCare: file(relativePath: { eq: "amazon-care.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 90)
        }
      }
      noom: file(relativePath: { eq: "noom.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 90)
        }
      }
      harbinger: file(relativePath: { eq: "harbinger.png" }) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 90)
        }
      }
    }
  `);

  const projects = useMemo(
    () => [
      {
        name: "TIME CO2",
        role: "Lead Developer",
        image: data.time.childImageSharp.gatsbyImageData,
        bio: "Portfolios of high-quality carbon-offset projects to help companies accelerate their journey to net-zero emissions with nature-positive impact.",
        website: "https://co2.com/",
      },
      {
        name: "Noom",
        role: "Lead Developer",
        image: data.noom.childImageSharp.gatsbyImageData,
        bio: "Led engineering team in international expansion. Launched in four new locales, drove new security campaigns, and eliminated 29k lines of maintainable code. Improved go-to-market speed for new locales by 400%.",
        website: "https://blueprints.amazon.com/",
      },
      {
        name: "Amazon Care",
        role: "Senior Engineer",
        image: data.amazonCare.childImageSharp.gatsbyImageData,
        bio: " A magical telehealth experience with in-person care services. Successfully launched the platform with a CSAT score of 4.7/5. Jointly designed and built the logistics platform that supports dispatching in-person care to patients across the country.",
      },
      {
        name: "Alexa Blueprints",
        role: "Lead Developer",
        image: data.blueprints.childImageSharp.gatsbyImageData,
        bio: "A new way to let anyone create their own Alexa skills, with no coding required. At launch, this project doubled the number of skills in the Alexa marketplace in less than 24 hours.",
        website: "https://blueprints.amazon.com/",
      },

      {
        name: "Harbinger",
        role: "Founder and Developer",
        image: data.harbinger.childImageSharp.gatsbyImageData,
        bio: "Enterprise Tier-1 event and escalation workflow platform. Reduced average engagement time by over 60% and now used by nearly every customer-facing team across AWS.",
      },
    ],
    [],
  );

  return (
    <section className="relative my-8 py-8 md:my-32" id="projects">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <header className="mx-auto max-w-2xl lg:mx-0 xl:sticky xl:top-8 xl:self-start">
          <p className="text-base font-semibold leading-7 text-primary">Build big</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Over ten years of successfully launching applications to millions of users.
          </p>
        </header>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {projects.map((project) => (
            <li key={project.name}>
              <GatsbyImage
                image={project.image}
                alt="Alexa Blueprints"
                className="aspect-[3/2] w-full rounded-xl object-cover shadow-md ring-1 ring-gray-400/10"
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{project.name}</h3>
              <p className="text-base leading-7 text-gray-600">{project.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{project.bio}</p>
              {project.website && (
                <a
                  href={project.website}
                  className="mt-6 flex items-center gap-x-1 text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.5858 5H13V3H21V11H19V6.41421L12 13.4142L10.5858 12L17.5858 5Z"></path>
                  </svg>
                  <span>Website</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
