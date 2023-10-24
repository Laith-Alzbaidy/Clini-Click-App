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
      Period: "9:00-14:00",
    },
    {
      id: "Tuesday",
      Period: "9:00-14:00",
    },
    {
      id: "Wednesday",
      Period: "9:00-14:00",
    },
    {
      id: "Thursday",
      Period: "9:00-14:00",
    },
    {
      id: "Friday",
      Period: "9:00-14:00",
    },
    {
      id: "Saturday",
      Period: "9:00-14:00",
    },
  ];

  const ourbusiness = ourBusinessObj.map((item) => {
    return (
      <Row>
        <Col>
          <p className={styles["text"]}>{item.id}</p>
        </Col>
        <Col>
          <p className={styles["text"]}>{item.Period}</p>
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
