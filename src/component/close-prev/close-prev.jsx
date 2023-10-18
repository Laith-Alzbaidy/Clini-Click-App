import React from "react";
import Image from "next/image";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import close from "./assets/image/close.svg";
const ClosePrev = () => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-2">
      <ButtonPreviews />
      <Image src={close} alt="close" />
    </div>
  );
};

export default ClosePrev;
