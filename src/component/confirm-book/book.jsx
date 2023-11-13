"use client";
import React from "react";
import styles from "./styles/book.module.css";
import Link from "next/link";
import Image from "next/image";
import back from "./assets/image/conhh.svg";
import user from "./assets/image/user.svg";
import call from "./assets/image/call.svg";
import location from "./assets/image/location.svg";
import Location from "../location/location";
import Btn from "../button/button";
import Footer from "../footer/footer";
import { DataContext } from "@/context";
import { useContext } from "react";
import api from "@/config-API/config-API";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
const BookFinish = ({ bookingId }) => {
  const [dataAppointments, setDataAppointments] = useState({});
  const token = Cookies.get("token");

  const getAppointmentsSpecific = async () => {
    try {
      const response = await api.get(`Appointments/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("----------------", response.data.responseData);
      setDataAppointments(response.data.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAppointmentsSpecific();
  }, []);
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
              <div className={styles.treatmentName}>
                {dataAppointments?.treatmentName}
              </div>

              {dataAppointments.bodyArea ? (
                <div>
                  <p>Body area: {dataAppointments?.bodyArea}</p>
                  <p>Device: {dataAppointments?.device}</p>
                  <p>Sessions: {dataAppointments?.sessions}</p>
                </div>
              ) : dataAppointments.isConsultation === true ? (
                <p>consultation only</p>
              ) : (
                <p>default</p>
              )}
              
            </div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Practitioner</div>
            <div>{dataAppointments?.practitionerName}</div>
          </div>
          <div className={styles.timingContainer}>
            <div>Timing:</div>
            <div>{dataAppointments?.startTime}</div>
          </div>
        </div>
        <div className={styles.totalContainer}>
          <div>
            Order total <span>(incl.tax)</span>
          </div>
          <div>AED {dataAppointments?.price}</div>
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
      <div className={styles["container-location"]}>
        <Location data={dataAppointments} />
      </div>

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
