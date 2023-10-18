import React from "react";
import styles from "./categories.module.css";
import Image from "next/image";
import Tabs from "./tabs/page";
import backicon from "./assets/conhh.svg";
import Link from "next/link";
const Categories = () => {
  return (
    <>
      <Link href="/">
        <Image
          className={styles.backIcon}
          src={backicon}
          alt="Description of the image"
          width={15}
          height={15}
        />
      </Link>
      <div className={styles.treatmentText}>Our tratment</div>
      <Tabs />
    </>
  );
};

export default Categories;
