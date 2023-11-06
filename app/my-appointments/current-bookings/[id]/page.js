"use client";
import React from "react";
import styles from "./current-bookings.module.css";
import Link from "next/link";
import Head from "next/head";
import Btn from "@/src/component/button/button";
import ModalBox from "../../../../src/component/modal/modal";
import backIcon from "../../assets/conhh.svg";
import user from "../../assets/user.svg";
import location from "../../assets/location.svg";
import phone from "../../assets/call.svg";
import Image from "next/image";
import api from "@/config-API/config-API";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Location from "@/src/component/location/location";
const CurrentBookings = ({ params }) => {
  const [data, setData] = useState({});
  const token = Cookies.get("token");
  const router = useRouter();
  const getAppointemntSpecific = async () => {
    try {
      const res = await api.get(`Appointments/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("----------------------", res.data);
      setData(res.data.responseData);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getAppointemntSpecific();
  }, []);

  return (
    <div className={styles.warpper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link href="#" onClick={() => router.back()}>
            <Image src={backIcon} className={styles.backIcon} alt="back" />
          </Link>

          <Link href={"/profile"}>
            <Image src={user} alt="user" />
          </Link>
        </div>

        <div className={styles.title}>{data?.startTime}</div>
        <Link
          href={{
            pathname: "/my-appointments/reschedule",
            query: {
              search: data?.id,
            },
          }}
        >
          <Btn title={"Reschedule appointment"} />
        </Link>

        <ModalBox
          content={"  Are you sure you want to cancel your appointment ?"}
          content2={
            "A cancellation fee of AED 100 may be charged as per the cancellation policy."
          }
        />

        <div className={styles.subTitle}>Your appointment details</div>
        <div className={styles.bookingContainer}>
          <div className={styles.treatmentContainer}>
            <div>Treatment:</div>
            <div className={styles.treatmentDeatils}>
              <div className={styles.treatmentName}>{data?.treatmentName}</div>
              <p>Body area: {data?.bodyArea}</p>
              <p>Device: {data?.device}</p>
              <p>Sessions: {data?.sessions}</p>
            </div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Practitioner</div>
            <div>{data?.practitionerName}</div>
          </div>
          <div className={styles.timingContainer}>
            <div>Timing:</div>
            <div>{data?.startTime}</div>
          </div>
        </div>
        <div className={styles.totalContainer}>
          <div>
            Order total <span>(incl.tax)</span>
          </div>
          <div>AED {data?.price}</div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "1rem auto",
          border: "solid 3px #E2E2E2",
        }}
      ></div>
      {/* <p>
        A fee of <b>AED {dataPreConfirm?.cancellationFee} </b>may be charged if
        you cancel within <b>{dataPreConfirm?.cancellationTimeFrame} hours</b>,
        or a fee of <b>AED {dataPreConfirm?.noShowFee}</b> may be charged if you
        miss your appointment.
      </p> */}
      <div className={styles.CancelTitle}>Cancellation policy</div>
      <div className={styles.cancellation}>
        A fee of <span>AED 100</span> may be charged if you cancel within{" "}
        <span>24 hours</span>, or a fee of <span>AED 300</span> may be charged
        if you miss your appointment.
      </div>
      <div
        style={{
          width: "100%",
          margin: "1rem auto",
          border: "solid 3px #E2E2E2",
        }}
      ></div>
      <div className={styles.container}>
        <div className={styles.subTitle}>Location</div>
        <Head>
          <title>My Map</title>
        </Head>

        <Location data={data} />
        {/* <div className={styles.call}>
          <Image src={phone} alt="phone" />
          <div>+971-5-000000000</div>
        </div>
        <div className={styles.call}>
          <Image src={location} alt="location" />
          <div>Dubai Marina,Dubai.</div>
        </div> */}
      </div>
    </div>
  );
};

export default CurrentBookings;
