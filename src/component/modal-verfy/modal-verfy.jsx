import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalError({ show, setShow, errorVerfy }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className="d-flex flex-column align-items-center gap-3">
          <p>{errorVerfy}</p>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalError;
