// "use client";
// import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import close from "./assets/image/close.svg";
// import Image from "next/image";
// import styles from "./styles/popup-card-payment.module.css";
// function PopupCardPayment({ onHide, show }) {
//   // const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     cardHolder: "",
//     expiryDate: "",
//     cvv: "",
//   });

//   const handleClose = () => onHide(false);
//   // const handleShow = () => handleClosePaymentCardPopup(true);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     console.log();
//     if (
//       formData.cardHolder !== "" &&
//       formData.cardNumber !== "" &&
//       formData.expiryDate !== "" &&
//       formData.cvv.length >= 3
//     ) {
//       handleClose();
//     }
//   };

//   return (
//     <>
//       <Modal centered show={show} onHide={onHide} animation={false}>
//         <Modal.Body>
//           <div className={styles["container-body"]}>
//             <div className={styles["header"]}>
//               <h2 className={styles["title-header"]}>Card details</h2>
//               <Image
//                 className="close-btn"
//                 src={close}
//                 onClick={handleClose}
//                 alt="close"
//               />
//             </div>
//             <p className={styles["sub-title"]}>
//               Card details are required to confirm your appointment
//             </p>

//             <div className="mt-4">
//               <div className={styles["container-input"]}>
//                 <label className={styles["lable-input"]} htmlFor="cardNumber">
//                   Card Number
//                 </label>
//                 <input
//                   type="text"
//                   className={styles["input"]}
//                   id="cardNumber"
//                   name="cardNumber"
//                   value={formData.cardNumber}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className={styles["container-input"]}>
//                 <label className={styles["lable-input"]} htmlFor="cardHolder">
//                   Card Holder
//                 </label>
//                 <input
//                   type="text"
//                   className={styles["input"]}
//                   id="cardHolder"
//                   name="cardHolder"
//                   value={formData.cardHolder}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className={styles["container-cv-expired"]}>
//                 <div className={styles["container-input"]}>
//                   <label className={styles["lable-input"]} htmlFor="expiryDate">
//                     Expiry Date
//                   </label>
//                   <input
//                     type="text"
//                     className={styles["input"]}
//                     id="expiryDate"
//                     name="expiryDate"
//                     value={formData.expiryDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className={styles["container-input"]}>
//                   <label className={styles["lable-input"]} htmlFor="cvv">
//                     CVV{" "}
//                   </label>
//                   <input
//                     type="text"
//                     className={styles["input"]}
//                     id="cvv"
//                     name="cvv"
//                     value={formData.cvv}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default PopupCardPayment;

"use client";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import close from "./assets/image/close.svg";
import Image from "next/image";
import styles from "./styles/popup-card-payment.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function PopupCardPayment({ onHide, show }) {
  // const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleClose = () => onHide(false);
  // const handleShow = () => handleClosePaymentCardPopup(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log();
    if (
      formData.cardHolder !== "" &&
      formData.cardNumber !== "" &&
      formData.expiryDate !== "" &&
      formData.cvv.length >= 3
    ) {
      handleClose();
    }
  };

  return (
    <>
      <Popup open={show} closeOnEscape position="center">
        <div className={styles["container-body"]}>
          <div className={styles["header"]}>
            <h2 className={styles["title-header"]}>Card details</h2>
            <Image
              className="close-btn"
              src={close}
              onClick={handleClose}
              alt="close"
            />
          </div>
          <p className={styles["sub-title"]}>
            Card details are required to confirm your appointment
          </p>

          <div className="mt-4">
            <div className={styles["container-input"]}>
              <label className={styles["lable-input"]} htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                className={styles["input"]}
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles["container-input"]}>
              <label className={styles["lable-input"]} htmlFor="cardHolder">
                Card Holder
              </label>
              <input
                type="text"
                className={styles["input"]}
                id="cardHolder"
                name="cardHolder"
                value={formData.cardHolder}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles["container-cv-expired"]}>
              <div className={styles["container-input"]}>
                <label className={styles["lable-input"]} htmlFor="expiryDate">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className={styles["input"]}
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles["container-input"]}>
                <label className={styles["lable-input"]} htmlFor="cvv">
                  CVV{" "}
                </label>
                <input
                  type="text"
                  className={styles["input"]}
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}

export default PopupCardPayment;
