import React from "react"
import classNames from "classnames"
import layoutStyles from "./homeLayout.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './about.module.scss';

const About = () => {
  const queryResults = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "matt-rigg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 460, maxHeight: 460) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      markdownRemark(frontmatter: { type: { eq: "about-me" } }) {
        html
        frontmatter {
          signatureImage {
            childImageSharp {
              fixed(width: 75) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={classNames(layoutStyles.section)}>
      <h1 className={classNames(layoutStyles.sectionTitle)}>About Matt</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <article
          class={styles.articleContent}
            dangerouslySetInnerHTML={{
              __html: queryResults.markdownRemark.html,
            }}
          />
          <div className="signature">
            <Img
            className="mt-3"
              fixed={
                queryResults.markdownRemark.frontmatter.signatureImage
                  .childImageSharp.fixed
              }
            />
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <Img
            fluid={queryResults.headshot.childImageSharp.fluid}
            className="rounded shadow"
          />
        </div>
      </div>
    </section>
  )
}

export default About
