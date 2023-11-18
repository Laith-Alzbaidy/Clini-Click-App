"use client";
import React, { useEffect } from "react";
import styles from "./time.module.css";

const TimeSelector = ({
  availability,
  selectedTime,
  setSelectedTime,
  practitioner,
  isLoading,
  setSelectNoPrefrence
  
}) => {
  useEffect(() => {}, [availability]);

  return (
    <div className={styles["container-question"]}>
      <div className={styles["question"]}>
        Which time would you like to book?
      </div>

      <div className={styles.Bigcontainer}>
        {isLoading ? (
          <p className={styles.loadingMessage}>
            Loading available times <span className={styles.loadingDots}></span>
          </p>
        ) : availability && availability.data ? (
          availability.data.map((time, index) => (
            <div
              key={time.erId}
              onClick={() => {
                setSelectedTime(time.erId);
                setSelectNoPrefrence(time.practitionerId)
              }}
              className={`${styles.timeContainer} ${
                time.erId === selectedTime ? styles.active : ""
              }`}
            >
              <p
                className={`${styles.time} ${
                  time.erId === selectedTime ? styles.activeTime : ""
                }`}
              >
                {time.er_time}
              </p>
            </div>
          ))
        ) : practitioner ? (
          <p className={styles.note}>
            * Please select a practitioner and a date to display the available
            times.
          </p>
        ) : (
          <p className={styles.note}>
            * Please select a date to display the available times.
          </p>
        )}
      </div>
    </div>
  );
};

export default TimeSelector;
