import React from "react"
import PropTypes from "prop-types"
import Modal from "react-modal"
import { FaTimes } from "react-icons/fa"
import styles from "./modal.module.scss"

function BaseModal({ isOpen, onClose, contentLabel, children }) {
  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={isOpen}
      contentLabel={contentLabel}
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <header className={styles.modalHeader}>
        <FaTimes
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
