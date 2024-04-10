import React, { useEffect } from "react";
import Header from "../Header/Header";
import { CityApi, StateApi, MedicalCentersApi } from "../Api/Api";
import HeroSection from "./HeroSection/HeroSection";
import SearchSection from "./SearchSection/SearchSection";
import AdSection from "./AdSection/AdSection";
import FindBySpecialisation from "./FindBySpecialisation/FindBySpecialisation";
import OurMedicalSpecialist from "./OurMedicalSpecialist/OurMedicalSpecialist";
import PaitentCare from "./PaitentCare/PaitentCare";
import LastNews from "./LatestNews/LastNews";
import OurFamily from "./OurFamily/OurFamily";
import HeadLine from "../HeadLine";
import Faqs from "../Footer/Faqs/Faqs";
import ConnetUs from "../Footer/ConnetUs/ConnetUs";
import Footer from "../Footer/Footer";
const MainPage = () => {
  const getMedicalCenter = async (state, city) => {
    const MedicalCenters = await MedicalCentersApi(state, city);
    return MedicalCenters;
  };

  return (
    <div className="">
      <HeadLine />
      <Header />

      {<HeroSection />}

      <AdSection />
      <FindBySpecialisation />
      <OurMedicalSpecialist />
      <PaitentCare />
      <LastNews />
      <OurFamily />
      <Footer />
    </div>
  );
};

export default MainPage;
