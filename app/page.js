import Link from "next/link";
import Header from "@/src/component/header/header";
import Hero from "@/src/component/hero/hero";
import About from "@/src/component/about/about";
import OurTeam from "@/src/component/ourTeam/ourteam";
import Location from "@/src/component/location/location";
import OurAmenities from "@/src/component/OurAmenities/ourAmenities";
import OurBusiness from "@/src/component/ourBusiness/ourBusiness";
import Icon from "@/src/component/icon/icon";
import Btn from "@/src/component/button/button";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <OurTeam />
      <Location />
      <OurAmenities />
      <OurBusiness />
      <Icon />
      <Btn title="Book appointment" />
    </>
  );
}
