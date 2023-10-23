import React from "react";
import Image from "next/image";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import closebtn from "./assets/image/close.svg";
import Link from "next/link";
const ClosePrev = ({ close, back }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-2">
      <Link href={back}>
        <ButtonPreviews />
      </Link>

      <Link href={close}>
        <Image src={closebtn} alt="close" />
      </Link>
    </div>
  );
};

export default ClosePrev;
