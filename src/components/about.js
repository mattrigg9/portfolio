import React from "react"
import classNames from "classnames"
import layoutStyles from "./layout.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "matt-headshot.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 460, maxHeight: 460) {
            ...GatsbyImageSharpFluid_withWebp
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
            <p>
                Lorem
            </p>
        </div>
        <div className="col-12 col-md-6">
          <Img fluid={data.headshot.childImageSharp.fluid} className="rounded shadow-reg" />
        </div>
      </div>
    </section>
  )
}

export default About
