"use client";
import React, { useState, useEffect } from "react";
import api from "@/config-API/config-API";
import "./a.css";
import Tabs from "@/src/component/tabs/Tabs";
import CategoriesList from "@/src/component/categoriesList/CategoriesList";

const CategoryContent = () => {
  const [list, setList] = useState([]);

  async function getData() {
    try {
      const response = await api.get("clinic/AbdullahClinic/categories");
      const data = response.data.responseData;
      setList(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Tabs list={list} />
      <CategoriesList list={list} />
    </div>
  );
};

export default CategoryContent;
