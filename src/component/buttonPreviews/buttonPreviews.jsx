import React from "react";
import Image from "next/image";
import Link from "next/link";
import previews from "./assets/image/previews.svg";
const ButtonPreviews = () => {
  return (
    <div>
      <Image src={previews} alt="button previews" />
    </div>
  );
};

export default ButtonPreviews;
