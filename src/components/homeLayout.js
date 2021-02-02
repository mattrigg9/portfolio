import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "./hero"
import Footer from "./footer"
import styles from "./homeLayout.module.scss"
import heroStyles from "./homeHero.module.scss"

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

  return (
    <>
      <Hero
        title="Human-first development"
        backgroundFluid={data.heroBackground.childImageSharp.fluid}
        className={heroStyles.container}
        titleClassName={heroStyles.title}
      />
      <noscript key="noscript" id="gatsby-noscript">This website works best with JavaScript enabled.</noscript>
      <main
        className={styles.content}
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
