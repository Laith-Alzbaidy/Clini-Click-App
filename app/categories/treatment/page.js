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
  const [optionSelect, setOptionSelect] = useState(null);
  const [responseData, setResponseData] = useState(null);
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
    const selectedOption = event.target.value;
    setOptionSelect(selectedOption);
    try {
      const response = await api.post(
        `clinic/AbdullahClinic/subcategories/${subcategory}/options`,
        { selectedOption }
      );

      const responseData = response.data.responseData;
      setResponseData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponseData(null);
    }
  };

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
          <div key={index}>
            {item.default === null ? (
              <div>
                {item.consultation && (
                  <div className={styles.constContainer}>
                    <div className={styles.constChildContainer}>
                      <div>Consultation only</div>
                      <div> - {item.consultation.duration} min</div>
                    </div>
                    <div>
                      <div>AED {item.consultation.price}</div>
                      <input
                        type="radio"
                        value="consultation"
                        onClick={handleOptionSelect}
                      />
                    </div>
                  </div>
                )}
                <Bold additionalStyles={linestyle} />
                <div className={styles.SelectHeader}>
                  <div>Body area</div>
                  <div>Required</div>
                </div>
                {item.bodyAreas.map((area, areaIndex) => (
                  <div key={areaIndex}>
                    <div className={styles.optionsContainer}>
                      <div>
                        <p>{area.name}</p>
                        <p>{area.duration} min</p>
                      </div>
                      <div>
                        <p>AED {area.price}</p>
                        <input
                          type="radio"
                          value={area.name}
                          onClick={handleOptionSelect}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                {/* Render "Devices" if available */}
                {item.devices && (
                  <div>
                    <Bold additionalStyles={linestyle} />
                    <div className={styles.SelectHeader}>
                      <div>Devices</div>
                      <div>Required</div>
                    </div>
                    {item.devices.map((device, deviceIndex) => (
                      <div key={deviceIndex}>
                        <div className={styles.optionsContainer}>
                          <div>
                            <p>{device.name}</p>
                            <p>{device.duration} min</p>
                          </div>
                          <div>
                            <p>AED {device.price}</p>
                            <input
                              type="radio"
                              value={device.name}
                              onClick={handleOptionSelect}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {/* Render "Sessions" if available */}
                {item.sessions && (
                  <div>
                    <Bold additionalStyles={linestyle} />
                    <div className={styles.SelectHeader}>
                      <div>Sessions</div>
                      <div>Required</div>
                    </div>
                    {item.sessions.map((session, sessionIndex) => (
                      <div key={sessionIndex}>
                        <div className={styles.optionsContainer}>
                          <div>
                            <p>{session.name}</p>
                            <p>{session.duration} min</p>
                          </div>
                          <div>
                            <p>AED {session.price}</p>
                            <input
                              type="radio"
                              value={session.name}
                              onClick={handleOptionSelect}
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
                <div className={styles.constContainer}>
                  <div className={styles.constChildContainer}>
                    <p>Default name</p>
                    <p>- {item.default.duration} min</p>
                  </div>
                  <div>
                    <div>AED {item.consultation.price}</div>
                    <input
                      type="radio"
                      value="default"
                      onClick={handleOptionSelect}
                    />
                  </div>
                </div>
                <Bold additionalStyles={linestyle} />
                {item.consultation && (
                  <div className={styles.constContainer}>
                    <div className={styles.constChildContainer}>
                      <p>Consultation only</p>
                      <p> - {item.consultation.duration} min</p>
                    </div>
                    <div>
                      <div>AED {item.consultation.price}</div>
                      <input
                        type="radio"
                        value="consultation"
                        onClick={handleOptionSelect}
                      />
                    </div>
                  </div>
                )}
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

      <Link href={`/schedule-appointment?subcategoryId=${subcategory}`}>
        <StickyButton title={"Continue to book AED 200"} />
      </Link>
    </>
  );
};

export default SubCategory;
