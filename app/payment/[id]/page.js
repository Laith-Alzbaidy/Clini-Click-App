import React from "react";
import BookFinish from "@/src/component/confirm-book/book";
const Page = ({ params }) => {
  console.log(params.id);
  return (
    <>
      <BookFinish bookingId={params.id} />
    </>
  );
};

export default Page;
