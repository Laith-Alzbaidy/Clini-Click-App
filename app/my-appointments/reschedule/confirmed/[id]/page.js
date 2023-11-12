"use client";
import React from "react";
import styles from "./confirmed.module.css";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import back from "../../../assets/conhh.svg";
import user from "../../../assets/user.svg";
import call from "../../../assets/call.svg";
import location from "../../../assets/location.svg";
import Btn from "@/src/component/button/button";
import Footer from "@/src/component/footer/footer";
import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import BookFinish from "@/src/component/confirm-book/book";
const Confirmed = ({ params }) => {
  const style = {
    marginTop: "45px",
  };

  // const token = Cookies.get("token");

  // const getData = async () => {
  //   try {
  //     const response = await fetch(`Appointments/${params.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };
  // useLayoutEffect(() => {
  //   getData();
  // }, []);

  return (
    // <div className={styles.warapper}>
    //   <div className={styles.container}>
    //     <div className={styles.headerContainer}>
    //       <Link href={`/my-appointments`}>
    //         <Image src={back} alt="back" />
    //       </Link>

    //       <Link href={"/profile"}>
    //         <Image src={user} alt="user" />
    //       </Link>
    //     </div>

    //     <div className={styles.title}>Your appointment is confirmed</div>
    //   </div>
    //   <div className={styles.notification}>
    //     We will send you a reminder
    //     <br /> before your Appointment
    //   </div>
    //   <div className={styles.container}>
    //     <div className={styles.subTitle}>Your appointment details</div>
    //     <div className={styles.bookingContainer}>
    //       <div className={styles.treatmentContainer}>
    //         <div>Treatment:</div>
    //         <div className={styles.treatmentDeatils}>
    //           <div className={styles.treatmentName}>Laser hair removal</div>
    //           <div>Body area: Arms</div>
    //           <div>Device: Gentle Max Pro</div>
    //           <div>Sessions: 1</div>
    //         </div>
    //       </div>
    //       <div className={styles.practitionerContainer}>
    //         <div>Practitioner</div>
    //         <div>Dr. Basel Habayeb</div>
    //       </div>
    //       <div className={styles.practitionerContainer}>
    //         <div>Timing:</div>
    //         <div>Wed, 23 Jul at 2:00 PM</div>
    //       </div>
    //     </div>
    //     <div className={styles.totalContainer}>
    //       <div>
    //         Order total <span>(incl.tax)</span>
    //       </div>
    //       <div>AED 300</div>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       width: "100%",
    //       margin: "1rem auto",
    //       border: "solid 1px #E8F3F1",
    //     }}
    //   ></div>
    //   <div className={styles.container}>
    //     <div className={styles.subTitle}>Location</div>
    //     <Head>
    //       <title>My Map</title>
    //     </Head>
    //     <iframe
    //       width="100%"
    //       style={{ borderRadius: 20 }}
    //       referrerPolicy="no-referrer-when-downgrade"
    //       src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS`}
    //       allowFullScreen
    //       title="My Map"
    //     ></iframe>
    //     <div className={styles.call}>
    //       <Image src={call} alt="call" />
    //       <div>+971-5-000000000</div>
    //     </div>
    //     <div className={styles.call}>
    //       <Image src={location} alt="location" />
    //       <div>Dubai Marina,Dubai.</div>
    //     </div>
    //     <Link href={"/"}>
    //       <Btn title={"Back to Clinic Profile"} />
    //     </Link>
    //   </div>
    //   <Footer additiionalStyles={style} />
    // </div>
    <BookFinish bookingId={params.id} />
  );
};

export default Confirmed;
