'use client'
import React , {useEffect , useState}from "react";
import styles from "./sub.module.css";
import Image from "next/image";
import Link from "next/link";
import RadioButtons from "../../../../src/component/radioButton/radioButton";
import Btn from "../../../../src/component/button/button";
import backicon from "../../assets/conhh.svg";
import background from "../../assets/g.png";
import StickyButton from "@/src/component/stickyButton/stickyButton";
import SlideUpPage from "@/src/component/slideupModal/slideUpPage";
import Light from "@/src/component/lines/light";
import Bold from "@/src/component/lines/bold";
import { useRouter } from "next/navigation";
import api from '@/config-API/config-API';
import { useSearchParams } from 'next/navigation'
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
const SubCategory = () => {
  const [data, setData] = useState(null);
  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(
          `categories/${category}/subcategories/${subcategory}`
        );
        const responseData = response.data.responseData;
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(null); 
      }
    }

    if (category && subcategory) {
      fetchData();
    }
  }, [category, subcategory]); 

  if (!data) {
    return <div>Error fetching data</div>;
  }
  const linestyle = {
    marginTop:"16px",
    marginBottom:"20px"
  }
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
        <div className={styles.mainContainer}>
          <div className={styles.subName}>{data.name}</div>
          <div className={styles.subDuration}>{data.defaultDuration} min</div>
          <div className={styles.subDiscreption}>
           {data.description}
          </div>
        </div>
        <SlideUpPage data={data} />
        <div className={styles.constContainer}>
          <div className={styles.constChildContainer}>
            <div>constulate only</div>
            <div>- 20 min</div>

          </div>
          <div className={styles.customradio}>
            <RadioButtons options={free} />
          </div>
        </div>

       <Bold additionalStyles={linestyle}/>

        <div>
          <div className={styles.SelectHeader}>
            <div>Body Area</div>
            <div>Required</div>
          </div>
          <RadioButtons options={Body} />
        </div>
        <div
          style={{
            width: "100%",
            margin: "1rem auto",
            border: "solid 3px #E2E2E2",
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
            width: "100%",
            margin: "1rem auto",
            border: "solid 3px #E2E2E2",
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
            width: "100%",
            margin: "1rem auto",
            border: "solid 3px #E2E2E2",
          }}></div>
        <p className={styles.noPayment}>
          No payment will be taken until your appointment
        </p>

        <Link href="/schedule-appointment">
          <StickyButton title={"Continue to book AED 200"} />
        </Link>
      </div>
    </>
  );
};

export default SubCategory;
