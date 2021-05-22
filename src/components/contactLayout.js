import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import Hero from "./hero"
import Footer from "./footer"
import * as styles from "./contactLayout.module.scss"

const ContactLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      heroBackground: file(relativePath: { eq: "hero-contact.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 99, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <>
      <Hero
        backgroundFluid={data.heroBackground.childImageSharp.gatsbyImageData}
      />
      <noscript key="noscript" id="gatsby-noscript">
        This website works best with JavaScript enabled.
      </noscript>
      <main className={classNames(styles.content)}>{children}</main>
      <Footer />
    </>
  )
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContactLayout
