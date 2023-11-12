"use client";
import React, { useState, useEffect } from "react";
import styles from "./reschedule.module.css";
import Link from "next/link";
import back from "../assets/conhh.svg";
import user from "../assets/user.svg";
import Image from "next/image";
import Btn from "@/src/component/button/button";
import { useRouter } from "next/navigation";
import Footer from "@/src/component/footer/footer";
import DateSelector from "@/src/component/date/DateSelector";
import TimeSelector from "@/src/component/time/TimeSelector";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
const token = Cookies.get("token");
const date = new Date();
const monthNow = date.toLocaleString("default", { month: "long" });
const style = {
  marginTop: "45px",
};
const Reschedule = ({ searchParams }) => {
  const id = searchParams.search;
  const [selectedTime, setSelectedTime] = useState(null);
  const [dateq, setDateq] = useState(null);
  const [data, setData] = useState();
  const [practitioner, setPractitioner] = useState(null);
  const [treatmentId, setTreatmentId] = useState(null);
  const [availability, setAvailability] = useState([]);

  const getAppointemntSpecific = async () => {
    try {
      const res = await api.get(`Appointments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setData(res.data.responseData);
      setPractitioner(res.data.responseData.practitionerId);
      setTreatmentId(res.data.responseData.treatmentId);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getAppointemntSpecific();
  }, []);

  const router = useRouter();

  const fetchAvailableHours = async (dateq) => {
    try {
      const response = await api.get(
        `PractitionerAvailability?practitionerId=${practitioner}&treatmentId=${treatmentId}&date=${dateq}`
      );
      const data = response.data.responseData;
      setAvailability(data);
      console.log(data, "wiwwwq");
    } catch (error) {
      console.error("Error fetching available hours:", error);
    }
  };

  const handleConfirm = async () => {
    try {
      const res = await api.put(
        `Reschedule/${id}`,
        {
          appointmentId: id,
          timeSlotId: selectedTime,
          date: dateq,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data, "ddd");
      router.push(`/my-appointments/reschedule/confirmed/${id}`);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    handleConfirm();
  }, []);

  return (
    <div className={styles.warapper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link href="#" onClick={() => router.back()}>
            <Image src={back} className={styles.backIcon} />
          </Link>

          <Link href={"/profile"}>
            <Image src={user} />
          </Link>
        </div>

        <div className={styles.title}>Reschedule appointment</div>

        <DateSelector
          setDateq={setDateq}
          fetchAvailableHours={fetchAvailableHours}
          isNewAppointment={false}
        />
      </div>
      <div
        style={{
          width: "100%",
          margin: "1rem auto",
          border: "solid 1px #E8F3F1",
        }}></div>
      <div className={styles.container}>
        <TimeSelector
          availability={availability}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          practitioner={false}
        />

        <Btn title={"confirm"} onClick={handleConfirm} />
      </div>
      <Footer additiionalStyles={style} />
    </div>
  );
};

export default Reschedule;
