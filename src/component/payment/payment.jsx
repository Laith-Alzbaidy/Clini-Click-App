import React from "react";
import ClosePrev from "@/src/component/close-prev/close-prev";
import styles from "./styles/payment.module.css";
import promocode from "./assets/image/promo-code.svg";
import Image from "next/image";
import call from "./assets/image/call.svg";
import location from "./assets/image/location.svg";
import Btn from "../button/button";
import PopupPayment from "../popup-payment/popup-payment";

const Payment = () => {
  return (
    <div>
      <ClosePrev />
      <div className={styles["header"]}>
        <p className={styles["step"]}>Step 3 of 3</p>
        <h1 className={styles["title"]}>Confirm and book</h1>
      </div>

      <form>
        <label htmlFor="promo-code">
          <div className={styles.subTitle}>offer</div>
        </label>
        <div className={styles.inputContainer}>
          <Image
            className={styles["icon-promo"]}
            src={promocode}
            alt="icon code"
            width={29}
            height={18}
          />
          <input
            type="text"
            id="promo-code"
            name="promoCode"
            placeholder="Enter promo code"
            required
            className={styles["input-promocode"]}
          />
        </div>
      </form>

      <div className={styles["line"]}></div>

      <div>
        <div className={styles.subTitle}>Your appointment details</div>
        <div className={styles.bookingContainer}>
          <div className={styles.treatmentContainer}>
            <div>Treatment:</div>
            <div className={styles.treatmentDeatils}>
              <div className={styles.treatmentName}>Laser hair removal</div>
              <div>Body area: Arms</div>
              <div>Device: Gentle Max Pro</div>
              <div>Sessions: 1</div>
            </div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Practitioner</div>
            <div>Dr. Basel Habayeb</div>
          </div>
          <div className={styles.practitionerContainer}>
            <div>Timing:</div>
            <div>Wed, 23 Jul at 2:00 PM</div>
          </div>
        </div>
        <div className={styles.totalContainer}>
          <div>
            Order total <span>(incl.tax)</span>
          </div>
          <div>AED 300</div>
        </div>
      </div>

      <div className={styles["line"]}></div>

      <div>
        <div className={styles.subTitle}>Location</div>

        <iframe
          width="100%"
          style={{ borderRadius: 20 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS`}
          allowFullScreen
          title="My Map"
        ></iframe>
        <div className={styles["container-icon"]}>
          <div className={styles["content-icon"]}>
            <Image
              width={24}
              height={24}
              src={call}
              className={styles["icon"]}
              alt="call"
            />
            <p className={styles["text-icon"]}>+971-5-000000000</p>
          </div>
          <div className={styles["content-icon"]}>
            <Image
              width={24}
              height={24}
              src={location}
              className={styles["icon"]}
              alt="location"
            />
            <p className={styles["text-icon"]}>Dubai Marina, Dubai</p>
          </div>
        </div>
      </div>

      <div className={styles["line"]}></div>

      <div>
        <div className={styles.subTitle}>Pay with</div>
        <PopupPayment />
        <p className="text-left">
          No payment will be taken until your appointment
        </p>
      </div>

      <div className={styles["line"]}></div>
      <div>
        <div className={styles.subTitle}>Cancellation policy</div>
        <p>
          A fee of <b>AED 100 </b>may be charged if you cancel within{" "}
          <b>24 hours</b>, or a fee of <b>AED 300</b> may be charged if you miss
          your appointment.
        </p>
      </div>
      <div className={styles["line"]}></div>
      <p className={styles["privacy"]}>
        By selecting the button below, I agree to the <b>T&Cs</b> and{" "}
        <b>Privacy Policy</b>
        and confirm that I am 18 years or older
      </p>
      <Btn title="Book with Apple Pay/ Google Pay" marginTop={10} />
      <Btn title="Book appointment" marginTop={10} />
    </div>
  );
};

export default Payment;
