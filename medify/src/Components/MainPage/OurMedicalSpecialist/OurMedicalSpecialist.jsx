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
import styles from "./OurMedicalSpecialist.module.css";
import OurMedicalSpecialistCard from "./OurMedicalSpecialistCard";
const OurMedicalSpecialist = () => {
  return (
    <div className={styles.OurMedicalSpecialistCon}>
      <h1 className={styles.OurMedicalSpecialistHead}>
        Our Medical Specialist
      </h1>
      <div>
        <Swiper
          className={`${styles.OurMedicalSpecialistCon} mySwiper`}
          modules={[Pagination, Autoplay]}
          spaceBetween={200}
          initialSlide={4}
          slidesPerView={4}
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
        >
          {[...Array(8)].map((_, i) => {
            return (
              <SwiperSlide>
                {" "}
                <OurMedicalSpecialistCard index={i} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OurMedicalSpecialist;
