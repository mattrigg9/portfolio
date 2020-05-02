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
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const projects = [
    {
      title: "Know My Status",
      image: data.knowmystatus.childImageSharp.fixed,
      href: "https://knowmystat.us",
      description: "TBD",
    },
    {
      title: "Know My Status",
      image: data.knowmystatus.childImageSharp.fixed,
      href: "https://knowmystat.us",
      description: "TBD",
    },
    {
      title: "Know My Status",
      image: data.knowmystatus.childImageSharp.fixed,
      href: "https://knowmystat.us",
      description: "TBD",
    },
  ]

  return (
    <section
      className={classNames(layoutStyles.contentRow, layoutStyles.overlap)}
    >
      <ProjectGrid projects={projects} />
    </section>
  )
}

export default FeaturedProjects
