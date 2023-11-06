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
import Footer from "@/src/component/footer/footer";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
// import { useLayoutEffect } from "react";
// import { useEffect } from "react";
const style = {
  marginTop: "45px",
};
const Profile = () => {
  const userDetails = JSON.parse(localStorage.getItem("user-details"));
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    firstName: userDetails?.firstName || "",
    lastName: userDetails?.lastName || "",
    email: userDetails?.email || "",
  });

  const token = Cookies.get("token");
  //handle input to get value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile();
  };
  const updateProfile = async () => {
    try {
      const response = await api.put("Client/Update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.isSuccess) {
        console.log("Profile-update", response.data);
        router.push("/my-appointments");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const logOut = () => {
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  };
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
      <Link href={"/"}>
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
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <InputField
          type={"text"}
          placeholder={"Enter your Lastname"}
          icon={user}
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <InputField
          type={"email"}
          placeholder={"Enter your Email"}
          icon={email}
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        {err && <div>{err}</div>}
        <Btn title={"Manage my appointments"} type={"submit"} />
      </form>
      <>
        <div className={styles.deleteAccount} onClick={handleShow}>
          Delete your account
        </div>
        <p style={{ textAlign: "center", fontWeight: 600, color: "#A75CFF" }}>
          or
        </p>
        <div onClick={logOut} className={styles.logout}>
          Logout
        </div>

        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header
            closeButton
            className={styles.modalHeader}
          ></Modal.Header>

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
      <Footer additiionalStyles={style} />
    </div>
  );
};

export default Profile;
