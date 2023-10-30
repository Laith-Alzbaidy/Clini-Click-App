"use client";
import React from "react";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import styles from "./styles/schedule-appointment.module.css";
import star from "./assets/image/Star.svg";
import Image from "next/image";
import user from "./assets/image/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Btn from "@/src/component/button/button";
import { useState, useEffect } from "react";
import "swiper/css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import api from "@/config-API/config-API";
import image from "./assets/image/user.svg";
import SlideUpDoctor from "@/src/component/slideupModal/slideUpDoctor/slideUpDoctor";

const date = new Date();
const month = date.toLocaleString("default", { month: "long" });
const monthAsOneBasedNumber = date.getMonth() + 1;

const Practitioner = () => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDateId, setSelectedDateId] = useState();
  const [slecetedDoctor, setSelectedDoctor] = useState(null);
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const subcategory = searchParams.get("subcategoryId");

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

  const [availability, setAvailability] = useState([]);

  const fetchAvailableHours = async (practitionerId, selectedDate) => {
    try {
      const response = await api.get(
        `PractitionerAvailability/${practitionerId}?date=${selectedDate}`
      );
      const data = response.data.responseData;
      setAvailability(data);
    } catch (error) {
      console.error("Error fetching available hours:", error);
    }
  };

  const handlePractitionerSelect = (practitionerId) => {
    setSelectedDoctor(practitionerId);
    if (practitionerId && selectedDate) {
      fetchAvailableHours(practitionerId, selectedDate);
    }
  };
  const handleTimeSelect = (Time) => {
    setSelectedTime(Time);
    console.log(Time);
  };

  const handleDayClick = (day, date, id, value) => {
    setSelectedDay(day);
    setSelectedDate(value);
    console.log(value);
    setSelectedDateId(id);
    if (slecetedDoctor) {
      fetchAvailableHours(slecetedDoctor, value);
    }
  };

  const team = data
    ? data.map((practitioner, index) => {
        const isActive = practitioner.id == slecetedDoctor;

        return (
          <SwiperSlide className={styles["swiper-slide"]} key={index}>
            <div
              onClick={() => {
                handlePractitionerSelect(practitioner.id);
                setSelectedDoctor(practitioner.id);
              }}
              className={`${styles["container-card"]} ${
                isActive ? styles["active-container-card"] : ""
              }`}>
              <div className={styles["container-image"]}>
                {practitioner.picture !== null ? (
                  <Image
                    fill
                    src={practitioner.picture}
                    alt={"practitioner"}
                    className={styles["image"]}
                    priority
                  />
                ) : (
                  <Image
                    src={image}
                    alt={"practitioner"}
                    className={styles["image"]}
                    priority
                  />
                )}
              </div>

              <div>
                <h1 className={styles["name-card"]}>{`${practitioner.title} ${
                  practitioner.firstName + practitioner.lastName
                }`}</h1>
                <p className={styles["specialization"]}>
                  {practitioner.speciality}
                </p>
                <p className={styles["exp"]}>
                  {practitioner.experienceYears} years of experience
                </p>
              </div>

              <p className={styles["exp"]}>{practitioner.exp}</p>
              <div className={styles["container-rate-review"]}>
                <div>
                  {/* Display star images */}
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                  <Image
                    src={star}
                    className={styles["star-image"]}
                    alt="star"
                  />
                </div>
                <p className={styles["text-review"]}>
                  {practitioner.rating} reviews
                </p>
              </div>

              <p className={styles["view-profile"]}>View Profile</p>
            </div>
          </SwiperSlide>
        );
      })
    : null;

  // Data for scheduling options

  const schedulingData = [
    { day: "Mon", date: 24, id: 1, value: "10-11-23" },
    { day: "Tue", date: 25, id: 2, value: "10-23-23" },
    { day: "Wed", date: 26, id: 3, value: "10-12-23" },
    { day: "Thu", date: 27, id: 4, value: "10-21-23" },
    { day: "Fri", date: 28, id: 5, value: "10-14-23" },
    { day: "Sat", date: 29, id: 6, value: "10-17-23" },
    { day: "Sun", date: 30, id: 7, value: "10-24-23" },
  ];

  // Map scheduling data to create scheduling slides
  const schedulingSlides = schedulingData.map((item, index) => {
    const isActive = item.day === selectedDay && item.value === selectedDate;
    return (
      <SwiperSlide key={item.id}>
        <div
          className={`${styles["container-scheduling"]} ${
            isActive ? styles.active : ""
          }`}
          onClick={() =>
            handleDayClick(item.day, item.date, item.id, item.value)
          }>
          <p className={styles["day"]}>{item.day}</p>
          <p className={styles["date"]}>{item.date}</p>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div>
      <div className="container1">
        <Link href="/">
          <ButtonPreviews />
        </Link>

        <div className={styles["header"]}>
          <p className={styles["step"]}>Step 1 of 3</p>
          <h1 className={styles["title"]}>Select Date and Time</h1>
        </div>

        <div className={styles["container-question"]}>
          <div>
            <h2 className={styles["question"]}>
              Which practitioner do you prefer?
            </h2>

            {/* Team Section*/}
            <div className="mt-2">
              <Swiper
                centeredSlides={false}
                slidesPerView={2.4}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className={styles["swiper-slide"]}>
                  <div className={`${styles["container-card"]} `}>
                    <div className="d-flex flex-column align-items-center gap-2">
                      <Image src={user} />
                      <h3 className={styles["name-card"]}>No preference</h3>
                      <div>
                        <p className={styles["specialization"]}>
                          Maximum availability
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {practitioner} {/* Render practitioner cards */}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Scheduling date and day */}

        <div className={styles["container-question"]}>
          <div>
            <h2 className={styles["question"]}>
              Which day would you like to book?
            </h2>
            <p className="mt-2">{month}</p>
          </div>

          <div className="mt-2">
            <Swiper
              spaceBetween={10}
              centeredSlides={false}
              slidesPerView={5.6}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}>
              {schedulingSlides} {/* Render scheduling options */}
            </Swiper>
          </div>
        </div>

        {/* Scheduling Time*/}

        <div className={styles["container-question"]}>
          <div className="mt-2">
            <div className={styles["container-question"]}>
              <div className={styles["question"]}>
                Which time would you like to book?
              </div>

              <div className={styles.Bigcontainer}>
                {availability && availability.data ? (
                  availability.data.map((time, index) => (
                    <div
                      className={`${styles.timeContainer} ${
                        time.erId === selectedTime ? styles.activeTime : ""
                      }`}
                      key={index}
                      onClick={() => handleTimeSelect(time.erId)}>
                      <p className={styles["time"]}>{time.er_time}</p>
                    </div>
                  ))
                ) : (
                  <p>
                    * Please select a practitioner and a date to display the
                    available times.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["line"]}></div>
      <div className="mt-3 px-3">
        <p className="text-center">
          No payment will be taken until your appointment
        </p>
        <Link
          href={{
            pathname: "/login",
            query: {
              subcategoryId: subcategory,
              practitionerId: slecetedDoctor,
              timeId: selectedTime,
            },
          }}>
          <Btn title="Continue" margin="10px 0" />
        </Link>
      </div>
    </div>
  );
};

export default Practitioner;
