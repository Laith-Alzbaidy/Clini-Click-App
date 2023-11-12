// context.js
"use client";
import { createContext, useState } from "react";

import { useRouter, usePathname, redirect } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
export const DataContext = createContext();

const AppContext = ({ children }) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const token = Cookies.get("token");
  const router = useRouter(); // Use the useRouter hook to access the router.

  console.log("---------", !token && pathname.includes("/profile"));
  if (!token && pathname.includes("/profile")) {
    return router.push("/"); // Use router.push to redirect to the root path.
  }

  if (!token && pathname.includes("/payment")) {
    return router.push("/");
  }
  if (!token && pathname.includes("/user-details")) {
    return router.push("/");
  }
  if (!token && pathname.includes("/my-appointments")) {
    return router.push("/");
  }

  const data = {
    // gender: "male", // Fixed the typo here
    // dataPayment,
    // postPayment,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default AppContext;
