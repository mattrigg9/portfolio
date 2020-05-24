import React from "react"
import classNames from "classnames"
import Employment from "./employment"
import GitHubRepos from "./gitHubRepos"
import layoutStyles from "../layout.module.scss"

function Experience() {
  return (
    <section className={classNames(layoutStyles.section)}>
      <div className="row">
      <div className="col-12 col-md-6">
          <Employment />
        </div>
        <div className="col-12 col-md-6">
          <GitHubRepos />
        </div>
      </div>
    </section>
  )
}

export default Experience
