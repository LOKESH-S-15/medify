import React from "react";
import Divider from "@mui/material/Divider";
import style from "./ConnetUs.module.css";
import Vector from "../../../Assests/Vector.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const ConnetUs = () => {
  return (
    <div className={style.ConnetUsCon}>
      <div className={style.ConnetUsTopCon}>
        <div className={style.ConnetUsTopDetailsCon}>
          <div className={style.ConnetUsConnectImgCon}>
            <div className={style.ConnetUsLogo}>
              <div className={style.ConnetUsImg}>
                <Vector />
              </div>
              <h1 className={style.ConnetUsLogoText}>Medify</h1>
            </div>
            <div>
              <div className={style.ConnectImg}>
                <FaFacebookF />
              </div>
              <div className={style.ConnectImg}>
                <FaTwitter />
              </div>
              <div className={style.ConnectImg}>
                <FaYoutube />
              </div>
              <div className={style.ConnectImg}>
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
        <div className={style.MoreListCon}>
          <ul className={style.MoreList}>
            <li className={style.MoreListItem}>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                About Us
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Our Pricing
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Our Gallery
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Appointment
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className={style.MoreListCon}>
          <ul className={style.MoreList}>
            <li className={style.MoreListItem}>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                About Us
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Our Pricing
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Our Gallery
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Appointment
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className={style.MoreListCon}>
          <ul className={style.MoreList}>
            <li className={style.MoreListItem}>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                About Us
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Our Pricing
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Our Gallery
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Appointment
              </a>
            </li>
            <li>
              <MdOutlineKeyboardArrowLeft className={style.MoreListImg} />
              <a href="#" className={style.MoreListText}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Divider />
      <h1></h1>
    </div>
  );
};

export default ConnetUs;
