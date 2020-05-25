import React from "react"
import classNames from "classnames"
import layoutStyles from "./layout.module.scss"
import styles from "./contactCTA.module.scss"
import links from "config/links"

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
          <a
            href={links.linkedIn}
            className="btn btn-outline-dark cta no-link-style"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            Let's do this
          </a>
      </div>
    </section>
  )
}

export default ContactCTA
