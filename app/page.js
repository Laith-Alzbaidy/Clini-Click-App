"use client";
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

const getData = async () => {
  const response = await api.get("clinic?clinicName=AbdullahClinic");
  return response;
};
export default async function Home() {
  const data = (await getData()) || [];
  console.log("**************", data.data.responseData);

  return (
    <>
      <div className="container1">
        <Header data={data.data.responseData} />
        <Hero data={data.data.responseData} />
        <About data={data.data.responseData} />
        {/* <OurTeam /> */}
        <SlideUpDoctor data={data.data.responseData} />
        <Location data={data.data.responseData} />
        <OurAmenities data={data.data.responseData} />
        <OurBusiness data={data.data.responseData} />
        <Icon data={data.data.responseData} />
        <Link href="categories">
          <StickyButton title="Book appointment" />
        </Link>
        <div className="container-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
