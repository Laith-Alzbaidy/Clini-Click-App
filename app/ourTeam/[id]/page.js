"use client";
import { NextSeo } from "next-seo";
import OurTeamSpecific from "@/src/component/ourTeam/ourTeamSpecific/ourTeamSpecific";
const Page = () => {
  return (
    <>
      <NextSeo
        title="Our Team Page - Your Website Name"
        description="Meet our amazing team members and learn about what we do."
      />
      <OurTeamSpecific />
    </>
  );
};

export default Page;
