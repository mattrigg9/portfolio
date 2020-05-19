import React from "react"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import ProjectGrid from "./projectGrid"
import layoutStyles from "./layout.module.scss"

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
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              fullImage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
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
      featuredImage: featuredImage.childImageSharp.fluid,
      fullImage: fullImage.childImageSharp.fluid,
      ...frontmatterAttrs,
    }
  })

  return (
    <section
      className={classNames(layoutStyles.section, layoutStyles.overlapTop)}
    >
      {/* <h3 className={classNames(layoutStyles.sectionTitle, 'c-slate-0')}>Featured Projects</h3> */}
      <ProjectGrid projects={projects} />
    </section>
  )
}

export default FeaturedProjects
