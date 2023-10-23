"use client";
import React, { useState } from "react";
import TabsMenu from "../tab-menu/page";
import CategoryContent from "../category-list/page";
import "swiper/css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Category 1");
  const [categories, setCategories] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
  ]);

  const handleTabClick = (tab) => {
    setCategories((prevCategories) => [
      tab,
      ...prevCategories.filter((category) => category !== tab),
    ]);
    setActiveTab(tab);
  };
  

  return (
    <>
      <TabsMenu activeTab={activeTab} onTabClick={handleTabClick} />
      <CategoryContent activeTab={activeTab} categories={categories} />
    </>
  );
};

export default Tabs;