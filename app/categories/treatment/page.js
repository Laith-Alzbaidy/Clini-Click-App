"use client";
import React, { useEffect, useState } from "react";
import styles from "./sub.module.css";
import Image from "next/image";
import Link from "next/link";
import backicon from "../assets/conhh.svg";
import background from "../assets/g.png";
import StickyButton from "@/src/component/stickyButton/stickyButton";
import SlideUpPage from "@/src/component/slideupModal/slideUpPage";
import Light from "@/src/component/lines/light";
import Bold from "@/src/component/lines/bold";
import api from "@/config-API/config-API";
import Loader from "@/src/component/Loader/Loader";
import OptionSelector from "@/src/component/options/OptionSelector";
import LearnMore from "@/src/component/learnMoreModal/LearnMore";
import { useSearchParams, useRouter } from "next/navigation";
const linestyle = {
  marginTop: "16px",
  marginBottom: "20px",
};
const ligthstyle = {
  marginTop: "10px",
  marginBottom: "10px",
};
const additionalStyles = {
  marginTop: "50px",
};
const SubCategory = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [optionsData, setOptionsData] = useState();
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState();
  const [AreaSelect, setAreaSelect] = useState(null);
  const [deviceOption, setDeviceOption] = useState(null);
  const [sessionOption, setSessionOption] = useState();
  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategoryId");
  const route = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(
          `categories/${category}/subcategories/${subcategory}`
        );
        const responseData = response.data.responseData;
        setData(responseData);
        console.log(responseData , "datadata")
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
    }

    if (category && subcategory) {
      fetchData();
    }
  }, []);

  async function fetchOptionData() {
    try {
      const response = await api.get(
        `clinic/AbdullahClinic/subcategories/${subcategory}/options`
      );
      const data1 = response.data.responseData;
      setOptionsData([data1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchOptionData();
  }, []);
  console.log(optionsData, "fdd");

  if (!data || !optionsData) {
    return <Loader />;
  }

  const handleOptionSelect = async (event) => {
    try {
      const selectedOption = event.target.value;
      setSelectedOption(selectedOption);

      if (selectedOption === "consultation" || selectedOption === "default") {
        const response = await api.get(
          `clinic/AbdullahClinic/subcategories/${subcategory}/options`
        );
        const responseData = response.data.responseData.consultation;
        setSelectedTreatmentId(responseData.treatmentId);
        setAreaSelect(null);
        setDeviceOption(null);
        setSessionOption(null);
        console.log(responseData, "cons");
      } else {
        const response = await api.get(
          `clinic/AbdullahClinic/subcategories/${subcategory}/options?selectedArea=${selectedOption}`
        );
        const responseData = response.data.responseData;

        if (responseData.devices) {
          setAreaSelect(responseData);
          setSelectedTreatmentId(null);
        } else if (responseData.sessions) {
          setAreaSelect(responseData);
          setSelectedTreatmentId(null);
        } else {
          setSelectedTreatmentId(responseData.selectedId);
        }

        console.log(responseData, "area");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setSelectedTreatmentId(null);
    }
  };
  console.log(AreaSelect, "area");
  const handledeviceSelect = async (event) => {
    try {
      const deviceOption = event.target.value;
      setDeviceOption(event.target.value);
      const response = await api.get(
        `clinic/AbdullahClinic/subcategories/${subcategory}/options?selectedArea=${selectedOption}&selectedDevice=${deviceOption}`
      );
      const responseData = response.data.responseData;
      if (responseData.sessions) {
        setAreaSelect(responseData);
        setSelectedTreatmentId(null);
      } else {
        setSelectedTreatmentId(responseData.selectedId);
      }
      console.log(responseData, "selected device");
    } catch (error) {
      console.error("Error fetching data:", error);
      setAreaSelect(null);
    }
  };
  console.log(deviceOption, "selected device");

  const handleSessionSelect = async (event) => {
    try {
      const sessionOption = event.target.value;
      setSessionOption(sessionOption);

      let response;

      if (AreaSelect && AreaSelect.devices) {
        response = await api.get(
          `clinic/AbdullahClinic/subcategories/${subcategory}/options?selectedArea=${selectedOption}&selectedDevice=${deviceOption}&selectedSession=${sessionOption}`
        );
      } else {
        response = await api.get(
          `clinic/AbdullahClinic/subcategories/${subcategory}/options?selectedArea=${selectedOption}&selectedSession=${sessionOption}`
        );
      }

      const responseData = response.data.responseData;

      setAreaSelect(responseData);
      setSelectedTreatmentId(responseData.selectedId);
      console.log(responseData, "session data");
    } catch (error) {
      console.error("Error fetching data:", error);
      setAreaSelect(null);
    }
  };
  console.log(sessionOption, "selected session");
  const handleConfirm = () => {
    route.push(`/schedule-appointment?treatmentId=${selectedTreatmentId}`);
  };
  return (
    <div className={styles.wrapper}>
      <Link href="#" onClick={() => router.back()}>
        <Image
          className={styles.backIcon}
          src={backicon}
          alt="Description of the image"
          width={15}
          height={15}
        />
      </Link>

      <div className={styles.containerHero} >

        <Image
          fill
          // src={data.imageUrl}
          src={background}
          className={styles.background}
          alt="background"
        />
      </div>
      {data ? (
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <div className={styles.subName}>{data.name}</div>
            <div className={styles.subDuration}>{data.defaultDuration} min</div>
            <div className={styles.subDiscreption}>{data.description}</div>
          </div>
          <SlideUpPage data={data} />
          <LearnMore data={data} learnMore={true} />
        </div>
      ) : (
        ""
      )}
      <OptionSelector
        optionsData={optionsData}
        selectedOption={selectedOption}
        handleOptionSelect={handleOptionSelect}
        handleDeviceSelect={handledeviceSelect}
        handleSessionSelect={handleSessionSelect}
        AreaSelect={AreaSelect}
      />

      <Bold additionalStyles={linestyle} />
      <p className={styles.noPayment}></p>

      <StickyButton
        title={"Continue to book AED 200"}
        disabled={selectedTreatmentId === null}
        content={"  No payment will be taken until your appointment"}
        onClick={handleConfirm}
        additionalStyles={additionalStyles}
      />
    </div>
  );
};

export default SubCategory;
