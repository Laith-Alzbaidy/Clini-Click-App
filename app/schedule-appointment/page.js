"use client";
import React from "react";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import styles from "./styles/schedule-appointment.module.css";
import star from "./assets/image/Star.svg";
import image from "./assets/image/image.png";
import Image from "next/image";
import user from "./assets/image/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "@/src/component/button/button";
import { useState, useEffect } from "react";
import "swiper/css";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Practitioner = () => {
  const router = useRouter();

  const [selectedTime, setSelectedTime] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [schedulingData, setSchedulingData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  useEffect(() => {
    // Calculate the number of days in the selected month and year
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Generate scheduling data for the entire month
    const generatedSchedulingData = [];
    for (let date = 1; date <= daysInMonth; date++) {
      const day = getDayName(new Date(year, month, date));
      generatedSchedulingData.push({ day, date });
    }

    setSchedulingData(generatedSchedulingData);
  }, [selectedMonth]);

  const getDayName = (date) => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = date.getDay();
    return dayNames[dayIndex];
  };
  const [slecetedDoctor, setSelectedDoctor] = useState();
  const handleTimeSelect = (Time) => {
    setSelectedTime(Time);
  };

  const handleDayClick = (day, date) => {
    setSelectedDay(day);
    setSelectedDate(date);
    console.log(day);
    console.log(date);
  };

  const handleConfirm = () => {
    router.push(`/login`);
  };
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
  const practitioner = slider.map((item, index) => {
    const isActive = item.name == slecetedDoctor;

    return (
      <SwiperSlide className={styles["swiper-slide"]} key={index}>
        <div
          onClick={() => setSelectedDoctor(item.name)}
          className={`${styles["container-card"]} ${
            isActive ? styles["active-container-card"] : ""
          }`}
        >
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

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
  ];
  // const schedulingData = [
  //   { day: "Mon", date: 24 },
  //   { day: "Tue", date: 25 },
  //   { day: "Wed", date: 26 },
  //   { day: "Thu", date: 27 },
  //   { day: "Fri", date: 28 },
  //   { day: "Sat", date: 29 },
  //   { day: "Sun", date: 30 },
  // ];

  // Map scheduling data to create scheduling slides
  const schedulingSlides = schedulingData.map((item, index) => {
    const isActive = item.day === selectedDay && item.date === selectedDate;
    return (
      <SwiperSlide key={index}>
        <div
          className={`${styles["container-scheduling"]} ${
            isActive ? styles.active : ""
          }`}
          onClick={() => handleDayClick(item.day, item.date)}
        >
          <p className={styles["day"]}>{item.day}</p>
          <p className={styles["date"]}>{item.date}</p>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div>
      <div className="container1">
        <Link href="/">
          <ButtonPreviews />
        </Link>

        <div className={styles["header"]}>
          <p className={styles["step"]}>Step 1 of 3</p>
          <h1 className={styles["title"]}>Select Date and Time</h1>
        </div>

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
              >
                <SwiperSlide className={styles["swiper-slide"]}>
                  <div className={`${styles["container-card"]} `}>
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
                {practitioner} {/* Render practitioner cards */}
              </Swiper>
            </div>
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
          <div className="mt-2">
            <div className={styles["container-question"]}>
              <div className={styles["question"]}>
                Which time would you like to book?
              </div>

              <div className={styles.Bigcontainer}>
                {timeSlots.map((time, index) => (
                  <div className={styles.timeContainer}>
                    <p
                      className={styles["time"]}
                      key={index}
                      value={time}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["line"]}></div>
      <div className="mt-3 px-3">
        <p className="text-center">
          No payment will be taken until your appointment
        </p>

        <Btn title="Continue" margin="10px 0" onClick={handleConfirm} />
      </div>
    </div>
  );
};

export default Practitioner;
