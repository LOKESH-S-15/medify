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

const MedicalCenterCard = ({ center, timeSlot }) => {
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

            <div className={style.MedicalCenterCardRating}></div>
          </div>
        </div>
        <div className={style.MedicalCenterCardBookCon}>
          <p>{timeSlot.time}</p>
          <p>{`${new Date(timeSlot.date).getDate()} ${new Date(
            timeSlot.date
          ).toLocaleDateString("en-US", {
            month: "long",
          })} ${new Date(timeSlot.date).getFullYear()}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenterCard;
