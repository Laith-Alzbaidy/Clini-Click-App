import React from "react";
import styles from "./styles/payment.module.css";
import Link from "next/link";
import Head from "next/head";
import backIcon from "./assets/conhh.svg";
import user from "./assets/user.svg";
import location from "./assets/location.svg";
import phone from "./assets/call.svg";
import Image from "next/image";
// async function getData(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
const Payment = () => {
  //   const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Link href={"/categories"}>
          <Image src={backIcon} className={styles.backIcon} />
        </Link>

        <Link href={"/profile"}>
          <Image src={user} />
        </Link>
      </div>

      <div className={styles.title}>Wed, 23 July at 5:00 PM</div>

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
      <div
        style={{
          width: "80%",
          margin: "1rem auto",
          border: "solid 1px #E8F3F1",
        }}
      ></div>

      <div className={styles.subTitle}>Cancellation policy</div>
      <div className={styles.cancellation}>
        A fee of AED 100 may be charged if you cancel within 24 hours, or a fee
        of AED 300 may be charged if you miss your appointment.
      </div>
      <div
        style={{
          width: "80%",
          margin: "1rem auto",
          border: "solid 1px #E8F3F1",
        }}
      ></div>
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
        title="My Map"
      ></iframe>
      <div className={styles.call}>
        <Image src={phone} />
        <div>+971-5-000000000</div>
      </div>
      <div className={styles.call}>
        <Image src={location} />
        <div>Dubai Marina,Dubai.</div>
      </div>
    </div>
  );
};

export default Payment;
