"use client";
import React from "react";
import styles from "./my-appointments.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "./assets/img.svg";
import backIcon from "./assets/conhh.svg";
import user from "./assets/user.svg";
import left from "./assets/left.svg";
import Footer from "@/src/component/footer/footer";
import CategoriesModal from "@/src/component/categotyModal/categoriesModal";
import api from "@/config-API/config-API";

import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
const style = {
  marginTop: "45px",
};

const MyAppointments = () => {
  const [data, setData] = useState([]);

  const token = Cookies.get("token");

  //get data MyAppointments
  const isUpcoming = async () => {
    try {
      const response = await api.get("/Appointments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.responseData);

      setData(response.data.responseData);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    isUpcoming();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Link href={"/categories"}>
          <Image src={backIcon} className={styles.backIcon} alt="back" />
        </Link>

        <Link href={"/profile"}>
          <Image src={user} alt="user" />
        </Link>
      </div>

      <div className={styles.title}>My appointments</div>
      <div className={styles.subTitle}>Upcoming appointments</div>
      <div className={styles.main}>
        {data?.map((appointment, index) => (
          <Link
            href={`my-appointments/current-bookings/${appointment?.id}`}
            className={styles.link}
          >
            <div className={styles.cardContainer} key={index}>
              <Image src={image} className={styles.cardImage} alt="image" />
              <div className={styles.details}>
                <div>{appointment?.startTime}</div>
                <div>{appointment?.treatmentName}</div>
                <div>{appointment?.id}</div>
                <div>Confirmed</div>
              </div>
              <Image src={left} alt="left" />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.subTitle}>Past appointments</div>

      <div className={styles.main}>
        {/* {data.map((appointment, index) => (
          <Link
            href={`my-appointments/past-bookings/${appointment.id}`}
            className={styles.link}
          >
            <div className={styles.cardContainer} key={index}>
              <Image src={image} className={styles.cardImage} alt="img" />
              <div className={styles.details}>
                <div>Thu 22/7/2023 3:00 PM</div>
                <div>{appointment.name}</div>
                <div>{appointment.id}</div>
                <div>{appointment.username}</div>
              </div>
              <Image src={left} alt="left" />
            </div>
          </Link>
        ))} */}
      </div>
      <Footer additiionalStyles={style} />
    </div>
  );
};

export default MyAppointments;
