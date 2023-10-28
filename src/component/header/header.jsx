import React from "react";
import Image from "next/image";
import Logo from "./assets/image/logo.svg";
import Link from "next/link";
import styles from "./styles/header.module.css";

const Header = ({ data }) => {
  return (
    <header className="header-section">
      <Image src={data.logo} width={120} height={50} alt="logo" />

      <Link href="/login">
        <button className={styles["btn"]}>Log in / Sign Up</button>
      </Link>
    </header>
  );
};

export default Header;
