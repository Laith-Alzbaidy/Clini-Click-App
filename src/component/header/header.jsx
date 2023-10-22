import React from "react";
import Image from "next/image";
import Logo from "./assets/image/logo.svg";
import Link from "next/link";
import styles from "./styles/header.module.css";

const Header = () => {
  return (
    <header className="header-section">
      <Image src={Logo} width={100} height={20} alt="logo" />

      <Link href="/login">
        <button className={styles["btn"]}>Log in / Sign Up</button>
      </Link>
    </header>
  );
};

export default Header;
