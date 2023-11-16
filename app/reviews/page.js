"use client";
import { NextSeo } from "next-seo";
import Reviews from "@/src/component/reviews/reviews";
const Page = () => {
  return (
    <>
      <NextSeo
        title="Reviews Doctor- Your Website Name"
        description="Check out what our customers have to say about us on Google Reviews."
      />

      <Reviews title="Reviews" />
    </>
  );
};

export default Page;
