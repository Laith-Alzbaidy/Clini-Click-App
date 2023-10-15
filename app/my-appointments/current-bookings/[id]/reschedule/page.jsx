'use client'
import React , {useState} from "react";
import styles from "./reschedule.module.css";
import Link from "next/link";
import back from "../../../assets/conhh.svg";
import user from "../../../assets/user.svg";
import Image from "next/image";


const Reschedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Link href={"/categories"}>
            <Image src={back} className={styles.backIcon} />
          </Link>

          <Link href={"/profile"}>
            <Image src={user} />
          </Link>
        </div>

        <div className={styles.title}>Reschedule appointment</div>
        <div className={styles.subTitle}>Which day would you like to book?</div>
      </div>

      <div className="form-group">
        
      <select className="form-control" id="exampleSelect">
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
    </div>
    </>
  );
};

export default Reschedule;
