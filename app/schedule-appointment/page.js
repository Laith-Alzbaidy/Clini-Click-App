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

const Practitioner = () => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDateId, setSelectedDateId] = useState();
  const [schedulingData, setSchedulingData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [date, setDate] = useState();
  const [slecetedDoctor, setSelectedDoctor] = useState(null);
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();

  const subcategory = searchParams.get("subcategoryId");

  useEffect(() => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const generatedSchedulingData = [];

    const generateDayId = (date) => {
      return `${date - 1}`;
    };

    for (let date = 1; date <= daysInMonth; date++) {
      const day = getDayName(new Date(year, month, date));
      const dayId = generateDayId(date);
      generatedSchedulingData.push({ day, date, id: dayId });
    }

    setSchedulingData(generatedSchedulingData);
  }, [selectedMonth]);

  const getDayName = (date) => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = date.getDay();
    return dayNames[dayIndex];
  };

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
  const fetchAvailableHours = async (practitionerId) => {
    try {
      const response = await api.get(
        `PractitionerAvailability/${practitionerId}?date=${date}`
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

  const handleDayClick = (day, date, id) => {
    setSelectedDay(day);
    setSelectedDate(date);
    setSelectedDateId(id);

    const selectedDate = new Date(selectedMonth);
    const selectedMonthFormatted = (selectedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const dateFormatted = date.toString().padStart(2, "0");
    const yearFormatted = selectedDate.getFullYear();

    // const yearFormatted = (selectedDate.getFullYear() % 100)
    //   .toString()
    //   .padStart(2, "0");
    const selected = `${selectedMonthFormatted}-${dateFormatted}-${yearFormatted}`;
    setDate(selected);
    console.log(selected);

    if (slecetedDoctor) {
      fetchAvailableHours(slecetedDoctor, date);
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
              }`}
            >
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

  const schedulingSlides = schedulingData.map((item, index) => {
    const isActive = item.day === selectedDay && item.date === selectedDate;

    return (
      <SwiperSlide key={index}>
        <div
          className={`${styles["container-scheduling"]} ${
            isActive ? styles.active : ""
          }`}
          onClick={() =>
            handleDayClick(item.day, item.date, item.id, item.value)
          }
        >
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
                onSwiper={(swiper) => console.log(swiper)}
              >
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
                {team}
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
              onSwiper={(swiper) => console.log(swiper)}
            >
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
                      onClick={() => handleTimeSelect(time.erId)}
                    >
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
              treatmentId: subcategory,
              practitionerId: slecetedDoctor,
              date: date,
              timeSlotId: selectedTime,
            },
          }}
        >
          <Btn title="Continue" margin="10px 0" />
        </Link>
      </div>
    </div>
  );
};

export default Practitioner;
