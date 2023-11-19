"use client";
import React, { useState, useEffect } from "react";
import styles from "./profile.module.css";
import Link from "next/link";
import Btn from "../../src/component/button/button";
import Image from "next/image";
import user from "./assets/user.svg";
import email from "./assets/email.svg";
import backIcon from "./assets/back.svg";
import { useRouter } from "next/navigation";
import InputField from "@/src/component/inputField/inputField";
import Popup from "reactjs-popup";
import Footer from "@/src/component/footer/footer";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
import ModalBox from "@/src/component/modal/modal";
import { Divider } from "@mui/material";
const style = {
  marginTop: "45px",
};
const Profile = () => {
  // window.onbeforeunload = function () {
  //   return "Are you sure you want to leave this page?";
  // };
  const userDetails = JSON.parse(localStorage?.getItem("user-details")) || {};
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(formData);
  };

  window.addEventListener("beforeunload", function (e) {
    // Cancel the event
    e.preventDefault();
    // Chrome requires returnValue to be set
    e.returnValue = "";

    // Display a confirmation message
    var confirmationMessage = "Do you really want to leave?";
    e.returnValue = confirmationMessage; // Standard for most browsers
    return confirmationMessage; // For some older browsers
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile();
    router.push("my-appointments");
  };

  const ConfirmationDialog = () => {
    useEffect(() => {
      const handleBeforeUnload = (e) => {
        const confirmationMessage = "Do you really want to leave?";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }, []);

    return null;
  };

  ConfirmationDialog();
  const updateProfile = async () => {
    try {
      const response = await api.put("Client/Update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.isSuccess) {
        console.log("Profile-update", response.data);
        localStorage.setItem("user-details", JSON.stringify(formData));
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

  const DeleteAccount = async () => {
    try {
      const response = await api.delete("Users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("DeleteAccount", response.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleDeleteAccount = async () => {
    setShow(false);
    setShowPopup(true);
    DeleteAccount();
    Cookies.remove("token");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className={styles["warapper"]}>
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
          <ModalBox
            content={" Are you sure you want to delete your account ?"}
            confirm={false}
            handleDeleteAccount={handleDeleteAccount}
          />
          <p style={{ textAlign: "center", fontWeight: 600, color: "#A75CFF" }}>
            or
          </p>
          <div onClick={logOut} className={styles.logout}>
            Logout
          </div>
        </>
        <Footer additiionalStyles={style} />
      </div>
    </div>
  );
};

export default Profile;
