import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/ourBusiness.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
const OurBusiness = () => {
  const ourBusinessObj = [
    {
      id: "Monday",
      firstPeriod: "9:00-14:00",
      secondPeriod: "18:00-22:00",
    },
    {
      id: "Tuesday",
      firstPeriod: "9:00-14:00",
      secondPeriod: "18:00-22:00",
    },
    {
      id: "Wednesday",
      firstPeriod: "9:00-14:00",
      secondPeriod: "18:00-22:00",
    },
    {
      id: "Thursday",
      firstPeriod: "9:00-14:00",
      secondPeriod: "18:00-22:00",
    },
    {
      id: "Friday",
      firstPeriod: "9:00-14:00",
      secondPeriod: "18:00-22:00",
    },
    {
      id: "Saturday",
      firstPeriod: "9:00-14:00",
      secondPeriod: "18:00-22:00",
    },
  ];

  const ourbusiness = ourBusinessObj.map((item) => {
    return (
      <Row>
        <Col>
          <p className={styles["text"]}>{item.id}</p>
        </Col>
        <Col>
          <p className={styles["text"]}>{item.firstPeriod}</p>
        </Col>
        <Col>
          <p className={styles["text"]}>{item.secondPeriod}</p>
        </Col>
      </Row>
    );
  });
  return (
    <div className="section-ourbusiness">
      <h1 className={styles["title"]}>Our business hours</h1>
      {ourbusiness}
    </div>
  );
};

export default OurBusiness;
