"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./assets/image/logo.svg";
import Link from "next/link";
import styles from "./styles/header.module.css";
import UserIcon from "./assets/image/user.svg";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
const Header = ({ pathBefore }) => {
  const [token, setToken] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await api.get("clinic?clinicName=AbdullahClinic");
      setData(response.data.responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    setToken(token);

    fetchData();
  }, [data]);

  return (
    <header className="header-section">
      <Link href="/">
        <div className={styles["container-logo"]}>
          <Image className={styles["logo"]} src={data?.logo} alt="logo" fill />
        </div>
      </Link>

      {token ? (
        <Link className={styles["image-login"]} href={"/profile"}>
          <Image fill src={UserIcon} alt="User-Icon" />
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
