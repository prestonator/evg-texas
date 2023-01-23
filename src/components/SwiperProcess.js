import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import styles from "@/src/styles/Valuation.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperProcess() {
	return (
		<div className={styles.swiperApp}>
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
					slideShadows: false,
				}}
				slidesPerView={3}
				centeredSlides
                className={styles.swiper}
			>
				<SwiperSlide
					style={{
						backgroundImage: "url(/hammer.jpg)",
						backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: "url(/taxPapers.jpg)",
						backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: "url(/laptopWork.jpg)",
						backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: "url(/redhouse.jpg)",
						backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: "url(/housewithclouds.jpg)",
						backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
					}}
				></SwiperSlide>
				<SwiperSlide
					style={{
						backgroundImage: "url(/livingroom.jpg)",
						backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
					}}
				></SwiperSlide>
			</Swiper>
		</div>
	);
}
