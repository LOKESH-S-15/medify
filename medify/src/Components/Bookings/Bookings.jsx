import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./Booking.module.css";
import SearchCard from "./SearchCard/SearchCard";
import MedicalCenterCard from "./MedicalCenters/MedicalCenterCard/MedicalCenterCard";
import MedicalCenters from "./MedicalCenters/MedicalCenters";
import { Hospital } from "../Image/Image";
import Box from "@mui/material/Box";
const Bookings = () => {
  const [medicalCenters, setmedicalCenters] = useState([]);
  useEffect(() => {
    getfromLocalStorage();
  }, []);
  const getfromLocalStorage = () => {
    const search = localStorage.getItem("booking");

    if (search) {
      const data = JSON.parse(search);
      setmedicalCenters(data);
    }
  };

  const handleMedicalCenters = (searchValue) => {
    if (searchValue) {
      let newArr = medicalCenters.filter((each) => {
        return each.center["Hospital Name"].toLowerCase().includes(searchValue);
      });
      setmedicalCenters(newArr);
    } else {
      getfromLocalStorage();
    }
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
        <p> My Booking</p>
      </div>
      <Header />

      <SearchCard handleMedicalCenters={handleMedicalCenters} />

      {medicalCenters.length > 0 ? (
        <MedicalCenters medicalCenters={medicalCenters} />
      ) : (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "15%" }}
        >
          <p>
            The Medical Centers you are looking for is not available in this
            area
          </p>
        </Box>
      )}
      <Footer />
    </div>
  );
};

export default Bookings;
