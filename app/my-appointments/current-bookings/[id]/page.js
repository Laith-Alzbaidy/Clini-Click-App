"use client";
import React from "react";
import styles from "./current-bookings.module.css";
import Link from "next/link";
import Btn from "@/src/component/button/button";
import ModalBox from "../../../../src/component/modal/modal";
import backIcon from "../../assets/conhh.svg";
import user from "../../assets/user.svg";
import Image from "next/image";
import api from "@/config-API/config-API";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Location from "@/src/component/location/location";
const CurrentBookings = ({ params }) => {
  const [data, setData] = useState({});
  const [cancelData, setCancelData] = useState({});
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
      console.log("Error fetching appointment data:", err);
    }
  };
  
  useEffect(() => {
    getAppointemntSpecific();
  }, [params.id, token]);

  const handleCancelAppoinment = async () => {
    console.log("params", params);
    try {
      const res = await api.delete(`Appointments/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data, "Appoinment cancelled");
      setCancelData(res.data.responseData);
      router.push('/my-appointments')

    } catch (err) {
      console.log("Error occurred while canceling", err);
    }
  };

  useEffect(() => {
    getAppointemntSpecific();
  }, [params.id, token]);

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

        <div className={styles.title}>{data?.timing}</div>
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
          handleCancelAppoinment={handleCancelAppoinment}
          confirm={true}
        />

        <div className={styles.subTitle}>Your appointment details</div>
        <div className={styles.bookingContainer}>
          <div className={styles.treatmentContainer}>
            <div>Treatment:</div>
            <div className={styles.treatmentDeatils}>
              <div className={styles.treatmentName}>{data?.treatmentName}</div>
              {data.bodyArea ? (
                <div>
                  <p>Body area : {data?.bodyArea}</p>
                  <p>Device : {data?.device}</p>
                  <p>Sessions : {data?.sessions}</p>
                </div>
              ) : data.isConsultation === true ? (
                <p>consultation only</p>
              ) : (
                <p>default</p>
              )}
            </div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Practitioner</div>
            <div>{data?.practitionerName}</div>
          </div>
          <div className={styles.timingContainer}>
            <div>Timing:</div>
            <div>{data?.timing}</div>
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

      <div className={styles.CancelTitle}>Cancellation policy</div>
      <div className={styles.cancellation}>
        <p>
          A fee of <b>AED {data?.cancellationFee} </b> may be charged if you
          cancel within <b> {data?.cancellationTimeFrame} hours</b>, or a fee of{" "}
          <b>AED {data?.noShowFee}</b> may be charged if you miss your
          appointment.
        </p>
      </div>
      <div
        style={{
          width: "100%",
          margin: "1rem auto",
          border: "solid 3px #E2E2E2",
        }}
      ></div>
      <div className={styles.container}>
        <Location data={data} />
      </div>
    </div>
  );
};

export default CurrentBookings;
