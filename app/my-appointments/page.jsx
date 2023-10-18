import React from "react";
import styles from "./my-appointments.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "./assets/img.svg";
import backIcon from "./assets/conhh.svg";
import user from "./assets/user.svg";
import left from "./assets/left.svg";


async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MyAppointments = async() => {
  const data = await getData()
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Link href={"/categories"}>
          <Image src={backIcon} className={styles.backIcon} alt="back"/>
        </Link>

        <Link href={"/profile"}>
          <Image src={user} alt="user" />
        </Link>
      </div>

      <div className={styles.title}>My appointments</div>
      <div className={styles.subTitle}>Upcoming appointments</div>

      {data.map((appointment, index) => (
        <div className={styles.cardContainer} key={index}>
          <Image src={image} className={styles.cardImage} />
          <div className={styles.details}>
            <div>Thu 22/7/2023 3:00 PM</div>
            <div>{appointment.name}</div>
            <div>{appointment.id}</div>
            <div>{appointment.username}</div>
          </div>
          <Link href={`my-appointments/current-bookings/${appointment.id}`} className={styles.link}>
            <Image src={left} />
          </Link>
        </div>
      ))}
      <div className={styles.subTitle}>Past appointments</div>

      {data.map((appointment, index) => (
        <div className={styles.cardContainer} key={index}>
          <Image src={image} className={styles.cardImage} alt="img"/>
          <div className={styles.details}>
            <div>Thu 22/7/2023 3:00 PM</div>
            <div>{appointment.name}</div>
            <div>{appointment.id}</div>
            <div>{appointment.username}</div>
          </div>
          <Link href={`my-appointments/past-bookings/${appointment.id}`} className={styles.link}>
            <Image src={left} alt="left"/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
