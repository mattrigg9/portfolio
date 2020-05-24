import React from "react"
import classNames from "classnames"
import moment from "moment"

import { useStaticQuery, graphql } from "gatsby"

import JobPosition from "./jobPosition"
import GitHubRepos from "./gitHubRepos"
import layoutStyles from "../layout.module.scss"

function Experience() {
  const logos = useStaticQuery(graphql`
    {
      amazon: file(relativePath: { eq: "logos/amazon.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      compspecialties: file(relativePath: { eq: "logos/compspecialties.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uw: file(relativePath: { eq: "logos/udub.png" }) {
        childImageSharp {
          fixed(height: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const positions = [
    {
      employer: "Amazon.com",
      position: "Front End Engineer II",
      logo: logos.amazon.childImageSharp.fixed,
      startTime: moment("2014-06-05"),
      endTime: undefined,
      description: "Lorem ipsum",
    },
    {
      employer: "Competition Specialties",
      position: "IT Lead",
      logo: logos.compspecialties.childImageSharp.fixed,
      startTime: moment("2011-05-01"),
      endTime: moment("2014-06-05"),
      description: "Lorem ipsum",
    },
    {
      employer: "University of Washington",
      position: "Bachelors of Science, Summa Cum Laude",
      logo: logos.uw.childImageSharp.fixed,
      startTime: moment("2012-09-01"),
      endTime: moment("2014-06-01"),
      description: "Lorem ipsum",
    },
  ]

  return (
    <section className={classNames(layoutStyles.section)}>
      <div className="row">
      <div className="col-12 col-md-6">
          <h1 className={classNames(layoutStyles.sectionTitle)}>Experience</h1>
          <ul className='no-list-style'>
            {positions.map((position, index) => (
              <li key={index} className={layoutStyles.module}>
                <JobPosition {...position} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <GitHubRepos />
        </div>
      </div>
    </section>
  )
}

export default Experience
