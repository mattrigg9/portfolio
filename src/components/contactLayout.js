import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import Hero from "./hero"
import Footer from "./footer"
import styles from "./contactLayout.module.scss"
import heroStyles from "./contactHero.module.scss"

const ContactLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      heroBackground: file(relativePath: { eq: "hero-contact.jpg" }) {
        childImageSharp {
          fluid(quality: 99, maxWidth: 1400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <>
      <Hero
        backgroundFluid={data.heroBackground.childImageSharp.fluid}
        className={heroStyles.container}
        titleClassName={heroStyles.title}
      />
      <noscript key="noscript" id="gatsby-noscript">
        This app works best with JavaScript enabled.
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
