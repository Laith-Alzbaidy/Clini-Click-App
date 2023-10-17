"use client";

import React from "react";
import Image from "next/image";

import OTPInput, { ResendOTP } from "otp-input-react";

import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/otb.module.css";
import { useState } from "react";

import { useRouter } from "next/navigation";

const OTB = () => {
  const router = useRouter();
  const [otp, setOTP] = useState("");

  const handleConfirm = () => {
    if (otp.length === 4) {
      // Check OTP length
      router.push(`/payment`);
    }
  };

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
          onChange={(value) => {
            setOTP(value);
            handleConfirm();
          }}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          className={styles["container-input"]}
        />
      </div>
      <p className={styles["not-receive"]}>I did not receive the OTP</p>
    </div>
  );
};

export default OTB;
