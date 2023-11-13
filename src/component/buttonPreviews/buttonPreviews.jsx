import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./buttonPreviews.module.css";
import previews from "./assets/image/previews.svg";
const ButtonPreviews = ({ onClick }) => {
  return (
    <Image
      onClick={() => onClick()}
      width={25}
      height={25}
      src={previews}
      alt="button previews"
      className={styles.ButtonPreviews}
    />
  );
};

export default ButtonPreviews;
