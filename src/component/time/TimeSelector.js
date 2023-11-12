"use client";
import React, { useState, useEffect } from "react";
import styles from "./time.module.css";

const TimeSelector = ({
  availability,
  selectedTime,
  setSelectedTime,
  practitioner,
  isLoading,
}) => {
  console.log(selectedTime, "ff");

  useEffect(() => {}, [availability]);

  return (
    <div className={styles["container-question"]}>
      <div className={styles["question"]}>
        Which time would you like to book?
      </div>

      <div className={styles.Bigcontainer}>
        {isLoading ? (
          <p className={styles.loadingMessage}>
            Loading available times {" "}<span className={styles.loadingDots}></span>
          </p>
        ) : availability && availability.data ? (
          availability.data.map((time, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedTime(time.erId);
              }}
              className={`${styles.timeContainer} ${
                time.erId === selectedTime ? styles.active : ""
              }`}>
              <p className={styles["time"]}>{time.er_time}</p>
            </div>
          ))
        ) : practitioner ? (
          <p>
            * Please select a practitioner and a date to display the available
            times.
          </p>
        ) : (
          <p>* Please select a date to display the available times.</p>
        )}
      </div>
    </div>
  );
};

export default TimeSelector;
