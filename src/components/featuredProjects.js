import React from "react"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import ProjectGrid from "./projectGrid"
import * as layoutStyles from "./homeLayout.module.scss"

const FeaturedProjects = () => {
  const queryResult = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { type: { eq: "project" }, featured: { eq: true } }
        }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              shortDescription
              website
              featuredImage {
                childImageSharp {
                  gatsbyImageData(width: 300, layout: CONSTRAINED)
                }
              }
              fullImage {
                childImageSharp {
                  gatsbyImageData(width: 600, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = queryResult.allMarkdownRemark.edges.map(({ node }) => {
    const { featuredImage, fullImage, ...frontmatterAttrs } = node.frontmatter

    return {
      description: node.html,
      featuredImage: featuredImage.childImageSharp.gatsbyImageData,
      fullImage: fullImage.childImageSharp.gatsbyImageData,
      ...frontmatterAttrs,
    }
  })

  return (
    <section className={classNames(layoutStyles.section)}>
      {/* <h3 className={classNames(layoutStyles.sectionTitle, 'c-slate-0')}>Featured Projects</h3> */}
      <ProjectGrid projects={projects} />
    </section>
  )
}

export default FeaturedProjects
