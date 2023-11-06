// "use client";
import React from "react";
import imageHero from "./assets/image/hero.png";
import Image from "next/image";
import styles from "./styles/slideUpDoctor.module.css";
import "../slideUpPage.css";
import star from "./assets/image/Star.svg";
import global from "./assets/image/global.svg";
import license from "./assets/image/license-number.svg";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
// import ReadMore from "@/src/component/read-more/read-more";
import SlideUpAbout from "@/src/component/slideupModal/slideUpAbout/slideUpAbout";

const SlideUpDoctor = ({ data, isModalOpen, setIsModalOpen }) => {
  const practitioner = data;
  const [modalclass, SetClass] = useState("modal-content");
  function close() {
    SetClass("modal-content closing");
    setTimeout(() => {
      setIsModalOpen(false);
      SetClass("modal-content");
    }, 300);
  }

  // const data = await getData(params.id);
  return (
    <div className="container-ourteam-details">
      {isModalOpen && (
        <div className={`modal-overlay`}>
          <div className={modalclass}>
            <div onClick={() => close()}>
              <ButtonPreviews />
            </div>
            <div className={`${styles["container-image"]}`}>
              <Image
                fill
                priority
                src={practitioner.picture}
                className={styles["image"]}
                alt="Dr." // Alt text for the image
              />
            </div>
            <div className={styles["container-content"]}>
              <h1 className={styles["title"]}>{`${practitioner.title.name} ${
                practitioner.firstName + "  " + practitioner.lastName
              }`}</h1>
              <p className={styles["specialization"]}>
                {`${practitioner.speciality.name} - ${practitioner.experienceYears} years of experience`}
              </p>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
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
                {practitioner.qualifications?.map((qualifications, index) => {
                  return (
                    <li key={index} className={styles["item-list"]}>
                      {qualifications.name}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Section About Me  */}
            <div className={styles["container-content"]}>
              <h1 className={`${styles["title"]} mb-2`}>About</h1>
              {/* <ReadMore /> */}
              <p className={styles["description"]}>
                Clinique de la Belle au Bois Dormant is Dubai’s most
                prestigiousbeauty parlour. With high skilled...
              </p>
              <SlideUpAbout />
              <div className={styles["container-content"]}>
                <Row className={styles["card"]}>
                  <Col className="d-flex gap-2">
                    <Image src={global} alt="Languages" />
                    <div>
                      <p className={styles["title-icon"]}>Languages</p>
                      <p className={styles["sub-title-icon"]}>
                        Arabic <br />
                        English
                      </p>
                    </div>
                  </Col>
                  <Col className="d-flex gap-2">
                    <Image src={license} alt="License Number" />
                    <div>
                      <p className={styles["title-icon"]}>License Number</p>
                      <p className={styles["sub-title-icon"]}>
                        {practitioner.medicalLicense}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideUpDoctor;
