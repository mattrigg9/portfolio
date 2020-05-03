import React from "react"
import moment from "moment"
import Img from "gatsby-image"

const TimeRange = ({ startTime, endTime }) => {
  return (
    <span>
      {startTime.format("MMM YYYY")} to {endTime ? endTime.format("MMM YYYY") : "Present"}
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
    <div className="mb-6">
      <div className="row">
        <div className="col">{logo && <Img fixed={logo} />}</div>
      </div>
      <div className="row">
        <div className="col">
          <h3>
            {position} <span className="font-weight-light">({employer})</span>
          </h3>
        </div>
        <div className="col">
          <TimeRange startTime={startTime} endTime={endTime} /> 
          {' '}
          (<Duration duration={duration} />)
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default JobPosition
