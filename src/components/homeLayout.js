import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import Hero from "./hero"
import Footer from "./footer"
import styles from "./homeLayout.module.scss"
import heroStyles from "./homeHero.module.scss"

const CONTENT_FADE_DELAY = 1500

const HomeLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      heroBackground: file(relativePath: { eq: "hero-home.jpeg" }) {
        childImageSharp {
          fluid(quality: 99, maxWidth: 1400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const [contentVisible, setVisibility] = React.useState(false)

  const setContentVisible = () => setVisibility(true)
  const onHeroLoad = () => {
    setTimeout(setContentVisible, CONTENT_FADE_DELAY)
  }

  // Show content immediately if user starts scrolling
  React.useEffect(() => {
    window.addEventListener("scroll", setContentVisible, { passive: true })
    return () =>
      window.removeEventListener("scroll", setContentVisible, { passive: true })
  }, [])

  return (
    <>
      <Hero
        title="Human-first development"
        backgroundFluid={data.heroBackground.childImageSharp.fluid}
        onLoad={onHeroLoad}
        contentVisible={contentVisible}
        className={heroStyles.container}
        titleClassName={heroStyles.title}
      />
      <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
      </noscript>
      <main
        className={classNames(styles.content, {
          [styles.hidden]: !contentVisible,
        })}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
