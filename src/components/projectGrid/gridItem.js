import React from "react"
import classNames from "classnames"
import Img from "gatsby-image"
import styles from "./gridItem.module.scss"
import Modal from "../common/modal"

// http://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement("#___gatsby")

const GridItem = ({
  title,
  featuredImage,
  fullImage,
  website,
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
      <li className={styles.gridItem}>
        <div
          onKeyPress={openModal}
          onClick={openModal}
          role="button"
          tabIndex="0"
        >
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
        </div>
      </li>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        contentLabel={`${title} details`}
      >
        <h1 className="mb-5">{title}</h1>
        <div className="row">
          <div className="col-12 col-lg-7">
            <a href={website} target="_blank" rel="noreferrer">
              <Img
                fluid={fullImage}
                alt={alt || title}
                className={classNames(styles.gridItemImage, {
                  [styles.gridItemImage__shadow]: shadow,
                  rounded: true,
                })}
              />
            </a>
          </div>
          <div className="col-12 col-lg-5 mt-5 mt-lg-0">
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            <a href={website} target="_blank" rel="noreferrer">
              Website
            </a>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default GridItem
