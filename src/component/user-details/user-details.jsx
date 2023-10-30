"use client";
import React, { useState } from "react";

import Link from "next/link";
import Btn from "@/src/component/button/button";
import styles from "./styles/user-details.module.css";
import Image from "next/image";
import user from "./assets/image/user.svg";
import email from "./assets/image/email.svg";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
import { useRouter } from "next/navigation";
const PractitionerDetails = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //get token in cookies
  const token = Cookies.get("token");

  //handle confirm data
  const handleConfirm = () => {};

  //handle input to get value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle the form submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    sendUserDetails();
    // console.log("Form data submitted:", formData);
  };

  const sendUserDetails = async () => {
    const response = await api.put("Client/Update", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data);
  };
  return (
    <div className="container1">
      <Link href="payment">
        <ButtonPreviews />
      </Link>
      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 2 of 3</p>
        <h1 className={styles["title"]}>My details</h1>
      </div>

      <form className={styles["form-input"]} onSubmit={handleSubmit}>
        <div className={styles.main}>
          <div className={styles.inputContainer}>
            <Image
              src={user}
              alt="Description of the image"
              width={24}
              height={24}
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.inputContainer}>
            <Image
              src={user}
              alt="Description of the image"
              width={24}
              height={24}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.inputContainer}>
            <Image
              src={email}
              alt="Description of the image"
              width={24}
              height={24}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mt-5">
          <p className="text-center">
            No payment will be taken until your appointment
          </p>
          <Btn title="Continue" margin="10px 0" />
        </div>
      </form>
    </div>
  );
};

export default PractitionerDetails;
