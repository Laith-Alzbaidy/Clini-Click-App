import React from "react";
import styles from "../doctorReview.module.css";
import Btn from "@/src/component/button/button";
import Link from "next/link";
const SubmitReview = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title2}>Thank you for Submiting your feedback</div>
      <Link href={"/"}>
        <Btn title={"Back to clinic profile"} />
      </Link>
    </div>
  );
};

export default SubmitReview;
