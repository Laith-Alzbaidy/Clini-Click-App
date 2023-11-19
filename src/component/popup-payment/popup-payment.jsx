// "use client";
// import React from "react";
// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import close from "./assets/image/close.svg";
// import Image from "next/image";
// import styles from "./styles/popup-payment.module.css";
// import api from "@/config-API/config-API";
// import PopupCardPayment from "../popup-card-payment/popup-card-payment";
// import Light from "../lines/light";
// import Cookies from "js-cookie";
// import { useEffect } from "react";

// function PopupPayment({ selectMethod, setSelectMethod }) {
//   const [show, setShow] = useState(false);
//   const [showPaymentCardPopup, setShowPaymentCardPopup] = useState(false);
//   const [paymentMethods, setpaymentMethods] = useState([]);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleClosePaymentCardPopup = () => {
//     setShowPaymentCardPopup(false);
//   };

//   const handleRadioChange = (method) => {
//     setSelectMethod(method);

//     setTimeout(() => {
//       handleClose(false);
//       setShowPaymentCardPopup(true);
//     }, 1000);
//   };

//   const stylesLine = {
//     marginTop: "5px",
//   };

//   const token = Cookies.get("token");
//   const getMethodPayment = async () => {
//     try {
//       const response = await api.get("/PaymentMethods", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log("method", response.data.responseData);
//       setpaymentMethods(response.data.responseData);
//       // setData(response.data);
//     } catch (error) {
//       console.error("An error occurred:");
//     }
//   };

//   useEffect(() => {
//     getMethodPayment();
//   }, []);

//   return (
//     <>
//       {" "}
//       <button
//         onClick={() => {
//           handleShow();
//         }}
//         id="choose-payment"
//         className={styles["btn-choose-payment"]}
//       >
//         {/* Choose payment method */}
//         {selectMethod?.name ? selectMethod.name : "Choose payment method"}
//       </button>
//       <Modal centered show={show} onHide={handleClose} animation={false}>
//         <Modal.Body>
//           <div className={styles["container-body"]}>
//             <div className={styles["header"]}>
//               <h2 className={styles["title-header"]}>Pay with</h2>
//               <Image
//                 className="close-btn"
//                 src={close}
//                 onClick={handleClose}
//                 alt="close"
//               />
//             </div>
//             <p className={styles["sub-title"]}>
//               No payment will be taken until your appointment
//             </p>

//             <div className={styles["container-payed"]}>
//               {paymentMethods?.map((method) => (
//                 <>
//                   <label className="w-100" key={method.id} htmlFor={method.id}>
//                     <div className="d-flex align-items-center justify-content-between">
//                       <div className="d-flex gap-3 align-items-center">
//                         <span className={styles["text-lable"]}>
//                           {method?.name}
//                         </span>
//                       </div>
//                       <input
//                         type="radio"
//                         id={method.id}
//                         value={method.name}
//                         checked={selectMethod.name === method.name}
//                         onChange={() => {
//                           handleRadioChange(method);
//                           // console.log(method);
//                         }}
//                       />
//                     </div>
//                   </label>

//                   <Light additionalStyles={stylesLine} />
//                 </>
//               ))}
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//       <PopupCardPayment
//         show={showPaymentCardPopup}
//         onHide={handleClosePaymentCardPopup}
//       />
//     </>
//   );
// }

// export default PopupPayment;

"use client";
import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import closebtn from "./assets/image/close.svg";
import Image from "next/image";
import styles from "./styles/popup-payment.module.css";
import api from "@/config-API/config-API";
import PopupCardPayment from "../popup-card-payment/popup-card-payment";
import Light from "../lines/light";
import Cookies from "js-cookie";
import { useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function PopupPayment({ selectMethod, setSelectMethod }) {
  const [show, setShow] = useState(false);
  const [showPaymentCardPopup, setShowPaymentCardPopup] = useState(false);
  const [paymentMethods, setpaymentMethods] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosePaymentCardPopup = () => {
    setShowPaymentCardPopup(false);
  };

  const handleRadioChange = (method, close) => {
    setSelectMethod(method);

    setTimeout(() => {
      // handleClose(close);
      setShowPaymentCardPopup(true);
    }, 1000);
  };

  const stylesLine = {
    marginTop: "5px",
  };

  const token = Cookies.get("token");
  const getMethodPayment = async () => {
    try {
      const response = await api.get("/PaymentMethods", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("method", response.data.responseData);
      setpaymentMethods(response.data.responseData);
      // setData(response.data);
    } catch (error) {
      console.error("An error occurred:");
    }
  };

  useEffect(() => {
    getMethodPayment();
  }, []);

  return (
    <>
      {" "}
      <Popup
        closeOnEscape
        disabled={show}
        trigger={
          <button id="choose-payment" className={styles["btn-choose-payment"]}>
            {/* Choose payment method */}
            {selectMethod?.name ? selectMethod.name : "Choose payment method"}
          </button>
        }
        position="center"
      >
        {(close) => (
          <div className={styles["container-body"]}>
            <div className={styles["header"]}>
              <h2 className={styles["title-header"]}>Pay with</h2>
              <Image
                className="close-btn"
                src={closebtn}
                alt="close"
                onClick={() => setShow(close)}
              />
            </div>
            <p className={styles["sub-title"]}>
              No payment will be taken until your appointment
            </p>

            <div className={styles["container-payed"]}>
              {paymentMethods?.map((method) => (
                <>
                  <label className="w-100" key={method.id} htmlFor={method.id}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex gap-3 align-items-center">
                        <span className={styles["text-lable"]}>
                          {method?.name}
                        </span>
                      </div>
                      <input
                        type="radio"
                        id={method.id}
                        value={method.name}
                        checked={selectMethod.name === method.name}
                        onChange={() => {
                          handleRadioChange(method),
                            setTimeout(() => {
                              // handleClose(close);
                              setShow(close);
                            }, 1000);
                        }}
                      />
                    </div>
                  </label>

                  <Light additionalStyles={stylesLine} />
                </>
              ))}
            </div>
          </div>
        )}
      </Popup>
      <PopupCardPayment
        show={showPaymentCardPopup}
        onHide={handleClosePaymentCardPopup}
      />
    </>
  );
}

export default PopupPayment;
