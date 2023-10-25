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
  // useEffect(() => {
  //   const element = document.querySelector(".arrow");
  //   console.log(element);
  //   if (element) {
  //     element.remove("arrow");
  //   }
  //   const newElement = document.createElement("div");
  //   newElement.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <rect width="20" height="20" fill="#F5F5F5"/>
  //   <g id="Day and date selected" clip-path="url(#clip0_0_1)">
  //   <rect width="393" height="851" transform="translate(-106 -263)" fill="white"/>
  //   <g id="Group 39">
  //   <rect id="Rectangle 17" x="-71.2852" y="-7.68555" width="319.285" height="36" rx="14.5" fill="white" stroke="#ADADAD"/>
  //   </g>
  //   <g id="Button">
  //   <g id="Icon / Chevron Left">
  //   <g id="arrow-left">
  //   <path id="Vector" d="M16.336 7.91441L11.12 13.1304C10.504 13.7464 9.496 13.7464 8.88 13.1304L3.664 7.91441" stroke="#101623" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  //   </g>
  //   </g>
  //   </g>
  //   </g>
  //   <defs>
  //   <clipPath id="clip0_0_1">
  //   <rect width="393" height="851" fill="white" transform="translate(-106 -263)"/>
  //   </clipPath>
  //   </defs>
  //   </svg>
  //   `;

  //   const container = document.querySelector(".selected-flag");
  //   container.appendChild(newElement);

  //   console.log(container);
  // }, []);
  const [openOption, setOpenOption] = useState(false);
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const [countriesObj, setCountriesObj] = useState({
    name: "United Arab Emirates",
    code: "UAE",
    phone: 971,
  });

  const handleConfirm = () => {
    console.log(phone);
    router.push(`/otb`);
  };

  // const handelOption = (elem) => {
  //   setOpenOption(!openOption);
  //   setCountriesObj(elem);
  //   setPhone(elem.phone);
  //   console.log(elem, "-------");
  // };

  return (
    <div className="container1">
      {/* <div className="header-nav"> */}
      <ClosePrev close="/" back="/" />
      {/* </div> */}

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
        {/* <input
          type="text"
          placeholder="+962"
          className={styles["input-select"]}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> */}

        {/* <div className={styles["styled-select"]}> */}
        {/* <div
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
          </div> */}
        {/* {openOption && (
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
          )} */}

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
