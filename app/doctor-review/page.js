"use client";
import styles from "./doctorReview.module.css";
import React, { useState } from "react";
import Btn from "@/src/component/button/button";
import Link from "next/link";
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa";


const DoctorReview = () => {
  const [rateClinic, setRateClinic] = useState(0);
  const [hoverClinic, setHoverClinic] = useState(null);
  const [ratePractitioner, setRatePractitioner] = useState(0);
  const [hoverPractitioner, setHoverPractitioner] = useState(null);
  const [clinicFeedback, setClinicFeedback] = useState("");
  const [practionerFeedback, setPractionerFeedback] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Rate your experience</div>
      <p className={styles.question}>
        How was your experience with {"clinic name"}
      </p>
      <div className={styles.starsContainer}>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rateClinic"
                value={currentRating}
                onClick={() => setRateClinic(currentRating)}
                style={{ display: "none" }}
              />
              {currentRating <= (rateClinic || hoverClinic) ? (
                <FaStar
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() => setHoverClinic(currentRating)}
                  onMouseLeave={() => setHoverClinic(null)}
                />
              ) : (
                <FaRegStar // Use the empty star icon
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() => setHoverClinic(currentRating)}
                  onMouseLeave={() => setHoverClinic(null)}
                />
              )}
            </label>
          );
        })}
      </div>
  
      <p className={styles.subquestion}>Do you have any feedback to share ?</p>
      <textarea
        className={styles.textArea}
        placeholder="Share your feedback"
        onChange={(e) => setClinicFeedback(e.target.value)}
      />
      <p className={styles.question2}>
        How was your experience with {"Practitioner name"}
      </p>

      <div className={styles.starsContainer}>
        {[...Array(5)].map((star, index) => {
          const currentRatingPractitioner = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="ratePractitioner"
                value={currentRatingPractitioner}
                onClick={() => setRatePractitioner(currentRatingPractitioner)}
                style={{ display: "none" }}
              />
              {currentRatingPractitioner <=
              (ratePractitioner || hoverPractitioner) ? (
                <FaStar
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() =>
                    setHoverPractitioner(currentRatingPractitioner)
                  }
                  onMouseLeave={() => setHoverPractitioner(null)}
                />
              ) : (
                <FaRegStar 
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() =>
                    setHoverPractitioner(currentRatingPractitioner)
                  }
                  onMouseLeave={() => setHoverPractitioner(null)}
                />
              )}
            </label>
          );
        })}
      </div>
      <p className={styles.subquestion}>Do you have any feedback to share ?</p>
      <textarea
        className={styles.textArea}
        placeholder="Share your feedback"
        onChange={(e) => setPractionerFeedback(e.target.value)}></textarea>
      <Link href="/doctor-review/submit">
        <Btn title="Submit"></Btn>
      </Link>
    </div>
  );
};

export default DoctorReview;
