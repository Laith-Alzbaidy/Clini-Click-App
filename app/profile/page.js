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
import editIcon from "./assets/edit.svg";

const style = {
  marginTop: "45px",
};
const Profile = () => {
  const userDetails = JSON.parse(localStorage?.getItem("user-details")) || {};
  const router = useRouter();
  const [err, setErr] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [editActive, setEditActive] = useState(false);

  console.log(editActive);
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

  const updateProfile = async () => {
    try {
      const response = await api.put("Client/Update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Profile-update", response.data);
      if (response.data.isSuccess) {
        localStorage.setItem("user-details", JSON.stringify(formData));
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("my-appointments");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateProfile();
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
        <div className="d-flex align-items-center justify-content-between mt-3">
          <h1 className={styles.title}>My details</h1>
          <Image
            onClick={() => setEditActive(!editActive)}
            src={editIcon}
            className={styles.editIcon}
            alt="edit"
          />
        </div>

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
            disable={editActive}
          />
          <InputField
            type={"text"}
            placeholder={"Enter your Lastname"}
            icon={user}
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            disable={editActive}
          />
          <InputField
            type={"email"}
            placeholder={"Enter your Email"}
            icon={email}
            onChange={handleChange}
            name="email"
            value={formData.email}
            disable={editActive}
          />
          {/* {err && <div>{err}</div>} */}

          {!editActive && (
            <Btn title={"Manage my appointments"} type={"submit"} />
          )}
        </form>

        {!editActive ? (
          <div>
            <ModalBox
              content={" Are you sure you want to delete your account ?"}
              confirm={false}
              handleDeleteAccount={handleDeleteAccount}
            />

            <p
              style={{ textAlign: "center", fontWeight: 600, color: "#A75CFF" }}
            >
              or
            </p>
            <div onClick={logOut} className={styles.logout}>
              Logout
            </div>
          </div>
        ) : (
          <button className={styles.BtnSaveEdit} onClick={handleEdit}>
            Save
          </button>
        )}

        <Footer additiionalStyles={style} />
      </div>
    </div>
  );
};

export default Profile;
