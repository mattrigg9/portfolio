import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import styles from "./hero.module.scss"
import Image from "./image"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
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
    <BackgroundImage
      Tag="section"
      className={styles.container}
      fluid={data.heroBackground.childImageSharp.fluid}
      alt="Mountain landscape"
    >
      <Header></Header>

      <h1 className={styles.title}>Build your place in the world</h1>
    </BackgroundImage>
  )
}

Hero.defaultProps = {
  onLoad: () => {},
}

Hero.propTypes = {
  autoOpenVideoModal: PropTypes.bool,
  imageAltText: PropTypes.string,
  headerText: PropTypes.string,
  image: PropTypes.bool,
  linkIcon: PropTypes.string,
  linkText: PropTypes.string,
  onLoad: PropTypes.func,
  subHeaderText: PropTypes.string,
  video: PropTypes.bool,
  videoModalSrc: PropTypes.string,
}

export default Hero
