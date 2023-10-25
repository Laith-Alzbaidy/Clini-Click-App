"use client";
import React, { useState } from "react";

import Link from "next/link";
import Btn from "@/src/component/button/button";
import styles from "./styles/user-details.module.css";
import Image from "next/image";
import user from "./assets/image/user.svg";
import email from "./assets/image/email.svg";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import { useRouter } from "next/navigation";
const PractitionerDetails = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleConfirm = () => {
    console.log(formData);
    router.push(`/payment`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // handle the form submission here

    console.log("Form data submitted:", formData);
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
          <Btn title="Continue" margin="10px 0" onClick={handleConfirm} />
        </div>
      </form>
    </div>
  );
};

export default PractitionerDetails;
