import React from "react";
import styles from "./OurMedicalSpecialist.module.css";
import Neurologist from "../../../Assests/toppng 1.png";
import Orthopadics from "../../../Assests/PngItem_1939059 1.png";
import Medicine from "../../../Assests/kindpng_1018785 1.png";
const OurMedicalSpecialistCard = ({ index }) => {
  const data = [
    {
      img: Neurologist,
      name: "Ahmad Khan",
      label: "Neurologist",
    },
    { img: Orthopadics, name: "Heena Sachdeva", label: "Orthopadics" },
    { img: Medicine, name: "Ankur Sharma", label: "Medicine" },
  ];
  const doc = data[index % 3];
  return (
    <div className={styles.OurMedicalSpecialistCardCon}>
      <div className={styles.OurMedicalSpecialistCardImgCon}>
        <img src={doc.img} alt={doc.label} />
      </div>
      <h1 className={styles.OurMedicalSpecialistCardHead}>{doc.name}</h1>
      <p className={styles.OurMedicalSpecialistCardPara}>{doc.label}</p>
    </div>
  );
};

export default OurMedicalSpecialistCard;
