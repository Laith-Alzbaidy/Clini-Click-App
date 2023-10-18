import React from "react";
import Image from "next/image";
import Logo from "./assets/image/logo.svg";
import Link from "next/link";
import styles from "./styles/header.module.css";

const Header = () => {
  return (
    <header className="header-section">
      <Image src={Logo} width={100} height={20} alt="logo" />
      <div className={styles["container-btn"]}>
        <div className={styles["btn"]} href="#">
          Log in
        </div>
        <span>/</span>
        <div className={styles["btn"]} href="#">
          Sigin up
        </div>
      </div>
    </header>
  );
};

export default Header;
