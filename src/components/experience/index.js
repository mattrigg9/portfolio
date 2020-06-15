import React from "react"
import classNames from "classnames"
import Employment from "./employment"
import GitHubRepos from "./gitHubRepos"
import layoutStyles from "../homeLayout.module.scss"

function Experience() {
  return (
    <section className={classNames(layoutStyles.section)}>
      <div className="row">
      <div className="col-12 col-lg-6">
          <Employment />
        </div>
        <div className="col-12 col-lg-6">
          <GitHubRepos />
        </div>
      </div>
    </section>
  )
}

export default Experience
