"use client";

import React from "react";
import Image from "next/image";

import OTPInput, { ResendOTP } from "otp-input-react";

import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/otb.module.css";
import { useState } from "react";
const OTB = () => {
  const [otp, setOTP] = useState("");
  return (
    <div>
      <ClosePrev />
      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 3 of 3</p>
        <h1 className={styles["title"]}>Enter the OTP</h1>
      </div>
      <p>We sent you a WhatsApp message with the OTP to +971503897270.</p>
      <div className={styles["container-input"]}>
        <OTPInput
          value={otp}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          className={styles["container-input"]}
        />
      </div>
      {/* <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> */}
      <p className={styles["not-receive"]}>I did not receive the OTP</p>
    </div>
  );
};

export default OTB;
