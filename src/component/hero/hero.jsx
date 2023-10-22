"use client";
import React, { useState } from "react";
import Image from "next/image";
import imageHero from "./assets/image/hero.png";
import styles from "./styles/hero.module.css";
import star from "./assets/image/Star.svg";
import location from "./assets/image/icon _location_.svg";
import call from "./assets/image/call.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";

const Hero = () => {
  const [index, setIndex] = useState(1);
  const image = [imageHero, imageHero, imageHero, imageHero, imageHero];

  const sliderHero = image.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className={styles["container-hero"]}>
          <Image fill src={item} className={styles["image"]} alt="hero" />
          <div className={styles["number-image"]}>
            <span>{`${index + 1}/5`}</span>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <main className="section-hero">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={15}
        autoplay={{ delay: 1000 }}
      >
        {sliderHero}
      </Swiper>

      {/* content hero */}
      <div className={styles["content-hero"]}>
        <h1 className={styles["title-hero"]}>
          Clinique de la belle au bois dormant
        </h1>
        <div className="d-flex align-items-center gap-4">
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

        <div className={styles["content-icon"]}>
          <Image src={location} className={styles["icon"]} alt="location" />
          <p className={styles["text-icon"]}>Dubai Marina, Dubai</p>
        </div>

        <div className={styles["content-icon"]}>
          <Image src={call} className={styles["icon"]} alt="call" />
          <p className={styles["text-icon"]}>+971-5-000000000</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
