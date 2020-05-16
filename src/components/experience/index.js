import React from "react"
import classNames from "classnames"
import moment from "moment"

import { useStaticQuery, graphql } from "gatsby"

import Skill from "./skill"
import JobPosition from "./jobPosition"
import layoutStyles from "../layout.module.scss"
import styles from "./index.module.scss"
import { FaReact, FaVuejs, FaJs, FaAws, FaNode } from "react-icons/fa"

function Experience() {
  const skills = [
    {
      icon: <FaAws />,
      name: "AWS Certified Solutions Architect",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaNode />,
      name: "NodeJS",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
  ]

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
      <h1 className={classNames(layoutStyles.sectionTitle)}>Experience</h1>
      <div className="row">
        <div className="col">
          <ul className={styles.timeline}>
            {positions.map(position => (
              <li>
                <JobPosition {...position} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <ul className={styles.skills}>
            {skills.map(skill => (
              <Skill {...skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
