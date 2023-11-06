import React from "react";
import Image from "next/image";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import closebtn from "./assets/image/close.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ClosePrev = ({ close }) => {
  const router = useRouter();
  return (
    <div className="d-flex align-items-center justify-content-between mb-2">
      <Link href="#" onClick={() => router.back()}>
        <ButtonPreviews />
      </Link>

      <Link href={close}>
        <Image src={closebtn} alt="close" />
      </Link>
    </div>
  );
};

export default ClosePrev;
