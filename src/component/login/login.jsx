"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import api from "@/config-API/config-API";
import ClosePrev from "@/src/component/close-prev/close-prev";
import Btn from "@/src/component/button/button";
import styles from "./styles/login.module.css";
import { useSearchParams } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const searchParams = useSearchParams();

  //params Id
  const treatmentId = searchParams.get("treatmentId");
  const practitionerId = searchParams.get("practitionerId");
  const timeSlotId = searchParams.get("timeSlotId");
  const date = searchParams.get("date");

  const handleConfirm = async () => {
    try {
      const response = await sendPhoneOTP(phone);

      //route to OTP and passing query
      router.push(
        `/otb?treatmentId=${treatmentId}&practitionerId=${practitionerId}&timeSlotId=${timeSlotId}&date=${date}`
      );
      localStorage.setItem("phone", phone);

      console.log(response.data);
    } catch (error) {
      console.log("Error sending OTP:", error);
    }
  };

  const sendPhoneOTP = async (phoneNumber) => {
    const response = await api.post("OTP/Send", {
      phoneNumber,
    });
    return response;
  };

  return (
    <div className="container1">
      <ClosePrev close="/" back="./" />

      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 2 of 3</p>
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
          onChange={(phone) => setPhone(phone)}
          containerStyle={{ width: "300px !important" }}
        />
      </div>

      <Btn title="Send code" onClick={handleConfirm} />
    </div>
  );
};

export default Login;
