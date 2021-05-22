import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import * as styles from "./header.module.scss"

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
            <Link to="/" className="no-link-style hover-fade">
              {queryResults.site.siteMetadata.title}
            </Link>
          </h2>
        </div>
      </nav>
    </header>
  )
}

export default Header
