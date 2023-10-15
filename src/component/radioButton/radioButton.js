"use client";
import React, { useState } from "react";
import styles from "./radiobutton.module.css";
function RadioButton({ label, value, selectedOption, onChange , price}) {
  return (
    <>
    
    <label
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
      }}>
      <span style={{  fontSize:"14px" , fontWeight:400 , display:"flex" , alignItems:"center"}}>{label}</span>
      <div className={styles.customradio}>
      <span style={{ marginRight: "7px"  , fontSize:"12px" , fontWeight:400}}>{price}</span>
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
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          price= {option.price}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
        
      ))}
      
    </div>
  );
}

export default RadioButtons;
