import React from "react";
import Image from "next/image";
import Link from "next/link";
import previews from "./assets/image/previews.svg";
const ButtonPreviews = () => {
  return <Image width={25} height={25} src={previews} alt="button previews" />;
};

export default ButtonPreviews;
