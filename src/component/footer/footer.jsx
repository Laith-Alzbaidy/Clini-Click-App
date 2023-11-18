import React from "react";
import logo from "./assets/image/logo.svg";
import Image from "next/image";
import styles from "./styles/footer.module.css";
import Link from "next/link";
const Footer = ({ additiionalStyles }) => {
  const prevStyles = {};
  const margeStyles = { ...prevStyles, ...additiionalStyles };
  return (
    <Link href="/">
      <div className="footer-icon" style={margeStyles}>
        <p className={styles["label"]}>Powered by</p>
        <Image src={logo} alt="logo" />
      </div>
    </Link>
  );
};

export default Footer;
