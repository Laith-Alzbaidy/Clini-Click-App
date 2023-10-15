"use client";
import React, { useState } from "react";
import styles from "./tabs.module.css";
import TabsMenu from "../tab-menu/page";
import CategoryContent from "../category-list/page";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("category 1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TabsMenu activeTab={activeTab} onTabClick={handleTabClick} />
      <CategoryContent activeTab={activeTab} />
      <div className={styles.powerdBy}>powered by cliniClick</div>
    </>
  );
};

export default Tabs;
