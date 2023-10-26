import React from "react";
import Image from "next/image";
import close from "./assets/image/close.svg";
import star from "./assets/image/Star.svg";
import styles from "./styles/reviews.module.css";
import Link from "next/link";

const Reviews = ({ title }) => {
  return (
    <div className="container1">
      <div className={styles["header-reviews"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <Link href="./">
          <Image src={close} alt="close" />
        </Link>
      </div>
      <div className={styles["container-review-rate"]}>
        <div className="continer-icon-star">
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
          <Image src={star} alt="star" />
        </div>
        <p className={styles["rate"]}>4.0</p>
      </div>

      {/* Review 1 */}
      <div className={styles["container-all-reviews"]}>
        <div className="d-flex align-items-center gap-3">
          <h1 className={styles["title"]}>Reviewer Name</h1>
          <div className={styles["container-review-rate"]}>
            <div className="continer-icon-star">
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
            </div>
            <p className={styles["rate"]}>4.0</p>
          </div>
        </div>
        <p className={styles["discription-reviews"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          veniam..
        </p>
      </div>
      {/* Review 2 */}
      <div className={styles["container-all-reviews"]}>
        <div className="d-flex align-items-center gap-3">
          <h1 className={styles["title"]}>Reviewer Name</h1>
          <div className={styles["container-review-rate"]}>
            <div className="continer-icon-star">
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
            </div>
            <p className={styles["rate"]}>4.0</p>
          </div>
        </div>
        <p className={styles["discription-reviews"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          veniam..
        </p>
      </div>
      {/* Review 3 */}
      <div className={styles["container-all-reviews"]}>
        <div className="d-flex align-items-center gap-3">
          <h1 className={styles["title"]}>Reviewer Name</h1>
          <div className={styles["container-review-rate"]}>
            <div className="continer-icon-star">
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
              <Image src={star} alt="star" className={styles["star-review"]} />
            </div>
            <p className={styles["rate"]}>4.0</p>
          </div>
        </div>
        <p className={styles["discription-reviews"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          veniam..
        </p>
      </div>
    </div>
  );
};

export default Reviews;
