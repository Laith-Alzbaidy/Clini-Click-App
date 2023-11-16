import React from "react";
import star from "./Star.svg";
import emptyStar from "./emptyStar.svg";
import Image from "next/image";
import Rating from "react-rating";

const StarsRate = ({ rate }) => {
  return (
    <div>
      <Rating
        start={0}
        stop={5}
        initialRating={rate}
        emptySymbol={<Image src={emptyStar} width={16} height={16} alt="" />}
        fullSymbol={<Image src={star} width={16} height={16} alt="" />}
        readonly={true}
      />
    </div>
  );
};

export default StarsRate;
