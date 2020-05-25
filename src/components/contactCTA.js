import React from "react"
import classNames from "classnames"
import layoutStyles from "./layout.module.scss"
import styles from "./contactCTA.module.scss"
import links from "config/links"

function ContactCTA() {
  return (
    <section className={classNames(layoutStyles.section)}>
      <div className={styles.container}>
        <div className="row w-100 flex-column flex-md-row">
          <div className="col d-flex align-items-center justify-content-center justify-content-md-start">
            <h2 className={styles.title}>Start a Project</h2>
          </div>
          <div className="col text-center my-4 my-md-0">
            <p className={styles.description}>
              Interested in working together? Let's have a chat. I’ll buy the
              coffee.
            </p>
          </div>
          <div className="col d-flex align-items-center justify-content-center justify-content-md-end">
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
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
