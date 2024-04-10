import React, { useState } from "react";
import Header from "../Header/Header";
import style from "./FindDoctors.module.css";
import SearchCard from "./SearchCard/SearchCard";
import MedicalCenters from "./MedicalCenters/MedicalCenters";
import Footer from "../Footer/Footer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const FindDotors = () => {
  const [medicalCenters, setmedicalCenters] = useState([]);
  const handleMedicalCenters = (Centers) => {
    setmedicalCenters(Centers);
  };
  const [loading, setLoading] = useState(false);
  const handleProgess = (type) => {
    setLoading(type);
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
      <SearchCard
        handleMedicalCenters={handleMedicalCenters}
        handleProgess={handleProgess}
      />

      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
        >
          <CircularProgress />
        </Box>
      ) : medicalCenters.length > 0 ? (
        <MedicalCenters medicalCenters={medicalCenters} />
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
        >
          <p>No Medical Centers available in this area</p>
        </Box>
      )}
      <Footer />
    </div>
  );
};

export default FindDotors;
