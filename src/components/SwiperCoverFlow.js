import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import homeStyles from "@/src/styles/Home.module.css";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";


SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperCoverflow() {
  return (
    <div className="App">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        loop={true}
        loopedSlides={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(/hammer.jpg)",
            backgroundSize: "cover",
          }}
        >
          <p className={homeStyles.swiperText} style={{ display: "flex", color: "white", backgroundColor: "rgb(0 0 0 / 75%)" }}>01<br />Litagation<br />Purposes</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(/taxPapers.jpg)",
              backgroundSize: "cover",
          }}
        >
          <p className={homeStyles.swiperText} style={{ display: "flex", color: "white", backgroundColor: "rgb(0 0 0 / 75%)" }}>02<br />Taxation<br />Purposes</p>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(/laptopWork.jpg)",
              backgroundSize: "cover",
          }}
        >
          <p className={homeStyles.swiperText} style={{ display: "flex", color: "white", backgroundColor: "rgb(0 0 0 / 75%)" }}>03<br />Business<br />Purposes</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
