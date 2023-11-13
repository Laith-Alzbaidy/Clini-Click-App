"use client";

import React, { useEffect, useState } from "react";
import image from "./assets/image/image.png";
import star from "./assets/image/Star.svg";
import styles from "./styles/ourteam.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "../icon/icon";
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

const OurTeam = ({ setIsModalOpen, data, setPractitioner }) => {
  const [size, setSize] = useState(window.innerWidth);
  const updateSize = () => setSize(window.innerWidth);
  console.log(size);

  useEffect(() => (window.onresize = updateSize), [size]);

  const handleDataPractitioner = (item) => {
    setIsModalOpen(true);
    setPractitioner(item);
  };
  const ouerTeam = data?.practitioners?.map((item, index) => {
    return (
      <>
        <div className={styles["container-swiper-mobile"]}>
          <>
            {" "}
            <SwiperSlide
              onClick={() => handleDataPractitioner(item)}
              className={styles["swiper-slide"]}
              key={index}
            >
              {/* <Link href={`ourTeam/${item.id}`}> */}
              <div className={styles["container-card"]}>
                <div className={styles["container-image"]}>
                  <Image
                    fill
                    src={`${item.picture}`}
                    alt="picture personal"
                    className={styles["image"]}
                  />
                </div>

                <div>
                  <h3 className={styles["name-card"]}>{`${item.title.name} ${
                    item.firstName + item.lastName
                  }`}</h3>
                  <p className={styles["specialization"]}>
                    {item.speciality.name}
                  </p>
                </div>

                <p
                  className={styles["exp"]}
                >{`${item.experienceYears}  years of experience`}</p>

                <div className={styles["container-rate-review"]}>
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
                  <p className={styles["text-review"]}>4.5</p>
                </div>

                <div className={styles["icon-desktop"]}>
                  <Icon data={data} />
                  <p className={styles["view-profile"]}>View profile</p>
                </div>
              </div>

              {/* </Link> */}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => handleDataPractitioner(item)}
              className={styles["swiper-slide"]}
              key={index}
            >
              {/* <Link href={`ourTeam/${item.id}`}> */}
              <div className={styles["container-card"]}>
                <div className={styles["container-image"]}>
                  <Image
                    fill
                    src={`${item.picture}`}
                    alt="picture personal"
                    className={styles["image"]}
                  />
                </div>

                <div>
                  <h3 className={styles["name-card"]}>{`${item.title.name} ${
                    item.firstName + item.lastName
                  }`}</h3>
                  <p className={styles["specialization"]}>
                    {item.speciality.name}
                  </p>
                </div>

                <p
                  className={styles["exp"]}
                >{`${item.experienceYears}  years of experience`}</p>

                <div className={styles["container-rate-review"]}>
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
                  <p className={styles["text-review"]}>4.5</p>
                </div>
                <div className={styles["icon-desktop"]}>
                  <Icon data={data} />
                  <p className={styles["view-profile"]}>View profile</p>
                </div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
          </>
        </div>

        <div className={styles["container-swiper-mobile"]}>
          <>
            {" "}
            <SwiperSlide className={styles["swiper-slide"]} key={index}>
              {/* <Link href={`ourTeam/${item.id}`}> */}
              <div className={styles["container-card"]}>
                <div className={styles["container-image"]}>
                  <Image
                    fill
                    src={`${item.picture}`}
                    alt="picture personal"
                    className={styles["image"]}
                  />
                </div>

                <div>
                  <h3 className={styles["name-card"]}>{`${item.title.name} ${
                    item.firstName + item.lastName
                  }`}</h3>
                  <p className={styles["specialization"]}>
                    {item.speciality.name}
                  </p>
                </div>

                <p
                  className={styles["exp"]}
                >{`${item.experienceYears}  years of experience`}</p>

                <div className={styles["container-rate-review"]}>
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
                  <p className={styles["text-review"]}>4.5</p>
                </div>

                <div className={styles["icon-desktop"]}>
                  <Icon data={data} />
                  <p
                    onClick={() => handleDataPractitioner(item)}
                    className={styles["view-profile"]}
                  >
                    View profile
                  </p>
                </div>
              </div>

              {/* </Link> */}
            </SwiperSlide>
            <SwiperSlide
              onClick={() => handleDataPractitioner(item)}
              className={styles["swiper-slide"]}
              key={index}
            >
              {/* <Link href={`ourTeam/${item.id}`}> */}
              <div className={styles["container-card"]}>
                <div className={styles["container-image"]}>
                  <Image
                    fill
                    src={`${item.picture}`}
                    alt="picture personal"
                    className={styles["image"]}
                  />
                </div>

                <div>
                  <h3 className={styles["name-card"]}>{`${item.title.name} ${
                    item.firstName + item.lastName
                  }`}</h3>
                  <p className={styles["specialization"]}>
                    {item.speciality.name}
                  </p>
                </div>

                <p
                  className={styles["exp"]}
                >{`${item.experienceYears}  years of experience`}</p>

                <div className={styles["container-rate-review"]}>
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
                  <p className={styles["text-review"]}>4.5</p>
                </div>
                <div className={styles["icon-desktop"]}>
                  <Icon data={data} />
                  <p
                    onClick={() => handleDataPractitioner(item)}
                    className={styles["view-profile"]}
                  >
                    View profile
                  </p>
                </div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
          </>
        </div>
      </>
    );
  });
  return (
    <div className="ourteam-section">
      <h1 className={styles["title"]}>Our team</h1>

      <Swiper
        centeredSlides={false}
        slidesPerView={4}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          280: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 2.2,
          },
          400: { slidesPerView: 3 },
          500: { slidesPerView: 3.4 },
          600: { slidesPerView: 4 },
        }}
      >
        <div>{ouerTeam}</div>
      </Swiper>
    </div>
  );
};

export default OurTeam;
