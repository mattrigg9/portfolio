import React from "react"
import styles from "./footer.module.scss"

// TODO: Query data from structured config
const Footer = () => {
  return (
    <footer className={styles.container}>
      <h1 className={styles.title}>Matt Rigg</h1>
      <ul className={styles.links}>
        <li>
          <a href="https://www.linkedin.com/in/mattrigg/" target="_blank">
            Contact
          </a>
        </li>

        <li>
          <a href="https://github.com/mattrigg9" target="_blank">
            GitHub
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/mattrigg/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://mattrigg.photography" target="_blank">
            Photography
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
