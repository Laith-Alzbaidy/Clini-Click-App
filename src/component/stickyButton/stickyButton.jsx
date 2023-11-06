import React from "react";
import { Button } from "react-bootstrap";
import styles from "./sticktButton.module.css";
import Image from "next/image";
const StickyButton = ({ title, onClick, type, selectMethod, disabled }) => {
  return (
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
  );
};
export default StickyButton;
