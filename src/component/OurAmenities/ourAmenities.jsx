"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./styles/ourAmenities.module.css";
import { useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";
const OurAmenities = ({ data }) => {
  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => setSize(window.innerWidth);

  console.log(size);

  useEffect(() => (window.onresize = updateSize), []);

  return (
    <div className="section-ouramenities">
      <h1 className={styles["title"]}>Our amenities</h1>

      {size <= 760 ? (
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
          <Col className={styles["col-2-right"]}>
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
      ) : (
        <Row>
          <Col>
            {data?.amenities?.slice(0, 2).map((amenity, index) => (
              <div className={styles["content-icon"]} key={index}>
                <Image
                  src={amenity.icon}
                  className={styles["icon"]}
                  alt={amenity.name}
                  width={25}
                  height={25}
                />

                <p className={styles["text-icon"]}>{amenity.name}</p>
              </div>
            ))}
          </Col>

          <Col className={styles["col-2-right"]}>
            <div className="d-flex flex-column align-items-end fit-content">
              {data?.amenities?.slice(2, 4).map((amenity, index) => (
                <div className={styles["content-icon"]} key={index}>
                  <Image
                    src={amenity.icon}
                    className={styles["icon"]}
                    alt={amenity.name}
                    width={25}
                    height={25}
                  />
                  <p className={styles["text-icon"]}>{amenity.name}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col className={`${styles["col-2-right"]} `}>
            <div className="d-flex flex-column align-items-end">
              {data?.amenities?.slice(4).map((amenity, index) => (
                <div className={styles["content-icon"]} key={index}>
                  <Image
                    src={amenity.icon}
                    className={styles["icon"]}
                    alt={amenity.name}
                    width={25}
                    height={25}
                  />
                  <p className={styles["text-icon"]}>{amenity.name}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default OurAmenities;
