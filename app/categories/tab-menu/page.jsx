import React from "react";
import styles from "./tabs.module.css";

const TabsMenu = ({ activeTab, onTabClick }) => {
  const tabs = [
    "category 1",
    "category 2",
    "category 3",
    "category 4",
    "category 5",
    "category 6",
  ];

  return (
    <div className={styles.tabscontainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${styles.tab} ${
            activeTab === tab && styles.active
          }`}
          onClick={() => onTabClick(tab)}>
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabsMenu;
