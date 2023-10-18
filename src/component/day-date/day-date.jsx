"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/day-date.module.css";
import PhoneInput from "react-phone-input-2";
import Btn from "@/src/component/button/button";
import "react-phone-input-2/lib/style.css";

import { useRouter } from "next/navigation";

const DayDate = () => {
  const router = useRouter();
  const [phone, setPhone] = useState();

  const handleConfirm = () => {
    console.log(phone);
    router.push(`/otb`);
  };
  return (
    <div>
      <ClosePrev />
      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 3 of 3</p>
        <h1 className={styles["title"]}>Enter the OTP</h1>
      </div>

      <p>
        We will send you a WhatsApp message with an OTP to verify your number.
      </p>

      <div className="mt-3">
        <label htmlFor="" className={styles["lable-phone"]}>
          WhatApp Number
        </label>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      </div>

      <Btn title="Send code" onClick={handleConfirm} />
    </div>
  );
};

export default DayDate;
