import React from "react";
import Button from "@mui/material/Button";
import style from "./MedicalCenterCard.module.css";
import hospitalLogo from "../../../../Assests/hospitalLogo.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BookingSection from "../BookingSection/BookingSection";

const MedicalCenterCard = ({ center, timeSlotsList, handleBooking }) => {
  const [bookingTab, setBookingTab] = React.useState(false);
  const showBooking = (value) => {
    setBookingTab(value);
  };

  return (
    <div className={style.MedicalCenterCardCon}>
      <div className={style.MedicalCenterCardTopCon}>
        <div className={style.MedicalCenterCardDetailsCon}>
          <div className={style.MedicalCenterCardImgCon}>
            <div className={style.MedicalCenterCardImg}>
              <img src={hospitalLogo} alt="hospitalLogo" />
            </div>
          </div>
          <div className={style.MedicalCenterCardDetailsSubCon}>
            <h1 className={style.MedicalCenterCardHospitalName}>
              {center["Hospital Name"]}
            </h1>
            <p className={style.MedicalCenterCardAdd}>
              {center["City"]},{center["State"]}
            </p>
            <p className={style.MedicalCenterCardtype}>
              {center["Hospital Type"]}
            </p>
            <p className={style.MedicalCenterCardtype}>More</p>
            <p className={style.MedicalCenterCardPrice}>
              <span> Free</span>
              <span>₹ 500</span>
              Consultation fee at clinic
            </p>
            <div className={style.MedicalCenterCardRating}></div>
          </div>
        </div>
        <div className={style.MedicalCenterCardBookCon}>
          <p></p>
          <Button
            className={style.MedicalCenterCardBookbtn}
            variant="contained"
            onClick={() => showBooking(true)}
          >
            Book An appointment
          </Button>
        </div>
      </div>

      {bookingTab ? (
        <BookingSection
          timeSlotsList={timeSlotsList}
          handleBooking={handleBooking}
          center={center}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MedicalCenterCard;
