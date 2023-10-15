"use client";

import React from "react";
import { Row, Col } from "react-bootstrap";
import image from "./assets/image/image.png";
import star from "./assets/image/Star.svg";
import styles from "./styles/ourteam.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slider = [
  {
    id: 1,
    image: image,
    name: "Dr. Marcus Horizon",
    specialization: "Chardiologist",
    exp: "10 years of experience",
    rate: "",
    review: "106 reviews",
    alt: "image personal",
  },
  {
    id: 2,
    image: image,
    name: "Dr. Maria Helena",
    specialization: "Psychologist",
    exp: "6 years of experience",
    review: "156 reviews",
    alt: "image personal",
  },
  {
    id: 3,
    image: image,
    name: "Dr. Smeer Horizon",
    specialization: "Chardiologist",
    exp: "12 years of experience",
    review: "200 reviews",
    alt: "image personal",
  },
];

const ouerTeam = slider.map((item, index) => {
  return (
    <SwiperSlide key={index}>
      <Link href={`ourTeam/${item.id}`}>
        <div className={styles["container-card"]}>
          <div className={styles["container-image"]}>
            <Image
              fill
              src={item.image}
              alt={item.alt}
              className={styles["image"]}
            />
          </div>

          <div>
            <h3 className={styles["name-card"]}>{item.name}</h3>
            <p className={styles["specialization"]}>{item.specialization}</p>
          </div>

          <p className={styles["exp"]}>{item.exp}</p>

          <div className={styles["container-rate-review"]}>
            <div>
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
            </div>
            <p className={styles["text-review"]}>{item.review}</p>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  );
});
const OurTeam = () => {
  return (
    // <div className="ourteam-section">
    //   <h1 className={styles["title"]}>Our team</h1>

    //   <Row>
    //     <Col xs={6} md={6}>
    //       <div className={styles["container-card"]}>
    //         <Image
    //           src={image}
    //           alt="image personal"
    //           className={styles["image"]}
    //         />

    //         <div>
    //           <h3 className={styles["name-card"]}>Dr. Marcus Horizon</h3>
    //           <p className={styles["specialization"]}>Cardiologist</p>
    //         </div>

    //         <p className={styles["exp"]}>10 years of experience</p>

    //         <div className={styles["container-rate-review"]}>
    //           <div>
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //           </div>
    //           <p className={styles["text-review"]}>106 reviews</p>
    //         </div>
    //       </div>
    //     </Col>

    //     <Col xs={6} md={6}>
    //       <div className={styles["container-card"]}>
    //         <Image src={image} alt="Marcos" className={styles["image"]} />

    //         <div>
    //           <h3 className={styles["name-card"]}>Dr. Marcus Horizon</h3>
    //           <p className={styles["specialization"]}>Cardiologist</p>
    //         </div>

    //         <p className={styles["exp"]}>10 years of experience</p>

    //         <div className={styles["container-rate-review"]}>
    //           <div>
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //             <Image src={star} className={styles["star-image"]} />
    //           </div>
    //           <p className={styles["text-review"]}>106 reviews</p>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </div>

    // -------------------------
    // -------------------------
    // -------------------------
    // -------------------------
    // -------------------------
    // -------------------------

    <div className="ourteam-section">
      <h1 className={styles["title"]}>Our team</h1>

      <Swiper
        spaceBetween={15}
        centeredSlides={false}
        navigation={{
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next",
        }}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>{ouerTeam}</div>
      </Swiper>
    </div>
  );
};

export default OurTeam;
