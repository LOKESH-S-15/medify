import React from "react";
import styles from "./PaitentCare.module.css";
import care1 from "../../../Assests/care1.png";
import care2 from "../../../Assests/care2.png";
import phone from "../../../Assests/phone.png";
import tick from "../../../Assests/tick.png";

const PaitentCare = () => {
  return (
    <div className={styles.PaitentCareCon}>
      <div className={styles.PaitentCareImgCon}>
        <div className={styles.PaitentCareImg1}>
          <img src={care1} alt="care1" />
        </div>
        <div className={styles.PaitentCareImg2}>
          <img src={care2} alt="care1" />
        </div>
      </div>
      <div className={styles.PaitentCareDetailsCon}>
        <p className={styles.PaitentCareHead}>
          HELPING PATIENTS FROM AROUND THE GLOBE
        </p>
        <h1 className={styles.PaitentCareMainHead}>
          {" "}
          Patient<span> Caring</span>{" "}
        </h1>
        <p className={styles.PaitentCareMainPara}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare
        </p>
        <div className={styles.PaitentCareBottomcon}>
          <img src={tick} alt="tick" />
          <h2 className={styles.PaitentCarePara}>
            Stay Updated About Your Health
          </h2>
        </div>
        <div className={styles.PaitentCareBottomcon}>
          <img src={tick} alt="tick" />
          <h2 className={styles.PaitentCarePara}>Check Your Results Online</h2>
        </div>
        <div className={styles.PaitentCareBottomcon}>
          <img src={tick} alt="tick" />
          <h2 className={styles.PaitentCarePara}>Manage Your Appointments</h2>
        </div>
      </div>
    </div>
  );
};

export default PaitentCare;
