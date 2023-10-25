"use client";
import React, { useState } from "react";
import styles from "./radiobutton.module.css";
function RadioButton({ label, value, selectedOption, onChange, price }) {
  return (
    <>
      <label
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
          padding:"0 28px 0 28px"
        }}>
        <span
          style={{
            color: "#000",
            fontSize: "14px",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
          }}>
          {label}
        </span>
        <div className={styles.customradio}>
          <span
            style={{
              marginRight: "7px",
              color: "#000",
              fontSize: "14px",
              fontWeight: 400,
            }}>
            {price}
          </span>
          <input
            type="radio"
            id={value}
            value={value}
            checked={selectedOption === value}
            onChange={onChange}
          />
        </div>
      </label>
    </>
  );
}

function RadioButtons({ options }) {
  const [selectedOption, setSelectedOption] = useState();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
    {options.map((option, index) => (
      <div key={index}>
        <RadioButton
          label={option.label}
          label2={option.label2}
          value={option.value}
          price={option.price}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
        {index !== options.length - 1 && <div
          style={{
            width: "90%",
            margin: "1rem auto",
            border: "solid 1px #E8F3F1",
          }}></div>}
      </div>
    ))}
  </div>
  );
}

export default RadioButtons;
