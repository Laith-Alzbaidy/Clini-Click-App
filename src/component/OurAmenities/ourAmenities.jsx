import React from "react";
import Image from "next/image";
import styles from "./styles/ourAmenities.module.css";

import { Row, Col } from "react-bootstrap";
const OurAmenities = ({ data }) => {
  return (
    <div className="section-ouramenities">
      <h1 className={styles["title"]}>Our amenities</h1>

      <Row>
        <Col>
          {data?.amenities?.slice(0, 3).map((amenity, index) => (
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
        </Col>
        <Col>
          {data?.amenities?.slice(3, 6).map((amenity, index) => (
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
        </Col>
      </Row>
    </div>
  );
};

export default OurAmenities;
