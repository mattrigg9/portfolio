import React from "react"
import classNames from "classnames"
import layoutStyles from "./homeLayout.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "./common/carousel";
import styles from "./testimonials.module.scss"

const Testimonials = () => {
  const queryResult = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "testimonial" } } }
      ) {
        edges {
          node {
            excerpt(format: PLAIN, pruneLength: 1000)
            frontmatter {
              name
              position
              company
            }
          }
        }
      }
    }
  `)

  const testimonials = queryResult.allMarkdownRemark.edges.map(({ node }) => ({
    description: node.excerpt,
    ...node.frontmatter,
  }))

  return (
    <section className={classNames(layoutStyles.section)}>
      <h1 className={classNames(layoutStyles.sectionTitle)}>Testimonials</h1>
      <Carousel>
        {testimonials.map(testimonial => (
          <div key={testimonial.name} className={styles.testimonial}>
            <p className="text-serif">"{testimonial.description}"</p>
            <div className={styles.credit}>
              <span className="font-weight-bold">{testimonial.name}</span>
              <span>{testimonial.position}, {testimonial.company}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Testimonials
