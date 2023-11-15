"use client";
import React, { useEffect, useState } from "react";
import OTPInput from "otp-input-react";
import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/otb.module.css";
import { usePathname, useRouter } from "next/navigation";
import api from "@/config-API/config-API";
import ErrorModal from "../modal-verfy/modal-verfy";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";

const OTB = () => {
  // Initialize the router and state variables
  const pathname = usePathname();

  console.log(pathname, pathname, pathname, pathname);
  const searchParams = useSearchParams();
  console.log(searchParams);
  //params Id
  const treatmentId = searchParams.get("treatmentId");
  const practitionerId = searchParams.get("practitionerId");
  const timeSlotId = searchParams.get("timeSlotId");
  const date = searchParams.get("date");

  const router = useRouter();
  const [otp, setOTP] = useState(""); // State for OTP input
  const [timer, setTimer] = useState(0);
  const [openTimer, setOpenTimer] = useState(false);
  const [errorVerfy, setErrorVerfy] = useState("");
  const [show, setShow] = useState(true);

  const phone = localStorage.getItem("phone") || "";

  // handle OTP verification
  // const handleVerification = async (otpValue) => {
  //   const updatedOTPValues = [...otpValue];
  //   setOTP(otpValue);

  //   const finalOTP = updatedOTPValues.join("");

  //   if (updatedOTPValues.length < 4) {
  //     return;
  //   }

  //   try {
  //     // Send a request to the backend API to verify the OTP
  //     const response = await api.post("OTP/Verify", {
  //       phoneNumber: phone,
  //       code: finalOTP,
  //     });

  //     console.log("--------------", response.data.responseData);

  //     const token = response.data.responseData.token;
  //     if (response.data.isSuccess) {
  //       if (response.data.responseData.isConfigured) {
  //         if (!date || !timeSlotId || !practitionerId || !treatmentId) {
  //           router.push("/");
  //         } else {
  //           router.push(
  //             `/payment?treatmentId=${treatmentId}&practitionerId=${practitionerId}&timeSlotId=${timeSlotId}&date=${date}`
  //           );
  //         }
  //       } else {
  //         if (!date || !timeSlotId || !practitionerId || !treatmentId) {
  //           router.push(`/user-details`);
  //         } else {
  //           router.push(
  //             `/user-details?treatmentId=${treatmentId}&practitionerId=${practitionerId}&timeSlotId=${timeSlotId}&date=${date}`
  //           );
  //         }

  //         setOTP("");
  //       }
  //       //set token in cookies
  //       Cookies.set("token", token, {
  //         expires: 24,
  //         secure: true,
  //       });
  //     }
  //   } catch (error) {
  //     setErrorVerfy(error.response.data.responseData.message);
  //     setOTP("");
  //     setShow(true);
  //   }
  // };

  const handleVerification = async (otpValue) => {
    const updatedOTPValues = [...otpValue];
    setOTP(otpValue);

    const finalOTP = updatedOTPValues.join("");

    if (updatedOTPValues.length < 4) {
      return;
    }

    try {
      const response = await api.post("OTP/Verify", {
        phoneNumber: phone,
        code: finalOTP,
      });

      console.log("--------------", response.data.responseData);

      const { isSuccess, responseData } = response.data;
      const token = responseData.token;

      if (isSuccess) {
        const redirectToCorrectPage = () => {
          if (!date || !timeSlotId || !practitionerId || !treatmentId) {
            router.push("/");
          } else {
            const queryParams = `treatmentId=${treatmentId}&practitionerId=${practitionerId}&timeSlotId=${timeSlotId}&date=${date}`;
            const path = responseData.isConfigured
              ? "/payment"
              : "/user-details";
            router.push(`${path}?${queryParams}`);
          }
        };

        redirectToCorrectPage();

        Cookies.set("token", token, {
          expires: 1 / 24, // 1
          secure: true,
        });

        if (!responseData.isConfigured) {
          setOTP("");
        }
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.responseData?.message || "An error occurred";
      setErrorVerfy(errorMessage);
      setOTP("");
      setShow(true);
    }
  };

  // Api to resend OTP
  const resendOTP = async () => {
    try {
      const response = await api.post("OTP/Resend", {
        phoneNumber: phone,
      });
      setOpenTimer(true);
      setTimer(30);

      console.log("Resend", response.data.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  // UseEffect hook to manage the countdown timer
  useEffect(() => {
    let interval;
    if (openTimer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      if (timer < 0) {
        setOpenTimer(false);
      }
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className={`container1 ${styles["holder"]}`}>
      <ClosePrev close="/" />
      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 2 of 3</p>
        <h1 className={styles["title"]}>Enter the OTP</h1>
      </div>
      <div className={styles["container-text-otp"]}>
        <p className={styles["text-otp"]}>
          We sent you a WhatsApp message with the OTP to {phone}.
        </p>
      </div>
      <div className={styles["container-input"]}>
        {/* OTP input component */}
        <OTPInput
          value={otp}
          onChange={(value) => {
            handleVerification(value);
          }}
          autoFocus
          OTPLength={4}
          otpType="number"
          className={styles["container-input"]}
        />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {/* Display timer if it's open */}
        {openTimer && <span className={styles["timer"]}>{timer}</span>}
        <button
          onClick={resendOTP}
          disabled={openTimer}
          className={styles["not-receive"]}
        >
          I did not receive the OTP
        </button>
      </div>
      {show && errorVerfy && (
        <ErrorModal show={show} setShow={setShow} errorVerfy={errorVerfy} />
      )}{" "}
    </div>
  );
};

export default OTB;
