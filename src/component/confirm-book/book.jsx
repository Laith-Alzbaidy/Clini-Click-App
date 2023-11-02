"use client";
import React from "react";
import styles from "./styles/book.module.css";
import Link from "next/link";
import Image from "next/image";
import back from "./assets/image/conhh.svg";
import user from "./assets/image/user.svg";
import call from "./assets/image/call.svg";
import location from "./assets/image/location.svg";
import Btn from "../button/button";
import Footer from "../footer/footer";
import { DataContext } from "@/context";
import { useContext } from "react";
const BookFinish = () => {
  const { dataPayment } = useContext(DataContext);
  console.log(dataPayment);
  return (
    <div className={styles.container}>
      <div className="container1">
        <div className={styles.headerContainer}>
          <Link href="/">
            <Image src={back} alt="back" />
          </Link>

          <Link href={"/profile"}>
            <Image src={user} alt="user" />
          </Link>
        </div>

        <div className={styles.title}>Your appointment is confirmed</div>
        <div className={styles.notification}>
          We will send you a reminder
          <br /> before your Appointment
        </div>
        <div className={styles.subTitle}>Your appointment details</div>
        <div className={styles.bookingContainer}>
          <div className={styles.treatmentContainer}>
            <div>Treatment:</div>
            <div className={styles.treatmentDeatils}>
              <div className={styles.treatmentName}>Laser hair removal</div>
              <div>Body area: Arms</div>
              <div>Device: Gentle Max Pro</div>
              <div>Sessions: 1</div>
            </div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Practitioner</div>
            <div>Dr. Basel Habayeb</div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Timing:</div>
            <div>Wed, 23 Jul at 2:00 PM</div>
          </div>
        </div>
        <div className={styles.totalContainer}>
          <div>
            Order total <span>(incl.tax)</span>
          </div>
          <div>AED 300</div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "1rem auto",
          border: "solid 1px #E8F3F1",
        }}
      ></div>

      {/* <div className={styles.call}>
        <Image src={call} alt="call" />
        <div>+971-5-000000000</div>
      </div>
      <div className={styles.call}>
        <Image src={location} alt="location" />
        <div>Dubai Marina,Dubai.</div>
      </div> */}
      <div className={styles["container1"]}>
        <Link href="/">
          <Btn margin="0 0 10px 0" title="Back to Clinic Profile" />
        </Link>
        <Footer />
      </div>
    </div>
  );
};

export default BookFinish;
