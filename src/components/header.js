import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import classNames from 'classnames';
import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
          Matt Rigg
        </div>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} to="#about">
              About
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} to="#about">
              About
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} to="#about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
