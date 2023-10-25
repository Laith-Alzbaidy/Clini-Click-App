"use client";
import React, { useState } from "react";
import styles from "./profile.module.css";
import Link from "next/link";
import Btn from "../../src/component/button/button";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import user from "./assets/user.svg";
import email from "./assets/email.svg";
import backIcon from "./assets/back.svg";
import { useRouter } from "next/navigation";
import InputField from "@/src/component/inputField/inputField";
import Popup from "reactjs-popup";
import "./modal.css";

const Profile = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push("/my-appointments");
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;

    // try {
    //   const response = await fetch("/api/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ firstName, lastName, email }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log("Form submission successful:", data);
    //     router.push("/my-appointments");
    //   }
    // } catch (error) {
    //   setErr(true);
    // }
  };

  const handleDeleteAccount = async () => {
    setShow(false);
    setShowPopup(true);
    setTimeout(() => {
      router.push("/");
    }, 2000);

    // try {
    //   const response = await fetch("/api/deleteAccount", {
    //     method: "DELETE",
    //     headers: {
    //       Authorization: `Bearer ${userToken}`,
    //     },
    //   });

    //   if (response.ok) {
    //     console.log("Account deleted successfully");

    //     } else {
    //       console.error("Failed to delete account");
    //     }
    //   } catch (error) {
    //     console.error("Error deleting account:", error);
    //   }
  };
  return (
    <div className={styles.costumContainer}>
      <Link href={"/sub-details"}>
        <Image src={backIcon} className={styles.backIcon} alt="back" />
      </Link>
      <div className={styles.title}>My details</div>

      <Popup open={showPopup} closeOnDocumentClick={false}>
        {(close) => (
          <div className={styles.popup}>
            <p>Your account has been deleted successfully.</p>
          </div>
        )}
      </Popup>
      <form onSubmit={handleSubmit}>
        <InputField
          type={"text"}
          placeholder={"Enter your Firstname"}
          icon={user}
        />
        <InputField
          type={"text"}
          placeholder={"Enter your Lastname"}
          icon={user}
        />
        <InputField
          type={"email"}
          placeholder={"Enter your Email"}
          icon={email}
        />
        {err && <div>{err}</div>}
        <Btn title={"Manage my appointments"} type={"submit"} />
      </form>
      <>
        
          <div className={styles.deleteAccount} onClick={handleShow}>
            Delete your account
          </div>
          <p style={{textAlign:"center" , fontWeight:600 , color:"#A75CFF" }}>or</p>
          <div className={styles.logout}>Logout</div>
       

        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header
            closeButton
            className={styles.modalHeader}></Modal.Header>

          <Modal.Body className={styles.modal}>
            <div className={styles.modalBody}>
              Are you sure you want to delete
              <br /> your account ?
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.modalFooter}>
            <Button onClick={handleDeleteAccount} className={styles.yesButton}>
              Yes
            </Button>
            <Button onClick={handleClose} className={styles.noButton}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Profile;
