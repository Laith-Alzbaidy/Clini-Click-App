"use client";
import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closebtn from "./assets/image/close.svg";
import styles from "./styles/popup-privacy.module.css";
import Image from "next/image";
import Popup from "reactjs-popup";
function PopupPrivacy({ title, data }) {
  const [show, setIsShow] = useState(false);

  return (
    <>
      <Popup
        closeOnEscape
        trigger={
          <span className={styles["privacy"]} onClick={() => setIsShow(true)}>
            <b>{title}</b>
          </span>
        }
        position="center"
      >
        {(close) => (
          <>
            <div className={styles["header"]}>
              {title == "T&Cs" ? (
                <h1 className={styles["title-header"]}>Terms</h1>
              ) : (
                <h1 className={styles["title-header"]}>{title}</h1>
              )}
              <Image
                className="close-btn"
                src={closebtn}
                onClick={() => setIsShow(close)}
                alt="close"
              />
            </div>
            <div
              className={styles["content-data-priv"]}
              dangerouslySetInnerHTML={{ __html: data }}
            ></div>
          </>
        )}
      </Popup>
    </>
  );
}

export default PopupPrivacy;
