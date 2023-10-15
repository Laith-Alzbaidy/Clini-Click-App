import React from "react";
import styles from "./sub.module.css";
import Image from "next/image";
import Link from "next/link";
import RadioButtons from "../../../src/component/radioButton/radioButton";
import Btn from '../../../src/component/button/button';
import backicon from "../assets/conhh.svg";


const free = [{ label: "Free", value: "option1" }];

const Body = [
  { label: "Arms", value: "option1" },
  { label: "Back", value: "option2", price: "+ AED 400" },
  { label: "Legs", value: "option3", price: "+ AED 100" },
];
const Device = [
  { label: "Not sure? Let the clinic decide", value: "option1" },
  { label: "Gentle Max Pro - 20 min", value: "option2", price: "" },
  { label: "Elite - 20 min", value: "option3", price: "+ AED 200" },
];
const Sessions = [
  { label: "1 session", value: "option1" },
  { label: "2 session", value: "option2", price: "+ AED 100" },
  { label: "3 session", value: "option3", price: "+ AED 200" },
];

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SubCategory = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <>
      <Link href={"/categories"}>
        <Image
          className={styles.backIcon}
          src={backicon}
          alt="Description of the image"
          width={15}
          height={15}
        />
      </Link>
      <img className={styles.background} src="/assets/background.svg" />
      <div className={styles.container}>
        <div className={styles.subName}>{data.title}</div>
        <div className={styles.subDuration}>20 min </div>
        <div className={styles.subDiscreption}>
          Lorem ipsum dolor sit amet, consectetur amet adipiscing elit.
        </div>
        <Link
          href={{
            pathname: "/categories/sub-info",
            query: { search: params.id },
          }}
          className={styles.learnMore1}>
          learn more
        </Link>
        <div className={styles.constContainer}>
          <div className={styles.constChildContainer}>
            <div>constulate only</div>
            <div>- 20 min</div>
          </div>
          <div className={styles.customradio}>
            <RadioButtons options={free} />
          </div>
        </div>

        <div
          style={{
            width: "90%",
            margin: "0.5rem auto",
            border: "solid 1px #ECECEC",
          }}></div>

        <div>
          <div className={styles.SelectHeader}>
            <div>Body Area</div>
            <div>Required</div>
          </div>
          <RadioButtons options={Body} />
        </div>
        <div
          style={{
            width: "80%",
            margin: "1rem auto",
            border: "solid 1px #E8F3F1",
          }}></div>
        <div>
          <div className={styles.SelectHeader}>
            <div>Device</div>
            <div>Required</div>
          </div>
          <RadioButtons options={Device} />
        </div>
        <div
          style={{
            width: "80%",
            margin: "1rem auto",
            border: "solid 1px #E8F3F1",
          }}></div>
        <div>
          <div className={styles.SelectHeader}>
            <div>Body Area</div>
            <div>Required</div>
          </div>
          <RadioButtons options={Sessions} />
        </div>

        <div
          style={{
            width: "80%",
            margin: "1rem auto",
            border: "solid 1px #E8F3F1",
          }}></div>
        <p className={styles.noPayment}>
          No payment will be taken until your appointment
        </p>

        <Btn title={`Continue to book AED 200`} />
    
      </div>
    </>
  );
};

export default SubCategory;
