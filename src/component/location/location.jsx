import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles/location.module.css";
import location from "./assets/image/icon _location_.svg";
import call from "./assets/image/call.svg";
import map from "./assets/image/map.png";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
const Location = () => {
  return (
    <div className="section-location">
      <h1 className={styles["title"]}>Our location</h1>

      <div>
        {/* Add custom styles for the image */}
        {/* <Image
          src={map}
          alt="map"
          className={styles["map"]} // Add custom class for image styles
        /> */}
        <iframe
          width="100%"
          style={{ borderRadius: 20 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS`}
          allowFullScreen
          title="My Map"
        ></iframe>
      </div>
      {/* Location and Call Icons */}
      <div className={styles["container-icon"]}>
        <div className={styles["content-icon"]}>
          <Image src={location} className={styles["icon"]} alt="location" />
          <p className={styles["text-icon"]}>Dubai Marina, Dubai</p>
        </div>
        <div className={styles["content-icon"]}>
          <Image src={call} className={styles["icon"]} alt="call" />
          <p className={styles["text-icon"]}>+971-5-000000000</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Location;
