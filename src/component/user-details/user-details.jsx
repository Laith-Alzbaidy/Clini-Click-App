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
import validator from "validator";
import { useSearchParams } from "next/navigation";
const PractitionerDetails = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const searchParams = useSearchParams();

  //params Id
  const treatmentId = searchParams.get("treatmentId");
  const practitionerId = searchParams.get("practitionerId");
  const timeSlotId = searchParams.get("timeSlotId");
  const date = searchParams.get("date");

  const [errors, setErrors] = useState({});

  const handleConfirm = () => {
    const newErrors = {};
    let flag = true;
    //validation firstName
    if (formData.firstName === "") {
      newErrors.firstName = "The firstName field is required.";
      flag = false;
    } else if (formData.firstName.length < 3) {
      newErrors.firstName = "The firstName must be at least 3 characters long.";
      flag = false;
    }

    //validation lastName
    if (formData.lastName === "") {
      newErrors.lastName = "The lastName field is required.";
      flag = false;
    } else if (formData.lastName.length < 3) {
      newErrors.lastName = "The lastName must be at least 3 characters long.";
      flag = false;
    }

    //validation email
    if (formData.email === "") {
      newErrors.email = "The email field is required.";
      flag = false;
    } else if (!validator.isEmail(formData.email)) {
      newErrors.email = "Please, enter a valid email!";
      flag = false;
    }
    setErrors(newErrors);
    return flag;
  };

  //get token in cookies
  const token = Cookies.get("token");

  //handle input to get value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle the form submission here
  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirm();

    if (handleConfirm()) {
      console.log(" handleConfirm();", handleConfirm());
      sendUserDetails();
      Cookies.set("token", token, {
        expires: 1 / 24,
        secure: true,
      });
      router.push(
        `/payment?treatmentId=${treatmentId}&practitionerId=${practitionerId}&timeSlotId=${timeSlotId}&date=${date}`
      );
    }
  };

  const sendUserDetails = async () => {
    try {
      const response = await api.put("Client/Update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", response.data);
      if (response.data.isSuccess) {
        console.log("Profile-update", response.data);
        localStorage.setItem("user-details", JSON.stringify(formData));
      }
      console.log("user-details", response.data.responseData);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div className="container1">
      <div className="mb-2">
        <Link href="payment">
          <ButtonPreviews />
        </Link>
      </div>
      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 3 of 3</p>
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
              // required
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
              // required
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
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className={Object.keys(errors).length > 0 ? styles["error"] : ""}>
          <p>{errors.firstName && errors.firstName}</p>
          <p>{errors.lastName && errors.lastName}</p>
          <p>{errors.email && errors.email}</p>
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
