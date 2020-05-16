import React from "react"
import moment from "moment"
import Img from "gatsby-image"

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
    <div className="mb-6">
      <div className="row">
        <div className="col">{logo && <Img fixed={logo} alt={employer} />}</div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className="text-uppercase m-0">
            {position} 
          </h3>
          <p className="font-weight-light">{employer}</p>
        </div>
        <div className="col">
          <TimeRange startTime={startTime} endTime={endTime} /> (
          <Duration duration={duration} />)
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
