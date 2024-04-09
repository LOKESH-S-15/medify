import React, { useState } from "react";
import Header from "../Header/Header";
import style from "./FindDoctors.module.css";
import SearchCard from "./SearchCard/SearchCard";
import MedicalCenters from "./MedicalCenters/MedicalCenters";

const FindDotors = () => {
  const [medicalCenters, setmedicalCenters] = useState([]);
  const handleMedicalCenters = (Centers) => {
    setmedicalCenters(Centers);
  };
  return (
    <div className={style.pageCon}>
      <div className={style.HeadlineCon}>
        <h1 className={style.HeadlineText}>
          {" "}
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </h1>
      </div>
      <Header selectedTab="Find Doctors" />
      <SearchCard handleMedicalCenters={handleMedicalCenters} />
      {medicalCenters.length > 0 ? (
        <MedicalCenters medicalCenters={medicalCenters} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FindDotors;
