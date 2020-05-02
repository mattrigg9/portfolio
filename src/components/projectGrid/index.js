import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./index.module.scss"
import GridItem from "./gridItem"

const ProjectGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      heroBackground: file(relativePath: { eq: "hero-bg.jpeg" }) {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ul className={styles.container}>
      <GridItem shadow />
    </ul>
  )
}

export default ProjectGrid
