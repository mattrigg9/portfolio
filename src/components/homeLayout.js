import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "./hero"
import Footer from "./footer"
import * as styles from "./homeLayout.module.scss"
import * as heroStyles from "./homeHero.module.scss"

const HomeLayout = ({ children }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "hero-home.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 99
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  return (
    <>
      <Hero
        title="Human-first development"
        image={image}
        className={heroStyles.container}
        titleClassName={heroStyles.title}
      />
      <noscript key="noscript" id="gatsby-noscript">
        This website works best with JavaScript enabled.
      </noscript>
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
