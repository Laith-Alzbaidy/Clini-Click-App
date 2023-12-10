import React from "react";
import styles from "./categories.module.css";
import Link from "next/link";
import Image from "next/image";
import img from "./assets/img.svg";
import Light from "@/src/component/lines/light";
import Bold from "@/src/component/lines/bold";

const CategoriesList = ({ list }) => {
  const costumStyles = {
    marginTop: "25px",
    marginBottom: "18px",
  };
  const costumStylesLigth = {
    marginTop: "18px",
    marginBottom: "18px",
  };

  const truncateText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div>
      <div className={styles.categoryContent}>
        {list.map((categoryData, index) => (
          <div
            key={categoryData.id}
            id={categoryData.name}
            className={styles.categorySection}>
            <div className={styles.header}>{categoryData.name}</div>
            {categoryData.subCategories.map((subcategoryData, subIndex) => (
              <Link
                key={subIndex}
                href={{
                  pathname: `categories/treatment`,
                  query: {
                    category: categoryData.id,
                    subcategoryId: subcategoryData.id,
                  },
                }}
                className={styles.link}>
                <div>
                  <div key={subIndex} className={styles.mainContainer}>
                    <div>
                      <div className={styles.subTitle}>
                        {subcategoryData.name}
                      </div>
                      <div className={styles.subCategoryText}>
                        {truncateText(subcategoryData.description, 7)}
                      </div>
                      <div className={styles.priceIcons}>
                        <div>AED {subcategoryData.price}</div>
                        <div className={styles.currentPrice}>
                          AED {subcategoryData.promotionPrice}
                        </div>
                        <div>{subcategoryData.discount}% off</div>
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
                  {subIndex !== categoryData.subCategories.length - 1 && (
                    <Light
                      key={`separator-${subIndex}`}
                      additionalStyles={costumStylesLigth}
                    />
                  )}
                </div>
              </Link>
            ))}

            {index !== list.length - 1 && (
              <Bold additionalStyles={costumStyles} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
