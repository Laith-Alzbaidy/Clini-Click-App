import React from "react";
import { Button } from "react-bootstrap";
import styles from "./button.module.css";

const Btn = ({ title, marginTop , onClick }) => {
  return (
    <Button className={styles["btn"]} style={{ marginTop: marginTop }}>
      {title}
    </Button>
  );
};

export default Btn;
