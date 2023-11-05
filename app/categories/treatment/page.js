"use client";
import React, { useEffect, useState } from "react";
import styles from "./sub.module.css";
import Image from "next/image";
import Link from "next/link";
import RadioButtons from "../../../src/component/radioButton/radioButton";
import Btn from "../../../src/component/button/button";
import backicon from "../assets/conhh.svg";
import background from "../assets/g.png";
import StickyButton from "@/src/component/stickyButton/stickyButton";
import SlideUpPage from "@/src/component/slideupModal/slideUpPage";
import Light from "@/src/component/lines/light";
import Bold from "@/src/component/lines/bold";
import api from "@/config-API/config-API";
import { useSearchParams } from "next/navigation";

const linestyle = {
  marginTop: "16px",
  marginBottom: "20px",
};

const SubCategory = () => {
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
  console.log(subcategory);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(
          `categories/${category}/subcategories/${subcategory}`
        );
        const responseData = response.data.responseData;
        setData(responseData);
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
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          fontWeight: 700,
        }}>
        loading !
      </div>
    );
  }

  const handleOptionSelect = async (event) => {
    try {
      const selectedOption = event.target.value;
      setSelectedOption(event.target.value);
      if (selectedOption === "consultation" || selectedOption === "default") {
        const response = await api.get(
          `clinic/AbdullahClinic/subcategories/${subcategory}/options`
        );
        const responseData = response.data.responseData.consultation.treatmentId;
        setSelectedTreatmentId(responseData);
        setAreaSelect(null)
        setDeviceOption(null)
        setSessionOption(null)
        console.log(responseData, "cons");
      }
      else {
        const response = await api.get(
        `clinic/AbdullahClinic/subcategories/${subcategory}/options?selectedArea=${selectedOption}`
        );
        const responseData = response.data.responseData;
        setAreaSelect(responseData);
        setSelectedTreatmentId(null);
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
      setAreaSelect(responseData);
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
      setSessionOption(event.target.value);
      const response = await api.get(
        `clinic/AbdullahClinic/subcategories/${subcategory}/options?selectedArea=${selectedOption}&selectedDevice=${deviceOption}&selectedSession=${sessionOption}`
      );
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

  return (
    <>
      <Link href={"/categories"}>
        <Image
          className={styles.backIcon}
          src={backicon}
          alt="Description of the image"
          width={15}
          height={15}
        />
      </Link>

      <div className={styles.containerHero}>
        <Image
          fill
          src={background}
          className={styles.background}
          alt="background"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.subName}>{data.name}</div>
          <div className={styles.subDuration}>{data.defaultDuration} min</div>
          <div className={styles.subDiscreption}>{data.description}</div>
        </div>
        <SlideUpPage data={data} />
      </div>

      <div>
        {optionsData.map((item, index) => (
          <div key={index} className={styles.wrapper}>
            {item.default === null ? (
              <div>
                {item.consultation !== null ? (
                  <div className={styles.constContainer}>
                    <div className={styles.constChildContainer}>
                      <div>Consultation only</div>
                      <div className={styles.duration}>
                        {" "}
                        - {item.consultation.duration} min
                      </div>
                    </div>
                    <div>
                      <div className={styles.price}>
                        AED {item.consultation.price}
                      </div>
                      <input
                        type="radio"
                        value="consultation"
                        onClick={handleOptionSelect}
                        name="option"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <Bold additionalStyles={linestyle} />
                <div className={styles.SelectHeader}>
                  <div>Body area</div>
                  <div>Required</div>
                </div>
                {item.bodyAreas.map((area, index) => (
                  <div key={index}>
                    <div className={styles.optionsContainer}>
                      <div>
                        <div className={styles.name}>
                          {area.name}{" "}
                          <span className={styles.duration}>
                            -{area.duration} min
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className={styles.price}>AED {area.price}</p>
                        <input
                          type="radio"
                          value={area.name}
                          onClick={handleOptionSelect}
                          name="option"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {AreaSelect && AreaSelect.devices !== null && (
                  <div>
                    <Bold additionalStyles={linestyle} />
                    <div className={styles.SelectHeader}>
                      <div>Devices</div>
                      <div>Required</div>
                    </div>
                    {AreaSelect.devices.map((device, index) => (
                      <div key={index}>
                        <div className={styles.optionsContainer}>
                          <div className={styles.right}>
                            <div>
                              {device.name}
                              <span className={styles.duration}>
                                -{device.duration} min
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className={styles.price}>
                              AED {device.price}
                            </div>
                            <input
                              type="radio"
                              name="device"
                              value={device.name}
                              onClick={handledeviceSelect}
                            />
                          </div>
                        </div>
                        {index !== AreaSelect.devices.length - 1 && (
                          <div
                            style={{
                              width: "100%",
                              margin: "1rem auto",
                              border: "solid 1px #E8F3F1",
                            }}></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {deviceOption !== null  && AreaSelect.devices !== null && (
                  <div>
                    <Bold additionalStyles={linestyle} />
                    <div className={styles.SelectHeader}>
                      <div>Sessions</div>
                      <div>Required</div>
                    </div>
                    {AreaSelect.sessions?.map((session, sessionIndex) => (
                      <div key={sessionIndex}>
                        <div className={styles.optionsContainer}>
                          <div>
                            <div>
                              {session.name}{" "}
                              <span className={styles.duration}>
                                -{session.duration} min
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className={styles.price}>AED {session.price}</p>
                            <input
                              type="radio"
                              value={session.sessions}
                              onClick={handleSessionSelect}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                {item.consultation && (
                  <div className={styles.constContainer}>
                    <div className={styles.constChildContainer}>
                      <div>Consultation only</div>
                      <div className={styles.duration}>
                        {" "}
                        - {item.consultation.duration} min
                      </div>
                    </div>
                    <div>
                      <div className={styles.price}>
                        AED {item.consultation.price}
                      </div>
                      <input
                        type="radio"
                        value="consultation"
                        onClick={handleOptionSelect}
                        name="option"
                      />
                    </div>
                  </div>
                )}
                <Bold additionalStyles={linestyle} />
                <div className={styles.constContainer}>
                  <div className={styles.constChildContainer}>
                    <div>Default name</div>
                    <div className={styles.duration}>
                      {" "}
                      - {item.default.duration} min
                    </div>
                  </div>
                  <div>
                    <div className={styles.price}>AED {item.default.price}</div>
                    <input
                      type="radio"
                      value="default"
                      onClick={handleOptionSelect}
                      name="option"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          margin: "1rem auto",
          border: "solid 3px #E2E2E2",
        }}></div>
      <p className={styles.noPayment}>
        No payment will be taken until your appointment
      </p>

      <Link
        href={`/schedule-appointment?treatmentId=${selectedTreatmentId}`}>
       <StickyButton title={"Continue to book AED 200"} disabled={selectedTreatmentId === null} />
      </Link>
    </>
  );
};

export default SubCategory;
