import React from "react";
import { Button } from "react-bootstrap";
import styles from "./button.module.css";

const Btn = ({ title, marginTop, onClick, type }) => {
  return (
    <Button
      className={styles["btn"]}
      onClick={onClick}
      style={{ marginTop: marginTop }}
      type={type}
    >
      {title}
    </Button>
  );
};

export default Btn;
