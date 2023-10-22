"use client";
import React from "react";
import imageHero from "./assets/image/hero.png";
import Image from "next/image";
import styles from "./styles/ourTeamSpecific.module.css";
import star from "./assets/image/Star.svg";
import global from "./assets/image/global.svg";
import license from "./assets/image/license-number.svg";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import ReadMore from "@/src/component/read-more/read-more";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const OurTeamSpecific = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="container-ourteam-details">
      <Link href="/">
        <ButtonPreviews />
      </Link>
      <div className={`${styles["container-image"]}`}>
        <Image
          fill
          // priority
          src={imageHero}
          className={styles["image"]}
          alt="Dr. Basel Habayeb" // Alt text for the image
        />
      </div>
      <div className={styles["container-content"]}>
        <h1 className={styles["title"]}>Dr. Basel Habayeb</h1>
        <p className={styles["specialization"]}>
          Dermatologist - 10 years of experience
        </p>
        <div className="d-flex align-items-center gap-4">
          <div>
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
          </div>
          <Link className={styles["link-review"]} href={`${1}/reviews`}>
            <p className={styles["text-review"]}>106 reviews</p>
          </Link>
        </div>
      </div>

      {/* Section qualifications */}
      <div className={styles["container-content"]}>
        <h1 className={`${styles["title"]} mb-2`}>My qualifications</h1>

        <ul className={styles["list-qualifications"]}>
          <li className={styles["item-list"]}>
            Medical Board of United States
          </li>
          <li className={styles["item-list"]}>
            Bachelors of science in Medicine
          </li>
          <li className={styles["item-list"]}>Board Membership</li>
          <li className={styles["item-list"]}>
            Medical Board of United States
          </li>
          <li className={styles["item-list"]}>
            Bachelors of science in Medicine
          </li>
          <li className={styles["item-list"]}>Board Membership</li>
        </ul>
      </div>

      {/* Section About Me  */}
      <div className={styles["container-content"]}>
        <h1 className={`${styles["title"]} mb-2`}>About</h1>
        <ReadMore />
        <div className={styles["container-content"]}>
          <Row className={styles["card"]}>
            <Col className="d-flex gap-3">
              <Image src={global} alt="Languages" />
              <div>
                <p className={styles["title-icon"]}>Languages</p>
                <p className={styles["sub-title-icon"]}>
                  Arabic <br />
                  English
                </p>
              </div>
            </Col>
            <Col className="d-flex gap-3">
              <Image src={license} alt="License Number" />
              <div>
                <p className={styles["title-icon"]}>License Number</p>
                <p className={styles["sub-title-icon"]}>MOH-274-36970</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSpecific;
