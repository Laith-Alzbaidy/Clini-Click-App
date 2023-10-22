import React from "react";
import styles from "./sub.module.css";
import Image from "next/image";
import Link from "next/link";
import RadioButtons from "../../../src/component/radioButton/radioButton";
import Btn from "../../../src/component/button/button";
import backicon from "../assets/conhh.svg";
import background from "../assets/g.png";

const free = [{ label: "Free", value: "Free" }];

const Body = [
  { label: "Arms", value: "Arms" },
  { label: "Back", value: "Back", price: "+ AED 400" },
  { label: "Legs", value: "Legs", price: "+ AED 100" },
];

const Device = [
  {
    label: "Not sure? Let the clinic decide",
    value: "Not sure? Let the clinic decide",
  },
  {
    label: "Gentle Max Pro - 20 min",
    value: "Gentle Max Pro - 20 min",
    price: "",
  },
  { label: "Elite - 20 min", value: "Elite - 20 min", price: "+ AED 200" },
];

const Sessions = [
  { label: "1 session", value: "1 session" },
  { label: "2 session", value: "2 session", price: "+ AED 100" },
  { label: "3 session", value: "3 session", price: "+ AED 200" },
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

      <div className={styles.containerHero}>
        <Image
          fill
          src={background}
          className={styles.background}
          alt="background"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.subName}>{data.title}</div>
        <div className={styles.subDuration}>20 min </div>
        <div className={styles.subDiscreption}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut.....
        </div>
        <Link
          href={{
            pathname: "/categories/sub-info",
            query: { search: params.id },
          }}
          className={styles.learnMore1}
        >
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
          }}
        ></div>

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
          }}
        ></div>
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
          }}
        ></div>
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
          }}
        ></div>
        <p className={styles.noPayment}>
          No payment will be taken until your appointment
        </p>

        <Link href="/practitioner">
          <Btn title={`Continue to book AED 200`} />
        </Link>
      </div>
    </>
  );
};

export default SubCategory;
