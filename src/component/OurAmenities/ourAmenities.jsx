import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/ourAmenities.module.css";
import parking from "./assets/images/parking.svg";
import metro from "./assets/images/metro.svg";
import valet from "./assets/images/valet-parking.svg";
import wifi from "./assets/images/wifi.svg";
import { Container, Row, Col } from "react-bootstrap";
const Location = () => {
  return (
    <div className="section-ouramenities">
      <h1 className={styles["title"]}>Our amenities</h1>
      <Row>
        <Col>
          <div className={styles["content-icon"]}>
            <Image src={valet} className={styles["icon"]} alt="location" />
            <p className={styles["text-icon"]}>Valet parking</p>
          </div>
        </Col>
        <Col>
          <div className={styles["content-icon"]}>
            <Image src={wifi} className={styles["icon"]} alt="location" />
            <p className={styles["text-icon"]}>Free WIFI</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles["content-icon"]}>
            <Image src={parking} className={styles["icon"]} alt="location" />
            <p className={styles["text-icon"]}>Free parking</p>
          </div>{" "}
        </Col>
        <Col>
          <div className={styles["content-icon"]}>
            <Image src={metro} className={styles["icon"]} alt="location" />
            <p className={styles["text-icon"]}>metro</p>
          </div>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles["content-icon"]}>
            <Image src={parking} className={styles["icon"]} alt="location" />
            <p className={styles["text-icon"]}>Paid parking</p>
          </div>{" "}
        </Col>
      </Row>
    </div>
  );
};

export default Location;
