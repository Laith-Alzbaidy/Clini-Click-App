"use client";
import React, { useState } from "react";
import styles from "./reschedule.module.css";
import Link from "next/link";
import back from "../assets/conhh.svg";
import user from "../assets/user.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Btn from "@/src/component/button/button";
import { useRouter } from "next/navigation";

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

const Reschedule = ({ searchParams }) => {
  const id = searchParams.search;

  const [selectedMonth, setSelectedMonth] = useState();
  const [month, setMonth] = useState("January");
  const [selectedDay, setSelectedDay] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const router = useRouter();

  const handleTimeSelect = (Time) => {
    setSelectedTime(Time);
  };
  const handleConfirm = () => {
    console.log(selectedDay, selectedMonth, month, selectedTime);
    router.push(`/my-appointments/reschedule/confirmed/${id}`);
  };

  const schedulingSlides = schedulingData.map((item, index) => {
    const isActive = item.day === selectedDay && item.date === selectedMonth;
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

  const handleDayClick = (day, date) => {
    setSelectedDay(day);
    setSelectedMonth(date);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link href={`/my-appointments`}>
            <Image src={back} className={styles.backIcon} />
          </Link>

          <Link href={"/profile"}>
            <Image src={user} />
          </Link>
        </div>

        <div className={styles.title}>Reschedule appointment</div>
        <div className={styles.subTitle}>Which day would you like to book?</div>
      </div>

      {/* <div className="form-group"> */}
      <div>
        January
        {/* <select
          className="form-control"
          id="exampleSelect"
          onChange={(e) => setMonth(e.target.value)}
          value={month}
          style={{ border:"none !important", paddingLeft: 5, width: "120px" }}
        >
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
        </select> */}
      </div>

      <div className="mt-2">
        <Swiper
          spaceBetween={10}
          centeredSlides={false}
          slidesPerView={5.6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 12.5,
              spaceBetween: 40,
            },
          }}
        >
          {schedulingSlides}
        </Swiper>
      </div>

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
      <Btn title={"confirm"} onClick={handleConfirm} />
    </>
  );
};

export default Reschedule;
