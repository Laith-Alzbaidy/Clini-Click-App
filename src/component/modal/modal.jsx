'use client'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from 'react'
import { useState } from "react";
import styles from './modal.module.css'

const ModalBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <div className={styles.buttonContainer}>
        <button className={styles.button} type="submit" onClick={handleShow}>Cancel appointment</button>
      </div>
         <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton className={styles.modal}></Modal.Header>

          <Modal.Body className={styles.modal}>
            <div className={styles.modalBody}>
              Are you sure you want to delete
              <br /> your account ?
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.modal}>
            <Button onClick={handleClose} className={styles.yesButton}>
              Yes
            </Button>
            <Button onClick={handleClose} className={styles.noButton}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ModalBox