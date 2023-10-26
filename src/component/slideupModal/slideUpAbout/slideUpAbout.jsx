"use client";
import React, { useState } from "react";
import "../slideUpPage.css";
import styles from "./styles/slideUpAbout.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import building from "./assets/image/icon _building_.svg";
import line from "./assets/image/icon _license line_.svg";
import back from "../assets/back.svg";
const slideUpAbout = () => {
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
      <span
        className={styles["read-more"]}
        onClick={() => setIsModalOpen(true)}
      >
        Read more
      </span>
      {isModalOpen && (
        <div className={`modal-overlay`}>
          <div className={modalclass}>
            <div className="about-slide-up">
              <Image className="mb-3" src={back} onClick={() => close()} />
              <div>
                <h1 className={styles["title"]}>About us</h1>
                <Row className={styles["card"]}>
                  <Col className="d-flex align-items-center gap-3 p-0 justify-content-center">
                    <Image src={building} alt="building" />
                    <div>
                      <p className={styles["title-icon"]}>Established</p>
                      <p className={styles["date"]}>2010</p>
                    </div>
                  </Col>
                  <Col className="d-flex align-items-center gap-3 p-0 justify-content-center">
                    <Image src={line} alt="building" />
                    <div>
                      <p className={styles["title-icon"]}>License Number</p>
                      <p className={styles["date"]}>MOH-274-36970</p>
                    </div>
                  </Col>
                </Row>
                {/* <ReadMore /> */}
                <p className={styles["description"]}>
                  Clinique de la Belle au Bois Dormant is Dubai’s most
                  prestigious beauty parlour. With high skilled Clinique de la
                  Belle au Bois Dormant is Dubai’s most prestigious beauty
                  parlour. Clinique de la Belle au Bois Dormant is Dubai’s most
                  prestigious beauty parlour. With high skilled.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default slideUpAbout;
