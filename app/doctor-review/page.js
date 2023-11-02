"use client";
import styles from "./doctorReview.module.css";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Btn from "@/src/component/button/button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import api from "@/config-API/config-API";
import Cookies from "js-cookie";
const DoctorReview = () => {
  const [rate, setRate] = useState(0);
  const [descriptionDoctor, setDescriptionDoctor] = useState("");

  const token = Cookies.get("token");
  const sendRate = async () => {
    console.log(rate, descriptionDoctor);
    try {
      const response = await api.post(
        `practitioner/${8}/Review`, // Make sure to use the correct URL path
        {
          rating: rate,
          description: descriptionDoctor,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ratingChanged = (newRating) => {
    setRate(newRating);
    console.log(newRating);
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
        className="color-star"
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#A75CFF"
      />
      {/* <Rating
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        fractions={2}
      /> */}

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
        emptyIcon={<i class="fa-solid fa-star"></i>}
        halfIcon={<i className="fad fa-star-half-alt"></i>}
        fullIcon={<FontAwesomeIcon icon={faStar} />}
        activeColor="#A75CFF"
      />

      <p className={styles.subquestion}>Do you have any feedback to share ?</p>
      <textarea
        className={styles.textArea}
        onChange={(e) => setDescriptionDoctor(e.target.value)}
        placeholder="Share your feedback"
      />
      <Link href={"/doctor-review/submit"}>
        <Btn onClick={sendRate} title={"Submit"}></Btn>
      </Link>
    </div>
  );
};

export default DoctorReview;
