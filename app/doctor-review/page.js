"use client";
import styles from "./doctorReview.module.css";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Btn from "@/src/component/button/button";
import Link from "next/link";
import { FontAwesomeIcon, faStar } from "@fortawesome/react-fontawesome";

const DoctorReview = () => {
  const [rate, setRate] = useState(0);

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Rate your experience</div>
      <p className={styles.question}>
        How was your experience with {"clinic name"}
      </p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={32}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fad fa-star-half-alt"></i>}
        fullIcon={<i className="fad fa-star"></i>}
        activeColor="#A75CFF"
      />
      <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
      />
      <p className={styles.subquestion}>Do you have any feedback to share ?</p>
      <textarea className={styles.textArea} placeholder="Share your feedback" />
      <p className={styles.question2}>
        How was your experience with {"Practitionr name"}
      </p>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={32}
        isHalf={true}
        emptyIcon={<FontAwesomeIcon icon={faStar} />}
        halfIcon={<i className="fad fa-star-half-alt"></i>}
        fullIcon={<i className="fad fa-star"></i>}
        activeColor="#A75CFF"
      />
      <p className={styles.subquestion}>Do you have any feedback to share ?</p>
      <textarea className={styles.textArea} placeholder="Share your feedback" />
      <Link href={"/doctor-review/submit"}>
        <Btn title={"Submit"}></Btn>
      </Link>
    </div>
  );
};

export default DoctorReview;
