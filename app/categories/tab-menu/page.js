import React from "react";
import styles from "./tabs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const TabsMenu = ({ activeTab, onTabClick }) => {
  const tabs = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ];
  const TabSlider = tabs.map((tab, index) => (
    <SwiperSlide
      spaceBetween={20}
      centeredSlides={false}
      navigation={{
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      }}
      slidesPerView={1}
    >
      <div
        key={index}
        className={`${styles.tab} ${activeTab === tab && styles.active}`}
        onClick={() => onTabClick(tab)}
      >
        {tab}
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
            slidesPerView: 2.15,
            spaceBetween: 2,
          },
          320: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          375: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
 
          480: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
      
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 8,
            spaceBetween: 40,
          },
       
        }}
      >
        {TabSlider}
      </Swiper>
    </div>
  );
};

export default TabsMenu;
