"use client";
import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import close from "./assets/image/close.svg";
import styles from "./styles/popup-privacy.module.css";
import Image from "next/image";
function PopupPrivacy({ title, data }) {
  const [show, setIsShow] = useState(false);

  return (
    <>
      <span className={styles["privacy"]} onClick={() => setIsShow(true)}>
        <b>{title}</b>
      </span>
      <Modal
        centered
        show={show}
        onHide={() => setIsShow(false)}
        animation={false}
      >
        <Modal.Body>
          <div className={styles["header"]}>
            {title == "T&Cs" ? (
              <h1 className={styles["title-header"]}>Terms</h1>
            ) : (
              <h1 className={styles["title-header"]}>{title}</h1>
            )}
            <Image
              className="close-btn"
              src={close}
              onClick={() => setIsShow(false)}
              alt="close"
            />
          </div>

          <div
            className={styles["content-data-priv"]}
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopupPrivacy;
