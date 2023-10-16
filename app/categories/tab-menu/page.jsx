import React from "react";
import styles from "./tabs.module.css";
import {  Swiper , SwiperSlide } from "swiper/react";


const TabsMenu = ({ activeTab, onTabClick }) => {
  const tabs = [
    "category 1",
    "category 2",
    "category 3",
    "category 4",
    "category 5",
    "category 6",
  ];
  const TabSlider = tabs.map((tab, index) => (
    <SwiperSlide>
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
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }}
  >
    {TabSlider}
  </Swiper>
    </div>
  );
};

export default TabsMenu;
