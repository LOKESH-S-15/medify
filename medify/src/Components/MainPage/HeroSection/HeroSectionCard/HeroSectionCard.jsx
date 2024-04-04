import React from "react";
import { HeroSectionImg } from "../../../../";
import heroSection from "../../../../Assests/mainPageheroImage.svg";
import style from "./HeroSectionCard.module.css";
const HeroSectionCard = () => {
  return (
    <div className={style.HeroSectionCardCon}>
      <div className={style.HeroSectionCardDetailsCon}>
        <p className={style.HeroSectionCardFirstLine}>
          Skip the travel! Find Online
        </p>
        <h2 className={style.HeroSectionCardSecondLine}>
          Medical <span>Centers</span>
        </h2>
        <p className={style.HeroSectionCardThirdLine}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <button className={style.HeroSectionCardButton}>Find Centers</button>
      </div>
      <div className={style.HeroSectionCardImgCon}>
        <img
          className={style.HeroSectionCardImg}
          src={heroSection}
          alt="heroSection"
        />
      </div>
    </div>
  );
};

export default HeroSectionCard;
