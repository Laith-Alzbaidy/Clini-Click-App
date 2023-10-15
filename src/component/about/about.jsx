"use client";
import React, { useState } from "react";
import styles from "./styles/about.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import building from "./assets/image/icon _building_.svg";
import line from "./assets/image/icon _license line_.svg";

const About = () => {
  const [showmore, setShowMore] = useState(false);

  const flagShowMore = () => {
    setShowMore(!showmore);
    console.log(showmore);
  };
  return (
    <div className="about-section">
      <h1 className={styles["title"]}>About us</h1>

      <Row className={styles["card"]}>
        <Col className="d-flex align-items-center gap-3">
          <Image src={building} alt="building" />
          <div>
            <p className={styles["title-icon"]}>Established</p>
            <p className={styles["date"]}>2010</p>
          </div>
        </Col>
        <Col className="d-flex align-items-center gap-3">
          <Image src={line} alt="building" />
          <div>
            <p className={styles["title-icon"]}>License Number</p>
            <p className={styles["date"]}>MOH-274-36970</p>
          </div>
        </Col>
      </Row>
      {showmore ? (
        <>
          <p className={styles["description"]}>
            Clinique de la Belle au Bois Dormant is Dubai’s most
            prestigiousbeauty parlour. With high skilled...
          </p>

          <span className={styles["read-more"]} onClick={flagShowMore}>
            {showmore ? "Read more" : "Less more"}
          </span>
        </>
      ) : (
        <>
          <p className={styles["description"]}>
            {" "}
            Clinique de la Belle au Bois Dormant is Dubai’s most prestigious
            beauty parlour. With high skilled Clinique de la Belle au Bois
            Dormant is Dubai’s most prestigious beauty parlour. Clinique de la
            Belle au Bois Dormant is Dubai’s most prestigious beauty parlour.
            With high skilled.
          </p>
          <span className={styles["read-more"]} onClick={flagShowMore}>
            {showmore ? "Read more" : "Less more"}
          </span>
        </>
      )}
    </div>
  );
};

export default About;
