import React from "react"
import styles from "./footer.module.scss"
import links from 'config/links';
import { Link } from 'gatsby';

// TODO: Query data from structured config
const Footer = () => {
  return (
    <footer className={styles.container}>
      <h1 className={styles.title}>Matt Rigg</h1>
      <ul className={styles.links}>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>

        <li>
          <a href={links.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={links.photography} target="_blank" rel="noreferrer">
            Photography
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
