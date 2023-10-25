import React from "react";
import { Button } from "react-bootstrap";
import styles from "./sticktButton.module.css";

const StickyButton = ({ title, onClick, type }) => {
  return (
    <Button className={styles.btn} onClick={onClick} type={type}>
      {title}
    </Button>
  );
};
export default StickyButton;
