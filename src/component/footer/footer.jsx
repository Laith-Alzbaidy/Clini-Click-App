import React from "react";
import logo from "./assets/image/logo.svg";
import Image from "next/image";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
      <p className={styles["label"]}>Powered by</p>
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Footer;
