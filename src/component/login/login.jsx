"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrow from "./assets/image/ChevronLeft.svg";
import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/login.module.css";
import PhoneInput from "react-phone-input-2";
import Btn from "@/src/component/button/button";
import "react-phone-input-2/lib/style.css";
import { countries } from "./phone-countries/phone-country";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleConfirm = () => {
    console.log(phone);
    router.push(`/otb`);
  };

  return (
    <div className="container1">
      <ClosePrev close="/" back="/" />

      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 3 of 3</p>
        <h1 className={styles["title"]}>Enter the OTP</h1>
      </div>

      <p>
        We will send you a WhatsApp message with an OTP to verify your number.
      </p>

      <label htmlFor="" className={styles["lable-phone"]}>
        WhatApp Number
      </label>
      <div className={styles["container-phone"]}>
        <PhoneInput
          country={"ae"}
          value={phone}
          onChange={(phone) => console.log({ phone })}
        />
        {/* </div> */}
      </div>

      <Btn title="Send code" onClick={handleConfirm} />
    </div>
  );
};

export default Login;
