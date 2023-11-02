import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/location.module.css";
import location from "./assets/image/icon _location_.svg";
import call from "./assets/image/call.svg";
import map from "./assets/image/map.png";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
const Location = ({ data }) => {
  return (
    <div className="section-location">
      <h1 className={styles["title"]}>Our location</h1>

      <div
        className="location"
        dangerouslySetInnerHTML={{ __html: data?.location }}
      />

      {/* Location and Call Icons */}
      <div className={styles["container-icon"]}>
        <div className={styles["content-icon"]}>
          <Image src={location} className={styles["icon"]} alt="location" />
          <p className={styles["text-icon"]}>{data?.country?.name}</p>
        </div>
        <div className={styles["content-icon"]}>
          <Image src={call} className={styles["icon"]} alt="call" />
          <p className={styles["text-icon"]}>{data?.phone}</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Location;
