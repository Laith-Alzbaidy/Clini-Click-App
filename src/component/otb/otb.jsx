"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OTPInput, { ResendOTP } from "otp-input-react";
import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/otb.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const OTB = () => {
  const router = useRouter();
  const [otp, setOTP] = useState("");

  const handleOTBonChange = (value) => {
    const updatedOTPValues = [...value];
    setOTP(value);

    if (updatedOTPValues.length === 4) {
      router.push(`/user-details`);
      console.log(updatedOTPValues);
      console.log(otp);
    }
  };

  return (
    <div>
      <ClosePrev close="/" back="/login" />
      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 3 of 3</p>
        <h1 className={styles["title"]}>Enter the OTP</h1>
      </div>
      <p>We sent you a WhatsApp message with the OTP to +971503897270.</p>
      <div className={styles["container-input"]}>
        <OTPInput
          value={otp}
          onChange={(value) => {
            handleOTBonChange(value);
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
