"use client";
import React, { useEffect, useState } from "react";
import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/payment.module.css";
import promocode from "./assets/image/promo-code.svg";
import Image from "next/image";
import call from "./assets/image/call.svg";
import StickyButton from "../stickyButton/stickyButton";
import PopupPayment from "../popup-payment/popup-payment";
import { useRouter } from "next/navigation";
import { useSearchParams, redirect, usePathname } from "next/navigation";
import api from "@/config-API/config-API";
import Cookies from "js-cookie";
import SlideUpPrivacy from "./modal-privacy/modal.privacy";
import { useLayoutEffect } from "react";

const Payment = () => {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const router = useRouter();
  const [selectMethod, setSelectMethod] = useState({}); // Set the default value here
  const [offer, setOffer] = useState("");
  const [dataPayment, setDataPayment] = useState([]);
  const [dataPreConfirm, setDataPreConfirm] = useState({});
  const token = Cookies.get("token");

  const data = {
    clinicName: "AbdullahClinic",
    treatmentId: searchParams.get("treatmentId") || 57,
    practitionerId: searchParams.get("practitionerId") || 2,
    timeSlotId: searchParams.get("timeSlotId") || 10,
    date: searchParams.get("date") || "2023-11-10",
    // promoCode: offer || "",
    paymentId: selectMethod.id,
  };

  useLayoutEffect(() => {
    if (!token) {
      if (pathname == "/payment") {
        redirect("/");
      }
    }
    preConfirm();
  }, []);

  //preconfirm data payment

  const preConfirm = async () => {
    try {
      const response = await api.get(
        "Appointments/preconfirm?treatmentId=56&practitionerId=1&timeslotId=25&date=11-11-2023",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setDataPreConfirm(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {}, []);
  //confirm payment API
  const postPayment = async () => {
    // console.log(data);
    console.log("data", data);
    try {
      const response = await api.post("/Appointments", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.isSuccess) {
        console.log(response.data.responseData.id);
        setDataPayment(response.data.responseData);
        router.push(`/payment/${response.data.responseData.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirm = () => {
    postPayment(selectMethod.id);
    console.log(dataPayment);
  };

  return (
    <div>
      <div className={styles["nav-header"]}>
        <ClosePrev close="/" back="/user-details" />
      </div>
      <div className={styles["container1"]}>
        <div className={styles["header"]}>
          <p className={styles["step"]}>Step 3 of 3</p>
          <h1 className={styles["title"]}>Confirm and book</h1>
        </div>

        <form>
          <label htmlFor="promo-code">
            <div className={styles.subTitle}>offers</div>
          </label>
          <div className={styles.inputContainer}>
            <Image
              className={styles["icon-promo"]}
              src={promocode}
              alt="icon code"
              width={29}
              height={18}
            />
            <input
              type="text"
              id="promo-code"
              name="promoCode"
              placeholder="Enter promo code"
              required
              onChange={(e) => setOffer(e.target.value)}
              className={styles["input-promocode"]}
            />
          </div>
        </form>
      </div>

      <div className={styles["line"]}></div>

      <div className={styles["container1"]}>
        <div className={styles.subTitle}>Your appointment details</div>
        <div className={styles.bookingContainer}>
          <div className={styles.treatmentContainer}>
            <div>Treatment:</div>
            <div className={styles.treatmentDeatils}>
              <div className={styles.treatmentName}>
                {dataPreConfirm?.treatment?.name}
              </div>
              <div>Body area: {dataPreConfirm?.treatment?.bodyArea}</div>
              <div>Device: {dataPreConfirm?.treatment?.device}</div>
              <div>Sessions: {dataPreConfirm?.treatment?.sessions}</div>
            </div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Practitioner</div>
            <div>{dataPreConfirm?.practitioner}</div>
          </div>
          <div className={styles.timingContainer}>
            <div>Timing:</div>
            <div>{dataPreConfirm?.timing}</div>
          </div>
        </div>
        <div className={styles.totalContainer}>
          <div>
            Order total <span>(incl.tax)</span>
          </div>
          <div>AED {dataPreConfirm?.total}</div>
        </div>
      </div>

      <div className={styles["line"]}></div>

      {/* <div>
        <div className={styles.subTitle}>Location</div>

        <iframe
          width="100%"
          style={{ borderRadius: 20 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS`}
          allowFullScreen
          title="My Map"
        ></iframe>
        <div className={styles["container-icon"]}>
          <div className={styles["content-icon"]}>
            <Image
              width={24}
              height={24}
              src={call}
              className={styles["icon"]}
              alt="call"
            />
            <p className={styles["text-icon"]}>+971-5-000000000</p>
          </div>
          <div className={styles["content-icon"]}>
            <Image
              width={24}
              height={24}
              src={location}
              className={styles["icon"]}
              alt="location"
            />
            <p className={styles["text-icon"]}>Dubai Marina, Dubai</p>
          </div>
        </div>
      </div> */}

      {/* <div className={styles["line"]}></div> */}

      <div className={styles["container1"]}>
        <div className={styles.subTitle}>Pay with</div>
        <PopupPayment
          selectMethod={selectMethod}
          setSelectMethod={setSelectMethod}
        />
        <p className="text-left">
          No payment will be taken until your appointment
        </p>
      </div>

      <div className={styles["line"]}></div>

      <div className={styles["container1"]}>
        <div className={styles.subTitle}>Cancellation policy</div>
        <p>
          A fee of <b>AED {dataPreConfirm?.cancellationFee} </b>may be charged
          if you cancel within{" "}
          <b>{dataPreConfirm?.cancellationTimeFrame} hours</b>, or a fee of{" "}
          <b>AED {dataPreConfirm?.noShowFee}</b> may be charged if you miss your
          appointment.
        </p>
        {/* <div dangerouslySetInnerHTML={{ __html: dataPreConfirm.policy }}></div> */}
      </div>

      <div className={styles["line"]}></div>

      <div className={styles["container1"]}>
        <div className={styles["container-privacy"]}>
          <p className={styles["privacy"]}>
            By selecting the button below, I agree to the{" "}
            <SlideUpPrivacy title="T&Cs" data={dataPreConfirm.policy} /> and{" "}
            <SlideUpPrivacy
              title="Privacy Policy"
              data={dataPreConfirm.terms}
            />{" "}
            and confirm that I am 18 years or older
          </p>
        </div>

      </div>
        <StickyButton
          title={`${"Book appointment"}`}
          selectMethod={selectMethod}
          marginTop="20"
          onClick={handleConfirm}
        />
    </div>
  );
};

export default Payment;
