import React from "react"
import classNames from "classnames"
import Img from "gatsby-image"
import styles from "./gridItem.module.scss"
import Modal from "react-modal"
import { FaTimes } from "react-icons/fa"

// http://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement("#___gatsby")

const GridItem = ({
  title,
  featuredImage,
  alt,
  shortDescription,
  description,
  shadow = false,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <li className={styles.gridItem} onClick={openModal}>
        {featuredImage && (
          <Img
            fluid={featuredImage}
            alt={alt || title}
            className={classNames(styles.gridItemImage, {
              [styles.gridItemImage__shadow]: shadow,
            })}
          />
        )}
        <div className={styles.gridItemDetails}>
          <h2 className={styles.gridItemTitle}>{title}</h2>
          <div className={styles.gridItemDescription}>{shortDescription}</div>
        </div>
      </li>

      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        contentLabel={`${title} details`}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
        shouldCloseOnEsc
      >
        <header className={styles.modalHeader}>
          <FaTimes
            onClick={closeModal}
            title="Close"
            className={styles.closeButton}
          />
        </header>
        <div className={styles.modalContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Modal>
    </>
  )
}

export default GridItem
