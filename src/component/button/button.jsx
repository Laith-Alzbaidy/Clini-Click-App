import React from "react";
import { Button } from "react-bootstrap";
import styles from "./button.module.css";

const Btn = ({ title, marginTop }) => {
  return (
    <Button className={styles["btn"]} style={{ marginTop: marginTop }}>
      {title}
    </Button>
  );
};

export default Btn;
