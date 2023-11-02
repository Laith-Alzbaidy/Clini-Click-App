// pages/some-page.js (or the appropriate file path for your Page component)
"use client";
import React, { useContext } from "react";
import Payment from "@/src/component/payment/payment";

const Page = () => {
  // const { gender } = useContext(DataContext);

  return (
    <div>
      <Payment />
    </div>
  );
};

export default Page;
