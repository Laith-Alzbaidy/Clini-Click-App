import React from "react";
import Image from "next/image";
import imgCardBook from "./image.png";
import styles from "./card-book.module.css";
import star from "./Star.svg";
import Link from "next/link";
import Icon from "../../icon/icon";
import { useRouter } from "next/navigation";
import StarsRate from "@/src/component/stars-rate/stars-rate";

const CardBook = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles["container-card-book"]}>
      <h1 className={styles["title"]}>Clinique de la belleau bois dormant</h1>
      <div className={styles["container-image"]}>
        <Image fill src={imgCardBook} />
      </div>

      <div className="d-flex align-items-center gap-3">
        <div>
          <StarsRate rate={2} />
        </div>
        <Link href="/google-reviews">
          <p className={styles["text-review"]}>106 Google reviews</p>
        </Link>
      </div>
      <div class="d-flex flex-column align-items-center gap-3">
        <Icon data={data} />
        <button
          onClick={() => router.push("categories")}
          className={styles["btn-book"]}
        >
          Book appointment
        </button>
      </div>
    </div>
  );
};

export default CardBook;
