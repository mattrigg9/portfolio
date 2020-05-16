import React from 'react'
import classNames from 'classnames';
import layoutStyles from "./layout.module.scss"

const Testimonials = () => {
    return (
        <section className={classNames(layoutStyles.section)}>
              <h1 className={classNames(layoutStyles.sectionTitle)}>Testimonials</h1>

      </section>
    )
}

export default Testimonials;