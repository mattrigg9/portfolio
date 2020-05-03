import React from "react"
import classNames from "classnames"
import layoutStyles from "./layout.module.scss"
import styles from "./contactCTA.module.scss"

function ContactCTA() {
  return (
    <section className={classNames(layoutStyles.section)}>
      <div className={styles.container}>
        <h2>Start a Project</h2>
        <p class={styles.description}>
          Interested in working together? Let's have a chat. I’ll buy the
          coffee.
        </p>
        <a href="#" class="btn ghost">
          Lets do this
        </a>
      </div>
    </section>
  )
}

export default ContactCTA
