import React from "react"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import ProjectGrid from "./projectGrid"
import layoutStyles from "./layout.module.scss"

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    {
      knowmystatus: file(relativePath: { eq: "knowmystatus-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      amazonCare: file(relativePath: { eq: "amazon-care-screen.webp" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      alexaBlueprints: file(relativePath: { eq: "alexa-blueprints-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  const projects = [
    {
      title: "Amazon Care",
      image: data.amazonCare.childImageSharp.fluid,
      href: "https://amazon.care",
      description: "A virtual healthcare benefit being piloted for Amazon employees and their families in the Seattle area.",
    },
    {
      title: "Know My Status",
      image: data.knowmystatus.childImageSharp.fluid,
      href: "https://knowmystat.us",
      description: "Everyone should know their status. Know My Status is an anonymous sexual health clinic discovery tool.",
    },
    {
      title: "Alexa Blueprints",
      image: data.alexaBlueprints.childImageSharp.fluid,
      href: "https://blueprints.amazon.com",
      description: "Create your own Alexa skills in minutes, no coding required.",
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
