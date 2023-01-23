import React, { useRef, useState, useEffect } from "react";
import styles from "@/src/styles/Carousel.module.css";
import TouchSweep from "touchsweep";
import Image from "next/image";
import houses from "@/public/houses.jpg";
import livingroom from "@/public/livingroom.jpg";
import housewithclouds from "@/public/housewithclouds.jpg";
import redhouse from "@/public/redhouse.jpg";
import taxPapers from "@/public/taxPapers.jpg";


const itemContent = [
	{
		alt: "A Photo of Houses",
		image: houses,
		content: (
			<>
				<span>1</span>
				<strong>Valuation Process</strong>
				<p></p>
			</>
		),
	},
	{
		alt: "A photo of a living room",
		image: livingroom,
		content: (
			<>
				<span>2</span>
				<strong>Project Proposal</strong>
				<p></p>
			</>
		),
	},
	{
		alt: "A photo of a house with clouds in the background",
		image: housewithclouds,
		content: (
			<>
				<span>3</span>
				<strong>Report Presentation</strong>
				<p></p>
			</>
		),
	},
	{
		alt: "A photo of a red house",
		image: redhouse,
		content: (
			<>
				<span>4</span>
				<strong>Report Presentation</strong>
				<p></p>
			</>
		),
	},
	{
		alt: "A photo of tax papers",
		image: taxPapers,
		content: (
			<>
				<span>5</span>
				<strong>Report Presentation</strong>
				<p></p>
			</>
		),
	},
];

const items = itemContent.map((item) => ({
	alt: item.alt,
	image: item.image,
	content: item.content,
}));

const itemWidth = 600;

const RoundCarousel = (props) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const ref = useRef(null);
	const len = props.items.length;
	const radius = Math.round((itemWidth || 210) / 2 / Math.tan(Math.PI / len));

	const prev = () => setSelectedIndex(selectedIndex - 1);
	const next = () => setSelectedIndex(selectedIndex + 1);

	const getSlideStyle = (index) => {
		let style = {};
		if (index < props.items.length) {
			let cellAngle = (360 / props.items.length) * index;
			style.opacity = 1;
			style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
		} else {
			style.opacity = 0;
			style.transform = "none";
		}
		return style;
	};

	const getItemStyle = () => {
		let angle = (360 / props.items.length) * selectedIndex * -1;
		return {
			transform: `translateZ(${-1 * radius}px) rotateY(${angle}deg)`,
		};
	};

	useEffect(() => {
		const area = ref.current;
		const touchsweep = new TouchSweep(area);
		area.addEventListener("swipeleft", next);
		area.addEventListener("swiperight", prev);
		return () => {
			touchsweep.unbind();
			area.removeEventListener("swipeleft", next);
			area.removeEventListener("swiperight", prev);
		};
	});

	return (
		<>
			<div ref={ref} className={styles.carousel}>
				<div style={getItemStyle()} className={styles.carousel__container}>
					{props.items.map((item, index) => (
						<div
							key={index}
							style={getSlideStyle(index)}
							className={styles.carousel__slide}
						>
							<div className={styles.imageWrapper}>
								<Image src={item.image} alt={item.alt} fill />
							</div>
							<div className={styles.carouselText}>{item.content}</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.carousel__controls}>
				<button
					onClick={() => setSelectedIndex(selectedIndex - 1)}
					className={`${styles.carousel__control} ${styles.carousel__controlPrev}`}
				>
					{props.prevButtonContent}
				</button>
				<button
					onClick={() => setSelectedIndex(selectedIndex + 1)}
					className={`${styles.carousel__control} ${styles.carousel__controlNext}`}
				>
					{props.nextButtonContent}
				</button>
			</div>
		</>
	);
};

RoundCarousel.defaultProps = {
	items: items,
	itemWidth: itemWidth,
	showControls: true,
	classNamePrefix: "carousel",
	prevButtonContent: "Previous",
	nextButtonContent: "Next",
};

export default RoundCarousel;
