import {  useStaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./header.module.scss"

const Header = () => {
  const queryResults = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <h2 className={styles.navTitle}>
            {queryResults.site.siteMetadata.title}
          </h2>
          </div>
      </nav>
    </header>
  )
}

export default Header
