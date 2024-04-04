import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import AdSectionCard from "./AdSectionCard";
import styles from "./AdSection.module.css";
const AdSection = () => {
  return (
    <div className={styles.AdSectionCon}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {[...Array(5)].map((_, i) => {
          return (
            <SwiperSlide>
              {" "}
              <AdSectionCard index={i} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AdSection;
