"use client";
import api from "@/config-API/config-API";
export async function getServerSideProps() {
  try {
    const response = await api.get("clinic?clinicName=AbdullahClinic");
    const data = response.data.responseData;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}
