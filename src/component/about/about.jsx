"use client";
import React, { useState } from "react";
import styles from "./styles/about.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import building from "./assets/image/icon _building_.svg";
import line from "./assets/image/icon _license line_.svg";
import ReadMore from "../read-more/read-more";
import ButtonPreviews from "../buttonPreviews/buttonPreviews";
import Link from "next/link";
import SlideUpAbout from "../slideupModal/slideUpAbout/slideUpAbout";
const About = () => {
  return (
    <div className="about-section">
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
          Clinique de la Belle au Bois Dormant is Dubai’s most prestigiousbeauty
          parlour. With high skilled...
        </p>
        <SlideUpAbout />
      </div>
    </div>
  );
};

export default About;
