import React from "react";
import HappyPatients from "../../../Assests/happy.png";
import Hospitals from "../../../Assests/hospital.png";
import Laboratories from "../../../Assests/Laboratory.png";
import ExpertDoctors from "../../../Assests/expert-doctor.png";
import styles from "./OurFamily.module.css";
const OurFamily = () => {
  return (
    <div className={styles.OurFamilyCon}>
      <div className={styles.OurFamilyDetailsCon}>
        <p className={styles.OurFamilyDetailsMainPara}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <h1 className={styles.OurFamilyDetailsHead}>Our Families</h1>
        <p className={styles.OurFamilyDetailsPara}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={styles.OurFamilyCard1Con}>
        <div className={styles.OurFamilyCard}>
          <div className={styles.OurFamilyImg1}>
            <img src={HappyPatients} alt="HappyPatients" />
          </div>
          <h1 className={styles.OurFamilyCardHead}>5000+</h1>
          <p className={styles.OurFamilyCardPara}>Happy</p>
        </div>
        <div className={styles.OurFamilyCard}>
          <div className={styles.OurFamilyImg2}>
            <img src={Laboratories} alt="Laboratories" />
          </div>
          <h1 className={styles.OurFamilyCardHead}>1000+</h1>
          <p className={styles.OurFamilyCardPara}>Laboratories</p>
        </div>
      </div>
      <div className={styles.OurFamilyCard2Con}>
        <div className={styles.OurFamilyCard}>
          <div className={styles.OurFamilyImg3}>
            <img src={Hospitals} alt="Hospitals" />
          </div>
          <h1 className={styles.OurFamilyCardHead}>200+</h1>
          <p className={styles.OurFamilyCardPara}>Hospitals</p>
        </div>
        <div className={styles.OurFamilyCard}>
          <div className={styles.OurFamilyImg4}>
            <img src={ExpertDoctors} alt="ExpertDoctors" />
          </div>
          <h1 className={styles.OurFamilyCardHead}>700+</h1>
          <p className={styles.OurFamilyCardPara}>Expert Doctors</p>
        </div>
      </div>
    </div>
  );
};

export default OurFamily;
