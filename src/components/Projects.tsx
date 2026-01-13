import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from 'next/image';
import { useMemo } from "react";
import alexaBlueprintsImg from "../images/alexa-blueprints.jpg";
import amazonCareImg from "../images/amazon-care.png";
import harbingerImg from "../images/harbinger.png";
import noomImg from "../images/noom.png";
import sioImg from "../images/sio.png";
import timeCo2Img from "../images/time-co2.png";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

interface Project {
  name: string;
  role: string;
  image: StaticImageData;
  bio: string;
  website?: string;
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <ExportedImage
        src={project.image}
        alt={project.name}
        className="aspect-3/2 w-full rounded-xl object-cover shadow-md ring-1 ring-gray-400/10 transition-transform duration-300 group-hover:scale-[1.01]"
        role="presentation"
      />
      <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
        {project.name}
      </h3>
      <p className="text-base leading-7 text-gray-600">{project.role}</p>
      <p className="mt-4 text-base leading-7 text-gray-600">{project.bio}</p>
    </>
  );

  if (project.website) {
    return (
      <li className="group">
        <article>
          <ExternalLink
            href={project.website}
            className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-xl"
          >
            {content}
            <span className="mt-4 flex items-center gap-1 text-primary group-hover:underline">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Visit website
            </span>
          </ExternalLink>
        </article>
      </li>
    );
  }

  return (
    <li>
      <article>{content}</article>
    </li>
  );
}

export default function Projects() {
  const projects = useMemo<Project[]>(
    () => [
      {
        name: "Building Decarbonization Coalition",
        role: "Head of Engineering",
        image: sioImg,
        bio: "Decarbonizing the built environment through electrification. Rebuilt The Switch Is On platform to help homeowners upgrade to electric. 20k electrification leads generated in the first year of the relaunch.",
        website: "https://switchison.org/",
      },
      {
        name: "TIME CO2",
        role: "Lead Developer",
        image: timeCo2Img,
        bio: "Portfolios of high-quality carbon-offset projects to help companies accelerate their journey to net-zero emissions with nature-positive impact.",
        website: "https://co2.com/",
      },
      {
        name: "Noom",
        role: "Lead Developer",
        image: noomImg,
        bio: "Led engineering team in international expansion. Launched in four new locales, drove new security campaigns, and eliminated 29k lines of maintainable code. Improved go-to-market speed for new locales by 400%.",
        website: "https://blueprints.amazon.com/",
      },
      {
        name: "Amazon Care",
        role: "Senior Engineer",
        image: amazonCareImg,
        bio: "A magical telehealth experience with in-person care services. Successfully launched the platform with a CSAT score of 4.7/5. Jointly designed and built the logistics platform that supports dispatching in-person care to patients across the country.",
      },
      {
        name: "Alexa Blueprints",
        role: "Lead Developer",
        image: alexaBlueprintsImg,
        bio: "A new way to let anyone create their own Alexa skills, with no coding required. At launch, this project doubled the number of skills in the Alexa marketplace in less than 24 hours.",
        website: "https://blueprints.amazon.com/",
      },
      {
        name: "Harbinger",
        role: "Founder and Developer",
        image: harbingerImg,
        bio: "Enterprise Tier-1 event and escalation workflow platform. Reduced average engagement time by over 60% and now used by nearly every customer-facing team across AWS.",
      },
    ],
    [],
  );

  return (
    <section className="relative my-8 py-8 md:my-32" id="projects" aria-labelledby="projects-heading">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <SectionHeader
          eyebrow="Build big"
          heading="My Projects"
          description="Over ten years of successfully launching applications to millions of users."
          className="mx-auto max-w-2xl lg:mx-0 xl:sticky xl:top-8 xl:self-start"
        />
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
