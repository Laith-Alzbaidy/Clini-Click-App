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
import Btn from "@/src/component/button/button";

import { use } from "react";
import SlideUpPage from "@/src/component/slideupModal/slideUpPage";

export default function Home() {
  const data = "hello"
  return (
    <>
      <Header />
      <Hero />
      <About />
      <OurTeam />
      <SlideUpPage data={data}/>
      <Location />
      <OurAmenities />
      <OurBusiness />
      <Icon />
      <Link href="categories">
        <Btn title="Book appointment" />
      </Link>
    </>
  );
}
