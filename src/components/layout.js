import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Hero from "./hero"
import Footer from "./footer"
import styles from "./layout.module.scss"

const CONTENT_FADE_DELAY = 1500

const Layout = ({ children }) => {
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
      <Hero onLoad={onHeroLoad} contentVisible={contentVisible} />
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
