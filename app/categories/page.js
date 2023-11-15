"use client";
import React , {useState , useEffect} from "react";
import styles from "./categories.module.css";
import Link from "next/link";
import CategoryContent from "./category-list/page";
import Footer from "@/src/component/footer/footer";
import ButtonPreviews from "@/src/component/buttonPreviews/buttonPreviews";
import Header from "@/src/component/header/header";
import api from "@/config-API/config-API";

const style = {
  marginTop: "45px",
};
const Categories = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("clinic?clinicName=AbdullahClinic");
        setData(response.data.responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={styles.desktopConatiner}>
        <Header data={data}/>
      </div>
      <div className={styles.holder}>
        <div className={styles.backIcon}>
          <Link href="/">
            <ButtonPreviews />
          </Link>
        </div>
        <div className={styles.treatmentText}>Our treatments</div>
        <CategoryContent />
        <Footer additiionalStyles={style} />
      </div>
    </>
  );
};

export default Categories;
