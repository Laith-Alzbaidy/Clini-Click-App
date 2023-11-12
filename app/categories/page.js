import React from "react";
import styles from "./categories.module.css";
import Link from "next/link";
import CategoryContent from "./category-list/page";
import Footer from "@/src/component/footer/footer";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";

const style = {
  marginTop: "45px",
};
const Categories = () => {
  return (
    <div className={styles.holder}>
      <div className={styles.backIcon}>
        <Link href="/">
          <ButtonPreviews />
        </Link>
      </div>
      <div className={styles.treatmentText}>Our treatments</div>
      <CategoryContent />
      <Footer additiionalStyles={style} />
    </div>
  );
};

export default Categories;
