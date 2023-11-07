import React from "react";
import { Button } from "react-bootstrap";
import styles from "./button.module.css";

const Btn = ({ title, margin, onClick, type , disabled}) => {
  return (
    <Button
      className={styles["btn"]}
      onClick={onClick}
      style={{ margin: margin }}
      type={type}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default Btn;
