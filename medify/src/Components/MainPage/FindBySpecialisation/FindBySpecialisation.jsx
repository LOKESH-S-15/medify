import React from "react";
import styles from "./FindBySpecialisation.module.css";
import Laboratory from "../../../Assests/Laboratory.png";
import Cardiology from "../../../Assests/Cardiology.png";
import MRIResonance from "../../../Assests/MRI Resonance.png";
import BloodTest from "../../../Assests/Blood Test.png";
import Piscologist from "../../../Assests/Piscologist.png";
import XRay from "../../../Assests/X-Ray.png";
import Button from "@mui/material/Button";

const FindBySpecialisation = () => {
  return (
    <div className={styles.FindBySpecialisationCon}>
      <h2 className={styles.FindBySpecialisationhead}>
        Find By Specialisation
      </h2>
      <div className={styles.FindBySpecialisationDetailsCon}>
        <div className={styles.FindBySpecialisationCardInnerInnerCon}>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={Laboratory}
                alt="Dentistry"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>Dentistry</p>
          </div>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={Laboratory}
                alt="Primary Care"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>Primary Care</p>
          </div>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={Cardiology}
                alt="Cardiology"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>Cardiology</p>
          </div>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={MRIResonance}
                alt="MRI Resonance"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>MRI Resonance</p>
          </div>
        </div>
        <div className={styles.FindBySpecialisationCardInnerCon}>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={BloodTest}
                alt="Blood Test"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>Blood Test</p>
          </div>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={Piscologist}
                alt="Piscologist"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>Piscologist</p>
          </div>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={Laboratory}
                alt="Laboratory"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>Laboratory</p>
          </div>
          <div className={styles.FindBySpecialisationCardCon}>
            <div className={styles.FindBySpecialisationImgCon}>
              <img
                src={XRay}
                alt="X-Ray"
                className={styles.FindBySpecialisationImg}
              />
            </div>
            <p className={styles.FindBySpecialisationCardText}>X-Ray</p>
          </div>
        </div>
      </div>
      <Button variant="contained" className={styles.SearchSectionInputBtn}>
        view All
      </Button>
    </div>
  );
};

export default FindBySpecialisation;
