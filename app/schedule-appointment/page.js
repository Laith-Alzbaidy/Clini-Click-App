"use client";
import React from "react";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import styles from "./styles/schedule-appointment.module.css";
import Btn from "@/src/component/button/button";
import { useState, useEffect } from "react";
import "swiper/css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import api from "@/config-API/config-API";
import SlideUpDoctor from "@/src/component/slideupModal/slideUpAvailableDoctors/slideUpAvailableDoctor";
import DateSelector from "@/src/component/date/DateSelector";
import TimeSelector from "@/src/component/time/TimeSelector";
import PractitionerSelctor from "@/src/component/practitioner/PractitionerSelctor";
import Loader from "@/src/component/Loader/Loader";
const Practitioner = () => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(null);
  const [slecetedDoctor, setSelectedDoctor] = useState(null);
  const [selectNoPrefrence, setSelectNoPrefrence] = useState();
  const [NoPrefrence, setNoPrefrence] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedPractitioner, setSelectedPractitioner] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const subcategory = searchParams.get("treatmentId");
  const [modalclass, SetClass] = useState("modal-content");
  const [availability, setAvailability] = useState([]);
  function close() {
    SetClass("modal-content closing");
    setTimeout(() => {
      setIsModalOpen(false);
      SetClass("modal-content");
    }, 300);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(
          `clinic/AbdullahClinic/Treatments/${subcategory}/practitioners`
        );
        const responseData = response.data.responseData;
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    }
    fetchData();
  }, [subcategory]);

  const fetchAvailableHours = async (practitionerId, date) => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `PractitionerAvailability?practitionerId=${practitionerId}&treatmentId=${subcategory}&date=${date}`
      );
      const data = response.data.responseData;
      setAvailability(data);
    } catch (error) {
      console.error("Error fetching available hours:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchPrefernceIdAvailableHours = async (date) => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `PractitionerAvailability?treatmentId=${subcategory}&date=${date}`
      );
      const data = response.data.responseData;
      setAvailability(data);
    } catch (error) {
      console.error("Error fetching available hours:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNoPreference = () => {
    setNoPrefrence("selected");
    setSelectedDoctor(null);

    if (date) {
      fetchPrefernceIdAvailableHours(date);
    }
  };

  const handlePractitionerSelect = (practitionerId) => {
    setNoPrefrence(null);
    setSelectedDoctor(practitionerId);
    if (practitionerId && date) {
      fetchAvailableHours(practitionerId, date);
    }
  };
  const handleConfirm = () => {
    router.push(
      `/login?treatmentId=${subcategory}&practitionerId=${
        slecetedDoctor === null ? selectNoPrefrence : slecetedDoctor
      }&date=${date}&timeSlotId=${selectedTime}`
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className="container1">
        <Link href="#" onClick={() => router.back()}>
          <ButtonPreviews />
        </Link>

        <div className={styles["header"]}>
          <p className={styles["step"]}>Step 1 of 3</p>
          <h1 className={styles["title"]}>Select Date and Time</h1>
        </div>
        <PractitionerSelctor
          setSelectedDoctor={setSelectedDoctor}
          slecetedDoctor={slecetedDoctor}
          handlePractitionerSelect={handlePractitionerSelect}
          setIsModalOpen={setIsModalOpen}
          setSelectedPractitioner={setSelectedPractitioner}
          data={data}
          NoPrefrence={NoPrefrence}
          handleNoPreference={handleNoPreference}
        />

        <DateSelector
          isNewAppointment={true}
          slecetedDoctor={slecetedDoctor}
          NoPrefrence={NoPrefrence}
          fetchAvailableHours={fetchAvailableHours}
          fetchPrefernceIdAvailableHours={fetchPrefernceIdAvailableHours}
          setDate={setDate}
        />

        <TimeSelector
          availability={availability}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          practitioner={true}
          isLoading={isLoading}
        />
      </div>
      <div className={styles["line"]}></div>
      <div className="mt-3 px-3">
        <p className="text-center">
          No payment will be taken until your appointment
        </p>

        <Btn
          title="Continue"
          margin="10px 0"
          disabled={
            (slecetedDoctor === null && selectNoPrefrence === null) ||
            date === null ||
            selectedTime === null
          }
          onClick={handleConfirm}
        />
      </div>
      <SlideUpDoctor
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={selectedPractitioner}
      />
    </div>
  );
};

export default Practitioner;
