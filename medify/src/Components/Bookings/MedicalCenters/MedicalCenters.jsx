import React from "react";
import MedicalCenterCard from "./MedicalCenterCard/MedicalCenterCard";
import styles from "./MedicalCenter.module.css";
const MedicalCenters = ({ medicalCenters }) => {
  return (
    <div className={styles.MedicalCentersCon}>
      <div className={styles.MedicalCentersMainCon}>
        <div className={styles.MedicalCentersSubCon}>
          <div className={styles.MedicalCentersCardCon}>
            {medicalCenters.map((each, index) => {
              console.log(each);
              return (
                <MedicalCenterCard
                  key={index}
                  center={each.center}
                  timeSlot={each.slot}
                />
              );
            })}
          </div>
          <div className={styles.MedicalCentersCardSubCon}></div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenters;
