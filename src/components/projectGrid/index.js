import React from "react"
import * as styles from "./index.module.scss"
import GridItem from "./gridItem"

const ProjectGrid = ({ projects }) => {
  return (
    <ul className={styles.container}>
      {projects.map((project, i) => {
        return <GridItem shadow {...project} key={i} />
      })}
    </ul>
  )
}

export default ProjectGrid
