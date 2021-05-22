import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import Header from "./header"
import * as styles from "./hero.module.scss"

const Hero = ({ title, className, titleClassName, image }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fadeIn
      critical
      alt={title}
    >
      <div className={styles.contentWrapper}>
        <GatsbyImage image={image} alt={title} />
        <Header />
        <h1 className={titleClassName}>{title}</h1>
      </div>
    </BackgroundImage>
  )
}

export default Hero
