"use client";
import React, { useState } from "react";
import TabsMenu from "../tab-menu/page";
import CategoryContent from "../category-list/page";
import "swiper/css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("category 1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TabsMenu activeTab={activeTab} onTabClick={handleTabClick} />
      <CategoryContent activeTab={activeTab} />
    </>
  );
};

export default Tabs;
