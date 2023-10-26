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

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CurrentBookings = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.warpper}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link href={"/my-appointments"}>
            <Image src={backIcon} className={styles.backIcon} alt="back" />
          </Link>

          <Link href={"/profile"}>
            <Image src={user} alt="user" />
          </Link>
        </div>

        <div className={styles.title}>Wed, 23 July at 5:00 PM</div>
        <Link
          href={{
            pathname: "/my-appointments/reschedule",
            query: {
              search: data.id,
            },
          }}>
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
              <div className={styles.treatmentName}>Laser hair removal</div>
              <p>Body area: Arms</p>
              <p>Device: Gentle Max Pro</p>
              <p>Sessions: 1</p>
            </div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Practitioner</div>
            <div>Dr. Basel Habayeb</div>
          </div>
          <div className={styles.timingContainer}>
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
          border: "solid 3px #E2E2E2",
        }}></div>

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
        }}></div>
      <div className={styles.container}>
        <div className={styles.subTitle}>Location</div>
        <Head>
          <title>My Map</title>
        </Head>
        <iframe
          width="100%"
          style={{ borderRadius: 20 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS`}
          allowFullScreen
          title="My Map"></iframe>
        <div className={styles.call}>
          <Image src={phone} alt="phone" />
          <div>+971-5-000000000</div>
        </div>
        <div className={styles.call}>
          <Image src={location} alt="location" />
          <div>Dubai Marina,Dubai.</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBookings;
