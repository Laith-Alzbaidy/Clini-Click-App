"use client";
import React, { useState } from "react";
import styles from "./styles/read-more.module.css";
const ReadMore = () => {
  const [showmore, setShowMore] = useState(false);

  const flagShowMore = () => {
    setShowMore(!showmore);
    console.log(showmore);
  };

  return (
    <div>
      {showmore ? (
        <>
          <p className={styles["description"]}>
            Clinique de la Belle au Bois Dormant is Dubai’s most
            prestigiousbeauty parlour. With high skilled...
          </p>

          <span className={styles["read-more"]} onClick={flagShowMore}>
            {showmore ? "Read more" : "Less more"}
          </span>
        </>
      ) : (
        <>
          <p className={styles["description"]}>
            {" "}
            Clinique de la Belle au Bois Dormant is Dubai’s most prestigious
            beauty parlour. With high skilled Clinique de la Belle au Bois
            Dormant is Dubai’s most prestigious beauty parlour. Clinique de la
            Belle au Bois Dormant is Dubai’s most prestigious beauty parlour.
            With high skilled.
          </p>
          <span className={styles["read-more"]} onClick={flagShowMore}>
            {showmore ? "Read more" : "Less more"}
          </span>
        </>
      )}
    </div>
  );
};

export default ReadMore;
