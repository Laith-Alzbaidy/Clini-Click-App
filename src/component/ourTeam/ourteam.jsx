"use client";

import React, { useEffect, useState } from "react";
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
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log("---------", res.data);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const OurTeam = ({ setIsModalOpen }) => {
  // const data = await getData();

  const ouerTeam = slider.map((item, index) => {
    return (
      <SwiperSlide
        onClick={() => setIsModalOpen(true)}
        className={styles["swiper-slide"]}
        key={index}
      >
        {/* <Link href={`ourTeam/${item.id}`}> */}
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
        {/* </Link> */}
      </SwiperSlide>
    );
  });
  return (
    <div className="ourteam-section">
      <h1 className={styles["title"]}>Our team</h1>

      <Swiper
        centeredSlides={false}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          370: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
        }}
      >
        <div>{ouerTeam}</div>
      </Swiper>
    </div>
  );
};

export default OurTeam;
