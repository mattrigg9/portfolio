import React from "react"
import PropTypes from "prop-types"
import Modal from "react-modal"
import { VscChromeClose } from "react-icons/vsc"
import styles from "./modal.module.scss"

function BaseModal({ isOpen, onClose, contentLabel, title, children }) {
  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={isOpen}
      contentLabel={contentLabel}
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick
    >
      <header className={styles.modalHeader}>
        <h1 className="mb-5">{title}</h1>
        <VscChromeClose
          onClick={onClose}
          onKeyPress={onClose}
          role="button"
          title="Close"
          tabIndex="0"
          className={styles.closeButton}
        />
      </header>
      <div className={styles.modalContent}>{children}</div>
    </Modal>
  )
}

BaseModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default BaseModal
