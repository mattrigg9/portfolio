import PropTypes from "prop-types"
import React from "react"
import styles from "./index.module.scss"
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
