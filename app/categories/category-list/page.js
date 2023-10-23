import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import Image from "next/image";
import Link from "next/link";
import img from "../assets/img.svg";
import axios from "axios";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const truncateText = (text, maxWords) => {
  const words = text.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + " ...";
  }
  return text;
};

const CategoryContent = ({ categories }) => {
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
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={styles.categoryContent}>
      {categories.map((category, index) => (
        <div key={category}>
          <div className={styles.header}>{category}</div>
          {data.slice(0, 5) 
            .map((post, postIndex) => (
            <div key={postIndex}>
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
                      <div>{post.discount}50% off</div>
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
              <div
                style={{
                  width: "100%",
                  margin: "23px auto",
                  border: "solid 1px #ECECEC",
                }}></div>
            </div>
          ))}
        </div>
      ))}
     
    </div>
  );
};

export default CategoryContent;