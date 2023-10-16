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
import { NextResponse } from "next/server";
const Profile = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle the form submission here
    console.log("Form data submitted:", formData);
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
        <Image src={backIcon} className={styles.backIcon} />
      </Link>
      <div className={styles.title}>My details</div>

      <form onSubmit={handleSubmit}>
        <div className={styles.main}>
          <div className={styles.inputContainer}>
            <Image
              src={user}
              alt="Description of the image"
              width={24}
              height={24}
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.inputContainer}>
            <Image
              src={user}
              alt="Description of the image"
              width={24}
              height={24}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.inputContainer}>
            <Image
              src={email}
              alt="Description of the image"
              width={24}
              height={24}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
        </div>
        <Btn title={"Manage my appointments"} />
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
