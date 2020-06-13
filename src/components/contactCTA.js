import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import layoutStyles from "./homeLayout.module.scss"
import styles from "./contactCTA.module.scss"

function ContactCTA() {
  return (
    <section className={classNames(layoutStyles.section)}>
      <div className={styles.container}>
          <h2 className={classNames(styles.title, "text-center", "text-md-left")}>
            Start a Project
          </h2>
          <p className={classNames(styles.description, "text-center", "my-4", "my-md-0")}>
            Interested in working together? Let's have a chat. I’ll buy the
            coffee.
          </p>
          <Link to="/contact" className="btn btn-outline-dark cta no-link-style">
            Let's do this
          </Link>
      </div>
    </section>
  )
}

export default ContactCTA
