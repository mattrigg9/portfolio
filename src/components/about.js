import React from "react"
import classNames from "classnames"
import layoutStyles from "./layout.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const queryResults = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "matt-headshot.jpg" }) {
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
          <div
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
        <div className="col-12 col-md-6">
          <Img
            fluid={queryResults.headshot.childImageSharp.fluid}
            className="rounded shadow-reg"
          />
        </div>
      </div>
    </section>
  )
}

export default About
