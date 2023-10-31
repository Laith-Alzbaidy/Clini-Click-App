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
                      <input type="radio"></input>
                    </div>
                  </div>
                )}
                <Bold additionalStyles={linestyle} />
                {item.bodyAreas.map((area, index) => (
                  <div key={index}>
                    <div className={styles.SelectHeader}>
                      <div>Body area</div>
                      <div>Required</div>
                    </div>
                    <div className={styles.optionsContainer}>
                      <div>
                        <p>{area.name}</p>
                        <p>{area.duration} min</p>
                      </div>
                      <div>
                      <p> AED {area.price}</p>
                      <input type="radio"></input>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {item.default && (
                  <div className={styles.constContainer}>
                    <div className={styles.constChildContainer}>
                      <p>Default name</p>
                      <p>- {item.default.duration} min</p>
                    </div>
                    <div>
                      <div>AED {item.consultation.price}</div>
                      <input type="radio"/>
                    </div>
                  </div>
                )}
                <Bold additionalStyles={linestyle} />
                {item.consultation && (
                  <div className={styles.constContainer}>
                    <div className={styles.constChildContainer}>
                      <div>Consultation only</div>
                      <div> - {item.consultation.duration} min</div>
                    </div>
                    <div>
                      <div>AED {item.consultation.price}</div>
                      <input type="radio"></input>
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
