"use client";

import React, { use, useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import arrow from "./assets/image/ChevronLeft.svg";
import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/login.module.css";
import PhoneInput from "react-phone-input-2";
import Btn from "@/src/component/button/button";
import "react-phone-input-2/lib/style.css";
import { countries } from "./phone-countries/phone-country";

import { useRouter } from "next/navigation";

const Login = () => {
  const [openOption, setOpenOption] = useState(false);
  const router = useRouter();
  const [phone, setPhone] = useState("971");

  const [countriesObj, setCountriesObj] = useState({
    name: "United Arab Emirates",
    code: "UAE",
    phone: 971,
  });

  const handleConfirm = () => {
    console.log(phone);
    router.push(`/otb`);
  };

  const handelOption = (elem) => {
    setOpenOption(!openOption);
    setCountriesObj(elem);
    setPhone(elem.phone);
    console.log(elem, "-------");
  };

  return (
    <div>
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
        <input
          type="text"
          placeholder="+962"
          className={styles["input-select"]}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className={styles["styled-select"]}>
          <div
            onClick={() => setOpenOption(!openOption)}
            className={styles["container-left"]}
          >
            <span>{countriesObj.code}</span>
            <Image
              style={openOption ? { transform: "rotate(180deg)" } : {}}
              src={arrow}
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
          {openOption && (
            <ul className={styles["list-items"]}>
              {countries.map((country) => {
                return (
                  <li
                    key={country.code}
                    onClick={() => handelOption(country)}
                    value={country}
                  >{`${country.code}`}</li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <Btn title="Send code" onClick={handleConfirm} />
    </div>
  );
};

export default Login;
