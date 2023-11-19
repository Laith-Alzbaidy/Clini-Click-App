import React from "react";
import { Button } from "react-bootstrap";
import styles from "./sticktButton.module.css";
import Image from "next/image";

const StickyButton = ({
  title,
  onClick,
  type,
  selectMethod,
  disabled,
  additionalStyles,
  content,
}) => {
  const currentStyles = {
    backgroundColor: "#fff",
    width: "100%",
    higth: "fit-content",
    position: "fixed",
    bottom: "0px",
    zIndex: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 0px",
  };

  const mix = { ...currentStyles, ...additionalStyles };

  return (
    <div className={styles.wrapper} style={mix}>
      {content && (
        <p className={styles.noPayment}>
          No payment will be taken until your appointment
        </p>
      )}
      <Button
        className={styles.btn}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {title}
        {selectMethod?.value && (
          <Image
            // width={100}
            // height={100}
            style={{ marginLeft: "10px" }}
            src={selectMethod.src}
            alt={selectMethod.value}
          />
        )}
      </Button>
    </div>
  );
};

export default StickyButton;
