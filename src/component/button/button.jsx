"use client";
import React from "react";
import styles from "./button.module.css";
import { Button } from "react-bootstrap";;
import "bootstrap/dist/css/bootstrap.css";

const Btn = ({ title , onClick })  => {
  return (
    <>
      <Button className={styles.btn}>
        {title}
      </Button>
    </>
  );
};

export default Btn;
