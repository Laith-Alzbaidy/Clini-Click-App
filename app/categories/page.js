import React from "react";
import styles from "./categories.module.css";
import Image from "next/image";
import backicon from "./assets/conhh.svg";
import Link from "next/link";
import CategoryContent from "./category-list/page";
const Categories = () => {
  return (
    <div className={styles.holder}>
      <Link href="/">
        <Image
          className={styles.backIcon}
          src={backicon}
          alt="Description of the image"
          width={15}
          height={15}
        />
      </Link>
      <div className={styles.treatmentText}>Our treatments</div>
      <CategoryContent />
    </div>
  );
};

export default Categories;
