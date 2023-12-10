import React from "react";
import styles from "./inputField.module.css";
import Image from "next/image";
const InputField = ({
  type,
  value,
  onChange,
  icon,
  placeholder,
  name,
  disable,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.inputContainer}>
        {icon && <Image className={styles.icon} src={icon} alt="icon" />}
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder={placeholder}
          name={name}
          required
          disabled={!disable}
        />
      </div>
    </div>
  );
};

export default InputField;
