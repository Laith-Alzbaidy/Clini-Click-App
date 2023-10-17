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

const Profile = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submission successful:", data);
        route.push('/')
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
    
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch("/api/deleteAccount", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
        console.log("Account deleted successfully");
        router.push("/");
      } else {
        console.error("Failed to delete account");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  };
  return (
    <>
      <Link href={"/sub-details"}>
        <Image src={backIcon} className={styles.backIcon} alt="back" />
      </Link>
      <div className={styles.title}>My details</div>

      <form onSubmit={handleSubmit}>
        <InputField
          onChange={handleChange}
          type={"text"}
          value={formData.firstName}
          placeholder={"Enter your Firstname"}
          icon={user}
          name={"firstName"}/>
        <InputField
          onChange={handleChange}
          type={"text"}
          value={formData.lastName}
          placeholder={"Enter your Lastname"}
          icon={user}
          name={"lastName"}/>
        <InputField
          onChange={handleChange}
          type={"email"}
          value={formData.email}
          placeholder={"Enter your Email"}
          icon={email}
          name={"email"}
          />

        <Btn title={"Manage my appointments"} type={"submit"} />
      </form>
      <>
        <div className={styles.deleteAccount} onClick={handleShow}>
          Delete your account
        </div>

        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Header closeButton className={styles.modal}></Modal.Header>

          <Modal.Body className={styles.modal}>
            <div className={styles.modalBody}>
              Are you sure you want to delete
              <br /> your account ?
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.modal}>
            <Button onClick={handleDeleteAccount} className={styles.yesButton}>
              Yes
            </Button>
            <Button onClick={handleClose} className={styles.noButton}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};

export default Profile;
