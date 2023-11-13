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
import PopupPrivacy from "../view-desktop/popup-privacy/popup-privacy-payment";
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
    treatmentId: searchParams.get("treatmentId"),
    practitionerId: searchParams.get("practitionerId"),
    timeSlotId: searchParams.get("timeSlotId"),
    date: searchParams.get("date"),
    // promoCode: offer || "",
    paymentId: selectMethod.id,
  };

  useLayoutEffect(() => {
    preConfirm();
  }, []);

  //preconfirm data payment

  const preConfirm = async () => {
    try {
      const response = await api.get(
        `Appointments/preconfirm?treatmentId=${data.treatmentId}&practitionerId=${data.practitionerId}&timeslotId=${data.timeSlotId}&date=${data.date}`,
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
        console.log(
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          response.data.responseData.id
        );
        setDataPayment(response.data.responseData);
        router.push(`/payment/${response.data.responseData.id}`);
      }
    } catch (err) {
      console.log("err ", err);
    }
  };

  const handleConfirm = () => {
    postPayment(selectMethod.id);
    console.log(dataPayment);
  };

  return (
    <div className={styles["holder"]}>
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

      <div className={styles["container1"]}>
        <div className={styles.subTitle}>Pay with</div>
        <PopupPayment
          selectMethod={selectMethod}
          setSelectMethod={setSelectMethod}
        />
        <p className={styles["text-left"]}>
          No payment will be taken until your appointment
        </p>
      </div>

      <div className={styles["line"]}></div>

      <div className={styles["container1"]}>
        <div className={styles.subTitle}>Cancellation policy</div>
        <p className={styles["text-cancellation"]}>
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
            <div className={styles["slide-up-privacy"]}>
              <SlideUpPrivacy title="T&Cs" data={dataPreConfirm.policy} />
            </div>
            <PopupPrivacy title="T&Cs" data={dataPreConfirm.policy} /> and
            <div className={styles["slide-up-privacy"]}>
              <SlideUpPrivacy
                title="Privacy Policy"
                data={dataPreConfirm.terms}
              />
            </div>{" "}
            <PopupPrivacy title="Privacy Policy" data={dataPreConfirm.terms} />{" "}
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
