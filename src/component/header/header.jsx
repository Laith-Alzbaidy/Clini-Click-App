import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./assets/image/logo.svg";
import Link from "next/link";
import styles from "./styles/header.module.css";
import UserIcon from "./assets/image/user.svg";
import Cookies from "js-cookie";
const Header = ({ data }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    setToken(token);
  }, []);

  return (
    <header className="header-section">
      <Image src={data.logo} width={120} height={50} alt="logo" />

      {token ? (
        <Link href={"/user-details"}>
          <Image src={UserIcon} alt="User-Icon" />
        </Link>
      ) : (
        <Link href="/login">
          <button className={styles["btn"]}>Log in / Sign Up</button>
        </Link>
      )}
    </header>
  );
};

export default Header;
