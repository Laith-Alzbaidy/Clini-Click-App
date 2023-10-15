import React from "react";
import styles from "./inputField.module.css";

const InputField = ({ type, value, onChange, icon, placeholder }) => {
  return (
    <div className={styles.main}>

    
    <div className={styles.inputContainer}>
      {icon && <img className={styles.icon} src= {icon} />}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
    </div>
  );
};

export default InputField;
