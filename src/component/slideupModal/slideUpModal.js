import React from 'react'
import styles from "./slideUpModal.module.css";

const SlideUpModal = ({ isOpen, onClose, children }) => {
    return (
      <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default SlideUpModal;