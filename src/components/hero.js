import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from 'classnames';
import Header from "./header"
import styles from "./hero.module.scss"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ onLoad, contentVisible }) => {
  const data = useStaticQuery(graphql`
    query {
      heroBackground: file(relativePath: { eq: "hero-bg.jpeg" }) {
        childImageSharp {
          fluid(quality: 99, maxWidth: 1400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
      fadeIn
      durationFadeIn={200}
      critical
      onLoad={onLoad}
      alt="Mountain landscape"
    >
      <div className={classNames(styles.contentWrapper, {
          [styles.hidden]: !contentVisible,
        })}>
      <Header></Header>
      <h1 className={styles.title}>Human-first development</h1>
      </div>
    </BackgroundImage>
  )
}

export default Hero
