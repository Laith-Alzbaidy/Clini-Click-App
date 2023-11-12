"use client"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import styles from "./modal.module.css";
import "./modal.css";

const ModalBox = ({ content  , content2 , handleCancelAppoinment }) => {
  const [show, setShow] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSecondModal = () => setShowSecondModal(false); 

  const handleShowSecondModal = () => {
    setShowSecondModal(true);
    handleClose(); 
  };

  return (
    <div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit" onClick={handleShow}>
          Cancel appointment
        </button>
      </div>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Modal.Header closeButton className={styles.modalHeader}></Modal.Header>
        <Modal.Body className={styles.modal}>
          <div className={styles.modalBody}>{content}</div>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button onClick={handleShowSecondModal} className={styles.yesButton}>
            Yes
          </Button>
          <Button onClick={handleClose} className={styles.noButton}>
            No
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showSecondModal} onHide={handleCloseSecondModal} animation={false} centered>
        <Modal.Header closeButton className={styles.modalHeader}></Modal.Header>
        <Modal.Body className={styles.modal}>
          <div className={styles.modalBody}>
            <p style={{marginBottom:"25px !important" , color:"#828282" , paddingBottom:"10px"}}>Are you sure you want to cancel your appointment?</p>
            {content2}
          </div>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button onClick={handleCancelAppoinment} className={styles.yesButton}>
            Yes
          </Button>
          <Button onClick={handleCloseSecondModal} className={styles.noButton}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalBox;
