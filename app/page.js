// import Link from "next/link";
// import Header from "@/src/component/header/header";
// import Hero from "@/src/component/hero/hero";
// import About from "@/src/component/about/about";
// import OurTeam from "@/src/component/ourTeam/ourteam";
// import Location from "@/src/component/location/location";
// import OurAmenities from "@/src/component/OurAmenities/ourAmenities";
// import OurBusiness from "@/src/component/ourBusiness/ourBusiness";
// import Icon from "@/src/component/icon/icon";
// import StickyButton from "@/src/component/stickyButton/stickyButton";
// import Footer from "@/src/component/footer/footer";
// import SlideUpDoctor from "@/src/component/slideupModal/slideUpDoctor/slideUpDoctor";
// import api from "@/config-API/config-API";

// const getData = async () => {
//   const response = await api.get("clinic?clinicName=AbdullahClinic");

//   return response;
// };

// export default async function Home() {
//   const data = (await getData()) || [];
//   console.log("**************", data.data.responseData);

//   return (
//     <>
//       <div className="container1">
//         <Header data={data.data.responseData} />
//         <Hero data={data.data.responseData} />
//         <About data={data.data.responseData} />
//         {/* <OurTeam /> */}
//         <SlideUpDoctor data={data.data.responseData} />
//         <Location data={data.data.responseData} />
//         <OurAmenities data={data.data.responseData} />
//         <OurBusiness data={data.data.responseData} />
//         <Icon data={data.data.responseData} />
//         <Link href="categories">
//           <StickyButton title="Book appointment" />
//         </Link>
//         <div className="container-footer">
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/src/component/header/header";
import Hero from "@/src/component/hero/hero";
import About from "@/src/component/about/about";
import OurTeam from "@/src/component/ourTeam/ourteam";
import Location from "@/src/component/location/location";
import OurAmenities from "@/src/component/OurAmenities/ourAmenities";
import OurBusiness from "@/src/component/ourBusiness/ourBusiness";
import Icon from "@/src/component/icon/icon";
import StickyButton from "@/src/component/stickyButton/stickyButton";
import Footer from "@/src/component/footer/footer";
import SlideUpDoctor from "@/src/component/slideupModal/slideUpDoctor/slideUpDoctor";
import api from "@/config-API/config-API";
import CardBook from "@/src/component/view-desktop/card-book/card-book";
import PopupDoctor from "@/src/component/popup-view-desktop/popup-doctor/popup-doctor";
import StarsRate from "@/src/component/stars-rate/stars-rate";
import { useLayoutEffect } from "react";
import Loader from "@/src/component/Loader/Loader";
export default function Home() {
  // console.log(pathname, "pathnamepathnamepathnamepathnamepathname");
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("clinic?clinicName=AbdullahClinic");
        setData(response.data.responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const styleIcon = {
    instagram: { width: 13, height: 17 },
    facebook: { width: 14, height: 12 },
    linkedin: { width: 14, height: 12 },
    x: { width: 13, height: 12 },
  };
  // }
  if (!data || data.length === 0) {
    return <Loader />;
  }
  return (
    <>
      <div className="container1">
        <div id="header-home">
          <Header data={data} />
        </div>
        <Hero data={data} />
        <div className="column-page">
          <About data={data} />
          {/* <OurTeam /> */}
          <div className="popup-doctor">
            <PopupDoctor data={data} />
          </div>
          <div className="slide-up-doctor">
            <SlideUpDoctor data={data} />
          </div>
          <div className="container-loc-mobile">
            <Location data={data} />
          </div>
          <OurAmenities data={data} />
          <OurBusiness data={data} />
          <div className="container-loc-desktop">
            <Location data={data} />
          </div>
        </div>
        <div className="icon-mobile">
          <Icon data={data} />
        </div>
        <Link className="sticky-btn-desktop" href="categories">
          <StickyButton title="Book appointment" />
        </Link>
        <div className="container-footer">
          <Footer />
        </div>
        <div className="card-book-desktop">
          <CardBook data={data} />
        </div>
      </div>
    </>
  );
}
