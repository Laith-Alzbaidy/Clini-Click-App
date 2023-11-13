"use client";
import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Tabs = ({ list }) => {
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const categories = list.map((category) => category.name);

      for (let i = categories.length - 1; i >= 0; i--) {
        const category = categories[i];
        const categoryElement = document.getElementById(category);

        if (
          categoryElement.offsetTop <= scrollPosition + 100 &&
          categoryElement.offsetTop + categoryElement.offsetHeight >
            scrollPosition + 100
        ) {
          setActiveTab(category);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [list]);
  const spaceFromTop = 65;
  const handleTabClick = (category) => {
    setActiveTab(category);
    const categoryElement = document.getElementById(category);

    if (categoryElement) {
      const scrollPosition = categoryElement.offsetTop - spaceFromTop;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  const TabSlider = list.map((categoryData) => (
    <SwiperSlide
      key={categoryData.name}
      spaceBetween={20}
      centeredSlides={false}
      navigation={{
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      }}
      slidesPerView={1}
    >
      <div
        className={` ${styles.tab} ${
          activeTab === categoryData.name && styles.active
        }`}
        onClick={() => handleTabClick(categoryData.name)}
      >
        {categoryData.name}
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={styles.tabscontainer}>
      <Swiper
        spaceBetween={8}
        centeredSlides={false}
        navigation={{
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next",
        }}
        slidesPerView={3.25}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // when window width is >= 320px
          280: {
            slidesPerView: 2.25,
            spaceBetween: 5,
          },
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 3.25,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 70,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 70,
          },
          1280: {
            slidesPerView: 10,
            spaceBetween: 110,
          },
        }}
      >
        {TabSlider}
      </Swiper>
    </div>
  );
};

export default Tabs;
