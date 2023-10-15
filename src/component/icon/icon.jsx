import React from "react";
import Image from "next/image";
import instagram from "./assets/image/instagram.svg";
import linkedin from "./assets/image/linkedin.svg";
import facebook from "./assets/image/facebook.svg";
import frame from "./assets/image/frame.svg";
import styles from "./styles/icon.module.css";
const Icon = () => {
  return (
    <div className={styles["container-icon"]}>
      <Image src={instagram} width={18} height={15} />
      <Image src={linkedin} width={18} height={15} />
      <Image src={facebook} width={18} height={15} />
      <Image src={frame} width={18} height={15} />
    </div>
  );
};

export default Icon;
