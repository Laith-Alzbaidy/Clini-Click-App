import React from "react";
import styles from "./subInfo.module.css";
import back from "../assets/conhh.svg";
import Image from "next/image";
import Link from "next/link";
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Info = async ({ searchParams }) => {
  const id = searchParams.search;

  try {
    const data = await getData(id);

    return (
      <div className={styles.container}>
        <Link href={`/categories/${id}`}>
          <Image src={back} alt="back" />
        </Link>
        <div className={styles.title}>sub category</div>
        <div className={styles.infoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incidLorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed eiusmod tempor incidLorem ipsum dolor sit amet.
        </div>

        <div className={styles.container}>
          <div className={styles.stepsTitle}>Before Treatment</div>
          <ul>
            <li className={styles.list}>{data.title}</li>
          </ul>

          <div className={styles.stepsTitle}>During Treatment</div>

          <ul>
            <li className={styles.list}>{data.title}</li>
          </ul>

          <div className={styles.stepsTitle}>After Treatment</div>

          <ul>
            <li className={styles.list}>{data.title}</li>
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    // Handle any errors, e.g., data not found
    return <div>Error: {error.message}</div>;
  }
};

export default Info;
