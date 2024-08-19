import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Mens_Kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg-px-10">
        <HomeSectionCarousel data={mens_kurta} /> <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>{" "}
    </div>
  );
};

export default HomePage;
