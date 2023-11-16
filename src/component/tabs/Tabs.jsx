"use client";
import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './scroll.css'
const Tabs = ({ list }) => {
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log('Scroll Position:', scrollPosition);
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        {TabSlider}
      </Swiper>
    </div>
  );
};

export default Tabs;
