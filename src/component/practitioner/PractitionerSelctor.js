"use client";
import React from "react";
import styles from "./practitioner.module.css";
import Image from "next/image";
import user from "./assets/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import star from "./assets/star.svg";
import LearnMore from "../learnMoreModal/LearnMore";
const PractitionerSelctor = ({
  handlePractitionerSelect,
  setSelectedDoctor,
  slecetedDoctor,
  setIsModalOpen,
  setSelectedPractitioner,
  data,
  NoPrefrence,
  handleNoPreference,
}) => {
  const team = data
    ? data.map((practitioner, index) => {
        const isActive = practitioner.id == slecetedDoctor;

        return (
          <SwiperSlide className={styles["swiper-slide"]} key={index}>
            <div
              className={`${styles["container-card"]} ${
                isActive ? styles["active-container-card"] : ""
              }`}
            >
              <div
                className={styles.wrapper}
                onClick={() => {
                  handlePractitionerSelect(practitioner.id);
                  setSelectedDoctor(practitioner.id);
                }}
              >
                <div className={styles["container-image"]}>
                  {practitioner.picture !== null ? (
                    <Image
                      fill
                      src={practitioner.picture}
                      alt={"practitioner"}
                      className={styles["image"]}
                      priority
                    />
                  ) : (
                    <Image
                      src={user}
                      alt={"practitioner"}
                      className={styles["image"]}
                      priority
                    />
                  )}
                </div>

                <div>
                  <h1 className={styles["name-card"]}>{`${
                    practitioner.title.name
                  } ${practitioner.firstName + practitioner.lastName}`}</h1>
                  <p className={styles["specialization"]}>
                    {practitioner.speciality.name}
                  </p>
                  <p className={styles["exp"]}>
                    {practitioner.experienceYears} years of experience
                  </p>
                </div>

                <p className={styles["exp"]}>{practitioner.exp}</p>
                <div className={styles["container-rate-review"]}>
                  <div>
                    <Image
                      src={star}
                      className={styles["star-image"]}
                      alt="star"
                    />
                  </div>
                  <p className={styles["text-review"]}>{230} reviews</p>
                </div>
              </div>
              <p
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedPractitioner(practitioner);
                }}
                className={styles["view-profile"]}
              >
                View profile
              </p>
              <LearnMore learnMore={false} practitionerData={practitioner} />
            </div>
          </SwiperSlide>
        );
      })
    : null;

  return (
    <div className={styles["container-question"]}>
      <div>
        <h2 className={styles["question"]}>
          Which practitioner do you prefer?
        </h2>

        {/* Team Section*/}
        <div className="mt-2">
          <Swiper
            centeredSlides={false}
            slidesPerView={2.4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              280: {
                slidesPerView: 1.5,
              },
              320: {
                slidesPerView: 1.75,
              },
              375: {
                slidesPerView: 2.15,
              },
              425: {
                slidesPerView: 2.25,
              },
              480: {
                slidesPerView: 2.25,
              },
              600: {
                slidesPerView: 2.5,
              },
              768: {
                slidesPerView: 3.35,
              },
            }}
          >
            <SwiperSlide className={styles["swiper-slide"]}>
              <div
                className={`${styles["container-card2"]} ${
                  NoPrefrence !== null ? styles["active-container-card"] : ""
                } `}
                onClick={handleNoPreference}
              >
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
            {team}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PractitionerSelctor;
