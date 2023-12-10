import React from "react";
import Image from "next/image";
import close from "./assets/image/close.svg";
import star from "./assets/image/Star.svg";
import styles from "./styles/reviews.module.css";
import Link from "next/link";
import StarsRate from "@/src/component/stars-rate/stars-rate";
import api from "@/config-API/config-API";
import { useEffect } from "react";
import Btn from "../button/button";
import { useState } from "react";
const Reviews = ({ title }) => {
  const [reviewsObj, setReviews] = useState({});
  const ReviewGoogle = async () => {
    try {
      const response = await api.get("Clinics/abdullahclinic/Reviews");
      console.log("responseGoogleReview", response.data.result);
      setReviews[response.data.result];
    } catch (err) {
      console.log("err");
    }
  };

  useEffect(() => {
    ReviewGoogle();
  }, []);
  return (
    <div className={styles.warapper}>
      <div className={styles.containerOverFlow}>
        <div className="container1">
          <div className={styles["header-reviews"]}>
            <h1 className={styles["title"]}>{title}</h1>

            <Link className={styles["close-btn"]} href="./">
              <Image src={close} alt="close" />
            </Link>
          </div>
          <div className={styles["container-review-rate"]}>
            <div className="continer-icon-star">
              <StarsRate rate={2} />
            </div>
            <p className={styles["rate"]}>4.0</p>
          </div>

          {reviewsObj.reviews?.map((elem, index) => (
            <div className={styles["container-all-reviews"]}>
              <div className="d-flex align-items-center gap-3">
                <h1 className={styles["title-review"]}>Reviewer Name</h1>
                <div className={styles["container-review-rate"]}>
                  <div className={styles["container-icon-star"]}>
                    <StarsRate rate={4} />
                  </div>
                  <p className={styles["rate"]}>4.0</p>
                </div>
              </div>
              <p className={styles["discription-reviews"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad veniam..
              </p>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center">
          <button
            style={{
              backgroundColor: "var(--secondary-color) !important",
              color: "#f9fafb",
              width: "50%",
              margin: "0 auto",
              fontSize: "15px",
              fontWeight: "700",
              border: "none !important",
              outline: "none !important",
              padding: "11px 20px !important",
              marginTop: "30px",
              borderRadius: "35px !important",
              fontFamily: '"Quicksand", sans-serif !important',
            }}
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
