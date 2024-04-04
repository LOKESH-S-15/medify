import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroSectionImg } from "../../Image/Image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SearchSection from "../SearchSection/SearchSection";
import HeroSectionCard from "./HeroSectionCard/HeroSectionCard";
import style from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={style.HeroSectionCon}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <HeroSectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSectionCard />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSectionCard />
        </SwiperSlide>
      </Swiper>
      <SearchSection />
    </div>
  );
};

export default HeroSection;
