"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./styles/ourAmenities.module.css";
import { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
const OurAmenities = ({ data }) => {
  return (
    <div className="section-ouramenities">
      <h1 className={styles["title"]}>Our amenities</h1>
      <div className={styles.wrapper}>
        {data?.amenities?.map((amenity, index) => (
          <div className={styles["content-icon"]} key={index}>
            <Image
              src={amenity.icon}
              className={styles["icon"]}
              alt={amenity.name}
              width={28}
              height={28}
            />
            <p className={styles["text-icon"]}>{amenity.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurAmenities;
