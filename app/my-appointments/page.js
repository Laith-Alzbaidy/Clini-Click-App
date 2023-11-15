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
import api from "@/config-API/config-API";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
const style = {
  marginTop: "45px",
};

const MyAppointments = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  const token = Cookies.get("token");

  //get data MyAppointments

  // console.log("FilterData", FilterData);
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
        <Link href="#" onClick={() => router.back()}>
          <Image src={backIcon} className={styles.backIcon} alt="back" />
        </Link>

        <Link href={"/profile"}>
          <Image src={user} alt="user" className={styles.user} />
        </Link>
      </div>
      <div className={styles.desktopContainer}>
      <div className={styles.title}>My appointments</div>

      <div className={styles.subTitle}>Upcoming appointments</div>
      <div className={styles.main}>
        {data && data.length > 0 ? (
          data
            .filter((elem) => elem.isUpcoming === true)
            .map((appointment, index) => (
              <Link
                href={`my-appointments/current-bookings/${appointment?.id}`}
                className={styles.link}
                key={appointment.id}>
                <div className={styles.cardContainer}>
                  <div className={styles.childContainer}>
                    <Image
                      src={image}
                      className={styles.cardImage}
                      alt="image"
                    />
                    <div className={styles.details}>
                      <div>{appointment?.startTime}</div>
                      <div>{appointment?.treatmentName}</div>
                      <div>{appointment?.id}</div>
                      <div>
                        {appointment.status === 1 && "Confirmed"}
                        {appointment.status === 5 && "Complete"}
                        {(appointment.status === 2 ||
                          appointment.status === 3 ||
                          appointment.status === 4) &&
                          "Cancel"}
                      </div>
                    </div>
                  </div>
                  <Image src={left} alt="left" />
                </div>
              </Link>
            ))
        ) : (
          <div className={styles.noAppointment}>No appointments yet</div>
        )}
      </div>

      <div className={styles.subTitle}>Past appointments</div>

      <div className={styles.main}>
        {data && data.length > 0 ? (
          data
            .filter((elem) => elem.isUpcoming === false)
            .map((appointment, index) => (
              <Link
                href={`my-appointments/past-bookings/${appointment?.id}`}
                className={styles.link}
                key={index}>
                <div className={styles.cardContainer}>
                  <div className={styles.childContainer}>
                    <Image src={image} className={styles.cardImage} alt="img" />
                    <div className={styles.details}>
                      <div>{appointment?.startTime}</div>
                      <div>{appointment?.treatmentName}</div>
                      <div>{appointment?.id}</div>
                      <div>
                        {appointment.status === 1 && "Confirmed"}
                        {appointment.status === 5 && "Complete"}
                        {(appointment.status === 2 ||
                          appointment.status === 3 ||
                          appointment.status === 4) &&
                          "Cancel"}
                      </div>
                    </div>
                  </div>
                  <Image src={left} alt="left" />
                </div>
              </Link>
            ))
        ) : (
          <div className={styles.noAppointment}>No past appointments</div>
        )}
      </div>

      <Footer additiionalStyles={style} />
    </div>
   </div>
  );
};

export default MyAppointments;
