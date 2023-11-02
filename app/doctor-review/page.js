"use client";
import styles from "./doctorReview.module.css";
import React, { useState } from "react";
import Btn from "@/src/component/button/button";
import Link from "next/link";
import { FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa";
import Cookies from "js-cookie";
import api from "@/config-API/config-API";
const DoctorReview = () => {
  const [rateClinic, setRateClinic] = useState(0);
  const [hoverClinic, setHoverClinic] = useState(null);
  const [ratePractitioner, setRatePractitioner] = useState(0);
  const [hoverPractitioner, setHoverPractitioner] = useState(null);
  const [clinicFeedback, setClinicFeedback] = useState("");
  const [practionerFeedback, setPractionerFeedback] = useState("");

  const token = Cookies.get("token");

  const sendRate = async () => {
    const data = {
      rating: ratePractitioner,
      description: practionerFeedback,
    };
    console.log(data);
    try {
      const response = await api.post(
        `practitioner/${2}/Review`,
        data,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Rate your experience</div>
      <p className={styles.question}>
        How was your experience with {"clinic name"}
      </p>
      <div className={styles.starsContainer}>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rateClinic"
                value={currentRating}
                onClick={() => setRateClinic(currentRating)}
                style={{ display: "none" }}
              />
              {currentRating <= (rateClinic || hoverClinic) ? (
                <FaStar
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() => setHoverClinic(currentRating)}
                  onMouseLeave={() => setHoverClinic(null)}
                />
              ) : (
                <FaRegStar // Use the empty star icon
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() => setHoverClinic(currentRating)}
                  onMouseLeave={() => setHoverClinic(null)}
                />
              )}
            </label>
          );
        })}
      </div>
  
      <p className={styles.subquestion}>Do you have any feedback to share ?</p>
      <textarea
        className={styles.textArea}
        placeholder="Share your feedback"
        onChange={(e) => setClinicFeedback(e.target.value)}
      />
      <p className={styles.question2}>
        How was your experience with {"Practitioner name"}
      </p>

      <div className={styles.starsContainer}>
        {[...Array(5)].map((star, index) => {
          const currentRatingPractitioner = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="ratePractitioner"
                value={currentRatingPractitioner}
                onClick={() => setRatePractitioner(currentRatingPractitioner)}
                style={{ display: "none" }}
              />
              {currentRatingPractitioner <=
              (ratePractitioner || hoverPractitioner) ? (
                <FaStar
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() =>
                    setHoverPractitioner(currentRatingPractitioner)
                  }
                  onMouseLeave={() => setHoverPractitioner(null)}
                />
              ) : (
                <FaRegStar 
                  size={32}
                  className={styles.star}
                  color="#A75CFF"
                  onMouseEnter={() =>
                    setHoverPractitioner(currentRatingPractitioner)
                  }
                  onMouseLeave={() => setHoverPractitioner(null)}
                />
              )}
            </label>
          );
        })}
      </div>
      <p className={styles.subquestion}>Do you have any feedback to share ?</p>
      <textarea
        className={styles.textArea}
        placeholder="Share your feedback"
        onChange={(e) => setPractionerFeedback(e.target.value)}
      ></textarea>
      <Link href="/doctor-review/submit">
        <Btn title="Submit" onClick={sendRate}></Btn>
      </Link>
    </div>
  );
};

export default DoctorReview;

// "use client";
// import styles from "./doctorReview.module.css";
// import React, { useState } from "react";
// import ReactStars from "react-rating-stars-component";
// import Btn from "@/src/component/button/button";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import api from "@/config-API/config-API";
// import Cookies from "js-cookie";
// const DoctorReview = () => {
//   const [rate, setRate] = useState(0);
//   const [descriptionDoctor, setDescriptionDoctor] = useState("");

//   const token = Cookies.get("token");
//   const sendRate = async () => {
//     console.log(rate, descriptionDoctor);
//     try {
//       const response = await api.post(
//         `practitioner/${8}/Review`, // Make sure to use the correct URL path
//         {
//           rating: rate,
//           description: descriptionDoctor,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const ratingChanged = (newRating) => {
//     setRate(newRating);
//     console.log(newRating);
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.title}>Rate your experience</div>
//       <p className={styles.question}>
//         How was your experience with {"clinic name"}
//       </p>
//       <ReactStars
//         count={5}
//         onChange={ratingChanged}
//         size={32}
//         isHalf={true}
//         className="color-star"
//         emptyIcon={<i className="far fa-star"></i>}
//         halfIcon={<i className="fa fa-star-half-alt"></i>}
//         fullIcon={<i className="fa fa-star"></i>}
//         activeColor="#A75CFF"
//       />

//       <p className={styles.subquestion}>Do you have any feedback to share ?</p>
//       <textarea className={styles.textArea} placeholder="Share your feedback" />
//       <p className={styles.question2}>
//         How was your experience with {"Practitionr name"}
//       </p>
//       <ReactStars
//         count={5}
//         onChange={ratingChanged}
//         size={32}
//         isHalf={true}
//         emptyIcon={<i class="fa-solid fa-star"></i>}
//         halfIcon={<i className="fad fa-star-half-alt"></i>}
//         fullIcon={<FontAwesomeIcon icon={faStar} />}
//         activeColor="#A75CFF"
//       />

//       <p className={styles.subquestion}>Do you have any feedback to share ?</p>
//       <textarea
//         className={styles.textArea}
//         onChange={(e) => setDescriptionDoctor(e.target.value)}
//         placeholder="Share your feedback"
//       />
//       <Link href={"/doctor-review/submit"}>
//         <Btn onClick={sendRate} title={"Submit"}></Btn>
//       </Link>
//     </div>
//   );
// };

// export default DoctorReview;
