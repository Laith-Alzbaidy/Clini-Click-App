"use client";
import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/img.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Light from "@/src/component/lines/light";
import Bold from "@/src/component/lines/bold";
import "swiper/css";
import api from "@/config-API/config-API";

const costumStyles = {
  marginTop: "25px",
  marginBottom: "18px",
};
const costumStylesLigth = {
  marginTop: "18px",
  marginBottom: "18px",
};

const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + " ...";
  }
  return text;
};

const CategoryContent = () => {
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  async function getData() {
    try {
      const response = await api.get("clinic/AbdullahClinic/categories");
      const data = response.data.responseData;
      setList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
      slidesPerView={1}>
      <div
        className={` ${styles.tab} ${
          activeTab === categoryData.name && styles.active
        }`}
        onClick={() => handleTabClick(categoryData.name)}>
        {categoryData.name}
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
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
          }}>
          {TabSlider}
        </Swiper>
      </div>
      <div className={styles.categoryContent}>
        {list.map((categoryData, index) => (
          <div id={categoryData.name} className={styles.categorySection}>
            <div className={styles.header}>{categoryData.name}</div>
            {categoryData.subCategories.map((subcategoryData, index) => (
              <Link
                key={index}
                href={{
                  pathname: `categories/${categoryData.id}/${subcategoryData.id}`,
                  query: {
                    category: categoryData.id,
                    subcategory: subcategoryData.id,
                  },
                }}
                className={styles.link}>
                <div>
                  <div key={index} className={styles.mainContainer}>
                    <div>
                      <div className={styles.subTitle}>
                        {subcategoryData.name}
                      </div>
                      <div className={styles.subCategoryText}>
                        {truncateText(subcategoryData.description, 7)}
                      </div>
                      <div className={styles.priceIcons}>
                        <div>AED {subcategoryData.price}</div>
                        <div className={styles.currentPrice}>
                          AED {subcategoryData.promotionPrice}
                        </div>
                        <div>{subcategoryData.discount}% off</div>
                      </div>
                    </div>
                    <Image
                      className={styles.subCategoryImg}
                      src={img}
                      alt="Description of the image"
                      width={100}
                      height={90}
                    />
                  </div>
                  {index !== categoryData.subCategories.length - 1 && (
                    <Light
                      key={`separator-${index}`}
                      additionalStyles={costumStylesLigth}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
          // {index !== list.length - 1 && (
          //   <Bold additionalStyles={costumStyles} />
          // )}
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
