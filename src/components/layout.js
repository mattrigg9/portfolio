/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Hero from "./hero"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
      </noscript>

      <main className={styles.content}>{children}</main>
      <footer>&copy; {new Date().getFullYear()}, Matt Rigg</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
