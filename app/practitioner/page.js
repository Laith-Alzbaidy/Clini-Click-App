"use client";
import React, { use } from "react";
import Practitioner from "@/src/component/practitioner/practitioner";
import { NextSeo } from "next-seo";
function page() {
  return (
    <>
      <NextSeo title="" description="" />
      <Practitioner />
    </>
  );
}

export default page;
