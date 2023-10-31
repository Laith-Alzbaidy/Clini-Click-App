"use client";
import React from "react";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";

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

const DateSelector = () => {
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDateId, setSelectedDateId] = useState();
  const [schedulingData, setSchedulingData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [date, setDate] = useState();
  useEffect(() => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const generatedSchedulingData = [];

    const generateDayId = (date) => {
      return `${date - 1}`;
    };

    for (let date = 1; date <= daysInMonth; date++) {
      const day = getDayName(new Date(year, month, date));
      const dayId = generateDayId(date);
      generatedSchedulingData.push({ day, date, id: dayId });
    }

    setSchedulingData(generatedSchedulingData);
  }, [selectedMonth]);

  const getDayName = (date) => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = date.getDay();
    return dayNames[dayIndex];
  };

  const handleTimeSelect = (Time) => {
    setSelectedTime(Time);
    console.log(Time);
  };

  const handleDayClick = (day, date, id) => {
    setSelectedDay(day);
    setSelectedDate(date);
    setSelectedDateId(id);

    const selectedDate = new Date(selectedMonth);
    const selectedMonthFormatted = (selectedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const dateFormatted = date.toString().padStart(2, "0");
    const yearFormatted = (selectedDate.getFullYear() % 100)
      .toString()
      .padStart(2, "0");
    const selected = `${selectedMonthFormatted}-${dateFormatted}-${yearFormatted}`;
    setDate(selected);
    console.log(selected);

    if (slecetedDoctor) {
      fetchAvailableHours(slecetedDoctor, date);
    }
  };

  const schedulingSlides = schedulingData.map((item, index) => {
    const isActive = item.day === selectedDay && item.date === selectedDate;

    return (
      <SwiperSlide key={index}>
        <div
          className={`${styles["container-scheduling"]} ${
            isActive ? styles.active : ""
          }`}
          onClick={() => handleDayClick(item.day, item.date, item.id)}>
          <p className={styles["day"]}>{item.day}</p>
          <p className={styles["date"]}>{item.date}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <div className={styles["container-question"]}>
        <div>
          <h2 className={styles["question"]}>
            Which day would you like to book?
          </h2>
          <p className="mt-2">{month}</p>
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
      </div>

      <div className={styles["container-question"]}>
        <div className="mt-2">
          <div className={styles["container-question"]}>
            <div className={styles["question"]}>
              Which time would you like to book?
            </div>

            <div className={styles.Bigcontainer}>
              {availability && availability.data ? (
                availability.data.map((time, index) => (
                  <div
                    className={`${styles.timeContainer} ${
                      time.erId === selectedTime ? styles.activeTime : ""
                    }`}
                    key={index}
                    onClick={() => handleTimeSelect(time.erId)}>
                    <p className={styles["time"]}>{time.er_time}</p>
                  </div>
                ))
              ) : (
                <p>
                  * Please select a practitioner and a date to display the
                  available times.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSelector;
