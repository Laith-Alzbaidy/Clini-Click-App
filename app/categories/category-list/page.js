"use client";
import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/img.svg";
import fakeData from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import Light from "@/src/component/lines/light";
import Bold from "@/src/component/lines/bold";
import "swiper/css";
async function getData() {
  try {
    const res = await fetch("https://mashserver2.com/clinic/categories?clinicName=AbdullahClinic");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    throw error;
  }
}

const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + " ...";
  }
  return text;
};

const CategoryContent = () => {
// const data = await getData();
// console.log(data ,"ge")
  // const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const costumStyles = {
    marginTop: "25px",
    marginBottom: "18px",
  };
  const costumStylesLigth = {
    marginTop: "18px",
    marginBottom: "18px",
  };
  // useEffect(() => {
  //   getData()
  //     .then((fetchedData) => {
  //       setData(fetchedData);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const [activeTab, setActiveTab] = useState(fakeData[0].category);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const categories = fakeData.map((category) => category.category);

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
  }, []);

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

  const TabSlider = fakeData.map((categoryData) => (
    <SwiperSlide
      key={categoryData.category}
      spaceBetween={20}
      centeredSlides={false}
      navigation={{
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
      }}
      slidesPerView={1}>
      <div
        className={` ${styles.tab} ${
          activeTab === categoryData.category && styles.active
        }`}
        onClick={() => handleTabClick(categoryData.category)}>
        {categoryData.category}
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
        {fakeData.map((categoryData, index) => (
          <Link
            key={categoryData.category}
            href={`/categories/${categoryData.id}`}
            className={styles.link}>
            <div id={categoryData.category} className={styles.categorySection}>
              <div className={styles.header}>{categoryData.category}</div>
              {categoryData.subcategories.map((subcategory, index) => (
                <div>
                  <div key={index} className={styles.mainContainer}>
                    <div>
                      <div className={styles.subTitle}>{subcategory.title}</div>
                      <div className={styles.subCategoryText}>
                        {truncateText(subcategory.description, 7)}
                      </div>
                      <div className={styles.priceIcons}>
                        <div>AED {subcategory.pastPrice}</div>
                        <div className={styles.currentPrice}>
                          AED {subcategory.currentPrice}
                        </div>
                        <div>{subcategory.discount}% off</div>
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
                  {index !== categoryData.subcategories.length - 1 && (
                    <Light
                      key={`separator-${index}`}
                      additionalStyles={costumStylesLigth}
                    />
                  )}
                </div>
              ))}
            </div>
            {index !== categoryData.category.length - 1 && (
              <Bold additionalStyles={costumStyles} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
