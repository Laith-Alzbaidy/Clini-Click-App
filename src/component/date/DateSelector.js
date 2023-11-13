"use client";
import React, { useState, useEffect } from "react";
import styles from "./date.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DateSelector = ({
  isNewAppointment,
  setDateq,
  fetchAvailableHours,
  setDate,
  NoPrefrence,
  slecetedDoctor,
  fetchPrefernceIdAvailableHours,
}) => {
  const [selectedDay, setSelectedDay] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [schedulingData, setSchedulingData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  
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

  const handleDayClick = (day, date) => {
    setSelectedDay(day);
    setSelectedDate(date);
    const selectedDate = new Date(selectedMonth);
    const selectedMonthFormatted = (selectedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const dateFormatted = date.toString().padStart(2, "0");
    const yearFormatted = selectedDate.getFullYear();
    const selected = `${yearFormatted}-${selectedMonthFormatted}-${dateFormatted}`;

    if (isNewAppointment) {
      setDate(selected);
      if (slecetedDoctor && selected) {
        fetchAvailableHours(slecetedDoctor, selected);
      }
      if (NoPrefrence === "selected" && selected) {
        fetchPrefernceIdAvailableHours(selected);
      }
    } else {
      setDateq(selected);
      fetchAvailableHours(selected);
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
          onClick={() =>
            handleDayClick(item.day, item.date, item.id, item.value)
          }>
          <p className={styles["day"]}>{item.day}</p>
          <p className={styles["date"]}>{item.date}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className={styles["container-question"]}>
      <div>
        <h2 className={styles["question"]}>
          Which day would you like to book?
        </h2>
        <p className={styles.month}>{month}</p>
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
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 4.75,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 9.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 10.5,
              spaceBetween: 10,
            },
          }}>
          {schedulingSlides}
        </Swiper>
      </div>
    </div>
  );
};

export default DateSelector;
