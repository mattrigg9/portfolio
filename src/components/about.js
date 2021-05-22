import React from "react"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as layoutStyles from "./homeLayout.module.scss"
import * as styles from './about.module.scss';

const About = () => {
  const queryResults = useStaticQuery(graphql`{
  headshot: file(relativePath: {eq: "matt-rigg.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, width: 460, height: 460, layout: CONSTRAINED)
    }
  }
  markdownRemark(frontmatter: {type: {eq: "about-me"}}) {
    html
    frontmatter {
      signatureImage {
        childImageSharp {
          gatsbyImageData(width: 75, layout: FIXED)
        }
      }
    }
  }
}
`)

  return (
    <section className={classNames(layoutStyles.section)}>
      <h1 className={classNames(layoutStyles.sectionTitle)}>Hi, I'm Matt</h1>
      <div className="row">
        <div className="col-12 col-md-7">
          <article
          className={styles.articleContent}
            dangerouslySetInnerHTML={{
              __html: queryResults.markdownRemark.html,
            }}
          />
          <div className="signature">
            <GatsbyImage
              alt="Matt Rigg Signature"
              image={queryResults.markdownRemark.frontmatter.signatureImage.childImageSharp.gatsbyImageData}
              className="mt-3" />
          </div>
        </div>
        <div className="col-12 col-md-5 mt-4 mt-md-0">
          <GatsbyImage
            alt="Matt Rigg"
            image={queryResults.headshot.childImageSharp.gatsbyImageData}
            className="rounded shadow" />
        </div>
      </div>
    </section>
  );
}

export default About
