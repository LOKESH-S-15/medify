import React from "react";
import logo from "../../Assests/logo.jpg";
import heroSection from "../../Assests/mainPageheroImage.svg";
import docter from "../../Assests/docter.png";

import lab from "../../Assests/lab.png";
import ambulance from "../../Assests/ambulance.png";
import medicalStore from "../../Assests/medical-store.png";
import hospital from "../../Assests/hospital.png";

export const Logo = () => {
  return <img src={logo} alt="logo" />;
};
export const HeroSectionImg = () => {
  return <img src={heroSection} alt="heroSection" />;
};
export const Docter = () => {
  return <img src={docter} alt="docter" />;
};
export const Lab = () => {
  return <img src={lab} alt="lab" />;
};
export const Ambulance = () => {
  return <img src={ambulance} alt="ambulance" />;
};
export const MedicalStore = () => {
  return <img src={medicalStore} alt="medicalStore" />;
};
export const Hospital = () => {
  return <img src={hospital} alt="hospital" />;
};
