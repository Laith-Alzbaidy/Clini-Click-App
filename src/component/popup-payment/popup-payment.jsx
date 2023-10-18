"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import close from "./assets/image/close.svg";
import Image from "next/image";
import styles from "./styles/popup-payment.module.css";

import apple from "./assets/image/apple.png";
import google from "./assets/image/google.png";
import credit from "./assets/image/credit-debit.png";
import payclinic from "./assets/image/pay-clinic.png";
function PopupPayment() {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Apple Pay"); // Set the default value here

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        id="choose-payment"
        name="choose-payment"
        placeholder="Choose payment method"
        required
        className={styles["input-choose-payment"]}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <div className={styles["container-body"]}>
            <div className={styles["header"]}>
              <h2 className={styles["title-header"]}>Pay with</h2>
              <Image src={close} onClick={handleClose} />
            </div>
            <p className={styles["sub-title"]}>
              No payment will be taken until your appointment
            </p>

            <div className={styles["container-payed"]}>
              <label className="w-100" htmlFor="ApplePay">
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
              </label>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopupPayment;
