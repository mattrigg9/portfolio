import React from "react"
import Header from "./header"
import styles from "./hero.module.scss"
import BackgroundImage from "gatsby-background-image"

const Hero = ({
  title,
  className,
  titleClassName,
  backgroundFluid,
}) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundFluid}
      fadeIn
      critical
      alt={title}
    >
      <div className={styles.contentWrapper}>
        <Header />
        <h1 className={titleClassName}>{title}</h1>
      </div>
    </BackgroundImage>
  )
}

export default Hero
