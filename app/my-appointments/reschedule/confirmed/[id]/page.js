"use client";
import React from "react";
import BookFinish from "@/src/component/confirm-book/book";
const Confirmed = ({ params }) => {
  const style = {
    marginTop: "45px",
  };
  console.log(params.id, "params id");
  return <BookFinish bookingId={params.id} />;
};

export default Confirmed;
