import React from "react"
import classNames from "classnames"
import Img from "gatsby-image"
import styles from "./gridItem.module.scss"

const GridItem = ({ title, alt, href, image, description, shadow = false }) => (
  <li className={styles.gridItem}>
    <a href={href} target="_blank">
    <Img
      fluid={image}
      alt={alt || title}
      className={classNames(styles.gridItemImage, {
        [styles.gridItemImage__shadow]: shadow,
      })}
    />
    </a>
    <div className={styles.gridItemDetails}>
      <h2 className={styles.gridItemTitle}>
        <a href={href}>{title}</a>
      </h2>
      <div className={styles.gridItemDescription}>{description}</div>
    </div>
  </li>
)

export default GridItem
