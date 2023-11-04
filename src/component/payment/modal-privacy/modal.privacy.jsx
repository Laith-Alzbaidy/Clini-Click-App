"use client";
import React, { useState } from "react";
import "./slideUpPage.css";
import Image from "next/image";
import back from "./assets/back.svg";
import styles from "../styles/payment.module.css";
const slideUpAbout = ({ title, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalclass, SetClass] = useState("modal-content");
  function close() {
    SetClass("modal-content closing");
    setTimeout(() => {
      setIsModalOpen(false);
      // setIsClosing(false);
      SetClass("modal-content");
    }, 300);
  }
  return (
    <>
      <span className={styles["privacy"]} onClick={() => setIsModalOpen(true)}>
        <b>{title}</b>
      </span>
      {isModalOpen && (
        <div className={`modal-overlay`}>
          <div className={modalclass}>
            <div className={styles["navmodal"]}>
              <Image className="mb-3" src={back} onClick={() => close()} />
              <div>
                <h1 className={styles["title"]}>{title}</h1>
              </div>
            </div>
            <div
              className={styles["content-data-priv"]}
              dangerouslySetInnerHTML={{ __html: data }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default slideUpAbout;
