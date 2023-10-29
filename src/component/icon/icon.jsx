import React from "react";
import Image from "next/image";
import instagram from "./assets/image/instagram.svg";
import linkedin from "./assets/image/linkedin.svg";
import facebook from "./assets/image/facebook.svg";
import X from "./assets/image/frame.svg";
import styles from "./styles/icon.module.css";
import Link from "next/link";

const Icon = ({ data }) => {
  const socialMediaIcons = {
    instagram: instagram,
    facebook: facebook,
    linkedin: linkedin,
    x: X,
  };

  return (
    <div className={styles["container-icon"]}>
      {data.mediaLinks.map((linkData) => (
        <Link
          rel="noopener noreferrer"
          target="_blank"
          key={linkData.name}
          href={linkData.link}
        >
          <Image
            src={socialMediaIcons[linkData.name]}
            width={18}
            height={15}
            alt={`${linkData.name}-icon`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Icon;
