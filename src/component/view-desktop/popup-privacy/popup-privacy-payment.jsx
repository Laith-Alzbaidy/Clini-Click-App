"use client";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import close from "./assets/image/close.svg";
import styles from "./styles/popup-privacy.module.css";
import Image from "next/image";

function PopupPrivacy({ title, data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "750px",
    hight: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    border: "none",
    outline: "none",
    borderRadius: "20px",
  };

  return (
    <>
      <span className={styles["privacy"]} onClick={handleOpen}>
        <b>{title}</b>
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles["header"]}>
            {title == "T&Cs" ? (
              <h1 className={styles["title-header"]}>Terms</h1>
            ) : (
              <h1 className={styles["title-header"]}>{title}</h1>
            )}
            <Image
              className="close-btn"
              src={close}
              onClick={handleClose}
              alt="close"
            />
          </div>

          <div
            className={styles["content-data-priv"]}
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        </Box>
      </Modal>
    </>
  );
}

export default PopupPrivacy;
