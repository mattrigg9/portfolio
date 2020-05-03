import React from "react"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import ProjectGrid from "./projectGrid"
import layoutStyles from "./layout.module.scss"

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    {
      knowmystatus: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const projects = [
    {
      title: "Know My Status",
      image: data.knowmystatus.childImageSharp.fluid,
      href: "https://knowmystat.us",
      description: "TBD",
    },
    {
      title: "Know My Status",
      image: data.knowmystatus.childImageSharp.fluid,
      href: "https://knowmystat.us",
      description: "TBD",
    },
    {
      title: "Know My Status",
      image: data.knowmystatus.childImageSharp.fluid,
      href: "https://knowmystat.us",
      description: "TBD",
    },
  ]

  return (
    <section
      className={classNames(layoutStyles.section, layoutStyles.overlapTop)}
    >
      {/* <h3 className={classNames(layoutStyles.sectionTitle, 'c-slate-0')}>Featured Projects</h3> */}
      <ProjectGrid projects={projects} />
    </section>
  )
}

export default FeaturedProjects
