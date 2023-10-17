"use client";
import React from "react";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import styles from "./styles/practitioner.module.css";
import star from "./assets/image/Star.svg";
import image from "./assets/image/image.png";
import Image from "next/image";
import user from "./assets/image/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "react-bootstrap";
import Btn from "@/src/component/button/button";
import "swiper/css";

const Practitioner = () => {
  // Data for practitioner information
  const slider = [
    {
      id: 1,
      image: image,
      name: "Dr. Marcus Horizon",
      specialization: "Cardiologist",
      exp: "10 years of experience",
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
      specialization: "Cardiologist",
      exp: "12 years of experience",
      review: "200 reviews",
      alt: "image personal",
    },
  ];

  // Map practitioner data to create cards
  const team = slider.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className={styles["container-card"]}>
          <div className={styles["container-image"]}>
            <Image
              fill
              src={item.image}
              alt={item.alt}
              className={styles["image"]}
              priority
            />
          </div>

          <div>
            <h3 className={styles["name-card"]}>{item.name}</h3>
            <p className={styles["specialization"]}>{item.specialization}</p>
          </div>

          <p className={styles["exp"]}>{item.exp}</p>
          <div className={styles["container-rate-review"]}>
            <div>
              {/* Display star images */}
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
              <Image src={star} className={styles["star-image"]} alt="star" />
            </div>
            <p className={styles["text-review"]}>{item.review}</p>
          </div>
          <p className={styles["view-profile"]}>View Profile</p>
        </div>
      </SwiperSlide>
    );
  });

  // Data for scheduling options
  const schedulingData = [
    { day: "Mon", date: 24 },
    { day: "Tue", date: 25 },
    { day: "Wed", date: 26 },
    { day: "Thu", date: 27 },
    { day: "Fri", date: 28 },
    { day: "Sat", date: 29 },
    { day: "Sun", date: 30 },
  ];

  // Map scheduling data to create scheduling slides
  const schedulingSlides = schedulingData.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className={styles["container-scheduling"]}>
          <p className={styles["day"]}>{item.day}</p>
          <p className={styles["date"]}>{item.date}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <ButtonPreviews />

      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 1 of 3</p>
        <h1 className={styles["title"]}>Select Date and Time</h1>
      </div>

      <div className={styles["container-question"]}>
        <div>
          <h2 className={styles["question"]}>
            Which practitioner do you prefer?
          </h2>
        </div>

        {/* Team Section*/}
        <div className="mt-2">
          <Swiper
            spaceBetween={15}
            centeredSlides={false}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className={styles["container-card"]}>
                <div className="d-flex flex-column align-items-center gap-2">
                  <Image src={user} />
                  <h3 className={styles["name-card"]}>No preference</h3>
                  <div>
                    <p className={styles["specialization"]}>
                      Maximum availability
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {team} {/* Render practitioner cards */}
          </Swiper>
        </div>
      </div>

      {/* Scheduling date and day */}
      <div className={styles["container-question"]}>
        <div>
          <h2 className={styles["question"]}>
            Which day would you like to book?
          </h2>
          <p className="mt-2">July</p>
        </div>

        <div className="mt-2">
          <Swiper
            spaceBetween={10}
            centeredSlides={false}
            slidesPerView={5.6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {schedulingSlides} {/* Render scheduling options */}
          </Swiper>
        </div>
      </div>

      {/* Scheduling Time*/}
      <div className={styles["container-question"]}>
        <div>
          <h2 className={styles["question"]}>
            Which day would you like to book?
          </h2>
          <p className="mt-2">July</p>
        </div>

        <div className="mt-2">
          {/* <Swiper
            spaceBetween={10}
            centeredSlides={false}
            slidesPerView={5.6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {schedulingSlides}
          </Swiper> */}
          <Row>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className={styles["card-time"]}>
                <p className={styles["time"]}>09:00 AM</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles["line"]}></div>
      <p className="text-center">
        No payment will be taken until your appointment
      </p>
      <Btn title="Continue" marginTop="10px" />
    </div>
  );
};

export default Practitioner;
