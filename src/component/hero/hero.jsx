"use client";
import React, { useState } from "react";
import Image from "next/image";
import imageHero from "./assets/image/hero.png";
import styles from "./styles/hero.module.css";
import star from "./assets/image/Star.svg";
import location from "./assets/image/icon _location_.svg";
import call from "./assets/image/call.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
const Hero = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
  };
  const sliderHero = data?.images?.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className={styles["container-hero"]}>
          <Image
            fill
            src={item.imageUrl}
            className={styles["image"]}
            alt="hero"
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <main className="section-hero">
      <Swiper
        spaceBetween={20}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        // pagination={{ clickable: true }} // Add pagination
      >
        {sliderHero}
        <div className={styles["number-image"]}>
          <span>{`${index + 1}/${sliderHero?.length}`}</span>
        </div>
      </Swiper>

      {/* content hero */}
      <div className={styles["content-hero"]}>
        <h1 className={styles["title-hero"]}>{data?.name}</h1>
        <div className="d-flex align-items-center gap-3">
          <div>
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
            <Image src={star} className={styles["star-image"]} alt="star" />
          </div>

          <Link href="/google-reviews">
            <p className={styles["text-review"]}>106 Google reviews</p>
          </Link>
        </div>

        {/* Location and Call Icons */}
        <div className={styles["container-communication"]}>
          <div className={styles["content-icon"]}>
            <Image src={location} className={styles["icon"]} alt="location" />
            <p className={styles["text-icon"]}>{data?.country?.name}</p>
          </div>

          <div className={styles["content-icon"]}>
            <Image src={call} className={styles["icon"]} alt="call" />
            <p className={styles["text-icon"]}>{data?.phone}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
