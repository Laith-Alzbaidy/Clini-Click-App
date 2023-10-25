"use client";
import React, { useState } from "react";
import "./slideUpPage.css";
import styles from "./subInfo.module.css";
import back from "./assets/back.svg";
import Image from "next/image";
const SlideUpPage = ({ data }) => {
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
    <div>
      <p className="learnMore" onClick={() => setIsModalOpen(true)}>
        learn more
      </p>
      {isModalOpen && (
        <div className={`modal-overlay`}>
          <div className={modalclass}>
            <div className="feedbackModalHeader">
              <div className={styles.container}>
                <Image src={back} onClick={() => close()} />
                <div className={styles.title}>sub category</div>
                <div className={styles.infoText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incidLorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed eiusmod tempor incidLorem ipsum dolor sit
                  amet.
                </div>

                <div className={styles.container}>
                  <div className={styles.stepsTitle}>Before Treatment</div>
                  <ul>
                    <li className={styles.list}>{data.title}</li>
                  </ul>

                  <div className={styles.stepsTitle}>During Treatment</div>

                  <ul>
                    <li className={styles.list}>{data.title}</li>
                  </ul>

                  <div className={styles.stepsTitle}>After Treatment</div>

                  <ul>
                    <li className={styles.list}>{data.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideUpPage;
