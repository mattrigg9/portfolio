import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import { smoothScrollToAnchor } from "../utils/smoothScrollTo";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  const queryResults = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "matt-rigg-mark.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <Link to="/" className="-m-1.5 p-1.5 text-2xl font-semibold text-gray-50">
        <img
          src={queryResults.logo.publicURL}
          alt={queryResults.site.siteMetadata.title}
          className="w-fit-content h-7"
        />
      </Link>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#contact"
          className="font-semibold leading-6 text-gray-50"
          onClick={smoothScrollToAnchor}
        >
          Contact <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
