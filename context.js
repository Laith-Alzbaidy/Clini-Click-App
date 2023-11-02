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

  const [dataPayment, setDataPayment] = useState([]);

  const token = Cookies.get("token");

  const postPayment = async (paymentId) => {
    const data = {
      clinicName: "AbdullahClinic",
      treatmentId: 7 || searchParams.get("treatmentId"),
      practitionerId: searchParams.get("practitionerId") || 1,
      timeSlotId: 7 || searchParams.get("timeSlotId") || 1,
      date: searchParams.get("date"),
      // promoCode: offer,
      paymentId,
    };

    console.log("data", data);
    try {
      const response = await api.post("/Appointments", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.isSuccess) {
        console.log(response.data.isSuccess);
        setDataPayment(response.data.responseData);
        router.push(`/payment/confirm-book`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    gender: "male", // Fixed the typo here
    dataPayment,
    postPayment,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default AppContext;
