import React from "react";
import ad1 from "../../../Assests/ad1.png";
import ad2 from "../../../Assests/ad1.png";
import styles from "./AdSection.module.css";

const AdSectionCard = ({ index }) => {
  return (
    <div className={styles.AdSectionCardCon}>
      {index % 2 === 0 ? (
        <img src={ad1} alt="ad1" />
      ) : (
        <img src={ad2} alt="ad1" />
      )}
    </div>
  );
};

export default AdSectionCard;
