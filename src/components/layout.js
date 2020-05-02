/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Hero from "./hero"

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
      </noscript>

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()}, Matt Rigg
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
