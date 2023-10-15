"use client";
import React, { useState } from "react";
import styles from "./reschedule.module.css";
import Link from "next/link";
import back from "../../../assets/conhh.svg";
import user from "../../../assets/user.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Row } from "react-bootstrap";
import "swiper/css";
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
const schedulingData = [
  { day: "Mon", date: 24 },
  { day: "Tue", date: 25 },
  { day: "Wed", date: 26 },
  { day: "Thu", date: 27 },
  { day: "Fri", date: 28 },
  { day: "Sat", date: 29 },
  { day: "Sun", date: 30 },
];

const Reschedule = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedDay, setSelectedDay] = useState(24);

  const handleTimeSelect = (selectedTime) => {
    console.log(`Selected time: ${selectedTime}`);
  };

  const schedulingSlides = schedulingData.map((item, index) => {
    const isActive = item.day === selectedDay && item.date === selectedMonth;
    return (
      <SwiperSlide key={index}>
        <div
          className={`${styles["container-scheduling"]} ${
            isActive ? styles.active : ""
          }`}
          onClick={() => handleDayClick(item.day, item.date)}>
          <p className={styles["day"]}>{item.day}</p>
          <p className={styles["date"]}>{item.date}</p>
        </div>
      </SwiperSlide>
    );
  });

  const handleDayClick = (day, date) => {
    setSelectedDay(day);
    setSelectedMonth(date);
    console.log(day, date);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link href={"/categories"}>
            <Image src={back} className={styles.backIcon} />
          </Link>

          <Link href={"/profile"}>
            <Image src={user} />
          </Link>
        </div>

        <div className={styles.title}>Reschedule appointment</div>
        <div className={styles.subTitle}>Which day would you like to book?</div>
      </div>

      <div className="form-group">
        <select
          className="form-control"
          id="exampleSelect"
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>

      <div className="mt-2">
        <Swiper
          spaceBetween={10}
          centeredSlides={false}
          slidesPerView={5.6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          {schedulingSlides}
        </Swiper>
      </div>

      <div className={styles["container-question"]}>
        <div>
          <div className={styles["question"]}>
            Which day would you like to book?
          </div>
        </div>

        <div className={styles.Bigcontainer}>
          {timeSlots.map((time, index) => (
            <div className={styles.timeContainer}>
              <p
                className={styles["time"]}
                key={index}
                value={time}
                onClick={() => handleTimeSelect(time)}>
                {time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reschedule;
