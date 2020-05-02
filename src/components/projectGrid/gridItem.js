import React from "react"
import classNames from "classnames"
import Img from "gatsby-image"
import styles from "./gridItem.module.scss"

const GridItem = ({ shadow, title, href, image, description }) => (
  <li className={styles.gridItem}>
    <Img
      fixed={image}
      className={classNames(styles.gridItemImage, {
        [styles.isShadow]: shadow,
      })}
    />
    <div className={styles.gridItemDetails}>
      <h3 className={styles.gridItemTitle}>
        <a href={href}>{title}</a>
      </h3>
      <div className={styles.gridItemDescription}>{description}</div>
    </div>
  </li>
)

export default GridItem
