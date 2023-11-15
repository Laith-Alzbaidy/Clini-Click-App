import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/ourBusiness.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";

// Define a mapping from numeric days to day names

const dayMapping = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday",
};

const OurBusiness = ({ data }) => {
  // const sortedWorkingHours = [...data.workingHours];

  // sortedWorkingHours.sort((a, b) => a.day - b.day);
  const ourbusiness = data?.workingHours?.map((item) => {
    const dayName = dayMapping[item.day];

    return (
      <Row key={item.day}>
        <Col>
          <p className={styles["text-day"]}>{dayName}</p>
        </Col>
        <Col>
          <p className={styles["text-time"]}>
            {item.isClosed ? "Closed" : `${item.from} - ${item.to}`}
          </p>
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
