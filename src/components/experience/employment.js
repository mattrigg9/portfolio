import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import moment from "moment"
import Img from "gatsby-image"
import classNames from "classnames"
import layoutStyles from "../layout.module.scss"


const TimeRange = ({ startTime, endTime }) => {
  const formattedStartTime = startTime.format("MMM YYYY")
  const formattedEndTime = endTime ? endTime.format("MMM YYYY") : "Present"
  return (
    <span>
      {formattedStartTime} to {formattedEndTime}
    </span>
  )
}

const Duration = ({ duration }) => {
  return (
    <span>
      {duration.years()}y, {duration.months()}mo
    </span>
  )
}

const JobPosition = ({
  employer,
  position,
  startTime,
  endTime,
  description,
  logo,
}) => {
  let diff
  if (endTime) {
    diff = endTime.diff(startTime)
  } else {
    diff = moment().diff(startTime) // Diff from today
  }
  const duration = moment.duration(diff)

  return (
    <>
      <div className="row">
        <div className="col">{logo && <Img fixed={logo} alt={employer} />}</div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className=" m-0">{position}</h3>
          <p className="text-size-small">{employer}</p>
        </div>
        <div className="col text-size-small">
          <TimeRange startTime={startTime} endTime={endTime} /> (
          <Duration duration={duration} />)
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-size-small">{description}</p>
        </div>
      </div>
    </>
  )
}

const Employment = () => {
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
      position: "Tech Lead, Front End Engineer II",
      logo: logos.amazon.childImageSharp.fixed,
      startTime: moment("2014-06-05"),
      endTime: undefined,
      description:
        "Working across four separate teams at Amazon, I have launched products that have scaled to millions of users.",
    },
    {
      employer: "Competition Specialties",
      position: "Tech Lead, eCommerce Lead Engineer",
      logo: logos.compspecialties.childImageSharp.fixed,
      startTime: moment("2011-05-01"),
      endTime: moment("2014-06-05"),
      description:
        "Lead the rebuild of Competition Specialties' online shopping experience.",
    },
    {
      employer: "University of Washington",
      position: "Bachelors of Science",
      logo: logos.uw.childImageSharp.fixed,
      startTime: moment("2012-09-01"),
      endTime: moment("2014-06-01"),
      description: "Graduated in 2014 with Summa Cum Laude honors.",
    },
  ]

  return (
    <>
      <h1 className={classNames(layoutStyles.sectionTitle)}>Experience</h1>
      <ul className="no-list-style">
        {positions.map((position, index) => (
          <li key={index} className={classNames(layoutStyles.module, "py-2 my-5")}>
            <JobPosition {...position} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Employment
