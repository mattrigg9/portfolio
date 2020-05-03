import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"

// TODO: Query data from structured config
const Footer = () => {
  return (
    <footer className={styles.container}>
      <h1 className={styles.title}>Matt Rigg</h1>
      <ul className={styles.links}>
        <li>
          <Link to="https://www.linkedin.com/in/mattrigg/">Contact</Link>
        </li>

        <li>
          <Link to="https://www.linkedin.com/in/mattrigg/">LinkedIn</Link>
        </li>
        <li>
          <Link to="https://mattrigg.photography">Photography</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
