import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/img.svg";

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    // Handle the error or return a custom error message.
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

const CategoryContent = ({ activeTab }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  return (
    <div className={styles.categoryContent}>
      {activeTab === "category 1" && (
        <>
          <h4 className={styles.header}>Category 1</h4>
          {data.map((post, index) => (
            <div key={index}>
              <Link href={`/categories/${post.id}`} className={styles.link}>
                <div className={styles.mainContainer}>
                  <div>
                    <div className={styles.subTitle}>{post.title}</div>
                    <div className={styles.subCategoryText}>
                      {truncateText(post.body, 7)}
                    </div>
                    <div className={styles.priceIcons}>
                      <div>AED {post.oldPrice}</div>
                      <div className={styles.currentPrice}>
                        AED {post.currentPrice}
                      </div>
                      <div>{post.discount}% off</div>
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
              </Link>
            </div>
          ))}
        </>
      )}
      {activeTab === "category 2" && <p>Content for category 2</p>}
    </div>
  );
};

export default CategoryContent;
