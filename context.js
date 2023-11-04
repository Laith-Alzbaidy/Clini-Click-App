// context.js
"use client";
import { createContext, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
export const DataContext = createContext();

const AppContext = ({ children }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const data = {
    // gender: "male", // Fixed the typo here
    // dataPayment,
    // postPayment,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default AppContext;
