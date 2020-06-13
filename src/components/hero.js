import React from "react"
import classNames from "classnames"
import Header from "./header"
import styles from "./hero.module.scss"
import BackgroundImage from "gatsby-background-image"

const Hero = ({
  onLoad,
  contentVisible = true,
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
      durationFadeIn={200}
      critical
      onLoad={onLoad}
      alt={title}
    >
      <div
        className={classNames(styles.contentWrapper, {
          [styles.hidden]: !contentVisible,
        })}
      >
        <Header />
        <h1 className={titleClassName}>{title}</h1>
      </div>
    </BackgroundImage>
  )
}

export default Hero
