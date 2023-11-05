"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import close from "./assets/image/close.svg";
import Image from "next/image";
import styles from "./styles/popup-payment.module.css";
import api from "@/config-API/config-API";
import apple from "./assets/image/apple.png";
import google from "./assets/image/google.png";
import credit from "./assets/image/credit-debit.png";
import payclinic from "./assets/image/pay-clinic.png";
import PopupCardPayment from "../popup-card-payment/popup-card-payment";
import Cookies from "js-cookie";
import { useEffect } from "react";
function PopupPayment({ selectMethod, setSelectMethod }) {
  const [show, setShow] = useState(false);
  const [showPaymentCardPopup, setShowPaymentCardPopup] = useState(false);
  const [paymentMethods, setpaymentMethods] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosePaymentCardPopup = () => {
    setShowPaymentCardPopup(false);
  };

  const handleRadioChange = (method) => {
    setSelectMethod(method);

    setTimeout(() => {
      handleClose(false);
      setShowPaymentCardPopup(true);
    }, 1000);
  };

  const token = Cookies.get("token");
  const getMethodPayment = async () => {
    try {
      const response = await api.get("/PaymentMethods", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("method", response.data.responseData);
      setpaymentMethods(response.data.responseData);
      // setData(response.data);
    } catch (error) {
      console.error("An error occurred:");
    }
  };

  useEffect(() => {
    getMethodPayment();
  }, []);

  // const paymentMethods = [
  //   {
  //     id: 1,
  //     // id: "ApplePay",
  //     value: "Apple Pay",
  //     src: apple,
  //     label: "Apple Pay",
  //   },
  //   {
  //     id: 2,
  //     // id: "GooglePay",
  //     value: "Google Pay",
  //     src: google,
  //     label: "Google Pay",
  //   },
  //   {
  //     id: 3,
  //     // id: "CreditDebit",
  //     value: "Credit/Debit card",
  //     src: credit,
  //     label: "Credit/Debit card",
  //   },
  //   {
  //     id: 4,
  //     // id: "PayInClinic",
  //     value: "Pay in clinic",
  //     src: payclinic,
  //     label: "Pay in clinic",
  //   },
  // ];

  return (
    <>
      {" "}
      <button
        onClick={() => {
          handleShow();
        }}
        id="choose-payment"
        className={styles["btn-choose-payment"]}
      >
        {/* Choose payment method */}
        {selectMethod?.value ? selectMethod.value : "Choose payment method"}
      </button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <div className={styles["container-body"]}>
            <div className={styles["header"]}>
              <h2 className={styles["title-header"]}>Pay with</h2>
              <Image src={close} onClick={handleClose} alt="close" />
            </div>
            <p className={styles["sub-title"]}>
              No payment will be taken until your appointment
            </p>

            <div className={styles["container-payed"]}>
              {/* <label className="w-100" htmlFor="ApplePay">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-3 align-items-center">
                    <Image width={50} height={40} src={apple} />
                    <span className={styles["text-lable"]}>Apple Pay</span>
                  </div>
                  <input
                    type="radio"
                    id="ApplePay"
                    value="Apple Pay"
                    checked={selectedValue === "Apple Pay"}
                    onChange={handleRadioChange}
                  />
                </div>
              </label>
              <label className="w-100" htmlFor="GooglePay">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-3 align-items-center">
                    <Image width={50} height={40} src={google} />
                    <span className={styles["text-lable"]}>Google Pay</span>
                  </div>
                  <input
                    type="radio"
                    id="GooglePay"
                    value="Google Pay"
                    checked={selectedValue === "Google Pay"}
                    onChange={handleRadioChange}
                  />
                </div>
              </label>
              <label className="w-100" htmlFor="CreditDebit">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-3 align-items-center">
                    <Image width={50} height={40} src={credit} />
                    <span className={styles["text-lable"]}>
                      Credit/Debit card
                    </span>
                  </div>
                  <input
                    type="radio"
                    id="CreditDebit"
                    value="Credit/Debit card"
                    checked={selectedValue === "Credit/Debit card"}
                    onChange={handleRadioChange}
                  />
                </div>
              </label>
              <label className="w-100" htmlFor="PayInClinic">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-3 align-items-center">
                    <Image width={50} height={40} src={payclinic} />
                    <span className={styles["text-lable"]}>Pay in clinic</span>
                  </div>
                  <input
                    type="radio"
                    id="PayInClinic"
                    value="Pay in clinic"
                    checked={selectedValue === "Pay in clinic"}
                    onChange={handleRadioChange}
                  />
                </div>
              </label> */}

              {paymentMethods?.map((method) => (
                <label className="w-100" key={method.id} htmlFor={method.id}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex gap-3 align-items-center">
                      {/* <Image
                        width={50}
                        height={40}
                        src={method?.icon}
                        alt={method.name}
                      /> */}
                      <span className={styles["text-lable"]}>
                        {method?.name}
                      </span>
                    </div>
                    <input
                      type="radio"
                      id={method.id}
                      value={method.name}
                      checked={selectMethod.name === method.name}
                      onChange={() => {
                        handleRadioChange(method);
                        // console.log(method);
                      }}
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <PopupCardPayment
        show={showPaymentCardPopup}
        onHide={handleClosePaymentCardPopup}
      />
    </>
  );
}

export default PopupPayment;
